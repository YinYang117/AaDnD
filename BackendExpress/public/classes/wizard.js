const wizardClass = {
    name: 'Wizard',
    hit_die: 6,
    skill_proficiency_choices: [
        {
            choose: 2,
            options: [
                'Arcana',
                'History',
                'Insight',
                'Investigation',
                'Medicine',
                'Religion'
            ]
        }
    ],
    equipment_proficiencies: [
        'Daggers',
        'Darts',
        'Slings',
        'Quarterstaffs',
        'Crossbows, light',
    ],
    saving_throw_proficiencies: ['INT', 'WIS'],
    starting_equipment: [
        {
            name: 'Spellbook',
            quantity: 1
        }
    ],
    starting_equipment_options: [
        {
            choose: 1,
            options: ['Quarterstaff', 'Dagger']
        },
        {
            choose: 1,
            options: ['Component pouch', 'Arcane focus']
        },
        {
            choose: 1,
            options: ["Scholar's Pack", "Explorer's Pack"]
        }
    ],
    class_levels: 'https://www.dnd5eapi.co/api/classes/wizard/levels',
    multi_classing: { // To multiclass INTO a wizard
        prerequisites: {
            ability_score: {
                name: 'INT',
                minimum_score: 13
            }
        }
    },
    spellcasting: {
        spellcasting_ability: 'INT',
        info: {
            'Cantrips': 'At 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table.',
            'Spellbook': 'At 1st level, you have a spellbook containing six 1st-level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind.',
            'Preparing and Casting Spells': [
                "The Wizard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                'You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.',
                "For example, if you're a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your spellbook. If you prepare the 1st-level spell magic missile, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
                'You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list.'
            ],
            'Spellcasting Ability': [
                'Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.',
                'Spell save DC = 8 + your proficiency bonus + your Intelligence modifier.',
                'Spell attack modifier = your proficiency bonus + your Intelligence modifier.'
            ],
            'Ritual Casting': "You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared.",
            'Spellcasting Focus': 'You can use an arcane focus as a spellcasting focus for your wizard spells.'
        }
    },
    spellsAPI: 'https://www.dnd5eapi.co/api/classes/wizard/spells'
}
