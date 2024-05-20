class Store {
    constructor(docs = [], options = {}) {
        this.docs = docs;
        this.primaryKey = options.primaryKey || "_id";
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

    post(doc) {
        const index = this.docs.findIndex((oldDoc) => oldDoc[this.primaryKey] === doc[this.primaryKey]);
        if (index === -1) {
            this.docs.push(doc);
        }
    }

    get(_id) {
        return this.docs.find((doc) => doc[this.primaryKey] === _id);
    }

    allDocs(options = {}) {
        let { _sort, _order, q, _page, _limit, _start, _end, ...rest } = options;
        let rows = Array.from(this.docs.values());

        if (_sort && _order) {
            const sorters = _sort.split(",").map((name, index) => ({
                name,
                order: _order.split(",")[index],
            }));
            rows = this.sort(rows, sorters);
        }

        if (q) {
            rows = this.search(rows, q);
        }

        if (Object.keys(rest).length) {
            const filters = [];

            for (const name in rest) {
                const value = rest[name];
                const [, key, operator = "_eq"] = name.match(/^(.*?)(_eq|_ne|_lt|_gt|_lte|_gte|_like)?$/);
                filters.push({
                    name: key,
                    value,
                    operator,
                });
            }
            rows = this.filter(rows, filters);
        }
        const total = rows.length;
        let first, prev, next, last;

        if (_page && _limit) {
            _page = Number(_page);
            _limit = Number(_limit);
            const totalPages = Math.ceil(total / _limit);
            rows = this.paginate(rows, _page, _limit);
            first = _page === 1 ? null : 1;
            prev = _page > 1 ? _page - 1 : null;
            next = _page < totalPages ? _page + 1 : null;
            last = _page === totalPages ? null : totalPages;
        } else if (_start !== undefined && _end !== undefined) {
            _start = Number(_start);
            _end = Number(_end);
            rows = this.range(rows, _start, _end);
        }
        return {
            total,
            rows,
            first,
            prev,
            next,
            last,
        };
    }

    put(doc) {
        const index = this.docs.findIndex((oldDoc) => oldDoc[this.primaryKey] === doc[this.primaryKey]);
        if (index !== -1) {
            // Replace the old document with the new one
            this.docs.splice(index, 1, doc);
        } else {
            this.post(doc);
        }
    }

    remove(_id) {
        const index = this.docs.findIndex((doc) => doc[this.primaryKey] === _id);
        if (index !== -1) {
            // Remove the document at the found index
            this.docs.splice(index, 1);
        }
    }
}

export { Store };

// // Define some sample documents
// const documents = [
//     { _id: 1, name: "Document 1", category: "Category A", price: 10 },
//     { _id: 2, name: "Document 2", category: "Category B", price: 20 },
//     { _id: 3, name: "Document 3", category: "Category A", price: 30 },
//     // Add more documents as needed
// ];

// // Instantiate a Store with the sample documents
// const store = new Store(documents);

// // Perform CRUD operations and other data manipulations

// // Get a document by ID
// const docById = store.get(1);
// console.log("Document with ID 1:", docById);

// // Add a new document
// const newDoc = { _id: 4, name: "Document 4", category: "Category C", price: 40 };
// store.post(newDoc);

// // Update an existing document
// const updatedDoc = { _id: 2, name: "Updated Document 2", category: "Category D", price: 25 };
// store.put(updatedDoc);

// // Remove a document by ID
// store.remove(3);

// // Retrieve all documents with sorting, filtering, and pagination
// const options = {
//     _sort: 'price', // Sort by price
//     _order: 'desc', // Sort in descending order
//     category: 'Category A', // Filter by category
//     q: 'Document', // Search for documents containing "Document" in name or category
//     _page: 1, // Pagination: Page 1
//     _limit: 2 // Pagination: Limit to 2 documents per page
// };

// const result = store.allDocs(options);
// console.log("Filtered, sorted, and paginated documents:", result);
