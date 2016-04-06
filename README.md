# cp-morse-translator
Coderpower challenge

You were send back in the past to help the military translate morse code faster. You have a comparison table between characters and morse code.

You job is to recreate a morse translator. It takes morse code in input, and it outputs plain text.

For instance : 

'..- --- ---' : FOO

Morse code is case insensitive. Words are seperated by 3 consecutive spaces and letter are separated by 1 space.

Let's 'FOO BAR' is equivalent to : '..- --- ---   -... .- .-.'.

You have the morseCode.get function at your disposal it takes a morse character in entry and send you back its equivalent.

morseCode.get('..-'); // returns 'A'
