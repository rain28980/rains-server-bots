exports.soup = function soup(z2,z3){
	var rare = ["Onmyoji Cat","Psychocat","Mer-Cat","Rocker Cat","Tin Cat","Stilts Cat","Cat Gunslinger","Swordsman Cat","Archer Cat","Witch Cat","Shaman Cat","Fortune Teller Cat","Bishop Cat","Thief Cat","Pirate Cat","Viking Cat","Jurassic Cat","Salon Cat","Wheel Cat","Pogo Cat","Gardener Cat"];
	//super
	var supr = ["*Surfer Cat*","*Cat Toaster*","*Figure Skating Cats*","*Weightlifter Cat*","*Juliet Cat*","*Sushi Cat*","*Bath Cat*","*Apple Cat*","*Swimmer Cat*","*Nerd Cat*","*Kotatsu Cat*","*Hip Hop Cat*","*Delinquent Cat*","*Bodhisattva Cat*","*Vaulter Cat*"];
	var limited = ["*Gold Cat*","*Cat Base Mini*","*Neneko*","*Metal Cat*"];
	var reinforce = ["*Sniper the Recruit*","*Rich Cat III*","*Freshman Cat Jobs*"];
	var grandon = ["*Driller Cat*","*Piledriver Cat*","*Cutter Cat*","*Backhoe Cat*","*Miter Saw Cat*"];
	//uber groups
	var Nekoluga = ["__Nekoluga__","__Asiluga__","__Kubiluga__","__Tecoluga__","__Balaluga__","__Togeluga__","__Nobiluga__"];
	var Dynamites = ["__Ice Cat__","__Cat Machine__","__Lesser Demon Cat__","__Berserker Cat__","__Baby Cat__","__Nurse Cat__","__Cat Clan Heroes__"];
	var Wargods = ["__Sanada Yukimura__","__Maeda Keiji__","__Oda Nobunaga__","__Date Masamune__","__Takeda Shingen__","__Takeda Shingen__","__Imagawa Yoshimoto__"];
	var Galaxy = ["__Windy__","__Thundia__","__Kuu__","__kai__","__Coppermine__","__Kalisa__","__Twinstars__"];
	var Emperors = ["__Sodom__","__Megidora__","__Dragon Knight Vars__","__Kamukura__","__Raiden__","__Dioramos__","__Ganglion__"];
	var Souls = ["__Urashima Taro__","__The Grateful Crane__","__Momotaro__","__Kasa Jizo__","__Princess Kaguya__","__Kachi Kachi__","__Sarukani__"];
	var Heroes = ["__Akira__","__Mekako Saionji__","__Catman__","__White Rabbit__","__Warlock & Pierre__","__Hayabusa__","__Detective Vigler__"];
	var Almighties = ["__Thunder God Zeus__","__Anubis the Protector__","__Radiant Aphrodite__","__Glorious Amaterasu__","__Splendid Ganesha__","__Wrathful Poseidon__","__Empress Chronos__"];
	var Legion = ["__Mighty Kat-A-Pult__","__Mighty Drednot__","__Mighty Bomburr__","__Mighty Rekon Korps__","__Mighty Thermae D-Lux__"];
	var Pixies = ["__Bora__","__Mizli__","__Aer__","__Voli__"];
	var ufest = ["__Baby Gao__","__Miko Mitama__","_D’artanyan_"];
	var efest = ["__Shadow Gao__","__Dark Mitama__","__D'arktanyan__"];
	//legend
	var legend = ["**Legeluga**","**Wonder MOMOCO**","**Musashi Miyamoto**","**Headmistress Jeanne**","**High Lord Babel**","**Ushiwakamaru**","**Doktor Heaven**","**Gaia the Creator**","**Mighty Kristul Muu**","**Lumina**"];
//calculate random unit
	var b1 = Math.floor(Math.random()*rare.length);
	var c1 = rare[b1];

	switch(z2){
		case 0:
		b2 = Math.floor(Math.random()*supr.length);
		var c2 = supr[b2];
		break;

		case 1:
		var d2 = supr.concat(limited);
		b2 = Math.floor(Math.random()*d2.length);
		c2 = d2[b2];
		break;

		case 2:
		d2 = supr.concat(reinforce);
		b2 = Math.floor(Math.random()*d2.length);
		c2 = d2[b2];
		break;

		case 3:
		d2 = supr.concat(grandon);
		b2 = Math.floor(Math.random()*d2.length);
		c2 = d2[b2];
		break;

		default:
		var d2 = supr.concat(limited,reinforce,grandon);
		b2 = Math.floor(Math.random()*d2.length);
		c2 = d2[b2];
	}
	//uber and legend

		switch(z3){
		case 0:
		b3 = Math.floor(Math.random()*Nekoluga.length);
		var c3 = Nekoluga[b3];
		var c4 = legend[0];
		break;

		case 1:
		b3 = Math.floor(Math.random()*Dynamites.length);
	   	c3 = Dynamites[b3];
		c4 = legend[1];
		break;

		case 2:
		b3 = Math.floor(Math.random()*Wargods.length);
		c3 = Wargods[b3];
		c4 = legend[2];
		break;

		case 3:
		b3 = Math.floor(Math.random()*Galaxy.length);
		c3 = Galaxy[b3];
		c4 = legend[3];
		break;

		case 4:
		b3 = Math.floor(Math.random()*Emperors.length);
		c3 = Emperors[b3];
		c4 = legend[4];
		break;

		case 5:
		b3 = Math.floor(Math.random()*Souls.length);
		c3 = Souls[b3];
		c4 = legend[5];
		break;

		case 6:
		b3 = Math.floor(Math.random()*Heroes.length);
		c3 = Heroes[b3];
		c4 = legend[6];
		break;

		case 7:
		b3 = Math.floor(Math.random()*Almighties.length);
		c3 = Almighties[b3];
		c4 = legend[7];
		break;

		case 8:
		b3 = Math.floor(Math.random()*Legion.length);
		c3 = Legion[b3];
		c4 = legend[8];
		break;

		case 9:
		b3 = Math.floor(Math.random()*Pixies.length);
		c3 = Pixies[b3];
		c4 = legend[9];
		break;

		case 10:
		var ufest1 = Nekoluga.concat(Dynamites,Wargods,Galaxy,Emperors,Souls,Heroes,Almighties,Legion,Pixies,ufest);
		b3 = Math.floor(Math.random()*ufest1.length);
		c3 = ufest1[b3];
		break;

		case 11:
		var efest1 = Nekoluga.concat(Dynamites,Wargods,Galaxy,Emperors,Souls,Heroes,Almighties,Legion,Pixies,efest);
		b3 = Math.floor(Math.random()*efest1.length);
		c3 = efest1[b3];
		break;

		default:
		var allA3 = Nekoluga.concat(Dynamites,Wargods,Galaxy,Emperors,Souls,Heroes,Almighties,Legion,Pixies,ufest,efest);
		b3 = Math.floor(Math.random()*allA3.length);
		c3 = allA3[b3];

		var b4 = Math.floor(Math.random()*legend.length);
		c4 = legend[b4];
	}
	//which rarity you will get
var a6;
	var x;
	switch(z3){
	   case 10:
	        x = Math.floor(Math.random()*100);
	        if(x < 65){a6 = c1}else if(x < 91) {a6 = c2;}else{a6 = c3}
	        break;
	   case 11:
	        x = Math.floor(Math.random()*100);
	        if(x < 65){a6 = c1}else if(x < 91) {a6 = c2;}else{a6 = c3}
	        break;
	   default:
	       x = Math.floor(Math.random()*2000);
	        if(x < 747){a6 = c1}else if(x < 947){a6 = c2;}else if(x < 997){a6 = c3}else{a6 = c4}
	        break;
	}
return a6;
}
