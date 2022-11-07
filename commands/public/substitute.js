const { MessageEmbed, RichPresenceAssets } = require('discord.js');
const Substitute = require('../../helpers/Substitute.js');

module.exports = {
	name: 'sub',
	description: 'Register as a substitute player.',
	detailed: 'To toggle sub status, simply call !sub again.\n',
	admin: false,
	execute(message, args, globals) {
		const member = message.guild.members.cache.get(message.author.id);

		if (member.roles.cache.some(role => role.name === 'Active Participant')) { // If the user is a participant
			const text = '❌ You\'re already participating!';
			const messageEmbed = new MessageEmbed().setTitle(text);
			message.channel.send({ embeds: [messageEmbed] });
			message.react('❌');
			return;
		}

		if (member.roles.cache.some(role => role.name === 'Substitute')) { // If the user already has the role
			member.roles.remove(message.guild.roles.cache.find(role => role.name === 'Substitute'));
			const text = '❌ Player has retired.';
			const messageEmbed = new MessageEmbed().setTitle(text);
			message.channel.send({ embeds: [messageEmbed] });
			message.react('❌');

			removeSub(globals, message.author.id);
		}
		else {
			member.roles.add(message.guild.roles.cache.find(role => role.name === 'Substitute'));
			const text = ':white_check_mark: Player is ready to fill in!';
			const messageEmbed = new MessageEmbed().setTitle(text);
			message.channel.send({ embeds: [messageEmbed] });
			message.react('✅');

			globals.subQueue.push(new Substitute(message.author.id)); // Add user to global subQueue
		}

		return;
	},
};

function removeSub(globals, subID) {
	console.log(globals.subQueue);
	let index = -1;
	for (let i = 0; (i < globals.subQueue.length) && (index == -1); i++) { // Search for the index of the sub to be removed
		if (globals.subQueue[i].userID == subID) {
			index = i;
		}
	}
	if (index !== -1) {
		globals.subQueue.splice(index, 1);
	}
	console.log(globals.subQueue);
	return;
}