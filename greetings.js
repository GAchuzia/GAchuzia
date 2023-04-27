const greetings = [
    "Hello",
    "Hey There",
    "What's Up?",
    "Welcome!",
    "Greetings",
    "Howdy!",
    "Yo!",
    "Pleasure to meet you",
    "Aloha!",
    "Salutations!",
    "Hi-diddly-ho, neighborino!",
    "Hi",
    "Sup",
]

function getRandomGreeting(){
    const randomIndex = Math.floor(Math.random() *greetings.length );
    return greetings[randomIndex];
}

module.exports = {
    getRandomGreeting,
};