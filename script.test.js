describe('Sample Test Suite', () => {
    test('hello world!', () => {
        expect(1 + 1).toBe(2);
    });
});
describe('divideNumbers', () => {
    let consoleLogSpy;

    beforeEach(() => {
        consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleLogSpy.mockRestore();
    });

    test('logs the result of division for valid inputs', () => {
        divideNumbers(10, 2);
        expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 5);
        expect(consoleLogSpy).toHaveBeenNthCalledWith(2, "Execution complete.");
    });

    test('logs error message when dividing by zero', () => {
        divideNumbers(10, 0);
        expect(consoleLogSpy).toHaveBeenNthCalledWith(1, "Division by zero is not allowed.");
        expect(consoleLogSpy).toHaveBeenNthCalledWith(2, "Execution complete.");
    });
});