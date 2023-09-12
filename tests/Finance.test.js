const { divideWithProratedRemainder } = require("../src/Finance");

// test("name", () =>{})
// expect().toBe()

test("divideWithProratedRemainder: simple test", () => {
   let result = divideWithProratedRemainder(6, 3)
	expect(result.length).toBe(3);
   expect(result.length).toBe(result[0].size);

   expect(result[0].rownum).toBe(1)
   expect(result[1].rownum).toBe(2)
   expect(result[2].rownum).toBe(3)

   expect(result[0].size).toBe(3)
   expect(result[1].size).toBe(3)
   expect(result[2].size).toBe(3)

   expect(result[0].value).toBe(2)
   expect(result[1].value).toBe(2)
   expect(result[2].value).toBe(2)   
   
   let total = result.reduce((previousValue, item) => previousValue + item.value, 0)
   expect(total).toBe(6)

});

test("divideWithProratedRemainder: test with decimal place", () => {
   let result = divideWithProratedRemainder(2, 6, 3)
	expect(result.length).toBe(6);
   expect(result.length).toBe(result[0].size);

   expect(result[0].rownum).toBe(1)
   expect(result[1].rownum).toBe(2)
   expect(result[2].rownum).toBe(3)
   expect(result[3].rownum).toBe(4)
   expect(result[4].rownum).toBe(5)
   expect(result[5].rownum).toBe(6)

   expect(result[0].size).toBe(6)
   expect(result[1].size).toBe(6)
   expect(result[2].size).toBe(6)
   expect(result[3].size).toBe(6)
   expect(result[4].size).toBe(6)
   expect(result[5].size).toBe(6)

   expect(result[0].value).toBe(0.334)
   expect(result[1].value).toBe(0.334)
   expect(result[2].value).toBe(0.333)   
   expect(result[3].value).toBe(0.333)   
   expect(result[4].value).toBe(0.333)   
   expect(result[5].value).toBe(0.333)   
   
   let total = result.reduce((previousValue, item) => previousValue + item.value, 0)
   expect(total).toBe(2)

});