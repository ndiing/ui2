import { argbFromHex, themeFromSourceColor, applyTheme, themeFromImage } from "@material/material-color-utilities";

const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

/**
 * Sets the theme based on a given color value or image URL.
 * @param {string} value - The color value (hexadecimal) or image URL to derive the theme from.
 * @returns {Promise<void>} A promise that resolves once the theme is applied.
 */
const setTheme = async (value) => {
    let theme;

    if (hexColorRegex.test(value)) {
        theme = themeFromSourceColor(argbFromHex(value), []);
    } else {
        theme = await themeFromImage(value);
    }

    // Customize theme properties based on color scheme
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

    // Determine system dark mode preference
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Apply the theme to the document body
    applyTheme(theme, { target: document.body, dark: systemDark });
};

export { setTheme };
