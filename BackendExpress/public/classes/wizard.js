let wizard = {
    
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
        
        name: 'Daggers',
        url: '/api/proficiencies/daggers'
      },
      {  name: 'Darts', url: '/api/proficiencies/darts' },
      {
        
        name: 'Slings',
        url: '/api/proficiencies/slings'
      },
      {
        
        name: 'Quarterstaffs',
        url: '/api/proficiencies/quarterstaffs'
      },
      {
        
        name: 'Crossbows, light',
        url: '/api/proficiencies/crossbows-light'
      },
      {
        
        name: 'Saving Throw: INT',
        url: '/api/proficiencies/saving-throw-int'
      },
      {
        
        name: 'Saving Throw: WIS',
        url: '/api/proficiencies/saving-throw-wis'
      }
    ],
    saving_throws: [
      {  name: 'INT', url: '/api/ability-scores/int' },
      {  name: 'WIS', url: '/api/ability-scores/wis' }
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
        
        name: 'Evocation',
        url: '/api/subclasses/evocation'
      }
    ],
    spellcasting: {
      level: 1,
      spellcasting_ability: {  name: 'INT', url: '/api/ability-scores/int' },
      info: [ [Object], [Object], [Object], [Object], [Object], [Object] ]
    },
    spells: '/api/classes/wizard/spells',
    url: '/api/classes/wizard'
  }