const Block = require("./Block");

const first = new Block("00000000", "First !");
const second = new Block(first.id, "Second :)");
const constructif = new Block(second.id, "Vous commencez à voir le principe ?");

console.log([first, second, constructif]);
