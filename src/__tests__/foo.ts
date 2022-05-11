import { functionality } from "../functionality.js";
// import {jest} from "@jest/globals";
// import pkg from '@jest/globals';
// const { jest } = pkg;
// export {};

it('runs TS as ESM', () => {
    // just run something from the jest package
    let poo = jest.fn();
    console.log("RUNNING FOO.TS");
    expect(poo).toBeDefined();
    // Using type syntax to prove that TS is working
    expect(import.meta.url as string | undefined).toBeDefined();
    expect(functionality).toBe(true);
});