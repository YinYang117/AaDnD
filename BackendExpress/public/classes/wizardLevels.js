const wizardLevelsJson = `[
    {
        "level": 1,
        "ability_score_bonuses": 0,
        "prof_bonus": 2,
        "features": [
            {
                "index": "spellcasting-wizard",
                "name": "Spellcasting: Wizard",
                "url": "/api/features/spellcasting-wizard"
            },
            {
                "index": "arcane-recovery",
                "name": "Arcane Recovery",
                "url": "/api/features/arcane-recovery"
            }
        ],
        "spellcasting": {
            "cantrips_known": 3,
            "spell_slots_level_1": 2,
            "spell_slots_level_2": 0,
            "spell_slots_level_3": 0,
            "spell_slots_level_4": 0,
            "spell_slots_level_5": 0,
            "spell_slots_level_6": 0,
            "spell_slots_level_7": 0,
            "spell_slots_level_8": 0,
            "spell_slots_level_9": 0
        },
        "class_specific": {
            "arcane_recovery_levels": 1
        },
        "index": "wizard-1",
        "class": {
            "index": "wizard",
            "name": "Wizard",
            "url": "/api/classes/wizard"
        },
        "url": "/api/classes/wizard/levels/1"
    },
    {
        "level": 2,
        "ability_score_bonuses": 0,
        "prof_bonus": 2,
        "features": [
            {
                "index": "arcane-tradition",
                "name": "Arcane Tradition",
                "url": "/api/features/arcane-tradition"
            }
        ],
        "spellcasting": {
            "cantrips_known": 3,
            "spell_slots_level_1": 3,
            "spell_slots_level_2": 0,
            "spell_slots_level_3": 0,
            "spell_slots_level_4": 0,
            "spell_slots_level_5": 0,
            "spell_slots_level_6": 0,
            "spell_slots_level_7": 0,
            "spell_slots_level_8": 0,
            "spell_slots_level_9": 0
        },
        "class_specific": {
            "arcane_recovery_levels": 1
        },
        "index": "wizard-2",
        "class": {
            "index": "wizard",
            "name": "Wizard",
            "url": "/api/classes/wizard"
        },
        "url": "/api/classes/wizard/levels/2"
    },
    {
        "level": 3,
        "ability_score_bonuses": 0,
        "prof_bonus": 2,
        "features": [],
        "spellcasting": {
            "cantrips_known": 3,
            "spell_slots_level_1": 4,
            "spell_slots_level_2": 2,
            "spell_slots_level_3": 0,
            "spell_slots_level_4": 0,
            "spell_slots_level_5": 0,
            "spell_slots_level_6": 0,
            "spell_slots_level_7": 0,
            "spell_slots_level_8": 0,
            "spell_slots_level_9": 0
        },
        "class_specific": {
            "arcane_recovery_levels": 2
        },
        "index": "wizard-3",
        "class": {
            "index": "wizard",
            "name": "Wizard",
            "url": "/api/classes/wizard"
        },
        "url": "/api/classes/wizard/levels/3"
    },
    {
        "level": 4,
        "ability_score_bonuses": 1,
        "prof_bonus": 2,
        "features": [
            {
                "index": "wizard-ability-score-improvement-1",
                "name": "Ability Score Improvement",
                "url": "/api/features/wizard-ability-score-improvement-1"
            }
        ],
        "spellcasting": {
            "cantrips_known": 4,
            "spell_slots_level_1": 4,
            "spell_slots_level_2": 3,
            "spell_slots_level_3": 0,
            "spell_slots_level_4": 0,
            "spell_slots_level_5": 0,
            "spell_slots_level_6": 0,
            "spell_slots_level_7": 0,
            "spell_slots_level_8": 0,
            "spell_slots_level_9": 0
        },
        "class_specific": {
            "arcane_recovery_levels": 2
        },
        "index": "wizard-4",
        "class": {
            "index": "wizard",
            "name": "Wizard",
            "url": "/api/classes/wizard"
        },
        "url": "/api/classes/wizard/levels/4"
    },
    {
        "level": 5,
        "ability_score_bonuses": 1,
        "prof_bonus": 3,
        "features": [],
        "spellcasting": {
            "cantrips_known": 4,
            "spell_slots_level_1": 4,
            "spell_slots_level_2": 3,
            "spell_slots_level_3": 2,
            "spell_slots_level_4": 0,
            "spell_slots_level_5": 0,
            "spell_slots_level_6": 0,
            "spell_slots_level_7": 0,
            "spell_slots_level_8": 0,
            "spell_slots_level_9": 0
        },
        "class_specific": {
            "arcane_recovery_levels": 3
        },
        "index": "wizard-5",
        "class": {
            "index": "wizard",
            "name": "Wizard",
            "url": "/api/classes/wizard"
        },
        "url": "/api/classes/wizard/levels/5"
    },
    {
        "level": 6,
        "ability_score_bonuses": 1,
        "prof_bonus": 3,
        "features": [],
        "spellcasting": {
            "cantrips_known": 4,
            "spell_slots_level_1": 4,
            "spell_slots_level_2": 3,
            "spell_slots_level_3": 3,
            "spell_slots_level_4": 0,
            "spell_slots_level_5": 0,
            "spell_slots_level_6": 0,
            "spell_slots_level_7": 0,
            "spell_slots_level_8": 0,
            "spell_slots_level_9": 0
        },
        "class_specific": {
            "arcane_recovery_levels": 3
        },
        "index": "wizard-6",
        "class": {
            "index": "wizard",
            "name": "Wizard",
            "url": "/api/classes/wizard"
        },
        "url": "/api/classes/wizard/levels/6"
    },
    {
        "level": 7,
        "ability_score_bonuses": 1,
        "prof_bonus": 3,
        "features": [],
        "spellcasting": {
            "cantrips_known": 4,
            "spell_slots_level_1": 4,
            "spell_slots_level_2": 3,
            "spell_slots_level_3": 3,
            "spell_slots_level_4": 1,
            "spell_slots_level_5": 0,
            "spell_slots_level_6": 0,
            "spell_slots_level_7": 0,
            "spell_slots_level_8": 0,
            "spell_slots_level_9": 0
        },
        "class_specific": {
            "arcane_recovery_levels": 4
        },
        "index": "wizard-7",
        "class": {
            "index": "wizard",
            "name": "Wizard",
            "url": "/api/classes/wizard"
        },
        "url": "/api/classes/wizard/levels/7"
    },
    {
        "level": 8,
        "ability_score_bonuses": 2,
        "prof_bonus": 3,
        "features": [
            {
                "index": "wizard-ability-score-improvement-2",
                "name": "Ability Score Improvement",
                "url": "/api/features/wizard-ability-score-improvement-2"
            }
        ],
        "spellcasting": {
            "cantrips_known": 4,
            "spell_slots_level_1": 4,
            "spell_slots_level_2": 3,
            "spell_slots_level_3": 3,
            "spell_slots_level_4": 2,
            "spell_slots_level_5": 0,
            "spell_slots_level_6": 0,
            "spell_slots_level_7": 0,
            "spell_slots_level_8": 0,
            "spell_slots_level_9": 0
        },
        "class_specific": {
            "arcane_recovery_levels": 4
        },
        "index": "wizard-8",
        "class": {
            "index": "wizard",
            "name": "Wizard",
            "url": "/api/classes/wizard"
        },
        "url": "/api/classes/wizard/levels/8"
    },
    {
        "level": 9,
        "ability_score_bonuses": 2,
        "prof_bonus": 4,
        "features": [],
        "spellcasting": {
            "cantrips_known": 4,
            "spell_slots_level_1": 4,
            "spell_slots_level_2": 3,
            "spell_slots_level_3": 3,
            "spell_slots_level_4": 3,
            "spell_slots_level_5": 1,
            "spell_slots_level_6": 0,
            "spell_slots_level_7": 0,
            "spell_slots_level_8": 0,
            "spell_slots_level_9": 0
        },
        "class_specific": {
            "arcane_recovery_levels": 5
        },
        "index": "wizard-9",
        "class": {
            "index": "wizard",
            "name": "Wizard",
            "url": "/api/classes/wizard"
        },
        "url": "/api/classes/wizard/levels/9"
    },
    {
        "level": 10,
        "ability_score_bonuses": 2,
        "prof_bonus": 4,
        "features": [],
        "spellcasting": {
            "cantrips_known": 5,
            "spell_slots_level_1": 4,
            "spell_slots_level_2": 3,
            "spell_slots_level_3": 3,
            "spell_slots_level_4": 3,
            "spell_slots_level_5": 2,
            "spell_slots_level_6": 0,
            "spell_slots_level_7": 0,
            "spell_slots_level_8": 0,
            "spell_slots_level_9": 0
        },
        "class_specific": {
            "arcane_recovery_levels": 5
        },
        "index": "wizard-10",
        "class": {
            "index": "wizard",
            "name": "Wizard",
            "url": "/api/classes/wizard"
        },
        "url": "/api/classes/wizard/levels/10"
    },
    {
        "level": 11,
        "ability_score_bonuses": 2,
        "prof_bonus": 4,
        "features": [],
        "spellcasting": {
            "cantrips_known": 5,
            "spell_slots_level_1": 4,
            "spell_slots_level_2": 3,
            "spell_slots_level_3": 3,
            "spell_slots_level_4": 3,
            "spell_slots_level_5": 2,
            "spell_slots_level_6": 1,
            "spell_slots_level_7": 0,
            "spell_slots_level_8": 0,
            "spell_slots_level_9": 0
        },
        "class_specific": {
            "arcane_recovery_levels": 6
        },
        "index": "wizard-11",
        "class": {
            "index": "wizard",
            "name": "Wizard",
            "url": "/api/classes/wizard"
        },
        "url": "/api/classes/wizard/levels/11"
    },
    {
        "level": 12,
        "ability_score_bonuses": 3,
        "prof_bonus": 4,
        "features": [
            {
                "index": "wizard-ability-score-improvement-3",
                "name": "Ability Score Improvement",
                "url": "/api/features/wizard-ability-score-improvement-3"
            }
        ],
        "spellcasting": {
            "cantrips_known": 5,
            "spell_slots_level_1": 4,
            "spell_slots_level_2": 3,
            "spell_slots_level_3": 3,
            "spell_slots_level_4": 3,
            "spell_slots_level_5": 2,
            "spell_slots_level_6": 1,
            "spell_slots_level_7": 0,
            "spell_slots_level_8": 0,
            "spell_slots_level_9": 0
        },
        "class_specific": {
            "arcane_recovery_levels": 6
        },
        "index": "wizard-12",
        "class": {
            "index": "wizard",
            "name": "Wizard",
            "url": "/api/classes/wizard"
        },
        "url": "/api/classes/wizard/levels/12"
    },
    {
        "level": 13,
        "ability_score_bonuses": 3,
        "prof_bonus": 5,
        "features": [],
        "spellcasting": {
            "cantrips_known": 5,
            "spell_slots_level_1": 4,
            "spell_slots_level_2": 3,
            "spell_slots_level_3": 3,
            "spell_slots_level_4": 3,
            "spell_slots_level_5": 2,
            "spell_slots_level_6": 1,
            "spell_slots_level_7": 1,
            "spell_slots_level_8": 0,
            "spell_slots_level_9": 0
        },
        "class_specific": {
            "arcane_recovery_levels": 7
        },
        "index": "wizard-13",
        "class": {
            "index": "wizard",
            "name": "Wizard",
            "url": "/api/classes/wizard"
        },
        "url": "/api/classes/wizard/levels/13"
    },
    {
        "level": 14,
        "ability_score_bonuses": 3,
        "prof_bonus": 5,
        "features": [],
        "spellcasting": {
            "cantrips_known": 5,
            "spell_slots_level_1": 4,
            "spell_slots_level_2": 3,
            "spell_slots_level_3": 3,
            "spell_slots_level_4": 3,
            "spell_slots_level_5": 2,
            "spell_slots_level_6": 1,
            "spell_slots_level_7": 1,
            "spell_slots_level_8": 0,
            "spell_slots_level_9": 0
        },
        "class_specific": {
            "arcane_recovery_levels": 7
        },
        "index": "wizard-14",
        "class": {
            "index": "wizard",
            "name": "Wizard",
            "url": "/api/classes/wizard"
        },
        "url": "/api/classes/wizard/levels/14"
    },
    {
        "level": 15,
        "ability_score_bonuses": 3,
        "prof_bonus": 5,
        "features": [],
        "spellcasting": {
            "cantrips_known": 5,
            "spell_slots_level_1": 4,
            "spell_slots_level_2": 3,
            "spell_slots_level_3": 3,
            "spell_slots_level_4": 3,
            "spell_slots_level_5": 2,
            "spell_slots_level_6": 1,
            "spell_slots_level_7": 1,
            "spell_slots_level_8": 1,
            "spell_slots_level_9": 0
        },
        "class_specific": {
            "arcane_recovery_levels": 8
        },
        "index": "wizard-15",
        "class": {
            "index": "wizard",
            "name": "Wizard",
            "url": "/api/classes/wizard"
        },
        "url": "/api/classes/wizard/levels/15"
    },
    {
        "level": 16,
        "ability_score_bonuses": 4,
        "prof_bonus": 5,
        "features": [
            {
                "index": "wizard-ability-score-improvement-4",
                "name": "Ability Score Improvement",
                "url": "/api/features/wizard-ability-score-improvement-4"
            }
        ],
        "spellcasting": {
            "cantrips_known": 5,
            "spell_slots_level_1": 4,
            "spell_slots_level_2": 3,
            "spell_slots_level_3": 3,
            "spell_slots_level_4": 3,
            "spell_slots_level_5": 2,
            "spell_slots_level_6": 1,
            "spell_slots_level_7": 1,
            "spell_slots_level_8": 1,
            "spell_slots_level_9": 0
        },
        "class_specific": {
            "arcane_recovery_levels": 8
        },
        "index": "wizard-16",
        "class": {
            "index": "wizard",
            "name": "Wizard",
            "url": "/api/classes/wizard"
        },
        "url": "/api/classes/wizard/levels/16"
    },
    {
        "level": 17,
        "ability_score_bonuses": 4,
        "prof_bonus": 6,
        "features": [],
        "spellcasting": {
            "cantrips_known": 5,
            "spell_slots_level_1": 4,
            "spell_slots_level_2": 3,
            "spell_slots_level_3": 3,
            "spell_slots_level_4": 3,
            "spell_slots_level_5": 2,
            "spell_slots_level_6": 1,
            "spell_slots_level_7": 1,
            "spell_slots_level_8": 1,
            "spell_slots_level_9": 1
        },
        "class_specific": {
            "arcane_recovery_levels": 9
        },
        "index": "wizard-17",
        "class": {
            "index": "wizard",
            "name": "Wizard",
            "url": "/api/classes/wizard"
        },
        "url": "/api/classes/wizard/levels/17"
    },
    {
        "level": 18,
        "ability_score_bonuses": 4,
        "prof_bonus": 6,
        "features": [
            {
                "index": "spell-mastery",
                "name": "Spell Mastery",
                "url": "/api/features/spell-mastery"
            }
        ],
        "spellcasting": {
            "cantrips_known": 5,
            "spell_slots_level_1": 4,
            "spell_slots_level_2": 3,
            "spell_slots_level_3": 3,
            "spell_slots_level_4": 3,
            "spell_slots_level_5": 3,
            "spell_slots_level_6": 1,
            "spell_slots_level_7": 1,
            "spell_slots_level_8": 1,
            "spell_slots_level_9": 1
        },
        "class_specific": {
            "arcane_recovery_levels": 9
        },
        "index": "wizard-18",
        "class": {
            "index": "wizard",
            "name": "Wizard",
            "url": "/api/classes/wizard"
        },
        "url": "/api/classes/wizard/levels/18"
    },
    {
        "level": 19,
        "ability_score_bonuses": 5,
        "prof_bonus": 6,
        "features": [
            {
                "index": "wizard-ability-score-improvement-5",
                "name": "Ability Score Improvement",
                "url": "/api/features/wizard-ability-score-improvement-5"
            }
        ],
        "spellcasting": {
            "cantrips_known": 5,
            "spell_slots_level_1": 4,
            "spell_slots_level_2": 3,
            "spell_slots_level_3": 3,
            "spell_slots_level_4": 3,
            "spell_slots_level_5": 3,
            "spell_slots_level_6": 2,
            "spell_slots_level_7": 1,
            "spell_slots_level_8": 1,
            "spell_slots_level_9": 1
        },
        "class_specific": {
            "arcane_recovery_levels": 10
        },
        "index": "wizard-19",
        "class": {
            "index": "wizard",
            "name": "Wizard",
            "url": "/api/classes/wizard"
        },
        "url": "/api/classes/wizard/levels/19"
    },
    {
        "level": 20,
        "ability_score_bonuses": 5,
        "prof_bonus": 6,
        "features": [
            {
                "index": "signature-spell",
                "name": "Signature Spell",
                "url": "/api/features/signature-spell"
            }
        ],
        "spellcasting": {
            "cantrips_known": 5,
            "spell_slots_level_1": 4,
            "spell_slots_level_2": 3,
            "spell_slots_level_3": 3,
            "spell_slots_level_4": 3,
            "spell_slots_level_5": 3,
            "spell_slots_level_6": 2,
            "spell_slots_level_7": 2,
            "spell_slots_level_8": 1,
            "spell_slots_level_9": 1
        },
        "class_specific": {
            "arcane_recovery_levels": 10
        },
        "index": "wizard-20",
        "class": {
            "index": "wizard",
            "name": "Wizard",
            "url": "/api/classes/wizard"
        },
        "url": "/api/classes/wizard/levels/20"
    }
]`

