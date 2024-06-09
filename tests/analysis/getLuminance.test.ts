import { getLuminance } from '@/analysis/getLuminance';

test('calculates luminance correctly for black in different formats', () => {
    expect(getLuminance('rgb(0, 0, 0)')).toBeCloseTo(0);
    expect(getLuminance('#000000')).toBeCloseTo(0);
    expect(getLuminance('hsl(0, 0%, 0%)')).toBeCloseTo(0);
});

test('calculates luminance correctly for white in different formats', () => {
    expect(getLuminance('rgb(255, 255, 255)')).toBeCloseTo(1);
    expect(getLuminance('#FFFFFF')).toBeCloseTo(1);
    expect(getLuminance('hsl(0, 0%, 100%)')).toBeCloseTo(1);
});

test('calculates luminance correctly for red in different formats', () => {
    expect(getLuminance('rgb(255, 0, 0)')).toBeCloseTo(0.2126);
    expect(getLuminance('#FF0000')).toBeCloseTo(0.2126);
    expect(getLuminance('hsl(0, 100%, 50%)')).toBeCloseTo(0.2126);
});

test('calculates luminance correctly for green in different formats', () => {
    expect(getLuminance('rgb(0, 255, 0)')).toBeCloseTo(0.7152);
    expect(getLuminance('#00FF00')).toBeCloseTo(0.7152);
    expect(getLuminance('hsl(120, 100%, 50%)')).toBeCloseTo(0.7152);
});

test('calculates luminance correctly for blue in different formats', () => {
    expect(getLuminance('rgb(0, 0, 255)')).toBeCloseTo(0.0722);
    expect(getLuminance('#0000FF')).toBeCloseTo(0.0722);
    expect(getLuminance('hsl(240, 100%, 50%)')).toBeCloseTo(0.0722);
});

test('calculates luminance correctly for gray in different formats', () => {
    expect(getLuminance('rgb(128, 128, 128)')).toBeCloseTo(0.2159);
    expect(getLuminance('#808080')).toBeCloseTo(0.2159);
    expect(getLuminance('hsl(0, 0%, 50%)')).toBeCloseTo(0.2159);
});
