/**
 *
 */
class LocalStore {
    /**
     *
     */
    constructor(docs = [], options = {}) {
        this.docs = docs;
        this.options = {
            primaryKey: "id",
            ...options,
        };
    }

    /**
     *
     */
    async post(newDoc) {
        if (!newDoc.hasOwnProperty(this.options.primaryKey)) {
            return false;
        }

        const index = this.docs.findIndex((doc) => doc[this.options.primaryKey] == newDoc[this.options.primaryKey]);

        if (index == -1) {
            this.docs.push(newDoc);
            return true;
        }
        return false;
    }

    /**
     *
     */
    async get(id) {
        return this.docs.find((doc) => doc[this.options.primaryKey] == id);
    }

    /**
     *
     */
    async patch(id, newDoc) {
        const index = this.docs.findIndex((doc) => doc[this.options.primaryKey] == id);

        if (index !== -1) {
            const oldDocs = { ...this.docs[index], ...newDoc };
            this.docs.splice(index, 1, oldDocs);
            return true;
        }
        return false;
    }

    /**
     *
     */
    async delete(id) {
        const index = this.docs.findIndex((doc) => doc[this.options.primaryKey] == id);

        if (index !== -1) {
            this.docs.splice(index, 1);
            return true;
        }
        return false;
    }

    /**
     *
     */
    sort(docs, sorters) {
        if (!sorters || !sorters.length) return docs;
        return docs.sort((a, b) => {
            for (const sorter of sorters) {
                const { name, order } = sorter;
                const keys = name.split(".");
                let aValue = a;
                let bValue = b;

                for (const key of keys) {
                    aValue = aValue[key];
                    bValue = bValue[key];
                    if (aValue === undefined || bValue === undefined) break;
                }
                if (aValue < bValue) return order === "asc" ? -1 : 1;
                if (aValue > bValue) return order === "asc" ? 1 : -1;
            }
            return 0;
        });
    }

    /**
     *
     */
    search(docs, q) {
        if (!q) return docs;
        const query = q.toLowerCase();
        return docs.filter((doc) => Object.values(doc).some((value) => String(value).toLowerCase().includes(query)));
    }

    /**
     *
     */
    filter(docs, filters) {
        if (!filters || !filters.length) return docs;
        return docs.filter((doc) => {
            return filters.every((filter) => {
                const { name, value, operator } = filter;
                const keys = name.split(".");
                let docValue = doc;

                for (const key of keys) {
                    docValue = docValue[key];
                    if (docValue === undefined) return false;
                }

                switch (operator) {
                    case "_gt":
                        return docValue > value;
                    case "_lt":
                        return docValue < value;
                    case "_gte":
                        return docValue >= value;
                    case "_lte":
                        return docValue <= value;
                    case "_eq":
                        return docValue == value;
                    case "_ne":
                        return docValue != value;
                    case "_like":
                        return String(docValue).toLowerCase().includes(String(value).toLowerCase());
                    default:
                        return false;
                }
            });
        });
    }

    /**
     *
     */
    paginate(docs, _page, _limit) {
        if (_page === undefined || _limit === undefined) return docs;
        const start = (_page - 1) * _limit;
        const end = start + _limit;
        return docs.slice(start, end);
    }

    /**
     *
     */
    slice(docs, _start, _end) {
        if (_start === undefined || _end === undefined) return docs;
        return docs.slice(_start, _end);
    }

    /**
     *
     */
    async getAll(options = {}) {
        const { _sort, _order, q, _page, _limit, _start, _end, ...obj } = options;
        const sorters = [];
        const filters = [];

        let rows = this.docs.slice();

        if (_sort && _order) {
            const orders = _order.split(",");
            _sort.split(",").forEach((name, index) => {
                const order = orders[index];
                sorters.push({ name, order });
            });
            rows = this.sort(rows, sorters);
        }

        if (q) {
            rows = this.search(rows, q);
        }

        if (Object.keys(obj).length) {
            for (const key in obj) {
                const value = obj[key];
                const [, name, operator = "_eq"] = key.match(/^(.*?)(_lt|_gt|_lte|_gte|_eq|_ne|_like)?$/);
                filters.push({ name, value, operator });
            }
            rows = this.filter(rows, filters);
        }

        this.total_rows = rows.length;

        if (_page && _limit) {
            rows = this.paginate(rows, parseInt(_page), parseInt(_limit));
        } else if (_start && _end) {
            rows = this.slice(rows, parseInt(_start), parseInt(_end));
        }

        return rows;
    }
}

/**
 *
 */
class RemoteStore {
    /**
     *
     */
    static notEmpty(value) {
        return value !== undefined && value !== null && value !== "";
    }

    static properties = ["_sort", "_order", "q", "_page", "_limit", "_start", "_end"];

    static operators = ["_lt", "_gt", "_lte", "_gte", "_eq", "_ne", "_like"];

    static headers = {
        "Content-Type": "application/json",
    };

    /**
     *
     */
    constructor(base = "http://localhost", options = {}) {
        this.base = base;
        this.options = {
            primaryKey: "id",
            post: "/",
            get: "/:id",
            patch: "/:id",
            delete: "/:id",
            ...options,
        };

        this.url = this.createURL(this.options.get, {}, this.base);
    }

    /**
     *
     */
    createURL(pathname, params) {
        return new URL(
            pathname.replace(/\:(\w+)/g, ($, name) => params[name] ?? ""),
            this.base,
        );
    }

    /**
     *
     */
    async post(newDoc) {
        const url = this.createURL(this.options.post, {}, this.base);
        return fetch(url, {
            redirect: "manual",
            method: "POST",
            headers: RemoteStore.headers,
            body: JSON.stringify(newDoc),
        }).then((response) => response.json());
    }

