import { argbFromHex, themeFromSourceColor, applyTheme, themeFromImage } from "@material/material-color-utilities";

/**
 * Checks if a string is a valid hexadecimal color.
 * @param {string} color - The color string to validate.
 * @returns {boolean} Returns true if the color string is a valid hexadecimal color, otherwise false.
 */
function isValidHexColor(color) {
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return hexColorRegex.test(color);
}

/**
 * Sets the theme based on a given color or image.
 * @param {string|HTMLImageElement} colorOrImage - The hexadecimal color string or HTMLImageElement to set the theme with.
 * @returns {Promise<void>} Promise that resolves once the theme is applied.
 */
async function setTheme(colorOrImage, customColors) {
    let theme;

    if (isValidHexColor(colorOrImage)) {
        theme = themeFromSourceColor(argbFromHex(colorOrImage), customColors);
    } else {
        theme = await themeFromImage(colorOrImage, customColors);
    }

    theme.schemes.dark.props.surfaceDim = theme.palettes.neutral.tone(6);
    theme.schemes.dark.props.surfaceBright = theme.palettes.neutral.tone(24);
    theme.schemes.dark.props.surfaceContainerLowest = theme.palettes.neutral.tone(4);
    theme.schemes.dark.props.surfaceContainerLow = theme.palettes.neutral.tone(10);
    theme.schemes.dark.props.surfaceContainer = theme.palettes.neutral.tone(12);
    theme.schemes.dark.props.surfaceContainerHigh = theme.palettes.neutral.tone(17);
    theme.schemes.dark.props.surfaceContainerHighest = theme.palettes.neutral.tone(22);

    theme.schemes.light.props.surfaceDim = theme.palettes.neutral.tone(87);
    theme.schemes.light.props.surfaceBright = theme.palettes.neutral.tone(98);
    theme.schemes.light.props.surfaceContainerLowest = theme.palettes.neutral.tone(100);
    theme.schemes.light.props.surfaceContainerLow = theme.palettes.neutral.tone(96);
    theme.schemes.light.props.surfaceContainer = theme.palettes.neutral.tone(94);
    theme.schemes.light.props.surfaceContainerHigh = theme.palettes.neutral.tone(92);
    theme.schemes.light.props.surfaceContainerHighest = theme.palettes.neutral.tone(90);

    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    applyTheme(theme, { target: document.body, dark: systemDark });
}

export { setTheme };

/**
 * Example usage of the setTheme function.
 * @example
 * import { setTheme } from "./path/to/your/module.js";
 *
 * setTheme('#009688');
 *
 * const image = new Image();
 * image.src = './src/assets/ln4j2i04-02.png';
 * setTheme(image);
 */
