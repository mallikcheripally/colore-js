/**
 * Retrieves the value of a CSS variable from an HTML element or the root document if no element is provided.
 *
 * @param {HTMLElement | null} [element=null] - The HTML element from which to get the CSS variable value. Defaults to the root document.
 * @param {string} variableName - The name of the CSS variable (e.g., '--my-color').
 * @param {string} [defaultValue=''] - The default value to return if the variable does not exist.
 * @returns {string} - The value of the CSS variable or the default value if the variable does not exist.
 */
export function getCssVariableValue(element: HTMLElement | null = null, variableName: string, defaultValue: string = ''): string {
    if (!variableName.startsWith('--')) {
        throw new Error('CSS variable name must start with "--"');
    }

    let value = '';

    if (element) {
        value = getComputedStyle(element).getPropertyValue(variableName).trim();
    }

    if (!value && element !== document.documentElement) {
        // If the variable is not found on the element, check the root
        value = getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
    }

    return value || defaultValue;
}
