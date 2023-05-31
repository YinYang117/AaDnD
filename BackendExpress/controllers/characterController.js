/*
This file will contain functions to handle character-related requests.
Some example placeholders are as follows:
*/


// basic barebones that would need to be fleshed out
const takeShortRest = (...party) => {
    party.foreach(playerChar => playerChar.shortRest())
}


// example of how code could look.
const levelup = (character, charClass) => {
    character.charClass ++
    character.hp += charClass.hp + character.conBonus
    character.hd += charClass
}