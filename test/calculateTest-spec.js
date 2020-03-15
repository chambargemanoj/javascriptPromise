const calculator = require('../src/calculator.js');
const chai = require ('chai');
const chaiAsPromised = require ('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe ('Calculate Square', function () {
it ('should resolve with number 4 if processed wiht number 2 ', function () {
    return expect(calculator(2)).to.eventually.be.equal(4);
});

it ('should become fulfilled when passed number 2', function () {
    return expect(calculator(2)).to.be.fulfilled;
});

it ('should become rejected if passed string instead of number', function () {
    return expect(calculator('string')).to.be.rejected;
});

})