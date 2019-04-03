// $('<h1>Hello</h1>').appendTo('body')

// Classes

//We'll need a Tamagatchi class 

class TamagatchiClass {
	constructor(){
		this.name = ""
		this.sleepiness = 0;
		this.hunger = 0;
		this.boredom = 0;
	}
}


//Initial state

$('#tamagatchiContainerDiv').hide()


// Objects 
const game = {
	pet: null, 
	timer:1,
	timerHandle: null,
	gameStarted: false,
	createNewTama: function (name) {
		if (this.gameStarted === false) { 
			this.pet = new TamagatchiClass
			this.pet.name = name
			//create headings that update dynamically
			$(`<h2 id="tamaName">Your tama's name: ${this.pet.name}</h2>`).appendTo('#tamagatchiContainerDiv')
			$(`<h2 id="tamaSleep">Tama sleepiness: ${this.pet.sleepiness}</h1>`).appendTo('#tamagatchiContainerDiv')
			$(`<h2 id="tamaHunger">Tama hunger: ${this.pet.hunger}</h1>`).appendTo('#tamagatchiContainerDiv')
			$(`<h2 id="tamaBored">Tama boredom: ${this.pet.boredom}</h1>`).appendTo('#tamagatchiContainerDiv')
			$('<p class="explainerTama"> Your tama is just a seedling. Slowly making its way out of the earth and into the light of the world</p>').appendTo('#tamagatchiContainerDiv')
			$(`<img id="tamaOne" src="images/Tamapics/1.jpg">`).prependTo('#tamagatchiContainerDiv')
		}
		this.gameStarted = true;
	},
	updateTimerDisplay(){
		// console.log(this.timer);
		$('#tamagatchiContainerDiv h1').html(`Tamagatchi is <span>${this.timer}</span> tama-years old`)
	},
	//the increase time function will impact all of the tamagatchi's qualities 
	increaseTime: function () {
		if(this.gameStarted === true){
				this.timerHandle = setInterval(()=> {
				this.updateTimerDisplay()
				this.increaseSleepiness()
				this.increaseHunger()
				this.increaseBoredom()
				this.tamaEvolution()
				this.animateTama()
				this.timer +=1

				if (this.pet.sleepiness >= 10 || this.pet.hunger >= 10 || this.pet.boredom >= 10){
					// console.log("You lose!");
					$('#tamagatchiContainerDiv h1').text("Your tama is dead! Refresh the page to start again")
					clearInterval(this.timerHandle)
					$('#tamaHunger').remove()
					$('#tamaBored').remove()
					$('#tamaSleep').remove()
					}
				}, 3000)
		}
	},
	showTamaDiv(){
		if (this.gameStarted === true){
			$('#tamagatchiContainerDiv').show()
		} 
	},
	increaseSleepiness: function() {
		this.pet.sleepiness +=1
		$('#tamaSleep').text(`Tama sleepiness: ${this.pet.sleepiness}`)
		// console.log("Tama Sleepiness: "+ this.pet.sleepiness);
	},
	increaseHunger: function() {
		this.pet.hunger +=1
		$('#tamaHunger').text(`Tama hunger: ${this.pet.hunger}`)
		// console.log("Tama hunger: "+ this.pet.hunger);
	},
	increaseBoredom: function(){
		this.pet.boredom +=1
		$('#tamaBored').text(`Tama boredom: ${this.pet.boredom}`)
		// console.log("Tama boredom: "+ this.pet.boredom)
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
	},
	tamaEvolution: function() {
		if (this.timer > 5 && this.timer <10) {
			// console.log("SHOULD EVOLVE");
			$('#tamaOne').attr('src', "images/Tamapics/2.jpg")
			$('.explainerTama').text("Your tama has evolved! Into adolesence! Smoking cigarettes and drinking budweiser with Steve from two doors down, you're at a loss for what to do. Hang in there! You can nourish this Tama to adulthood!")
		} else if (game.timer > 10 && game.timer < 15) {
			// console.log("SHOULD EVOLVE")
			$('img').attr('src', "images/Tamapics/3.jpg")
			$('.explainerTama').text("Hooray! You've made it out of adolesence and into adulthood. Your tama now owns a car and has a dog.")
		} else if (this.timer > 15 && this.timer <20){
			// console.log("SHOULD EVOLVE")
			$('img').attr('src',"images/Tamapics/4.jpg")
			$('.explainerTama').text("Alas, all good things come to an end. No matter what you do! Your tama will cease to exist pretty soon. But that doesn't mean you shouldn't keep nourishing it!")
		} else if (this.timer > 20){
			// console.log("SHOULD EVOLVE")
			$('img').attr('src',"images/Tamapics/Mariah_Carey_-_Caution.png")
			$('.explainerTama').text("Your tama is now in its final, eternal stage. Keep playing if you want to keep nourishing it. Otherwise, you've beat the game. ")
		}
	},
	animateTama: function() {
		if (this.pet.sleepiness >= 10){
			$('img').animate({
				opacity:0,
			}, 2000, function(){
			});
		}
		if (this.pet.hunger >= 10){
			$('img').animate({
				opacity:0,
			}, 2000, function(){
			});
		}
		if (this.pet.boredom >= 10){
			$('img').animate({
				opacity:0,
			}, 2000, function(){
			});
		}
	},
	dragTama: function(){
		$('img').draggable();
	},
	shakeTama: function(){
		$('img').click(function (){
			$('img').effect("shake")
		})
	}
}

// Event Listeners

$('#submitUserName').on('click', () => {
	const userNameValue = $('#input-name').val()
	//grab the input value
	game.createNewTama(userNameValue)
	//take the input value and apply it to our Tama
	game.showTamaDiv()
	game.increaseTime()
	game.dragTama()
	game.shakeTama()
})


$('#makeTamaSleep').on('click', () => {
	// console.log("You're clicking make tama sleep");
	game.turnOffTheLights();
})

$('#feedTama').on('click',() => {
	// console.log("Youre clicking feedtama");
	game.feedTama()
})

$('#playWithTama').on('click',() => {
	// console.log("youre clicking playwith tama");
	game.playWithTama()
})


