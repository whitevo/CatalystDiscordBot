const { SlashCommandBuilder } = require('@discordjs/builders');

const { emojis } = require('../resources/emojis');
const { messages } = require('../resources/messages');

const commandName = 'role';
const commandDescription = 'Creates the role reaction message on the role reaction channel with the reaction emojis.';

const verifiedEmoji = emojis.VERIFIED;
const communityAdvisorEmoji = emojis.COMMUNITYADVISOR;
const proposerEmoji = emojis.PROPOSER;
const cohortMemberEmoji = emojis.COHORTMEMBER;
const publicVoterEmoji = emojis.PUBLICVOTER;
const devForHireEmoji = emojis.DEVFORHIRE;
const designerForHireEmoji = emojis.DESIGNERFORHIRE;
const proposalMentorEmoji = emojis.PROPOSALMENTOR;
const challengeTeamEmoji = emojis.CHALLENGETEAM;

module.exports = {
    data: new SlashCommandBuilder()
        .setName(commandName)
        .setDescription(commandDescription),
    async execute(interaction) {
        try {
            interaction.reply(messages.REACTIONROLES)
            const message = await interaction.fetchReply();
            message.react(verifiedEmoji);
            message.react(communityAdvisorEmoji);
            message.react(proposerEmoji);
            message.react(cohortMemberEmoji);
            message.react(publicVoterEmoji);
            message.react(devForHireEmoji);
            message.react(designerForHireEmoji);
            message.react(proposalMentorEmoji);
            message.react(challengeTeamEmoji);
        } catch (error) {
            console.error('Something went wrong when sending the message:', error);
        }
    },
};
