# Dungeons & Dragons / Pathfinder Game

Welcome to the Dungeons & Dragons Game project! This is a web-based application built with React for our community to play and program a tabletop role-playing game. The goal of this project is to provide a platform where we can create characters, embark on exciting adventures, experience immersive storytelling, enhance our programming skills, and work with AI tools to become more proficient.

## Roadmap

Here's a roadmap outlining the planned features and enhancements for future releases:

- Step 1: Learn about atlas mongodb.
- Step 2: Setup a db with it on my local machine.
- Step 3: Successfully send data to the database and view it on the cloud.
- Step 3.5: Continue to practice formats of data exchanges.
- Step 4: Setup the backend to also use express.
- Step 5: Research React 18.
- Step 6: Setup a frontend that uses React v18. Create the folder structure needed.
- Step 7: Send some data through the frontend to the backend and store it in the database.
- Step 8: Create a detailed database.
- Step 9: Create frontend components for:
	- Splash
	- Nav bar
	- Sign up
	- Log in
	- Home
	- User’s Character Details Page


### Version 0.1

- Character Creation Prep:
  - We will use a flattened version of character information that we can pull from the dnd5e api.
  - Create (a) function(s) that will flatten and simplify the data from the api.
  - Many instances of the api data can be flattened and simplified in a similar manner as one another
    - I've manually created a Wizard class example as an example
  - Flatten Races
  - Flatten Backgrounds
- Character Creation:
  - Use the flattened data.
  - Implement a function that prompts players through the choices of selecting Race, Class, Background, Skill selection, Gear selection, and Spells / Class feature selections
  - Outputs a finished character in POJO format
 
- Dice Setup:
  - Build this modularly
  - Create dice rolling function that rolls a number between 1 and the max sides on a die
    - test that 1 can be rolled
    - test that the max can be rolled
    - 0 should never be rolled
    - higher then the max should never be rolled
  - When Rolling a 20 Sided die, it will be important to know if a 1 or 20 are ever rolled as they create additional benifits / hinderences in gameplay 
  - Create a function that allows a user to roll many dice at a time
    - takes in how many dice and of what type to roll
    - outputs total
      - Optionally also outputs each die roll
    - Allows for additional modifiers to be added to the die result
   
- Implement Combat Mechanics:
- Functionality needed:
  - Take in an attacker object
  - Take in the type of attack
  - Take in defender(s) object(s)
  - Key into the attacker's proficiency mod, ability mod, and whether they are rolling to hit, or defenders are rolling to save.
  - Roll dice to see if attack hits / defenders fail saves
    - Take advantage or disadvantage into account
    - determine if critical hit
  - Roll dice for damage, add ability mods.
  - Display the results: Crit?, Damage dealt, any characters / monsters that fall unconcious
  - Later: Add in functionality to pause for player input between steps of the process if a character has Reactions that can change the results.
    - Such as the Lucky feat

### Version 0.2

- Implement a chat system (live and recorded) for collaborative gameplay
  - Websockets implementation needed. Volunteers welcome!
- Implement character leveling and progression mechanics
- Implement player inventory management

### Version 0.3

- Add support for custom user-generated content
  - Consider utilizing AWS or exploring other options
- Implement a visual character sheet for tracking stats and abilities
  - Include space for character images, such as portraits, magical items, and familiars
- Implement quests and storylines for immersive adventures

### Version 0.4

- Implement maps
- Seed a variety of monsters and NPCs
- Implement game master tools

### Version 1.0

- Play the game!

### Version 1.1

- Integrate AI for content generation
  - Action descriptions for characters and NPCs
  - Magical item creation
  - Random encounters
  - Artwork to match
- Enhance the user interface and overall user experience

Please note that this roadmap is subject to change based on feedback and preferences.

## Contributing

We welcome contributions from the community to enhance and improve the Dungeons & Dragons / Pathfinder Game project. If you have ideas for new features, bug fixes, or other improvements, please submit a pull request. For major changes, please open an issue first to discuss the proposed changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Available Scripts

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Backend Port

Currently set to 5500
