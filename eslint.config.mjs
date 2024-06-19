import globals from "globals";
import pluginJs from "@eslint/js";

export default [
    {
        languageOptions: { globals: globals.browser },
        rules: {
            "lines-between-class-members": [
                "error",
                "always",
                {
                    exceptAfterSingleLine: true,
                },
            ],
            
        },
        ignores: [],
    },
    pluginJs.configs.recommended,
];