    /**
     *
     */
    async get(id) {
        const url = this.createURL(
            this.options.get,
            {
                [this.options.primaryKey]: id,
            },
            this.base,
        );
        return fetch(url, {
            redirect: "manual",
            method: "GET",
        }).then((response) => response.json());
    }

    /**
     *
     */
    async patch(id, newDoc) {
        const url = this.createURL(
            this.options.patch,
            {
                [this.options.primaryKey]: id,
            },
            this.base,
        );
        return fetch(url, {
            redirect: "manual",
            method: "PATCH",
            headers: RemoteStore.headers,
            body: JSON.stringify(newDoc),
        }).then((response) => response.json());
    }

    /**
     *
     */
    async delete(id) {
        const url = this.createURL(
            this.options.delete,
            {
                [this.options.primaryKey]: id,
            },
            this.base,
        );
        return fetch(url, {
            redirect: "manual",
            method: "DELETE",
        }).then((response) => response.json());
    }

    /**
     *
     */
    async getAll(options = {}) {
        return fetch(this.url.href, {
            redirect: "manual",
        }).then((response) => {
            const count = response.headers.get("x-total-count");
            if (count) {
                this.total_rows = parseInt(count);
            }
            return response.json();
        });
    }

    /**
     *
     */
    sort(_sort, _order) {
        const sorts = this.url.searchParams.get("_sort")?.split(",") ?? [];
        const orders = this.url.searchParams.get("_order")?.split(",") ?? [];

        if (RemoteStore.notEmpty(_sort)) {
            const index = sorts.indexOf(_sort);

            if (RemoteStore.notEmpty(_order)) {
                if (index == -1) {
                    sorts.push(_sort);
                    orders.push(_order);
                } else {
                    sorts.splice(index, 1, _sort);
                    orders.splice(index, 1, _order);
                }
            } else {
                sorts.splice(index, 1);
                orders.splice(index, 1);
            }
            this.url.searchParams.set("_sort", sorts);
            this.url.searchParams.set("_order", orders);
        } else {
            this.url.searchParams.delete("_sort");
            this.url.searchParams.delete("_order");
        }
    }

    /**
     *
     */
    search(q) {
        if (RemoteStore.notEmpty(q)) {
            this.url.searchParams.set("q", q);
        } else {
            this.url.searchParams.delete("q");
        }
    }

    /**
     *
     */
    filter(name, value, operator = "") {
        if (RemoteStore.notEmpty(name)) {
            if (RemoteStore.notEmpty(value)) {
                this.url.searchParams.set(name + operator, value);
            } else {
                for (const operator of ["", ...RemoteStore.operators]) {
                    this.url.searchParams.delete(name + operator);
                }
            }
        } else {
            for (const name of Array.from(this.url.searchParams.keys())) {
                if (!RemoteStore.properties.includes(name)) {
                    this.url.searchParams.delete(name);
                }
            }
        }
    }

    /**
     *
     */
    paginate(_page, _limit) {
        if (RemoteStore.notEmpty(_page) && RemoteStore.notEmpty(_limit)) {
            this.url.searchParams.set("_page", _page);
            this.url.searchParams.set("_limit", _limit);
        } else {
            this.url.searchParams.delete("_page");
            this.url.searchParams.delete("_limit");
        }
    }

    /**
     *
     */
    slice(_start, _end) {
        if (RemoteStore.notEmpty(_start) && RemoteStore.notEmpty(_end)) {
            this.url.searchParams.set("_start", _start);
            this.url.searchParams.set("_end", _end);
        } else {
            this.url.searchParams.delete("_start");
            this.url.searchParams.delete("_end");
        }
    }
}

/**
 *
 */
class MDStoreModule {
    /**
     *
     */
    constructor(options = {}) {
        const { docs = [], base = "http://localhost" } = options;
        this.options = {
            remote: false,
            primaryKey: "id",
            post: "/",
            get: "/:id",
            patch: "/:id",
            delete: "/:id",
            ...options,
        };
        this.localStore = new LocalStore(docs, this.options);
        this.remoteStore = new RemoteStore(base, this.options);
    }

    /**
     *
     */
    post(...args) {
        return this.options.remote ? this.remoteStore.post(...args) : this.localStore.post(...args);
    }

    /**
     *
     */
    get(...args) {
        return this.options.remote ? this.remoteStore.get(...args) : this.localStore.get(...args);
    }

    /**
     *
     */
    patch(...args) {
        return this.options.remote ? this.remoteStore.patch(...args) : this.localStore.patch(...args);
    }

    /**
     *
     */
    delete(...args) {
        return this.options.remote ? this.remoteStore.delete(...args) : this.localStore.delete(...args);
    }

    /**
     *
     */
    sort(...args) {
        this.remoteStore.sort(...args);
        return this;
    }

    /**
     *
     */
    search(...args) {
        this.remoteStore.search(...args);
        return this;
    }

    /**
     *
     */
    filter(...args) {
        this.remoteStore.filter(...args);
        return this;
    }

    /**
     *
     */
    paginate(...args) {
        this.remoteStore.paginate(...args);
        return this;
    }

    /**
     *
     */
    slice(...args) {
        this.remoteStore.slice(...args);
        return this;
    }

    /**
     *
     */
    getAll() {
        return this.options.remote ? this.remoteStore.getAll() : this.localStore.getAll(Object.fromEntries(this.remoteStore.url.searchParams.entries()));
    }
}

export { MDStoreModule };
