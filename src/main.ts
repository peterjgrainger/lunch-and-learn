// Import express
import * as express from 'express';
// Import random emoji generator
import * as randomEmoji from 'random-emoji'

// Initialise express
const app = express();

// On / route send emoji
app.get('/', (request, response) => response.send(randomEmoji.random({count:10}).map(value => value.character)))

// listen on port 3000
app.listen(3000);
