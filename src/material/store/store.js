/**
 * MDStore is a utility class for managing a collection of documents with various operations.
 */
class MDStore {
    /**
     * Creates an instance of MDStore.
     * @param {Array} [docs=[]] - Initial array of documents.
     * @param {Object} [options={}] - Options object.
     * @param {String} [options.primaryKey="_id"] - Primary key for documents.
     */
    constructor(docs = [], options = {}) {
        this.docs = docs;
        this.options = {
            primaryKey: "_id",
            ...options,
        };
    }

    /**
     * Adds a new document to the store.
     * @param {Object} doc - The document to be added.
     * @returns {Object} The added document.
     */
    post(doc) {
        this.docs.push(doc);
        return doc;
    }

    /**
     * Retrieves a document by its primary key (_id).
     * @param {*} _id - The value of the primary key to search for.
     * @returns {Object} The found document, or undefined if not found.
     */
    get(_id) {
        return this.docs.find((doc) => doc[this.options.primaryKey] === _id);
    }

    /**
     * Updates a document partially by merging the provided data.
     * @param {*} _id - The value of the primary key of the document to update.
     * @param {Object} doc - The partial document data to merge.
     * @returns {Object} The updated document, or null if not found.
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
     * Deletes a document by its primary key.
     * @param {*} _id - The value of the primary key to search for and delete.
     * @returns {Object} The deleted document, or null if not found.
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
     * Adds or updates a document in the store based on its primary key existence.
     * @param {Object} doc - The document to add or update.
     * @returns {Object} The added or updated document.
     */
    put(doc) {
        if (doc[this.options.primaryKey]) {
            return this.patch(doc[this.options.primaryKey], doc);
        } else {
            return this.post(doc);
        }
    }

    /**
     * Sorts an array of documents based on given sort criteria.
     * @param {Array} docs - The array of documents to sort.
     * @param {Array} sorters - An array of sort criteria objects { name: String, order: 'asc' | 'desc' }.
     * @returns {Array} The sorted array of documents.
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
     * Searches an array of documents for a query string.
     * @param {Array} docs - The array of documents to search.
     * @param {String} q - The search query string.
     * @returns {Array} The filtered array of documents matching the search query.
     */
    search(docs, q) {
        const query = q.toLowerCase().trim();
        return docs.filter((doc) => this.deepSearch(doc, query));
    }

    /**
     * Filters an array of documents based on given filters.
     * @param {Array} docs - The array of documents to filter.
     * @param {Array} filters - An array of filter objects { name: String, value: any, operator: String }.
     * @returns {Array} The filtered array of documents.
     */
    filter(docs, filters) {
        return docs.filter((doc) => this.deepFilter(doc, filters));
    }

    /**
     * Paginates an array of documents.
     * @param {Array} docs - The array of documents to paginate.
     * @param {Number} _page - The page number (1-indexed).
     * @param {Number} _limit - The number of items per page.
     * @returns {Array} The paginated array of documents.
     */
    paginate(docs, _page, _limit) {
        const startIndex = (_page - 1) * _limit;
        return docs.slice(startIndex, startIndex + _limit);
    }

    /**
     * Slices an array of documents based on start and end indices.
     * @param {Array} docs - The array of documents to slice.
     * @param {Number} _start - The starting index (inclusive).
     * @param {Number} _end - The ending index (exclusive).
     * @returns {Array} The sliced array of documents.
     */
    slice(docs, _start, _end) {
        return docs.slice(_start, _end);
    }

    /**
     * Retrieves all documents from the store with optional sorting, searching, filtering, and pagination.
     * @param {Object} options - Options object with additional parameters for sorting, searching, filtering, and pagination.
     * @param {String} options._sort - Comma-separated list of fields to sort by.
     * @param {String} options._order - Comma-separated list of sort orders ('asc' or 'desc').
     * @param {String} options.q - The search query string.
     * @param {Number} options._page - The page number for pagination (1-indexed).
     * @param {Number} options._limit - The number of items per page for pagination.
     * @param {Number} options._start - The starting index for slicing.
     * @param {Number} options._end - The ending index for slicing.
     * @returns {Object} An object containing the total count and array of documents based on applied filters.
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
     * Recursively merges two objects.
     * @param {Object} target - The target object to merge into.
     * @param {Object} source - The source object to merge from.
     * @returns {Object} The merged object.
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
     * Retrieves the value from an object based on dot-separated path.
     * @param {Object} obj - The object from which to retrieve the value.
     * @param {String} path - The dot-separated path to the value.
     * @returns {*} The value at the specified path.
     */
    getValue(obj, path) {
        return path.split(".").reduce((acc, part) => acc && acc[part], obj);
    }

    /**
     * Deeply searches for a query string within an object's string values.
     * @param {Object} obj - The object to search within.
     * @param {String} query - The query string to search for.
     * @returns {Boolean} True if the query string is found within the object, false otherwise.
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
     * Filters an object based on an array of filters.
     * @param {Object} obj - The object to filter.
     * @param {Array} filters - An array of filter objects { name: String, value: any, operator: String }.
     * @returns {Boolean} True if the object matches all filters, false otherwise.
     */
    deepFilter(obj, filters) {
        return filters.every((filter) => {
            const { name, value, operator } = filter;
            const objValue = this.getValue(obj, name);
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
                    return true;
            }
        });
    }
}

/**
 * Checks if a given value is an object.
 * @param {*} obj - The value to check.
 * @returns {Boolean} True if the value is an object, false otherwise.
 */
function isObject(obj) {
    return obj !== null && typeof obj === "object";
}

export { MDStore };
