const jokes = ["What’s the best thing about Switzerland? I don’t know, but the flag is a big plus.", "Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them", 'Why do we tell actors to “break a leg?” Because every play has a cast.', 'Helvetica and Times New Roman walk into a bar “Get out of here!” shouts the bartender. “We don’t serve your type.”', 'Yesterday I saw a guy spill all his Scrabble letters on the road. I asked him, “What’s the word on the street?”', 'How many times can you subtract 10 from 100? Once. The next time you would be subtracting 10 from 90.', 'Hear about the new restaurant called Karma? There’s no menu: You get what you deserve.', 'Did you hear about the actor who fell through the floorboards? He was just going through a stage.', 'Did you hear about the claustrophobic astronaut? He just needed a little space.', 'Why don’t scientists trust atoms? Because they make up everything.'];

const generateRandomNum = num => Math.floor(Math.random() * jokes.length);

const generateMessage = () => jokes[generateRandomNum()];

console.log(generateMessage());