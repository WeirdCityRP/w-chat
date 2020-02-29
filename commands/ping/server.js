RegisterCommand('ping', src => {
	const playerPing = GetPlayerPing(src);
	emitNet('chat:addMessage', src, { args: ['PING', playerPing] });
}, false);