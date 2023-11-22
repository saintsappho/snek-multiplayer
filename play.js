#!/usr/bin/env node

process.stdout.write('\x07');

const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')
const { RemoteInterface } = require('./src/RemoteInterface')
const game = new Game(new UserInterface(), new RemoteInterface())

const net = require("net");

// establishes a connection with the game server
const connect = require('./client')

console.log("Connecting ...");
connect();



// Begin game
game.start()
