/*
This file will contain functions to handle quest-related requests.
Some example placeholders are as follows:
*/


// example of how code could look.
const questMilestone = (quest, party) => {
    quest.milestone++
    party.giveExp(quest.milestoneExpRewards)
    if (quest.milestone === quest.maxMilestone) return // quest is finished
    quest.readFlavortext(quest.milestone)
}