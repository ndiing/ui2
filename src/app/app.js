import { MDObserver, breakpoints, schemes } from "../material/observer/observer.js";
import { MDRouter } from "../material/router/router.js";

const routes = [
    {
        path: "",
        load: () => import("./main/main.js").then((module) => module.default),
        children: [
            { path: "users", load: () => import("./users/users.js").then((module) => module.default), children: [{ path: ":id", load: () => import("./user/user.js").then((module) => module.default), outlet: "aux", children: [] }] },
            { path: "blogs", load: () => import("./blogs/blogs.js").then((module) => module.default), children: [{ path: ":id", load: () => import("./blog/blog.js").then((module) => module.default), children: [] }] },
            { path: "icon", load: () => import("./icon/icon.js").then((module) => module.default), children: [] },
            { path: "image", load: () => import("./image/image.js").then((module) => module.default), children: [] },
            { path: "badge", load: () => import("./badge/badge.js").then((module) => module.default), children: [] },
            { path: "button", load: () => import("./button/button.js").then((module) => module.default), children: [] },
            { path: "fab", load: () => import("./fab/fab.js").then((module) => module.default), children: [] },
            { path: "icon-button", load: () => import("./icon-button/icon-button.js").then((module) => module.default), children: [] },
            { path: "segmented-button", load: () => import("./segmented-button/segmented-button.js").then((module) => module.default), children: [] },
            { path: "pane", load: () => import("./pane/pane.js").then((module) => module.default), children: [] },
            { path: "form", load: () => import("./form/form.js").then((module) => module.default), children: [] },
            { path: "checkbox", load: () => import("./checkbox/checkbox.js").then((module) => module.default), children: [] },
            { path: "radio-button", load: () => import("./radio-button/radio-button.js").then((module) => module.default), children: [] },
            { path: "switch", load: () => import("./switch/switch.js").then((module) => module.default), children: [] },
            { path: "chips", load: () => import("./chips/chips.js").then((module) => module.default), children: [] },
            { path: "datetime-picker", load: () => import("./datetime-picker/datetime-picker.js").then((module) => module.default), children: [] },
            { path: "date-picker", load: () => import("./date-picker/date-picker.js").then((module) => module.default), children: [] },
            { path: "month-picker", load: () => import("./month-picker/month-picker.js").then((module) => module.default), children: [] },
            { path: "week-picker", load: () => import("./week-picker/week-picker.js").then((module) => module.default), children: [] },
            { path: "time-picker", load: () => import("./time-picker/time-picker.js").then((module) => module.default), children: [] },
            { path: "dialog", load: () => import("./dialog/dialog.js").then((module) => module.default), children: [] },
            { path: "list", load: () => import("./list/list.js").then((module) => module.default), children: [] },
            { path: "selection", load: () => import("./selection/selection.js").then((module) => module.default), children: [] },
            { path: "navigation", load: () => import("./navigation/navigation.js").then((module) => module.default), children: [] },
            { path: "menu", load: () => import("./menu/menu.js").then((module) => module.default), children: [] },
            { path: "navigation-bar", load: () => import("./navigation-bar/navigation-bar.js").then((module) => module.default), children: [] },
            { path: "navigation-drawer", load: () => import("./navigation-drawer/navigation-drawer.js").then((module) => module.default), children: [] },
            { path: "navigation-rail", load: () => import("./navigation-rail/navigation-rail.js").then((module) => module.default), children: [] },
            { path: "progress-indicator", load: () => import("./progress-indicator/progress-indicator.js").then((module) => module.default), children: [] },
            { path: "bottom-sheet", load: () => import("./bottom-sheet/bottom-sheet.js").then((module) => module.default), children: [] },
            { path: "side-sheet", load: () => import("./side-sheet/side-sheet.js").then((module) => module.default), children: [] },
            { path: "slider", load: () => import("./slider/slider.js").then((module) => module.default), children: [] },
            { path: "snackbar", load: () => import("./snackbar/snackbar.js").then((module) => module.default), children: [] },
            { path: "tabs", load: () => import("./tabs/tabs.js").then((module) => module.default), children: [] },
            { path: "tooltip", load: () => import("./tooltip/tooltip.js").then((module) => module.default), children: [] },
            { path: "top-app-bar", load: () => import("./top-app-bar/top-app-bar.js").then((module) => module.default), children: [] },
            { path: "bottom-app-bar", load: () => import("./bottom-app-bar/bottom-app-bar.js").then((module) => module.default), children: [] },
        ],
    },
    { path: "*", load: () => import("./not-found/not-found.js").then((module) => module.default), children: [] },
];

MDRouter.historyApiFallback = false;
MDRouter.init(routes);
