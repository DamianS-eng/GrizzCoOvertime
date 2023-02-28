module.exports = {
	name: 'coinflip',
	description: 'Flip a coin.',
	detailed: 'For when you need to decide something.',
	admin: false,
	execute(message, args, globals) {
		let result = 'Tails!';
		if (Math.floor(Math.random() * 2) == 0) result = 'Heads!';
		return message.channel.send(result);
	},
};
