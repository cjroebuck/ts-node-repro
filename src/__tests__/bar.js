export {};

it('runs JS as ESM', () => {
    console.log("RUNNING BAR.JS")
    expect(import.meta.url).toBeDefined();
    expect(1).toEqual(1);
});