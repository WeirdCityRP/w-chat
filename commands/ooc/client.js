const OOC = {
	isEnabled: true
};

RegisterCommand( 'ooc', (src, args) => {
	if (!OOC.isEnabled || args.length === 0) {
		return;
	}

	const playerName = GetPlayerName( PlayerId() );
	const msg = args.join(' ');

	emitNet('ooc:sendMessage', playerName, msg);
}, false );

RegisterCommand( 'oocoff', () => {
	if (OOC.isEnabled) {
		OOC.isEnabled = false;
		emit( 'chat:addMessage', {args: ['OOC turned off.']} );
	} else {
		emit( 'chat:addMessage', {args: ['OOC is already off.']} );
	}
}, false );

RegisterCommand( 'oocon', () => {
	if (!OOC.isEnabled) {
		OOC.isEnabled = true;
		emit( 'chat:addMessage', {args: ['OOC is turned on.']} );
	} else {
		emit( 'chat:addMessage', {args: ['OOC is already on.']} );
	}
}, false );

/**
 * Command Suggestions.
 */
setImmediate(() => {
	emit('chat:addSuggestions', [
		{ name: '/ooc', help: 'Send OOC message.', params: [{ name: 'Message', help: 'Example: /ooc Hi!' }] },
		{ name: '/oocoff', help: 'Turn off OOC.' },
		{ name: '/oocon', help: 'Turn on OOC.' },
	]);
});