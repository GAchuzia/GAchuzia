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

export function getRandomGreeting() {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
}

export { greetings };