var morselibrary = require('./morseCode');

module.exports = function (morseCode) {
    var output = [];

    [].map.call(morseCode.trim().split('   '), function (word, index) {
        output[index] = [];
        [].map.call(word.split(' '), function (char) {
            output[index] += morselibrary.get(char);
        });
    });

    return output.join(' ');
};
