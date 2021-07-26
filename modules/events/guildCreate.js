//IMPORT FILE DATA
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const {
    databasing,
    escapeRegex,
    reset_DB
} = require("../../modules/functions")
//import the Discord Library
const Discord = require("discord.js");
// HERE THE EVENT STARTS
module.exports = (client, guild) => {
    if (!guild) return;
    //find a channel instance, inside of the guild, where the bot has the Permission, to send a message
    let channel = guild.channels.cache.find(
        channel =>
        channel.type === "text" &&
        channel.permissionsFor(guild.me).has("SEND_MESSAGES")
    );
    //if no channel found return
    if(!channel) return;
    //reset the database
    reset_DB(guild.id, client)
    //if he has the permissions to send embeds, send an embed
    if (channel.permissionsFor(guild.me).has("EMBED_LINKS")) {
        channel.send(new Discord.MessageEmbed()
            .setColor(ee.color)
            .setTitle("These are all **NECCESSARY** cmds!")
            .setURL("https://dsc.gg/codingzone")
            .setDescription(`PREFIX: \`${prefix}\` | [Click here](https://dsc.gg/codingzone)`)
            .addField(`\`${config.prefix}help\``, "Shows all available Commands!", true)
            .addField(`\`${config.prefix}add\``, "> *[Invite](https://discord.com/api/oauth2/authorize?client_id=869337640477032499&permissions=8&scope=bot) the Bot!*", true)
            .addField(`\`${config.prefix}support\``, "> *Sends you a Link for the [SUPPORT SERVER](https://dsc.gg/codingzone) of the Bot!*", true)
            .addField(`\`${config.prefix}ping\``, "> *Shows the ping of the Bot!*", true)
            .addField(`\`${config.prefix}uptime\``, "> *Shows the uptime of the Bot!*", true)
            .addField(`\`${config.prefix}info\``, "> *Shows Information & Stats of the Bot*", true)
            .addField("\u200b", "\u200b")
            .addField(`\`${config.prefix}setup\` --> Follow steps`, "> *Set ups the Application System, maximum of 24 Questions!*")
            .addField(`\`${config.prefix}editsetup <"acceptmsg"/"denymsg"/"question"/"role"/"addquestion"> [PARAMETER]\``, "> *Allows you to adjust the accept / deny msgs, or edit each Question. \n If needed you can add another Question / change the ROLE!*")
            .addField("\u200b", "\u200b")
            .addField(`\`${config.prefix}setup2\``, "> *Same as Setup 1 just your second Application System!*")
            .addField(`\`${config.prefix}editsetup2\``, "> *Same as Setup 1(0) just your second Application System!*")
            .addField(`\`${config.prefix}setup3\``, "> *Same as Setup 1(0) just your third Application System!*")
            .addField(`\`${config.prefix}editsetup3\``, "> *Same as Setup 1(0) just your third Application System!*")
            .addField("\u200b", "\u200b")
            .addField("To get a list of all commands", `\`${config.prefix}help\``)

            .setFooter(ee.footertext, ee.footericon)
        )
        channel.send(new Discord.MessageEmbed()
            .setColor(ee.color)
            .setTitle("Thanks for Inviting me!")
            .setDescription(`To get started, simply type: \`${config.prefix}setup\` and follow the steps!`)
            .setFooter(ee.footertext, ee.footericon)
        )
    } else {
        channel.send(
            `**Thanks for Inviting me!**\n\nTo get started, simply type: \`${config.prefix}setup\` and follow the steps\nType: \`${config.prefix}help\` to see a List of all Commands!`
        )
    }

}
