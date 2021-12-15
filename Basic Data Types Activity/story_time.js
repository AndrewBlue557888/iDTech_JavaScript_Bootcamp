// TODO: Create 4-String variables to introduce develop your story.
// YOUR CODE GOES HERE
var Setting = "Saphiria"
var Name = "Joey"
var Class = "knight"
var Species = "Human"

// TODO: Create 3-Integer variables to set the time period of your story or discuss other number elements.
// YOUR CODE GOES HERE
var age = 16
var level = 8
var health = 40

// TODO: Create 1-Array variable to show a collection of items your character might have.
// YOUR CODE GOES HERE
var items = ["minor heal potion","major heal potion","minor mana potion","and major mana potion"]

// TODO: Create 1-Boolean variable to demonstrate a true or false scenario.
// YOUR CODE GOES HERE
var right_castle = false

// TODO: Print your story to the console.
// YOUR CODE GOES HERE

console.log("Hello! my name is " + Name + ", and welcome to " + Setting + "!")
console.log("since you can't see me but will be travelling with me, I guess I should introduce myself.")
console.log("I'm a(n) " + age + "-year-old " + Species + ", and a level " + level + " " + Class + ".")
console.log("I've been secretly commissioned by this territory's king to save the princess, you know the drill, apparently he can't send his army or a large group without alerting the one who has her captured.")
console.log("If it's just me, they'll think just think someone is trying to charge a castle alone, guess they aren't wrong.")
console.log("I'm at the castle (sorry you missed most of the jorney) and I've still got about " + health + "HP and " + items + ".")
console.log("WHOA! I wasn't told there was a dragon, although I guess it was either that or an evil wizard, I bet that's who put the dragon here.")
console.log("[the " + Species + " " + Class + " was noticed by the dragon, who was startled and defensively growled, " + Name + " saw no choice but to attack.]")
if (right_castle == false) {
    items = ["none"]
    health = 0
    console.log("[after a long battle, just as " + Name + " colapses, dreading what comes next, the dragon stops.]")
    console.log("[dragon:] why have you come to my home? what do you want that compels you to storm the eastern castle?")
    console.log("...Eastern?")
    console.log("[dragon:] ...yes, this is the eastern castle.")
    console.log("...I was looking for the princess... are you sure this isn't-")
    console.log("[dragon:] no, that is " + right_castle + ", im afriad")
    console.log("[dragon:] it seems your princess is in another castle.")
    console.log("[dragon:] I truly feel bad about this whole misunderstanding, but you should stay awhile, you look to be in no condition to leave after that battle, I think we both need time to rest before we do anything too strenuous. [The End]")
}
if (right_castle == true) {
    items = ["none"]
    health = 4
    console.log("[after a long battle, " + Name + " subdues the dragon, and quickly finds the princess]")
    console.log("[princess:] you got past the dragon?! that's amazing! NOW LET'S GET OUT OF HERE!")
    console.log("yeah, before it wakes up!")
    console.log("[they rush out of the building, and make their way back to her own castle, and they all live happily ever after. (until the sequel.)]")
}