If you plan to host an instance of eggbot,

- Create a bot application at https://discordapp.com/developers/applications/ . Keep the Client ID and secret token from the application to add to [config](config.json) file.
- Implement bot to website, or launch bot using [Node](https://nodejs.org/en/).
- Using the copied CLIENTID https://discordapp.com/oauth2/authorize?client_id=CLIENTID&scope=bot and send the bot to the requested Discord server.

Many of the admin commands refer to specific channels within the Grizzco Overtime server, and those ID values will need to be changed accordingly as well.

ex: `channel => channel.name === 'tournament-announcements'`

### Sauce

(https://www.howtogeek.com/364225/how-to-make-your-own-discord-bot/)
