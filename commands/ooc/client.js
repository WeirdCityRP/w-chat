const chat = {
    OOC: true,
    addMessage: exports['w-base'].addMessage,
    addSuggestion: exports['w-base'].addSuggestion
};

RegisterCommand( 'ooc', (src, args) => {
    if (!chat.OOC) {
        return;
    }

    const playerName = GetPlayerName( PlayerId() );
    const msg = args.join(' ');
    emitNet('ooc', playerName, msg);
}, false );
chat.addSuggestion( '/ooc', 'Send OOC message.', [{ name: "Message", help: "Example: /ooc Hi" }] );

RegisterCommand( 'oocoff', () => {
    if (!chat.OOC) {
        chat.addMessage('OOC is already off.');
        return;
    }

    chat.OOC = false;
    chat.addMessage('OOC turned off.');
}, false );
chat.addSuggestion( '/oocoff', 'Turn off OOC.' );

RegisterCommand( 'oocon', () => {
    if (chat.OOC) {
        chat.addMessage('OOC is already on.');
        return;
    }

    chat.OOC = true;
    chat.addMessage('OOC turned on.');
}, false );
chat.addSuggestion( '/oocon', 'Turn on OOC.' );