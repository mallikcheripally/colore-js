import { setCssVariableValue } from '@/cssVariables/setCssVariableValue';
import { getCssVariableValue } from '@/cssVariables/getCssVariableValue';

describe('setCssVariableValue', () => {
    let element: HTMLElement;

    beforeEach(() => {
        element = document.createElement('div');
        document.body.appendChild(element);
    });

    afterEach(() => {
        document.body.removeChild(element);
    });

    test('should set the value of a CSS variable on a specific element', () => {
        setCssVariableValue(element, '--my-color', 'blue');
        const value = getCssVariableValue(element, '--my-color');
        expect(value).toBe('blue');
    });

    test('should set the value of a CSS variable on the root document if no element is provided', () => {
        setCssVariableValue(null, '--my-color', 'red');
        const value = getCssVariableValue(null, '--my-color');
        expect(value).toBe('red');
    });

    test('should overwrite the value of an existing CSS variable', () => {
        setCssVariableValue(element, '--my-color', 'blue');
        setCssVariableValue(element, '--my-color', 'green');
        const value = getCssVariableValue(element, '--my-color');
        expect(value).toBe('green');
    });

    test('should throw an error for an invalid CSS variable name', () => {
        expect(() => setCssVariableValue(element, 'my-color', 'blue')).toThrow('CSS variable name must start with "--".');
    });

    test('should set the value of a CSS variable on a nested element', () => {
        const nestedElement = document.createElement('div');
        element.appendChild(nestedElement);

        setCssVariableValue(nestedElement, '--nested-color', 'yellow');

        const value = getCssVariableValue(nestedElement, '--nested-color');
        expect(value).toBe('yellow');
    });
});
