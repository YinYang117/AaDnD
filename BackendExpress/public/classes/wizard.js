let wizard = {
    index: 'wizard',
    name: 'Wizard',
    hit_die: 6,
    proficiency_choices: [
      {
        desc: 'Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion',
        choose: 2,
        type: 'proficiencies',
        from: [Object]
      }
    ],
    proficiencies: [
      {
        index: 'daggers',
        name: 'Daggers',
        url: '/api/proficiencies/daggers'
      },
      { index: 'darts', name: 'Darts', url: '/api/proficiencies/darts' },
      {
        index: 'slings',
        name: 'Slings',
        url: '/api/proficiencies/slings'
      },
      {
        index: 'quarterstaffs',
        name: 'Quarterstaffs',
        url: '/api/proficiencies/quarterstaffs'
      },
      {
        index: 'crossbows-light',
        name: 'Crossbows, light',
        url: '/api/proficiencies/crossbows-light'
      },
      {
        index: 'saving-throw-int',
        name: 'Saving Throw: INT',
        url: '/api/proficiencies/saving-throw-int'
      },
      {
        index: 'saving-throw-wis',
        name: 'Saving Throw: WIS',
        url: '/api/proficiencies/saving-throw-wis'
      }
    ],
    saving_throws: [
      { index: 'int', name: 'INT', url: '/api/ability-scores/int' },
      { index: 'wis', name: 'WIS', url: '/api/ability-scores/wis' }
    ],
    starting_equipment: [ { equipment: [Object], quantity: 1 } ],
    starting_equipment_options: [
      {
        desc: '(a) a quarterstaff or (b) a dagger',
        choose: 1,
        type: 'equipment',
        from: [Object]
      },
      {
        desc: '(a) a component pouch or (b) an arcane focus',
        choose: 1,
        type: 'equipment',
        from: [Object]
      },
      {
        desc: '(a) a scholar’s pack or (b) an explorer’s pack',
        choose: 1,
        type: 'equipment',
        from: [Object]
      }
    ],
    class_levels: '/api/classes/wizard/levels',
    multi_classing: { prerequisites: [ [Object] ], proficiencies: [] },
    subclasses: [
      {
        index: 'evocation',
        name: 'Evocation',
        url: '/api/subclasses/evocation'
      }
    ],
    spellcasting: {
      level: 1,
      spellcasting_ability: { index: 'int', name: 'INT', url: '/api/ability-scores/int' },
      info: [ [Object], [Object], [Object], [Object], [Object], [Object] ]
    },
    spells: '/api/classes/wizard/spells',
    url: '/api/classes/wizard'
  }