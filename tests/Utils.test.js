const Utils = require("../src/Utils");

// -- Object
// test("name", () => {})
// expect().toBe()

test("pickObject: obj or properties empty", () => {
	expect(JSON.stringify(Utils.Object.pickObject(null, "a"))).toBe(JSON.stringify({}));
	expect(JSON.stringify(Utils.Object.pickObject({}))).toBe(JSON.stringify({}));
	let obj = {a:1,b:2,c:3}
	expect(JSON.stringify(Utils.Object.pickObject(obj))).toBe(JSON.stringify({}));
	expect(JSON.stringify(Utils.Object.pickObject(obj, null))).toBe(JSON.stringify({}));
	expect(JSON.stringify(Utils.Object.pickObject(null, null))).toBe(JSON.stringify({}));
});

test("pickObject: success", () => {
	let obj = {a:1,b:2,c:3}
	expect(JSON.stringify(Utils.Object.pickObject(obj, "a"))).toBe(JSON.stringify({a:1}));
});

test("toString: empty obj", () => {
	expect(Utils.Object.toString({})).toBe("{}");
	expect(Utils.Object.toString().trim()).toBe("");
})

test("toString: success", () => {
	expect(Utils.Object.toString({a:1,b:2,c:3})).toBe("{a = 1, b = 2, c = 3}");
	expect(Utils.Object.toString({a:1,b:2,c:3}, "a")).toBe("{a = 1}");
})

// -- Array

test("groupBy: success", () => {
	let ar = [
		{ type: "success", value: 10},
		{ type: "fail", value: 20},
		{ type: "success", value: 30},
	]
	expect(JSON.stringify(Utils.Array.groupBy(ar))).toBe(JSON.stringify(ar))
	expect(Utils.Array.groupBy(ar, "type")["success"].length).toBe(2)
	expect(Utils.Array.groupBy(ar, "type")["fail"].length).toBe(1)
})

test("countGroupBy: array or fieldname are empty", () => {
	expect(JSON.stringify(Utils.Array.countGroupBy())).toBe(JSON.stringify({}))
	expect(JSON.stringify(Utils.Array.countGroupBy({a:1}))).toBe(JSON.stringify({}))
})

test("countGroupBy: success", () => {
	let ar = [
		{ type: "success", value: 10},
		{ type: "fail", value: 20},
		{ type: "success", value: 30},
	]

	expect(Utils.Array.countGroupBy(ar, "type")["success"]).toBe(2)
	expect(Utils.Array.countGroupBy(ar, "type")["fail"]).toBe(1)
})

test("sumField: success", () => {
	let ar = [
		{ type: "success", value: 10},
		{ type: "fail", value: 20},
		{ type: "success", value: 30},
	]

	expect(Utils.Array.sumField(ar, "value")).toBe(60)
})