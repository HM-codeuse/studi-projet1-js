// // const personnages;
// class Personnage {
//   constructor(nom){
//     this.nom = nom
//   }
// }

// const petitRoro = new Personnage('roro')
// const perso1 = new Personnage('John')

// console.log(petitRoro)

// personnages.push(petitRoro)
// personnages.push(perso1)

let player;
player = {
  name:'Jean',
  health:50,
  place:'le donjon de la mort'
}

showPlayerName = (name) => console.log(name);
showPlayerPlace = (name, place) => console.log(`${name} est dans ${place}`);
getPlayerHealth =(name, health) => console.log(`${name} a ${health} vie`);

getMessage = (msg) => console.log("Partons à l'aventure!!!")

showPlayerInfos = (name, place, health) => {
  console.log('');
  showPlayerName(name);
  console.log('----------------------------');
  showPlayerPlace(name, place)
  getPlayerHealth(name, health)
  console.log('----------------------------')
  console.log('');
}

console.log(getMessage());
showPlayerInfos(player.name, player.place, player.health)



//FONCTION POUR RECUPERER LE NOM DU JOUEUR 
// showPlayerName = (name) => console.log(name)

// FONCTION POUR RECUPERER NOM ET VIES 
// showPlayerAndHealth = (name, health) => console.log(`${name} a ${health} vie`)
// showPlayerAndHealth(player.name, player.health)

// exemple de fonction moderne 
// greetings = (person) => console.log(`coucou ${person}`)

// const showMessage;
// showMessage = function(message){
//   console.log('Le message est:' + message)
// }

// showMessage('le soleil brille')
// showMessage('coucou')
// showMessage('je suis une fougère')