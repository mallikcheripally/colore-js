/**
 * Sets the value of a CSS variable on a specified element or the document.
 *
 * @param {HTMLElement | null} element - The element on which to set the CSS variable value.
 * @param {string} variableName - The name of the CSS variable.
 * @param {string} value - The value to set for the CSS variable.
 * @throws {Error} Throws an error if the CSS variable name is invalid.
 */
export function setCssVariableValue(element: HTMLElement | null, variableName: string, value: string): void {
    if (!variableName.startsWith('--')) {
        throw new Error('CSS variable name must start with "--".');
    }

    if (element) {
        element.style.setProperty(variableName, value);
    } else {
        document.documentElement.style.setProperty(variableName, value);
    }
}
