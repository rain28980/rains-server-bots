const Discord = require('discord.js');
const config = require('./config.json');
const bclotto = require('./bclotto.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
//general******************************************************
if (message.content === '+roll') {
	message.channel.send(bclotto.soup());
}
if (message.content === '+roll limit') {
	message.channel.send(bclotto.soup(1,-1));
}
if (message.content === '+roll reinforce') {
	message.channel.send(bclotto.soup(2,-1));
}
if (message.content === '+roll 11') {
	for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup());
}}
if (message.content === '+roll limit 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(1,-1));
}}
if (message.content === '+roll reinforce 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(2,-1));
}}	
//nekoluga*********************************************************
if (message.content === '+roll nekoluga') {
	message.channel.send(bclotto.soup(0,0));
}
if (message.content === '+roll limit nekoluga') {
	message.channel.send(bclotto.soup(1,0));
}
if (message.content === '+roll reinforce nekoluga') {
	message.channel.send(bclotto.soup(2,0));
}
if (message.content === '+roll nekoluga 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(0,0));
}}
if (message.content === '+roll limit nekoluga 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(1,0));
}}
if (message.content === '+roll reinforce nekoluga 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(2,0));
}}
//dynamites**********************************************
if (message.content === '+roll dynamites') {
	message.channel.send(bclotto.soup(0,1));
}
if (message.content === '+roll limit dynamites') {
	message.channel.send(bclotto.soup(1,1));
}
if (message.content === '+roll reinforce dynamites') {
	message.channel.send(bclotto.soup(2,1));
}
if (message.content === '+roll dynamites 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(0,1));
}}
if (message.content === '+roll limit dynamites 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(1,1));
}}
if (message.content === '+roll reinforce dynamites 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(2,1));
}}
//wargods*************************************************
if (message.content === '+roll wargods') {
	message.channel.send(bclotto.soup(0,2));
}
if (message.content === '+roll limit wargods') {
	message.channel.send(bclotto.soup(1,2));
}
if (message.content === '+roll reinforce wargods') {
	message.channel.send(bclotto.soup(2,2));
}
if (message.content === '+roll wargods 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(0,2));
}}
if (message.content === '+roll limit wargods 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(1,2));
}}
if (message.content === '+roll reinforce wargods 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(2,2));	
}}	
//galaxy***************************************************
if (message.content === '+roll galaxy') {
	message.channel.send(bclotto.soup(0,3));
}
if (message.content === '+roll limit galaxy') {
	message.channel.send(bclotto.soup(1,3));
}
if (message.content === '+roll reinforce galaxy') {
	message.channel.send(bclotto.soup(2,3));
}
if (message.content === '+roll galaxy 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(0,3));
}}
if (message.content === '+roll limit galaxy 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(1,3));
}}
if (message.content === '+roll reinforce galaxy 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(2,3));	
}}	
//emperors**********************************************
if (message.content === '+roll emperors') {
	message.channel.send(bclotto.soup(0,4));
}
if (message.content === '+roll limit emperors') {
	message.channel.send(bclotto.soup(1,4));
}
if (message.content === '+roll reinforce emperors') {
	message.channel.send(bclotto.soup(2,4));
}
if (message.content === '+roll emperors 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(0,4));
}}
if (message.content === '+roll limit emperors 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(1,4));
}}
if (message.content === '+roll reinforce emperors 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(2,4));	
}}	
//souls******************************************************	
if (message.content === '+roll souls') {
	message.channel.send(bclotto.soup(0,5));
}
if (message.content === '+roll limit souls') {
	message.channel.send(bclotto.soup(1,5));
}
if (message.content === '+roll reinforce souls') {
	message.channel.send(bclotto.soup(2,5));
}
if (message.content === '+roll souls 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(0,5));
}}
if (message.content === '+roll limit souls 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(1,5));
}}
if (message.content === '+roll reinforce souls 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(2,5));	
}}	
//heroes***********************************************
if (message.content === '+roll heroes') {
	message.channel.send(bclotto.soup(0,6));
}
if (message.content === '+roll limit heroes') {
	message.channel.send(bclotto.soup(1,6));
}
if (message.content === '+roll reinforce heroes') {
	message.channel.send(bclotto.soup(2,6));
}
if (message.content === '+roll heroes 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(0,6));
}}
if (message.content === '+roll limit heroes 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(1,6));
}}
if (message.content === '+roll reinforce heroes 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(2,6));	
}}	
//almighties********************************************
if (message.content === '+roll almighties') {
	message.channel.send(bclotto.soup(0,7));
}
if (message.content === '+roll limit almighties') {
	message.channel.send(bclotto.soup(1,7));
}
if (message.content === '+roll reinforce almighties') {
	message.channel.send(bclotto.soup(2,7));
}
if (message.content === '+roll almighties 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(0,7));
}}
if (message.content === '+roll limit almighties 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(1,7));
}}
if (message.content === '+roll reinforce almighties 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(2,7));	
}}	
//legion*************************************************
if (message.content === '+roll legion') {
	message.channel.send(bclotto.soup(0,8));
}
if (message.content === '+roll limit legion') {
	message.channel.send(bclotto.soup(1,8));
}
if (message.content === '+roll reinforce legion') {
	message.channel.send(bclotto.soup(2,8));
}
if (message.content === '+roll legion 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(0,8));
}}
if (message.content === '+roll limit legion 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(1,8));
}}
if (message.content === '+roll reinforce legion 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(2,8));	
}}	
//pixies************************************************
if (message.content === '+roll pixies') {
	message.channel.send(bclotto.soup(0,9));
}
if (message.content === '+roll limit pixies') {
	message.channel.send(bclotto.soup(1,9));
}
if (message.content === '+roll reinforce pixies') {
	message.channel.send(bclotto.soup(2,9));
}
if (message.content === '+roll pixies 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(0,9));
}}
if (message.content === '+roll limit pixies 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(1,9));
}}
if (message.content === '+roll reinforce pixies 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(2,9));	
}}		
//uberfest********************************************
if (message.content === '+roll uberfest') {
	message.channel.send(bclotto.soup(0,10));
}
if (message.content === '+roll limit uberfest') {
	message.channel.send(bclotto.soup(1,10));
}
if (message.content === '+roll reinforce uberfest') {
	message.channel.send(bclotto.soup(2,10));
}
if (message.content === '+roll uberfest 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(0,10));
}}
if (message.content === '+roll limit uberfest 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(1,10));
}}
if (message.content === '+roll reinforce uberfest 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(2,10));	
}}			
//epicfest********************************************
if (message.content === '+roll epicfest') {
	message.channel.send(bclotto.soup(0,11));
}
if (message.content === '+roll limit epicfest') {
	message.channel.send(bclotto.soup(1,11));
}
if (message.content === '+roll reinforce epicfest') {
	message.channel.send(bclotto.soup(2,11));
}
if (message.content === '+roll epicfest 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(0,11));
}}
if (message.content === '+roll limit epicfest 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(1,11));
}}
if (message.content === '+roll reinforce epicfest 11') {
for(var i = 0; i < 11; i++){
	message.channel.send(bclotto.soup(2,11));	
}}		
//other**************************************************	
        if (message.content === '+help') {
        message.channel.send('hello yes i am working')
} 
});

client.login(config.token);
