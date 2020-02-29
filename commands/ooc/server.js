onNet('ooc:sendMessage', (playerName, msg) => {
	emitNet('chat:addMessage', -1, { args: [`OOC ${playerName}`, msg] });
});