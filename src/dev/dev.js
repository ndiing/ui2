import { MDRouter } from "../material/router/router.js";

import DevMainComponent from "./main/main.js"
import DevIconComponent from "./icon/icon.js"
import DevButtonComponent from "./button/button.js"
import DevIconButtonComponent from "./icon-button/icon-button.js"
import DevCardComponent from "./card/card.js"
import DevSheetComponent from "./sheet/sheet.js"
import DevDialogComponent from "./dialog/dialog.js"
import DevTopAppBarComponent from "./top-app-bar/top-app-bar.js"
import DevSideSheetComponent from "./side-sheet/side-sheet.js"
import DevBottomSheetComponent from "./bottom-sheet/bottom-sheet.js"
import DevSegmentedButtonComponent from "./segmented-button/segmented-button.js"
import DevSnackbarComponent from "./snackbar/snackbar.js"
import DevLocalizationComponent from "./localization/localization.js"
import DevColorComponent from "./color/color.js"
import DevRippleComponent from "./ripple/ripple.js"
import DevTooltipComponent from "./tooltip/tooltip.js"
import DevPickerComponent from "./picker/picker.js"
import DevDatetimePickerComponent from "./datetime-picker/datetime-picker.js"
import DevDatePickerComponent from "./date-picker/date-picker.js"
import DevMonthPickerComponent from "./month-picker/month-picker.js"
import DevTimePickerComponent from "./time-picker/time-picker.js"
import DevWeekPickerComponent from "./week-picker/week-picker.js"
import DevColorPickerComponent from "./color-picker/color-picker.js"
import DevFabComponent from "./fab/fab.js"
import DevBottomAppBarComponent from "./bottom-app-bar/bottom-app-bar.js"
import DevImageComponent from "./image/image.js"
import DevPopperComponent from "./popper/popper.js"
import DevBadgeComponent from "./badge/badge.js"
import DevFormComponent from "./form/form.js"
import DevCheckboxComponent from "./checkbox/checkbox.js"
import DevRadioButtonComponent from "./radio-button/radio-button.js"
import DevSwitchComponent from "./switch/switch.js"
import DevSliderComponent from "./slider/slider.js"
import DevForm2Component from "./form2/form2.js"
import DevProgressIndicatorComponent from "./progress-indicator/progress-indicator.js"
import DevGestureComponent from "./gesture/gesture.js"
import DevListComponent from "./list/list.js"
import DevSelectionComponent from "./selection/selection.js"
import DevTreeComponent from "./tree/tree.js"
import DevNavigationComponent from "./navigation/navigation.js"
import DevNavigationBarComponent from "./navigation-bar/navigation-bar.js"
import DevNavigationDrawerComponent from "./navigation-drawer/navigation-drawer.js"
import DevNavigationRailComponent from "./navigation-rail/navigation-rail.js"
import DevMenuComponent from "./menu/menu.js"

const routes = [
    {
        path: "",
        component: DevMainComponent,
        children: [
            { path: "icon", component: DevIconComponent, children: [] },
            { path: "button", component: DevButtonComponent, children: [] },
            { path: "icon-button", component: DevIconButtonComponent, children: [] },
            { path: "card", component: DevCardComponent, children: [] },
            { path: "sheet", component: DevSheetComponent, children: [] },
            { path: "dialog", component: DevDialogComponent, children: [] },
            { path: "top-app-bar", component: DevTopAppBarComponent, children: [] },
            { path: "side-sheet", component: DevSideSheetComponent, children: [] },
            { path: "bottom-sheet", component: DevBottomSheetComponent, children: [] },
            { path: "segmented-button", component: DevSegmentedButtonComponent, children: [] },
            { path: "snackbar", component: DevSnackbarComponent, children: [] },
            { path: "localization", component: DevLocalizationComponent, children: [] },
            { path: "color", component: DevColorComponent, children: [] },
            { path: "ripple", component: DevRippleComponent, children: [] },
            { path: "tooltip", component: DevTooltipComponent, children: [] },
            { path: "picker", component: DevPickerComponent, children: [] },
            { path: "datetime-picker", component: DevDatetimePickerComponent, children: [] },
            { path: "date-picker", component: DevDatePickerComponent, children: [] },
            { path: "month-picker", component: DevMonthPickerComponent, children: [] },
            { path: "time-picker", component: DevTimePickerComponent, children: [] },
            { path: "week-picker", component: DevWeekPickerComponent, children: [] },
            { path: "color-picker", component: DevColorPickerComponent, children: [] },
            { path: "fab", component: DevFabComponent, children: [] },
            { path: "bottom-app-bar", component: DevBottomAppBarComponent, children: [] },
            { path: "image", component: DevImageComponent, children: [] },
            { path: "popper", component: DevPopperComponent, children: [] },
            { path: "badge", component: DevBadgeComponent, children: [] },
            { path: "form", component: DevFormComponent, children: [] },
            { path: "checkbox", component: DevCheckboxComponent, children: [] },
            { path: "radio-button", component: DevRadioButtonComponent, children: [] },
            { path: "switch", component: DevSwitchComponent, children: [] },
            { path: "slider", component: DevSliderComponent, children: [] },
            { path: "form2", component: DevForm2Component, children: [] },
            { path: "progress-indicator", component: DevProgressIndicatorComponent, children: [] },
            { path: "gesture", component: DevGestureComponent, children: [] },
            { path: "list", component: DevListComponent, children: [] },
            { path: "selection", component: DevSelectionComponent, children: [] },
            { path: "tree", component: DevTreeComponent, children: [] },
            { path: "navigation", component: DevNavigationComponent, children: [] },
            { path: "navigation-bar", component: DevNavigationBarComponent, children: [] },
            { path: "navigation-drawer", component: DevNavigationDrawerComponent, children: [] },
            { path: "navigation-rail", component: DevNavigationRailComponent, children: [] },
            { path: "menu", component: DevMenuComponent, children: [] },
        ],
    },
    { path: "*", component: DevMainComponent, children: [] },
];

MDRouter.historyApiFallback = false;
MDRouter.init(routes);
