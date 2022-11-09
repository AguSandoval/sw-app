export interface fontSelectorWeight {
    weight:
        | "Black"
        | "ExtraBold"
        | "Bold"
        | "SemiBold"
        | "Medium"
        | "Regular"
        | "Light"
        | "ExtraLight"
        | "Thin";
}

/**
 * This function is used to create a style for texts all over the app.
 * @param {string} weight - The weight of the font
 * @returns {StyleSheet} - The style sheet for the text
 * E.g.: ... style: {fontSelector({weight: "Bold"})}
 */
export default ({ weight }: fontSelectorWeight) => {
    return [
        {
            fontFamily: `Urbanist-${weight}`,
        },
    ];
};
