class MDDataModule {
    constructor(docs) {
        this.docs = docs;
    }

    sort(docs, options) {
        if (!options || !options.sorters || !Array.isArray(options.sorters)) {
            return docs;
        }

        return docs.slice().sort((a, b) => {
            for (const { name, order } of options.sorters) {
                const aValue = this.getValue(a, name);
                const bValue = this.getValue(b, name);
                if (aValue < bValue) return order === "asc" ? -1 : 1;
                if (aValue > bValue) return order === "asc" ? 1 : -1;
            }
            return 0;
        });
    }

    search(docs, options) {
        if (!options || !options.q) {
            return docs;
        }
        const query = options.q.toLowerCase();
        return docs.filter((doc) => this.deepSearch(doc, query));
    }

    deepSearch(obj, query) {
        return Object.values(obj).some((value) => {
            if (typeof value === "object" && value !== null) {
                return this.deepSearch(value, query);
            }
            return typeof value === "string" && value.toLowerCase().includes(query);
        });
    }

    filter(docs, options) {
        if (!options || !options.filters || !Array.isArray(options.filters)) {
            return docs;
        }

        return docs.filter((doc) =>
            options.filters.every((filter) => {
                const { name, value, operator } = filter;
                const docValue = this.getValue(doc, name);

                switch (operator) {
                    case "_eq":
                        return docValue === value;
                    case "_ne":
                        return docValue !== value;
                    case "_gt":
                        return docValue > value;
                    case "_gte":
                        return docValue >= value;
                    case "_lt":
                        return docValue < value;
                    case "_lte":
                        return docValue <= value;
                    case "_like":
                        return typeof docValue === "string" && docValue.includes(value);
                    default:
                        return true;
                }
            }),
        );
    }

    getValue(obj, path) {
        const keys = path.split(".");
        return keys.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
    }

    slice(docs, options) {
        if (options._start === undefined || options._end === undefined) {
            return docs;
        }
        return docs.slice(options._start, options._end);
    }

    paginate(docs, options) {
        if (options._page === undefined || options._limit === undefined) {
            return docs;
        }
        const startIndex = (options._page - 1) * options._limit;
        const endIndex = startIndex + options._limit;
        return docs.slice(startIndex, endIndex);
    }

    getAll(options = {}) {
        let rows = this.docs.slice();

        // Apply sorting
        if (options.sorters) {
            rows = this.sort(rows, options);
        }

        // Apply searching
        if (options.q) {
            rows = this.search(rows, options);
        }

        // Apply filtering
        if (options.filters) {
            rows = this.filter(rows, options);
        }

        const total = rows.length;

        // Apply slicing
        if (options._start !== undefined && options._end !== undefined) {
            rows = this.slice(rows, options);
        } else if (options._page !== undefined && options._limit !== undefined) {
            // Apply pagination
            rows = this.paginate(rows, options);
        }

        return { total, rows };
    }
}

export { MDDataModule };
