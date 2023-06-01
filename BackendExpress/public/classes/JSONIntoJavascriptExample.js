/* Three steps.
  1: go to or fetch from the url you need to get info for
    IE  https://www.dnd5eapi.co/api/classes/wizard
  2: copy, paste, wrap in a string, parse it and save the result
  3: console.dir(jsonObject, { depth: null });

By default, you can't view the entire console.log() JavaScript object (post json parse) in the console without nested references to [Object].
This is because the default behavior of the console is to display a shallow representation of the object when you log it directly.
To overcome this we can use a technique called "console.dir()".
By setting a depth option to null, you tell console.dir() to display the full depth of the object, avoiding the truncated display and [Object] placeholders.
*/



let jsonstring = `{
  "index": "wizard",
  "name": "Wizard",
  "hit_die": 6,
  "proficiency_choices": [
  {
  "desc": "Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion",
  "choose": 2,
  "type": "proficiencies",
  "from": {
  "option_set_type": "options_array",
  "options": [
  {
  "option_type": "reference",
  "item": {
  "index": "skill-arcana",
  "name": "Skill: Arcana",
  "url": "/api/proficiencies/skill-arcana"
  }
  },
  {
  "option_type": "reference",
  "item": {
  "index": "skill-history",
  "name": "Skill: History",
  "url": "/api/proficiencies/skill-history"
  }
  },
  {
  "option_type": "reference",
  "item": {
  "index": "skill-insight",
  "name": "Skill: Insight",
  "url": "/api/proficiencies/skill-insight"
  }
  },
  {
  "option_type": "reference",
  "item": {
  "index": "skill-investigation",
  "name": "Skill: Investigation",
  "url": "/api/proficiencies/skill-investigation"
  }
  },
  {
  "option_type": "reference",
  "item": {
  "index": "skill-medicine",
  "name": "Skill: Medicine",
  "url": "/api/proficiencies/skill-medicine"
  }
  },
  {
  "option_type": "reference",
  "item": {
  "index": "skill-religion",
  "name": "Skill: Religion",
  "url": "/api/proficiencies/skill-religion"
  }
  }
  ]
  }
  }
  ],
  "proficiencies": [
  {
  "index": "daggers",
  "name": "Daggers",
  "url": "/api/proficiencies/daggers"
  },
  {
  "index": "darts",
  "name": "Darts",
  "url": "/api/proficiencies/darts"
  },
  {
  "index": "slings",
  "name": "Slings",
  "url": "/api/proficiencies/slings"
  },
  {
  "index": "quarterstaffs",
  "name": "Quarterstaffs",
  "url": "/api/proficiencies/quarterstaffs"
  },
  {
  "index": "crossbows-light",
  "name": "Crossbows, light",
  "url": "/api/proficiencies/crossbows-light"
  },
  {
  "index": "saving-throw-int",
  "name": "Saving Throw: INT",
  "url": "/api/proficiencies/saving-throw-int"
  },
  {
  "index": "saving-throw-wis",
  "name": "Saving Throw: WIS",
  "url": "/api/proficiencies/saving-throw-wis"
  }
  ],
  "saving_throws": [
  {
  "index": "int",
  "name": "INT",
  "url": "/api/ability-scores/int"
  },
  {
  "index": "wis",
  "name": "WIS",
  "url": "/api/ability-scores/wis"
  }
  ],
  "starting_equipment": [
  {
  "equipment": {
  "index": "spellbook",
  "name": "Spellbook",
  "url": "/api/equipment/spellbook"
  },
  "quantity": 1
  }
  ],
  "starting_equipment_options": [
  {
  "desc": "(a) a quarterstaff or (b) a dagger",
  "choose": 1,
  "type": "equipment",
  "from": {
  "option_set_type": "options_array",
  "options": [
  {
  "option_type": "counted_reference",
  "count": 1,
  "of": {
  "index": "quarterstaff",
  "name": "Quarterstaff",
  "url": "/api/equipment/quarterstaff"
  }
  },
  {
  "option_type": "counted_reference",
  "count": 1,
  "of": {
  "index": "dagger",
  "name": "Dagger",
  "url": "/api/equipment/dagger"
  }
  }
  ]
  }
  },
  {
  "desc": "(a) a component pouch or (b) an arcane focus",
  "choose": 1,
  "type": "equipment",
  "from": {
  "option_set_type": "options_array",
  "options": [
  {
  "option_type": "counted_reference",
  "count": 1,
  "of": {
  "index": "component-pouch",
  "name": "Component pouch",
  "url": "/api/equipment/component-pouch"
  }
  },
  {
  "option_type": "choice",
  "choice": {
  "desc": "arcane focus",
  "choose": 1,
  "type": "equipment",
  "from": {
  "option_set_type": "equipment_category",
  "equipment_category": {
  "index": "arcane-foci",
  "name": "Arcane Foci",
  "url": "/api/equipment-categories/arcane-foci"
  }
  }
  }
  }
  ]
  }
  },
  {
  "desc": "(a) a scholar’s pack or (b) an explorer’s pack",
  "choose": 1,
  "type": "equipment",
  "from": {
  "option_set_type": "options_array",
  "options": [
  {
  "option_type": "counted_reference",
  "count": 1,
  "of": {
  "index": "scholars-pack",
  "name": "Scholar's Pack",
  "url": "/api/equipment/scholars-pack"
  }
  },
  {
  "option_type": "counted_reference",
  "count": 1,
  "of": {
  "index": "explorers-pack",
  "name": "Explorer's Pack",
  "url": "/api/equipment/explorers-pack"
  }
  }
  ]
  }
  }
  ],
  "class_levels": "/api/classes/wizard/levels",
  "multi_classing": {
  "prerequisites": [
  {
  "ability_score": {
  "index": "int",
  "name": "INT",
  "url": "/api/ability-scores/int"
  },
  "minimum_score": 13
  }
  ],
  "proficiencies": []
  },
  "subclasses": [
  {
  "index": "evocation",
  "name": "Evocation",
  "url": "/api/subclasses/evocation"
  }
  ],
  "spellcasting": {
  "level": 1,
  "spellcasting_ability": {
  "index": "int",
  "name": "INT",
  "url": "/api/ability-scores/int"
  },
  "info": [
  {
  "name": "Cantrips",
  "desc": [
  "At 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table."
  ]
  },
  {
  "name": "Spellbook",
  "desc": [
  "At 1st level, you have a spellbook containing six 1st- level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind."
  ]
  },
  {
  "name": "Preparing and Casting Spells",
  "desc": [
  "The Wizard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
  "You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.",
  "For example, if you're a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your spellbook. If you prepare the 1st-level spell magic missile, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
  "You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list."
  ]
  },
  {
  "name": "Spellcasting Ability",
  "desc": [
  "Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.",
  "Spell save DC = 8 + your proficiency bonus + your Intelligence modifier.",
  "Spell attack modifier = your proficiency bonus + your Intelligence modifier."
  ]
  },
  {
  "name": "Ritual Casting",
  "desc": [
  "You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared."
  ]
  },
  {
  "name": "Spellcasting Focus",
  "desc": [
  "You can use an arcane focus as a spellcasting focus for your wizard spells."
  ]
  }
  ]
  },
  "spells": "/api/classes/wizard/spells",
  "url": "/api/classes/wizard"
  }`

const jsonObject = JSON.parse(jsonstring);

console.dir(jsonObject, { depth: null });