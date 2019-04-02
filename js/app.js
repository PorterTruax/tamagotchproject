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
	timer:1,
	timerHandle: null,
	gameStarted: false,
	createNewTama: function (name) {
		if (this.gameStarted ===false) { 
			this.pet = new tamagatchiClass
			this.pet.name = name
			//create headings that update dynamically
			$(`<h2 id="tamaName">${this.pet.name}</h2>`).appendTo('#tamagatchiContainerDiv')
			$(`<h2 id="tamaSleep">Tama sleepiness: ${this.pet.sleepiness}</h1>`).appendTo('#tamagatchiContainerDiv')
			$(`<h2 id="tamaHunger">Tama hunger: ${this.pet.hunger}</h1>`).appendTo('#tamagatchiContainerDiv')
			$(`<h2 id="tamaBored">Tama boredom: ${this.pet.boredom}</h1>`).appendTo('#tamagatchiContainerDiv')

		}
		this.gameStarted = true;
	},
	updateTimerDisplay(){
		console.log(this.timer);
		$('#tamagatchiContainerDiv h1').text(`Tamagatchi is ${this.timer} minutes old`)
	},
	//the increase time function will impact all of the tamagatchi's qualities 
	increaseTime: function () {
		if(this.gameStarted === true){
				this.timerHandle = setInterval(()=> {
				this.updateTimerDisplay()
				this.increaseSleepiness()
				this.increaseHunger()
				this.increaseBoredom()
				this.timer +=1

				if (this.pet.sleepiness >= 10 || this.pet.hunger >= 10 || this.pet.boredom >= 10){
					console.log("You lose!");
					$('#tamagatchiContainerDiv h1').text("Your tama is dead! Refresh the page to start again")
					clearInterval(this.timerHandle)
					}
				}, 5000)
		}
	},
	increaseSleepiness: function() {
		this.pet.sleepiness +=1
		$('#tamaSleep').text(`Tama sleepiness: ${this.pet.sleepiness}`)
		console.log("Tama Sleepiness: "+ this.pet.sleepiness);
	},
	increaseHunger: function() {
		this.pet.hunger +=2
		$('#tamaHunger').text(`Tama hunger: ${this.pet.hunger}`)
		console.log("Tama hunger: "+ this.pet.hunger);
	},
	increaseBoredom: function(){
		this.pet.boredom +=1
		$('#TamaBored').text(`Tama boreddom: ${this.pet.boredom}`)
		console.log("Tama boredom: "+ this.pet.boredom)
	},
	feedTama: function () {
		if(10 > this.pet.hunger && this.pet.hunger > 0){
			this.pet.hunger --
			$('#tamaHunger').text(`Tama hunger: ${this.pet.hunger}`)
		}
	},
	playWithTama: function() {
		if (10 > this.pet.boredom && this.pet.boredom > 0){
		this.pet.boredom --
		$('#tamaBored').text(`Tama boredom: ${this.pet.boredom}`)
		}
	},
	turnOffTheLights: function() {
		if (10 > this.pet.sleepiness && this.pet.sleepiness > 0 ) {
			this.pet.sleepiness --
			$('#tamaSleep').text(`Tama sleepiness: ${this.pet.sleepiness}`)
		}
	}
}

// Event Listeners

$('#submitUserName').on('click', () => {
	const userNameValue = $('#input-name').val()
	//grab the input value
	game.createNewTama(userNameValue)
	//take the input value and apply it to our Tama

	game.increaseTime()
})

$('#makeTamaSleep').on('click', () => {
	console.log("You're clicking make tama sleep");
	game.turnOffTheLights();
})

$('#feedTama').on('click',() => {
	console.log("Youre clicking feedtama");
	game.feedTama()
})

$('#playWithTama').on('click',() => {
	console.log("youre clicking playwith tama");
	game.playWithTama()
})


