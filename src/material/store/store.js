/**
 * {{desc}}
 */
class MDStore {
    constructor(docs = [], options = {}) {
        this.docs = docs;
        this.options = {
            primaryKey: "_id",
            ...options,
        };
    }

    /**
     * {{desc}}
     */
    post(doc) {
        this.docs.push(doc);
        return doc;
    }

    /**
     * {{desc}}
     */
    get(_id) {
        return this.docs.find((doc) => doc[this.options.primaryKey] === _id);
    }

    /**
     * {{desc}}
     */
    patch(_id, doc) {
        const index = this.docs.findIndex((d) => d[this.options.primaryKey] === _id);
        if (index !== -1) {
            this.docs[index] = this.deepMerge(this.docs[index], doc);
            return this.docs[index];
        }
        return null;
    }

    /**
     * {{desc}}
     */
    delete(_id) {
        const index = this.docs.findIndex((doc) => doc[this.options.primaryKey] === _id);
        if (index !== -1) {
            const deletedDoc = this.docs[index];
            this.docs.splice(index, 1);
            return deletedDoc;
        }
        return null;
    }

    /**
     * {{desc}}
     */
    put(doc) {
        if (doc[this.options.primaryKey]) {
            return this.patch(doc[this.options.primaryKey], doc);
        } else {
            return this.post(doc);
        }
    }

    /**
     * {{desc}}
     */
    sort(docs, sorters) {
        return docs.sort((a, b) => {
            for (const sorter of sorters) {
                const { name, order } = sorter;
                const aValue = this.getValue(a, name);
                const bValue = this.getValue(b, name);
                if (order === "asc") {
                    if (aValue < bValue) return -1;
                    if (aValue > bValue) return 1;
                } else if (order === "desc") {
                    if (aValue > bValue) return -1;
                    if (aValue < bValue) return 1;
                }
            }
            return 0;
        });
    }

    /**
     * {{desc}}
     */
    search(docs, q) {
        const query = q.toLowerCase().trim();
        return docs.filter((doc) => this.deepSearch(doc, query));
    }

    /**
     * {{desc}}
     */
    filter(docs, filters) {
        return docs.filter((doc) => this.deepFilter(doc, filters));
    }

    /**
     * {{desc}}
     */
    paginate(docs, _page, _limit) {
        const startIndex = (_page - 1) * _limit;
        return docs.slice(startIndex, startIndex + _limit);
    }

    /**
     * {{desc}}
     */
    slice(docs, _start, _end) {
        return docs.slice(_start, _end);
    }

    /**
     * {{desc}}
     */
    getAll(options = {}) {
        const { _sort, _order, q, _page, _limit, _start, _end, ...rest } = options;

        let filteredDocs = this.docs.slice();

        if (_sort && _order) {
            const sort = _sort.split(",");
            const order = _order.split(",");
            const sorters = sort.map((name, index) => ({ name, order: order[index] }));
            filteredDocs = this.sort(filteredDocs, sorters);
        }
        if (q) {
            filteredDocs = this.search(filteredDocs, q);
        }
        if (Object.keys(rest).length > 0) {
            const filters = [];
            for (const key in rest) {
                if (Object.prototype.hasOwnProperty.call(rest, key)) {
                    const value = rest[key];
                    const [, name, operator = "_eq"] = key.match(/^(.*?)(_eq|_ne|_lt|_lte|_gt|_gte|_like|_in|_nin)?$/) || [];
                    filters.push({ name, value, operator });
                }
            }
            filteredDocs = this.filter(filteredDocs, filters);
        }

        let total = filteredDocs.length;

        if (_page !== undefined && _limit !== undefined) {
            filteredDocs = this.paginate(filteredDocs, _page, _limit);
        } else if (_start !== undefined && _end !== undefined) {
            filteredDocs = this.slice(filteredDocs, _start, _end);
        }

        return { total, docs: filteredDocs };
    }

    // Helper methods for handling nested values

    /**
     * {{desc}}
     */
    deepMerge(target, source) {
        if (!isObject(target) || !isObject(source)) {
            return source;
        }
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                this.deepMerge(target[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
        return target;
    }

    /**
     * {{desc}}
     */
    getValue(obj, path) {
        return path.split(".").reduce((acc, part) => acc && acc[part], obj);
    }

    /**
     * {{desc}}
     */
    deepSearch(obj, query) {
        if (!isObject(obj)) return false;
        for (const key in obj) {
            if (isObject(obj[key])) {
                if (this.deepSearch(obj[key], query)) return true;
            } else if (typeof obj[key] === "string" && obj[key].toLowerCase().includes(query)) {
                return true;
            }
        }
        return false;
    }

    /**
     * {{desc}}
     */
    deepFilter(obj, filters) {
        return filters.every((filter) => {
            const { name, value, operator } = filter;
            const objValue = this.getValue(obj, name);

            // Handle array values
            if (Array.isArray(objValue)) {
                switch (operator) {
                    case "_eq":
                        return objValue.includes(value);
                    case "_ne":
                        return !objValue.includes(value);
                    case "_like":
                        return objValue.some((item) => typeof item === "string" && item.toLowerCase().includes(value.toLowerCase()));
                    case "_in":
                        return objValue.some((item) => value.includes(item));
                    case "_nin":
                        return objValue.every((item) => !value.includes(item));
                    default:
                        return false;
                }
            } else {
                // Handle non-array values
                switch (operator) {
                    case "_eq":
                        return objValue === value;
                    case "_ne":
                        return objValue !== value;
                    case "_lt":
                        return objValue < value;
                    case "_lte":
                        return objValue <= value;
                    case "_gt":
                        return objValue > value;
                    case "_gte":
                        return objValue >= value;
                    case "_like":
                        return typeof objValue === "string" && objValue.toLowerCase().includes(value.toLowerCase());
                    case "_in":
                        return Array.isArray(value) && value.includes(objValue);
                    case "_nin":
                        return Array.isArray(value) && !value.includes(objValue);
                    default:
                        return false;
                }
            }
        });
    }
}

/**
 * {{desc}}
 */
function isObject(obj) {
    return obj !== null && typeof obj === "object";
}

export { MDStore };
