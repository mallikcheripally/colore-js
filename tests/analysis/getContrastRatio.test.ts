import { getContrastRatio } from '@/analysis/getContrastRatio';

describe('calculateContrastRatio', () => {
    test('calculates contrast ratio and compliance for black and white', () => {
        const result = getContrastRatio('rgb(0, 0, 0)', 'rgb(255, 255, 255)');
        expect(result.ratio).toBeCloseTo(21);
        expect(result.ratioString).toBe('21.00:1');
        expect(result.isAccessible).toBe(true);
        expect(result.level).toBe('AAA');
    });

    test('calculates contrast ratio and compliance for red and blue', () => {
        const result = getContrastRatio('rgb(255, 0, 0)', 'rgb(0, 0, 255)');
        expect(result.ratio).toBeCloseTo(2.15);
        expect(result.ratioString).toBe('2.15:1');
        expect(result.isAccessible).toBe(false);
        expect(result.level).toBe('None');
    });

    test('calculates contrast ratio and compliance for gray and black', () => {
        const result = getContrastRatio('rgb(128, 128, 128)', 'rgb(0, 0, 0)');
        expect(result.ratio).toBeCloseTo(5.32, 2);
        expect(result.ratioString).toBe('5.32:1');
        expect(result.isAccessible).toBe(true);
        expect(result.level).toBe('AA');
    });
});
