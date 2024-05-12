# Name Router

## Description

Router is a utility class for managing client-side routing.

## Instance properties

No properties available for this class.

## Instance methods

| Name     | Args         | Description                                                  |
| -------- | ------------ | ------------------------------------------------------------ |
| navigate | url: string | Navigates to the specified URL by updating the browser history. |
| init     | routes: Array | Initializes the router by setting up event listeners and defining routes. |

## Events

| Name               | Description                                                 |
| ------------------ | ----------------------------------------------------------- |
| onCurrentEntryChange | Event emitted when the current navigation entry changes.   |
| onNavigate         | Event emitted when navigation begins.                      |
| onNavigateSuccess  | Event emitted when navigation is successful.               |
| onNavigateError    | Event emitted when an error occurs during navigation.      |

### Route Properties

| Property     | Type     | Description                                     |
| ------------ | -------- | ----------------------------------------------- |
| path         | string   | The path of the route.                         |
| component    | HTML     | The HTML component associated with the route.  |
| load         | string   | The path of the component to load.             |
| beforeLoad   | function | A function to execute before loading the component. |
| children     | Array    | An array of child routes.                      |

## Usage Example

```javascript
import { Router } from "../lib/router/router";

// Define routes
const routes = [
    {
        path: "",
        load: () => import("./main/main.js").then((m) => m.default),
        children: [
            { path: "admin", load: () => import("./admin/admin.js").then((m) => m.default) },
            { path: "blogs", load: () => import("./blogs/blogs.js").then((m) => m.default), children: [{ path: "blog", load: () => import("./blog/blog.js").then((m) => m.default) }] },
            { path: "users", load: () => import("./users/users.js").then((m) => m.default), children: [{ path: "user", load: () => import("./user/user.js").then((m) => m.default) }] },
        ],
    },
    {
        path: "auth",
        load: () => import("./auth/auth.js").then((m) => m.default),
        children: [
            { path: "login", load: () => import("./login/login.js").then((m) => m.default) },
            { path: "verify", load: () => import("./verify/verify.js").then((m) => m.default) },
        ],
    },
    // Default route
    { path: "*", load: () => import("./main/main.js").then((m) => m.default) },
];

// Initialize router with defined routes
Router.init(routes);
```
