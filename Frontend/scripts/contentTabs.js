function createGameSection() {
    const gameSectionContainer = document.createElement('section'); // creates a <section>
    gameSectionContainer.classList.add('game-section'); // adds a css class
  
    const gameTabsList = document.createElement('ul'); // creates a <ul>
    gameTabsList.classList.add('game-tabs'); // adds a css class
  
    const tabsData = [
      { label: 'Characters', href: '#characterDetails' },
      { label: 'Places', href: '#locationDetails' },
      { label: 'Quests', href: '#questDetails' },
      { label: 'Rules', href: '#rules' }
    ];
  
    const listItems = tabsData.map(tabData => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.setAttribute('href', tabData.href);
      link.textContent = tabData.label;
      listItem.appendChild(link);
      return listItem;
    });
  
    const gameSectionContainerWrapper = document.getElementById('game-section-container');
  
    listItems.forEach(listItem => {
      gameTabsList.appendChild(listItem);
    });
  
    gameSectionContainer.appendChild(gameTabsList);
    gameSectionContainerWrapper.appendChild(gameSectionContainer);
  }
  
  // Call the function to create the game section
  createGameSection();
  