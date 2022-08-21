class Assignment {
    static IsLeapYear(year) {
        console.log(`Year ${year} is ${year % 4 === 0 ? "" : "not "}leap year`)
    }
    static ConvertTemprature(inputTemprature) {
        let numberPart = Number(inputTemprature.substring(0, inputTemprature.length - 1))
        if (inputTemprature.endsWith('℃') && !isNaN(numberPart)) {
            //c/5 = (f-32)/9
            console.log(`${inputTemprature}  is ${((9 * numberPart) / 5) + 32}℉`)
        }
        else if (inputTemprature.endsWith('℉') && !isNaN(numberPart)) {
            console.log(`${inputTemprature}  is ${(5 * (numberPart - 32)) / 9}℃`)
        }
        else {
            console.log(`Input ${inputTemprature} is not valid temprature`)
        }
    }
    static GetFactorial(inputNumer) {
        if (inputNumer == 1)
            return 1
        else
            return (inputNumer * Assignment.GetFactorial(inputNumer - 1))
    }
}
Assignment.IsLeapYear(2022)
Assignment.ConvertTemprature("60℃")
Assignment.ConvertTemprature("140℉")
Assignment.ConvertTemprature("45℉")
console.log(Assignment.GetFactorial(10))