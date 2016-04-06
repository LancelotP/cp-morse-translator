var expect = require('expect.js');
var translator = require('../sources/morseTranslator');

describe('Must return the final position', function () {
    it("should return 'HEY'", function () {
        return expect(translator('.... . -.--')).to.eql('HEY');
    });
    it("should return 'HEY'", function () {
        return expect(translator('    .... . -.--     ')).to.eql('HEY');
    });
    it("should return 'SOS'", function () {
        return expect(translator('... --- ...')).to.eql('SOS');
    });
    it("should return 42", function () {
        return expect(translator('....- ..---')).to.eql(42);
    });
    it("should return 42", function () {
        return expect(translator('    ....- ..---    ')).to.eql(42);
    });
    it("should return 'CODERPOWER IS A WONDERFUL PLACE'", function () {
        return expect(translator('-.-. --- -.. . .-. .--. --- .-- . .-.   .. ...   .-   .-- --- -. -.. . .-. ..-. ..- .-..   .--. .-.. .- -.-. .')).to.eql('CODERPOWER IS A WONDERFUL PLACE');
    });
});
