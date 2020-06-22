require('dotenv').config();
const discord = require('discord.js');
const client = new discord.Client();
const ytdl = require('ytdl-core');
client.login(process.env.BOT_TOKEN);
const PREFIX = process.env.PREFIX;

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in`);
});

const isValidCommand = (message, cmdName) => message.content.toLowerCase().startsWith(PREFIX + cmdName);

client.on('message', (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (isValidCommand(message, "stunhim")) {
    if (message.member.voice.channel) {
      message.member.voice.channel.join().then(connection => {
        const stream = ytdl('https://www.youtube.com/watch?v=A1Gm1Nld4eY', {
           filter: 'audioonly'
        });
        const dispatcher = connection.play(stream, {volume: 0.2});

        dispatcher.on('finish' , () => message.member.voice.channel.leave());
      }) 
    }
    else {
      message.reply("you gotta be in a voice channel first dude");
    }
  }
  else if (isValidCommand(message, "exits")) {
    if (message.member.voice.channel) {
      message.member.voice.channel.join().then(connection => {
        const stream = ytdl('https://www.youtube.com/watch?v=ajRTEg8q1H8', { 
          filter: 'audioonly'
        });
        const dispatcher = connection.play(stream, {
          volume: 0.2,
          seek: 2
        });

        dispatcher.on('finish' , () => message.member.voice.channel.leave());
      })
    }
    else {
      message.reply("you gotta be in a voice channel first dude");
    }
  }
  else if (isValidCommand(message, "momolol")) {
    if (message.member.voice.channel) {
      message.member.voice.channel.join().then(connection => {
        const stream = ytdl('https://www.youtube.com/watch?v=I-QlFK0XPeg', {
          filter: 'audioonly',
        });
        const dispatcher = connection.play(stream, {volume: 0.2});

        setTimeout(function() {
          return message.member.voice.channel.leave();
        }, 9500);
      })
    }
  }
  else if (isValidCommand(message, "literally")) {
    if (message.member.voice.channel) {
      message.member.voice.channel.join().then(connection => {
        const stream = ytdl('https://youtu.be/ShW9jES6aQo', {
          filter: 'audioonly',
        });
        const dispatcher = connection.play(stream, {
          volume: 0.2,
          seek: 23
        });

        setTimeout(function() {
          return message.member.voice.channel.leave();
        }, 7200);
      })
    }
  }
  else if (isValidCommand(message, "imcarry")) {
    if (message.member.voice.channel) {
      message.member.voice.channel.join().then(connection => {
        const stream = ytdl('https://www.youtube.com/watch?v=Rx0skkpwn8k', {
          filter: 'audioonly',
        });
        const dispatcher = connection.play(stream, {
          volume: 0.2,
          seek: 13
        });

        setTimeout(function() {
          return message.member.voice.channel.leave();
        }, 8000);
      })
    }
  }
  else if (isValidCommand(message, "jennie")) {
    if (message.member.voice.channel) {
      message.member.voice.channel.join().then(connection => {
        const stream = ytdl('https://www.youtube.com/watch?v=iLyo6SdkFNo', {
          filter: 'audioonly',
        });
        const dispatcher = connection.play(stream, {
          volume: 0.2,
          seek: 6
        });

        dispatcher.on('finish' , () => message.member.voice.channel.leave());
      })
    }
  }
  else if (isValidCommand(message, "hello")) {
    message.reply("Hello");
  }
  else if (isValidCommand(message, "addrole")) {
    let args = message.content.toLowerCase().substring(9);
    let roleSet = new Set (args.split(", "));
    let { cache } = message.guild.roles;

    roleSet.forEach(roleName => {
      let role = cache.find(role => role.name.toLowerCase() === roleName);
      if (role) {
        if (message.member.roles.cache.has(role.id)) {
          message.reply("you already have this role idiot");
        }
        else if (role.permissions.has('ADMINISTRATOR')) {
          message.reply("no no its an admin");
        }
        else {
          message.member.roles.add(role)
            .then(member => message.channel.send("Added"))
            .catch(err => {
              console.log(err);
              message.channel.send("something went wrong");
            })
        }
      }
      else {
        message.channel.send("Role not found!");
      }
    });
  }
  else if (isValidCommand(message, "delrole")) {
    let args = message.content.toLowerCase().substring(9);
    let roleSet = new Set (args.split(", "));
    let { cache } = message.guild.roles;

    roleSet.forEach(roleName => {
      let role = cache.find(role => role.name.toLowerCase() === roleName);
      if (role) {
        if (message.member.roles.cache.has(role.id)) {
          message.member.roles.remove(role)
            .then(member => message.channel.send("Removed"))
            .catch(err => {
              console.log(err);
              message.channel.send("something went wrong");
            })
        }
        else {
          message.reply("you don't have this role moron");
        }
      }
      else {
        message.channel.send("Role not found!");
      }
    });
  }
})