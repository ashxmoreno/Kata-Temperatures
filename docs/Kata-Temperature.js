const TemperatureScale = {
    Fahrenheit: "F",
    Celsius: "C",
    Kelvin: "K"
};

function round(num) {
    return +(Math.round(+(num + "e+2")) + "e-2");
};

class Temperature {
    constructor(value, scale) {
        if (value <= 0 && scale === TemperatureScale.Kelvin)
            throw new Error("Kelvin can't be zero or less");

        this.value = value;
        this.Scale = scale;
    }

    Add(other) {
        if (this.Scale === other.Scale)
            return new Temperature(round(this.value + other.value), this.Scale);

        if (this.Scale === TemperatureScale.Celsius)
            return new Temperature(round(this.value + other.ToCelsius().value), this.Scale);

        if (this.Scale === TemperatureScale.Fahrenheit)
            return new Temperature(round(this.value + other.ToFahrenheit().value), this.Scale);

        return new Temperature(round(this.value + other.ToKelvin().value), this.Scale);
    }

    Substract(other) {
        if (this.Scale === other.Scale)
            return new Temperature(round(this.value - other.value), this.Scale);

        if (this.Scale === TemperatureScale.Celsius)
            return new Temperature(round(this.value - other.ToCelsius().value), this.Scale);

        if (this.Scale === TemperatureScale.Fahrenheit)
            return new Temperature(round(this.value - other.ToFahrenheit().value), this.Scale);

        return new Temperature(round(this.value - other.ToKelvin().value), this.Scale);
    }

    MultiplyBy(other) {
        if (this.Scale === other.Scale)
            return new Temperature(round(this.value * other.value), this.Scale);

        if (this.Scale === TemperatureScale.Celsius)
            return new Temperature(round(this.value * other.ToCelsius().value), this.Scale);

        if (this.Scale === TemperatureScale.Fahrenheit)
            return new Temperature(round(this.value * other.ToFahrenheit().value), this.Scale);

        return new Temperature(round(this.value * other.ToKelvin().value), this.Scale);
    }

    DivideBy(other) {
        if (this.Scale === other.Scale)
            return new Temperature(round(this.value / other.value), this.Scale);

        if (this.Scale === TemperatureScale.Celsius)
            return new Temperature(round(this.value / other.ToCelsius().value), this.Scale);

        if (this.Scale === TemperatureScale.Fahrenheit)
            return new Temperature(round(this.value / other.ToFahrenheit().value), this.Scale);

        return new Temperature(round(this.value / other.ToKelvin().value), this.Scale);
    }

    ToString() {
        return this.value + this.Scale;
    }

    ToFahrenheit() {
        if (this.Scale === TemperatureScale.Celsius) {
            const fahrenheit = round((this.value * 9 / 5) + 32);
            return new Temperature(fahrenheit, TemperatureScale.Fahrenheit);
        }

        if (this.Scale === TemperatureScale.Kelvin) {
            const fahrenheit = round((this.value - 273.15) * (9 / 5) + 32);
            return new Temperature(fahrenheit, TemperatureScale.Fahrenheit);
        }

        return this;
    }

    ToCelsius() {
        if (this.Scale === TemperatureScale.Fahrenheit) {
            const celsius = round((this.value - 32) * 5 / 9);
            return new Temperature(celsius, TemperatureScale.Celsius);
        }

        if (this.Scale === TemperatureScale.Kelvin) {
            const celsius = round(this.value - 273.15);
            return new Temperature(celsius, TemperatureScale.Celsius);
        }

        return this;
    }

    ToKelvin() {
        if (this.Scale === TemperatureScale.Celsius) {
            const kelvin = round(this.value + 273.15);
            return new Temperature(kelvin, TemperatureScale.Kelvin);
        }

        if (this.Scale === TemperatureScale.Fahrenheit) {
            const kelvin = round((this.value - 32) * (5 / 9) + 273.15);
            return new Temperature(kelvin, TemperatureScale.Kelvin);
        }

        return this;
    }
};

module.exports = {
    TemperatureScale,
    Temperature
}