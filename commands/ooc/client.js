const Chat = {
    OOC: true,
    localMessage: exports['w-base'].localMessage,
    addSuggestion: exports['w-base'].addSuggestion
};

RegisterCommand( 'ooc', (src, args) => {
    if (!Chat.OOC) {
        return;
    }

    const playerName = GetPlayerName( PlayerId() );
    const msg = args.join(' ');
    emitNet('ooc', playerName, msg);
}, false );
Chat.addSuggestion( '/ooc', 'Send OOC message.', [{ name: "Message", help: "Example: /ooc Hi" }] );

RegisterCommand( 'oocoff', () => {
    if (!Chat.OOC) {
        Chat.localMessage('OOC is already off.');
        return;
    }

    Chat.OOC = false;
    Chat.localMessage('OOC turned off.');
}, false );
Chat.addSuggestion( '/oocoff', 'Turn off OOC.' );

RegisterCommand( 'oocon', () => {
    if (Chat.OOC) {
        Chat.localMessage('OOC is already on.');
        return;
    }

    Chat.OOC = true;
    Chat.localMessage('OOC turned on.');
}, false );
Chat.addSuggestion( '/oocon', 'Turn on OOC.' );
