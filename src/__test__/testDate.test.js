// import { testDateDiff } from "../client/js/testDate.js";
const testDateDiff = require('../client/js/testDate')

describe("Testing return date", () => {
    test("Testing if the testDateDiff() is defined", () => {
        expect(testDateDiff).toBeDefined();
    })
    test("Testing if the returning date is after depature date", () => {
        // const depDate = '07/18/2020';
        // const retDate = '07/15/2020';

        // expect(retDate).toBeGreaterThan(depDate);
        expect(testDateDiff('07/18/2020', '07/15/2020')).toBe(false);
    })

})