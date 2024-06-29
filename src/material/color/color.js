import { argbFromHex, themeFromSourceColor, applyTheme, themeFromImage } from "@material/material-color-utilities";

/**
 * Checks if the provided color string is a valid hexadecimal color.
 * @param {String} color - The color string to validate.
 * @returns {Boolean} - True if the color string is a valid hexadecimal color, false otherwise.
 */
function isValidHexColor(color) {
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return hexColorRegex.test(color);
}

/**
 * Sets the theme of the application based on either a hexadecimal color or an image.
 * @param {String} colorOrImage - The hexadecimal color string or image URL to set as the theme.
 * @param {Object} customColors - Custom color definitions to apply to the theme.
 * @returns {Promise<void>} - Promise that resolves once the theme is applied.
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
