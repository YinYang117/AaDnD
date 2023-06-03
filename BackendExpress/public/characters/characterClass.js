class CharacterBase{
    constructor(name, str, dex, con, int, wis, cha){
        this.name = name;

        this.str = str || 8;
        this.dex = dex || 8;
        this.con = con || 8;
        this.int = int || 8;
        this.wis = wis || 8;
        this.cha = cha || 8;

        
        // Stats under 10 are negative modifiers that start at 9.
        // Stats above 10 are positive modifiers every even number (12, 14, etc.)
        this.strMod = str > 10 ? Math.floor(this.str - 10 / 2) : Math.abs(Math.floor(this.str / 2) - 5)
        this.dexMod = dex > 10 ? Math.floor(this.dex - 10 / 2) : Math.abs(Math.floor(this.dex / 2) - 5)
        this.conMod = con > 10 ? Math.floor(this.con - 10 / 2) : Math.abs(Math.floor(this.con / 2) - 5)
        this.intMod = int > 10 ? Math.floor(this.int - 10 / 2) : Math.abs(Math.floor(this.int / 2) - 5)
        this.wisMod = wis > 10 ? Math.floor(this.wis - 10 / 2) : Math.abs(Math.floor(this.wis / 2) - 5)
        this.chaMod = cha > 10 ? Math.floor(this.cha - 10 / 2) : Math.abs(Math.floor(this.cha / 2) - 5)
    }


}

// Characters will have the full list of details for every aspect.
class Character extends CharacterBase{
    constructor(name, str, dex, con, int, wis, cha, characterClass){
        super(name, str, dex, con, int, wis, cha)
    }

}

// NPCs only need their important details.
// NPCs are usually people in the world with 0 or 1 level.
// Typically includes a name, profession, highest skills, and non-default stats 
class NPC extends CharacterBase{
    constructor(name, str, dex, con, int, wis, cha){
        super(name, str, dex, con, int, wis, cha)
    }
}

// Monsters are similar to NPCs
// They'll need all combat related stats, special skills / abilities, hp, hd, etc.
class Monster extends CharacterBase{
    constructor(name, str, dex, con, int, wis, cha){
        super(name, str, dex, con, int, wis, cha)
    }
}