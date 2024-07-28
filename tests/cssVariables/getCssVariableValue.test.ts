import { getCssVariableValue } from '@/cssVariables/getCssVariableValue';

describe('getCssVariableValue', () => {
    let element: HTMLElement;

    beforeEach(() => {
        element = document.createElement('div');
        document.body.appendChild(element);
    });

    afterEach(() => {
        document.body.removeChild(element);
    });

    test('should throw error if variable is not valid', () => {
        expect(() => getCssVariableValue(null, '')).toThrow('CSS variable name must start with "--"');
    });

    test('should return the value of a CSS variable from a specific element', () => {
        element.style.setProperty('--my-color', 'blue');
        const value = getCssVariableValue(element, '--my-color');
        expect(value).toBe('blue');
    });

    test('should return the value of a CSS variable from the root document if no element is provided', () => {
        document.documentElement.style.setProperty('--my-color', 'red');
        const value = getCssVariableValue(null, '--my-color');
        expect(value).toBe('red');
    });

    test('should return the default value if the CSS variable does not exist', () => {
        const value = getCssVariableValue(element, '--non-existent', 'default-value');
        expect(value).toBe('default-value');
    });

    test('should return an empty string if the CSS variable does not exist and no default value is provided', () => {
        const value = getCssVariableValue(element, '--non-existent');
        expect(value).toBe('');
    });

    test('should return the value of a CSS variable from a nested element', () => {
        const nestedElement = document.createElement('div');
        element.appendChild(nestedElement);

        document.documentElement.style.setProperty('--nested-color', 'green');

        const value = getCssVariableValue(nestedElement, '--nested-color');
        expect(value).toBe('green');
    });
});
