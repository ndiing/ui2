import { Hct, applyTheme, argbFromHex, themeFromSourceColor, hexFromArgb } from "@material/material-color-utilities";

/**
 *
 * @class MDColorModule
 */
class MDColorModule {
    /**
     *
     */
    constructor() {
        this.list = [
            {
                name: "light",
                query: window.matchMedia("(prefers-color-scheme: light)"),
            },
            {
                name: "dark",
                query: window.matchMedia("(prefers-color-scheme: dark)"),
            },
        ];
        this.item = null;
        this.callback = this.callback.bind(this);
        this.init();
    }

    /**
     *
     */
    init() {
        this.callback();
        new MutationObserver(this.callback).observe(document.querySelector('[name="theme-color"]'), {
            attributes: true,
            attributeFilter: ["content"],
        });
    }

    /**
     *
     */
    callback() {
        if (this.item) {
            this.item.query.removeEventListener("change", this.callback);
        }
        this.item = this.list.find((item) => item.query.matches);

        const hex = document.querySelector('[name="theme-color"]').getAttribute("content");
        const theme = themeFromSourceColor(argbFromHex(hex), []);

        // https://github.com/material-foundation/material-color-utilities/issues/98
        Object.assign(theme.schemes.light.props, {
            surfaceDim: theme.palettes.neutral.tone(87),
            surfaceBright: theme.palettes.neutral.tone(98),
            surfaceContainerLowest: theme.palettes.neutral.tone(100),
            surfaceContainerLow: theme.palettes.neutral.tone(96),
            surfaceContainer: theme.palettes.neutral.tone(94),
            surfaceContainerHigh: theme.palettes.neutral.tone(92),
            surfaceContainerHighest: theme.palettes.neutral.tone(90),
            surfaceTintColor: theme.schemes.light.primary,
        });
        Object.assign(theme.schemes.dark.props, {
            surfaceDim: theme.palettes.neutral.tone(6),
            surfaceBright: theme.palettes.neutral.tone(24),
            surfaceContainerLowest: theme.palettes.neutral.tone(4),
            surfaceContainerLow: theme.palettes.neutral.tone(10),
            surfaceContainer: theme.palettes.neutral.tone(12),
            surfaceContainerHigh: theme.palettes.neutral.tone(17),
            surfaceContainerHighest: theme.palettes.neutral.tone(22),
            surfaceTintColor: theme.schemes.dark.primary,
        });

        applyTheme(theme, {
            target: document.body,
            dark: this.item.name == "dark",
        });

        const event = new CustomEvent("onColorChange", {
            bubbles: true,
            cancelable: true,
            detail: this.item,
        });
        window.dispatchEvent(event);

        if (this.item) {
            this.item.query.addEventListener("change", this.callback);
        }
    }
}

const color = new MDColorModule();

export { color };
