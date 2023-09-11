const Utils = require("./Utils")

const ResultType = {
    FAIL: "Fail",
    SUCCESS: "Success"
}
const assert = (actual, expected) => {
    let details = { actual, expected };

    if (actual != expected) {
        // throw { type: "Fail", details };
        console.error(ResultType.FAIL, details)

        return false
    } else {
        console.info(ResultType.SUCCESS, details)

        return true
    }
}

const describe = (description, testFunction) => {
    let resultArray = []

    try {
        console.group(description)
        let objTestFunctions = testFunction();
        if (objTestFunctions) {
            // console.log(objTestFunctions)
            Object.keys(objTestFunctions).forEach(test => resultArray.push({"testFunction": test, result : objTestFunctions[test]() ? ResultType.SUCCESS : ResultType.FAIL}))
        }
    } catch (error) {
        console.error("Failure", error)
    } finally {
        console.groupEnd();
    }

    // resultArray.

    console.info("Result", Utils.Array.countGroupBy(resultArray, "result"))
}

module.exports = { 
    assert, 
    describe 
}