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
		$('#TamagatchiContainerDiv h1').text(`Tamagatchi is ${this.timer} minutes old`)
	},

	//the increase time function will impact all of the tamagatchi's qualities 
	increaseTime: function () {
		this.timerHandle = setInterval(()=> {
			this.updateTimerDisplay()
			this.increaseSleepiness()
			this.increaseHunger()
			this.increaseBoredom()
			this.timer +=1

			if (this.pet.sleepiness >= 10 || this.pet.hunger >= 10 || this.pet.boredom >= 10){
				console.log("You lose!");
				$('#TamagatchiContainerDiv h1').remove()

				clearInterval(this.timerHandle)
			}
		}, 60000)
	},
	increaseSleepiness: function() {
		this.pet.sleepiness +=3
		console.log("Tama Sleepiness: "+ this.pet.sleepiness);
	},
	increaseHunger: function() {

		this.pet.hunger +=2
		console.log("Tama hunger: "+ this.pet.hunger);
	},
	increaseBoredom: function(){
		this.pet.boredom +=1
		console.log("Tama boredom: "+ this.pet.boredom)
	},
	endGame:function () {
		if (this.pet.sleepiness === 10) {
			clearInterval(this.increaseTime)
		}
	},
	feedTama: function () {
		if(10 > this.pet.health > 0){
			this.pet.hunger -=1
		}
	},
	playWithTama: function() {
		if (10 > this.pet.boredom > 0){
		this.pet.boredom -= 1
		}
	},
	turnOffTheLights: function() {
		if (10 > this.petsleepiness > 0 ) {
			this.pet.sleepiness-=1
		}
	}
}

// Event Listeners

$('button').on('click', () => {
	const userNameValue = $('#input-name').val()
	//grab the input value
	game.createNewTama(userNameValue)
	//take the input value and apply it to our Tama
	game.increaseTime()
	game.endGame()

})