var rpc = require("discord-rpc")
var colors = require('colors');
var setTitle = require('console-title');
var figlet = require('figlet');
const chalkAnimation = require('chalk-animation');
const client = new rpc.Client({ transport: 'ipc' })

config = require('./config.js');

client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : (config.details),

assets : {
large_image : (config.image_name),
large_text : (config.image_text)
},

buttons : [{label: (config.button_name), url: (config.button_link)}, {label:(config.button_name2), url: (config.button_link2)}]
}
})
})
client.login({ clientId : (config.id) }).catch(console.error).then((nickname)=>{
  console.clear()
  figlet('Discord-rpc', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
  setTitle('Discord RPC');  
  console.log( "RichPresence connectée à " + nickname.user.username +"#" + nickname.user.discriminator) 
  console.log('RichPresence activée'.green);
  console.log('si vous fermez cette fenêtre la riche présence sera désactivée !'.red);
  chalkAnimation.rainbow(data)
  
});

});