console.dir(JSON.parse(wizardLevelsJson), { depth: null })

wizardLevelsArr = [
    {
        level: 1,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        features: ['Spellcasting: Wizard', 'Arcane Recovery'],
        cantrips_known: 3,
        spell_slots: [Infinite, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    {
        level: 2,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        features: ['Arcane Tradition'],
        cantrips_known: 3,
        spell_slots: [Infinite, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    {
        level: 3,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        features: [],
        spell_slots: [Infinite, 4, 2, 0, 0, 0, 0, 0, 0, 0],
        class_specific: { arcane_recovery_levels: 2 },
    },
    {
        level: 4,
        ability_score_bonuses: 1,
        prof_bonus: 2,
        features: ['Ability Score Improvement'],
        cantrips_known: 4,
        spell_slots: ['Infinite', 4, 3, 0, 0, 0, 0, 0, 0, 0],
        class_specific: { arcane_recovery_levels: 2 }
    },
    {
        level: 5,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        features: [],
        cantrips_known: 4,
        spell_slots: ['Infinite', 4, 3, 2, 0, 0, 0, 0, 0, 0],
        class_specific: { arcane_recovery_levels: 3 }
    },
    {
        level: 6,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        features: [],
        cantrips_known: 4,
        spell_slots: ['Infinite', 4, 3, 3, 0, 0, 0, 0, 0, 0],
        class_specific: { arcane_recovery_levels: 3 }
    },
    {
        level: 7,
        ability_score_bonuses: 1,
        prof_bonus: 3,
        features: [],
        cantrips_known: 4,
        spell_slots: ['Infinite', 4, 3, 3, 1, 0, 0, 0, 0, 0],
        class_specific: { arcane_recovery_levels: 4 }
    },
    {
        level: 8,
        ability_score_bonuses: 2,
        prof_bonus: 3,
        features: [],
        cantrips_known: 4,
        spell_slots: ['Infinite', 4, 3, 3, 2, 0, 0, 0, 0, 0],
        class_specific: { arcane_recovery_levels: 4 }
    },
    {
        level: 9,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        features: [],
        cantrips_known: 4,
        spell_slots: ['Infinite', 4, 3, 3, 3, 1, 0, 0, 0, 0],
        class_specific: { arcane_recovery_levels: 5 }
    },
    {
        level: 10,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        features: [],
        cantrips_known: 5,
        spell_slots: ['Infinite', 4, 3, 3, 3, 2, 0, 0, 0, 0],
        class_specific: { arcane_recovery_levels: 5 }
    },
    {
        level: 11,
        ability_score_bonuses: 2,
        prof_bonus: 4,
        features: [],
        cantrips_known: 5,
        spell_slots: ['Infinite', 4, 3, 3, 3, 2, 1, 0, 0, 0],
        class_specific: { arcane_recovery_levels: 6 }
    },
    {
        level: 12,
        ability_score_bonuses: 3,
        prof_bonus: 4,
        features: [],
        cantrips_known: 5,
        spell_slots: ['Infinite', 4, 3, 3, 3, 2, 1, 0, 0, 0],
        class_specific: { arcane_recovery_levels: 6 }
    },
    {
        level: 13,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        features: [],
        cantrips_known: 5,
        spell_slots: ['Infinite', 4, 3, 3, 3, 2, 1, 1, 0, 0],
        class_specific: { arcane_recovery_levels: 7 }
    },
    {
        level: 14,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        features: [],
        cantrips_known: 5,
        spell_slots: ['Infinite', 4, 3, 3, 3, 2, 1, 1, 0, 0],
        class_specific: { arcane_recovery_levels: 7 }
    },
    {
        level: 15,
        ability_score_bonuses: 3,
        prof_bonus: 5,
        features: [],
        cantrips_known: 5,
        spell_slots: ['Infinite', 4, 3, 3, 3, 2, 1, 1, 1, 0],
        class_specific: { arcane_recovery_levels: 8 }
    },
    {
        level: 16,
        ability_score_bonuses: 4,
        prof_bonus: 5,
        features: ['Ability Score Improvement'],
        cantrips_known: 5,
        spell_slots: ['Infinite', 4, 3, 3, 3, 2, 1, 1, 1, 0],
        class_specific: { arcane_recovery_levels: 8 }
    },
    {
        level: 17,
        ability_score_bonuses: 4,
        prof_bonus: 6,
        features: [],
        cantrips_known: 5,
        spell_slots: ['Infinite', 4, 3, 3, 3, 2, 1, 1, 1, 1],
        class_specific: { arcane_recovery_levels: 9 }
    },
    {
        level: 18,
        ability_score_bonuses: 4,
        prof_bonus: 6,
        features: ['Spell Mastery'],
        cantrips_known: 5,
        spell_slots: ['Infinite', 4, 3, 3, 3, 3, 1, 1, 1, 1],
        class_specific: { arcane_recovery_levels: 9 }
    },
    {
        level: 19,
        ability_score_bonuses: 5,
        prof_bonus: 6,
        features: ['Ability Score Improvement'],
        cantrips_known: 5,
        spell_slots: ['Infinite', 4, 3, 3, 3, 3, 2, 1, 1, 1],
        class_specific: { arcane_recovery_levels: 10 }
    },
    {
        level: 20,
        ability_score_bonuses: 5,
        prof_bonus: 6,
        features: ['Signature Spell'],
        cantrips_known: 5,
        spell_slots: ['Infinite', 4, 3, 3, 3, 3, 2, 2, 1, 1],
        class_specific: { arcane_recovery_levels: 10 }
    }
]