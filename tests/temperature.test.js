const { TemperatureScale, Temperature } = require("../docs/Kata-Temperature.js");

describe("Temperature", () => {

    describe("ToString", () => {
        it("should return '5.48F' if Temperature(5.48, Fahrenheit)", () => {
            const temp = new Temperature(5.48, TemperatureScale.Fahrenheit);
            expect(temp.ToString()).toBe("5.48F");
        })
    });

    describe("ToFahrenheit", () => {
        it("should return the same value if is Fahrenheit", () => {
            const temp = new Temperature(5.48, TemperatureScale.Fahrenheit);
            expect(temp.ToFahrenheit()).toEqual({ value: 5.48, Scale: TemperatureScale.Fahrenheit });
        });

        it("should return 89.6F if receive 32C", () => {
            const temp = new Temperature(32, TemperatureScale.Celsius);
            expect(temp.ToFahrenheit()).toEqual({ value: 89.6, Scale: TemperatureScale.Fahrenheit });
        });
    });

    describe("ToCelsius", () => {
        it("should return the same value if is Celsius", () => {
            const temp = new Temperature(5.48, TemperatureScale.Celsius);
            expect(temp.ToCelsius()).toEqual(temp);
        });

        it("should return -241.15C if receive 32K", () => {
            const temp = new Temperature(32, TemperatureScale.Kelvin);
            expect(temp.ToCelsius()).toEqual({ value: -241.15, Scale: TemperatureScale.Celsius });
        });
    });

    describe("ToKelvin", () => {
        it("should return the same value if is Kelvin", () => {
            const temp = new Temperature(5.48, TemperatureScale.Kelvin);
            expect(temp.ToKelvin()).toEqual(temp);
        });

        it("should return 278.63K if receive 5.48C", () => {
            const temp = new Temperature(5.48, TemperatureScale.Celsius);
            expect(temp.ToKelvin()).toEqual({ value: 278.63, Scale: TemperatureScale.Kelvin });
        });
    });

    describe("Add", () => {
        it("should return 15C if add 5C and 50F", () => {
            const tempA = new Temperature(5, TemperatureScale.Celsius);
            const tempB = new Temperature(50, TemperatureScale.Fahrenheit);
            expect(tempA.Add(tempB)).toEqual({ value: 15, Scale: TemperatureScale.Celsius });
        });
    });

    describe("Substract", () => {
        it("should return -5C if substract 5C and 50F", () => {
            const tempA = new Temperature(5, TemperatureScale.Celsius);
            const tempB = new Temperature(50, TemperatureScale.Fahrenheit);
            expect(tempA.Substract(tempB)).toEqual({ value: -5, Scale: TemperatureScale.Celsius });
        });
    });

    describe("MultiplyBy", () => {
        it("should return 6C if substract 3C by 2C", () => {
            const tempA = new Temperature(3, TemperatureScale.Celsius);
            const tempB = new Temperature(2, TemperatureScale.Celsius);
            expect(tempA.MultiplyBy(tempB)).toEqual({ value: 6, Scale: TemperatureScale.Celsius });
        });
    });

    describe("DivideBy", () => {
        it("should return 1.5C if divide 3C by 2C", () => {
            const tempA = new Temperature(3, TemperatureScale.Celsius);
            const tempB = new Temperature(2, TemperatureScale.Celsius);
            expect(tempA.DivideBy(tempB)).toEqual({ value: 1.5, Scale: TemperatureScale.Celsius });
        });
    });


})



