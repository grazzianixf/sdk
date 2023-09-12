const YearMonth = require("./../src/YearMonth");

test("Checkin values after instantiation", () => {
	let ym = new YearMonth(2023, 9);
	expect(ym.year).toBe(2023);
	expect(ym.month).toBe(9);
	expect(ym.monthDescription).toBe("September");
	expect(ym.description).toBe("September 2023");
});

test("Checkin previous", () => {
	let ym = new YearMonth(2023, 2);
	ym.previous();
	expect(ym.year).toBe(2023);
	expect(ym.month).toBe(1);
	ym.previous();
	expect(ym.year).toBe(2022);
	expect(ym.month).toBe(12);   
	ym.previous();
	expect(ym.year).toBe(2022);
	expect(ym.month).toBe(11);      
});

test("Checkin next", () => {
	let ym = new YearMonth(2023, 11);
	ym.next();
	expect(ym.year).toBe(2023);
	expect(ym.month).toBe(12);
	ym.next();
	expect(ym.year).toBe(2024);
	expect(ym.month).toBe(1);   
	ym.next();
	expect(ym.year).toBe(2024);
	expect(ym.month).toBe(2);      
});