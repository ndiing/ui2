class Store {
    constructor(docs = [], options = {}) {
        this.options = {
            primaryKey: "_id",
            ...options,
        };

        this.docs = new Map(docs.map((doc) => [doc[this.options.primaryKey], doc]));
    }

    post(doc) {
        const primaryKey = this.options.primaryKey;

        if (!doc[primaryKey]) {
            throw new Error("Document must have a non-empty primary key.");
        }

        if (this.docs.has(doc[primaryKey])) {
            throw new Error("Document with the same primary key already exists.");
        }

        this.docs.set(doc[primaryKey], doc);
    }

    get(_id) {
        return this.docs.get(_id);
    }

    patch(_id, doc) {
        if (!this.docs.has(_id)) {
            throw new Error("Document with the specified primary key does not exist.");
        }

        const originalDoc = this.docs.get(_id);
        const patchedDoc = { ...originalDoc, ...doc };

        this.docs.set(_id, patchedDoc);
    }

    put(doc) {
        const primaryKeyValue = doc[this.options.primaryKey];

        if (this.docs.has(primaryKeyValue)) {
            this.patch(primaryKeyValue, doc);
        } else {
            this.post(doc);
        }
    }

    delete(_id) {
        if (!this.docs.has(_id)) {
            throw new Error("Document with the specified primary key does not exist.");
        }

        this.docs.delete(_id);
    }

    sort(docs, sorters) {
        return docs.slice().sort((a, b) => {
            for (const sorter of sorters) {
                const { name, order } = sorter;
                const propA = a[name];
                const propB = b[name];

                if (typeof propA === "string" && typeof propB === "string") {
                    const comparison = propA.localeCompare(propB);

                    if (comparison !== 0) {
                        return order === "asc" ? comparison : -comparison;
                    }
                } else {
                    if (propA < propB) {
                        return order === "asc" ? -1 : 1;
                    }

                    if (propA > propB) {
                        return order === "asc" ? 1 : -1;
                    }
                }
            }

            return 0;
        });
    }

    search(docs, q) {
        return docs.filter((doc) => {
            for (const key in doc) {
                if (typeof doc[key] === "string" && doc[key].toLowerCase().includes(q.toLowerCase())) {
                    return true;
                }

                if (typeof doc[key] === "object") {
                    for (const nestedKey in doc[key]) {
                        if (typeof doc[key][nestedKey] === "string" && doc[key][nestedKey].toLowerCase().includes(q.toLowerCase())) {
                            return true;
                        }
                    }
                }
            }
            return false;
        });
    }

    filter(docs, filters) {
        return docs.filter((doc) => {
            return filters.every((filter) => {
                const { name, value, operator } = filter;
                const propValue = name.split(".").reduce((obj, key) => obj[key], doc);

                switch (operator) {
                    case "_eq":
                        return propValue === value;
                    case "_ne":
                        return propValue !== value;
                    case "_lt":
                        return propValue < value;
                    case "_gt":
                        return propValue > value;
                    case "_lte":
                        return propValue <= value;
                    case "_gte":
                        return propValue >= value;
                    case "_like":
                        return propValue.includes(value);
                    default:
                        throw new Error(`Operator '${operator}' is not supported.`);
                }
            });
        });
    }

    paginate(docs, _page, _limit) {
        const startIndex = (_page - 1) * _limit;
        const endIndex = startIndex + _limit;

        return docs.slice(startIndex, endIndex);
    }

    range(docs, _start, _end) {
        return docs.slice(_start, _end);
    }

    getAll(options = {}) {
        let { _sort, _order, q, _page, _limit, _start, _end, ...rest } = options;
        let docs = Array.from(this.docs.values());

        if (_sort && _order) {
            const sorters = _sort.split(",").map((name, index) => ({
                name,
                order: _order.split(",")[index],
            }));

            docs = this.sort(docs, sorters);
        }

        if (q) {
            docs = this.search(docs, q);
        }

        if (Object.keys(rest).length) {
            const filters = [];

            for (const name in rest) {
                const value = rest[name];
                const [, key, operator = "_eq"] = name.match(/^(.*?)(_eq|_ne|_lt|_gt|_lte|_gte|_like)?$/);
                filters.push({ name: key, value, operator });
            }

            docs = this.filter(docs, filters);
        }

        const total = docs.length;
        let first, prev, next, last;

        if (_page && _limit) {
            _page = Number(_page);
            _limit = Number(_limit);

            const totalPages = Math.ceil(total / _limit);

            docs = this.paginate(docs, _page, _limit);

            first = _page === 1 ? null : 1;
            prev = _page > 1 ? _page - 1 : null;
            next = _page < totalPages ? _page + 1 : null;
            last = _page === totalPages ? null : totalPages;
        } else if (_start !== undefined && _end !== undefined) {
            _start = Number(_start);
            _end = Number(_end);

            docs = this.range(docs, _start, _end);
        }

        return { total, docs, first, prev, next, last };
    }
}

export { Store };
