const headlessWallet = require("headless-byteball");

const device = require("byteballcore/device");
const eventBus = require("byteballcore/event_bus");
const db = require("byteballcore/db");

const messages = require("./messages.json");

eventBus.once("headless_wallet_ready", () => {
	console.log('READY');
});

eventBus.on("paired", (from) => {
	reply(from, messages.welcome, "Welcome");
});

eventBus.on("text", (from, text) => {
	reply(from, text);
});

function reply(recipient, message, subject = "") {
	device.sendMessageToDevice(recipient, "text", message);
}