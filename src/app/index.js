import { MDRouterModule } from "../com/router/router";

/* prettier-ignore */
const routes = [
    {
        path: "",
        load: () => import("./main/main.js").then((m) => m.default),
        children: [
            { path: "layout", load: () => import("./layout/layout.js").then((m) => m.default) },
            { path: "typography", load: () => import("./typography/typography.js").then((m) => m.default) },
            { path: "image", load: () => import("./image/image.js").then((m) => m.default) },
            { path: "icon", load: () => import("./icon/icon.js").then((m) => m.default) },
            { path: "ripple", load: () => import("./ripple/ripple.js").then((m) => m.default) },
            { path: "popper", load: () => import("./popper/popper.js").then((m) => m.default) },
            { path: "virtual-scroll", load: () => import("./virtual-scroll/virtual-scroll.js").then((m) => m.default) },
            { path: "gesture", load: () => import("./gesture/gesture.js").then((m) => m.default) },
            { path: "icon-button", load: () => import("./icon-button/icon-button.js").then((m) => m.default) },
            { path: "form", load: () => import("./form/form.js").then((m) => m.default) },
            { path: "checkbox", load: () => import("./checkbox/checkbox.js").then((m) => m.default) },
            { path: "radio-button", load: () => import("./radio-button/radio-button.js").then((m) => m.default) },
            { path: "switch", load: () => import("./switch/switch.js").then((m) => m.default) },
            { path: "badge", load: () => import("./badge/badge.js").then((m) => m.default) },
            { path: "fab", load: () => import("./fab/fab.js").then((m) => m.default) },
            { path: "button", load: () => import("./button/button.js").then((m) => m.default) },
            { path: "segmented-button", load: () => import("./segmented-button/segmented-button.js").then((m) => m.default) },
            { path: "list", load: () => import("./list/list.js").then((m) => m.default) },
            { path: "nested-list", load: () => import("./nested-list/nested-list.js").then((m) => m.default) },
            { path: "navigation", load: () => import("./navigation/navigation.js").then((m) => m.default) },
            { path: "card", load: () => import("./card/card.js").then((m) => m.default) },
            { path: "dialog", load: () => import("./dialog/dialog.js").then((m) => m.default) },
            { path: "side-sheet", load: () => import("./side-sheet/side-sheet.js").then((m) => m.default) },
            { path: "bottom-sheet", load: () => import("./bottom-sheet/bottom-sheet.js").then((m) => m.default) },
            { path: "navigation-drawer", load: () => import("./navigation-drawer/navigation-drawer.js").then((m) => m.default) },
            { path: "navigation-rail", load: () => import("./navigation-rail/navigation-rail.js").then((m) => m.default) },
            { path: "navigation-bar", load: () => import("./navigation-bar/navigation-bar.js").then((m) => m.default) },
            { path: "bottom-app-bar", load: () => import("./bottom-app-bar/bottom-app-bar.js").then((m) => m.default) },
            { path: "top-app-bar", load: () => import("./top-app-bar/top-app-bar.js").then((m) => m.default) },
            { path: "snackbar", load: () => import("./snackbar/snackbar.js").then((m) => m.default) },
            { path: "menu", load: () => import("./menu/menu.js").then((m) => m.default) },
            { path: "tooltip", load: () => import("./tooltip/tooltip.js").then((m) => m.default) },
            { path: "tabs", load: () => import("./tabs/tabs.js").then((m) => m.default) },
            { path: "datetime-picker", load: () => import("./datetime-picker/datetime-picker.js").then((m) => m.default) },
            { path: "date-picker", load: () => import("./date-picker/date-picker.js").then((m) => m.default) },
            { path: "time-picker", load: () => import("./time-picker/time-picker.js").then((m) => m.default) },
            { path: "month-picker", load: () => import("./month-picker/month-picker.js").then((m) => m.default) },
            { path: "week-picker", load: () => import("./week-picker/week-picker.js").then((m) => m.default) },
            { path: "color-picker", load: () => import("./color-picker/color-picker.js").then((m) => m.default) },
            { path: "chips", load: () => import("./chips/chips.js").then((m) => m.default) },
            { path: "slider", load: () => import("./slider/slider.js").then((m) => m.default) },
            { path: "progress-indicator", load: () => import("./progress-indicator/progress-indicator.js").then((m) => m.default) },
            { path: "text-field", load: () => import("./text-field/text-field.js").then((m) => m.default) },
            { path: "number-field", load: () => import("./number-field/number-field.js").then((m) => m.default) },
            { path: "tel-field", load: () => import("./tel-field/tel-field.js").then((m) => m.default) },
            { path: "email-field", load: () => import("./email-field/email-field.js").then((m) => m.default) },
            { path: "url-field", load: () => import("./url-field/url-field.js").then((m) => m.default) },
            { path: "password-field", load: () => import("./password-field/password-field.js").then((m) => m.default) },
            { path: "search-field", load: () => import("./search-field/search-field.js").then((m) => m.default) },
            { path: "color-field", load: () => import("./color-field/color-field.js").then((m) => m.default) },
            { path: "file-field", load: () => import("./file-field/file-field.js").then((m) => m.default) },
            { path: "datetime-field", load: () => import("./datetime-field/datetime-field.js").then((m) => m.default) },
            { path: "date-field", load: () => import("./date-field/date-field.js").then((m) => m.default) },
            { path: "month-field", load: () => import("./month-field/month-field.js").then((m) => m.default) },
            { path: "week-field", load: () => import("./week-field/week-field.js").then((m) => m.default) },
            { path: "time-field", load: () => import("./time-field/time-field.js").then((m) => m.default) },
            { path: "data-table", load: () => import("./data-table/data-table.js").then((m) => m.default) },
        ],
    },
    { path: "*", load: () => import("./main/main.js").then((m) => m.default) },
];
MDRouterModule.init(routes, { historyApiFallback: false });
