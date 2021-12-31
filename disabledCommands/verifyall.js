const { SlashCommandBuilder } = require('@discordjs/builders');
const { giveUserRole } = require('../functions/basicFunctions');
const { roles } = require('../resources/roles');

const commandName = 'verifyall';
const commandDescription = 'Gives every user on the server the verify role.';
const commandContent = 'Started giving verify role to users, it will take me about 50 users per minute.';

module.exports = {
    data: new SlashCommandBuilder()
        .setName(commandName)
        .setDescription(commandDescription),
    async execute(interaction) {
        const guild = interaction.guild;

        try {
            const members = await guild.members.fetch();
            members.forEach((member) => {
                giveUserRole(roles.VERIFIEDROLE, guild, member);
            });
            interaction.reply(commandContent);
        } catch (error) {
            console.error('Something went wrong:', error);
        }
    },
};
