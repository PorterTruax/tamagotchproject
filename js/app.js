// $('<h1>Hello</h1>').appendTo('body')

// Classes

//We'll need a Tamagatchi class 

class tamagatchiClass {
	constructor(){
		this.name = ""
		this.sleepiness = 0;
		this.hunger = 0;
		this.boredom = 0;
	}
}


// Objects 

const game = {
	pet: null, 
	timer:0,
	timerHandle: null,
	createNewTama: function (name) {
		this.pet = new tamagatchiClass
		this.pet.name = name
		$(`<h1 id="Tamaname">${this.pet.name}</h1>`).appendTo('body').css('background-color', "pink")
	},
	updateTimerDisplay(){
		console.log(this.timer);
		$(`<h1>Tamagatch is ${this.timer} minutes old</h1>`).appendTo('#TamagatchiContainerDiv')
	},
	increaseTime: function () {
		this.timerHandle = setInterval(()=> {
			this.updateTimerDisplay()
			this.timer +=1
		}, 1000)
	},
	increaseSleepiness: function() {
		this.pet.sleepiness +=1
		console.log(this.pet.sleepiness);
	},
	increaseHunger: function() {
		this.pet.hunger +=1
		console.log(this.pet.hunger);
	},
	increaseBoredom: function(){
		this.pet.boredom +=1
		console.log(this.pet.boredom)
	},
	feedTama: function () {

	},
	playWithTama: function() {

	},
	turnOffTheLights: function() {

	}

}

// Event Listeners

$('button').on('click', () => {
	const userNameValue = $('#input-name').val()
	//grab the input value
	game.createNewTama(userNameValue)
	//take the input value and apply it to our Tama
	game.increaseTime()

})