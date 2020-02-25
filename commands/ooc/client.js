const OOC = {
    isEnabled: true,
    addMessage: exports['w-base'].addMessage,
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
    if (!OOC.isEnabled) {
        OOC.addMessage( ['OOC is already off.'] );
        return;
    }

    OOC.isEnabled = false;
    OOC.addMessage( ['OOC turned off.'] );
}, false );
RegisterCommand( 'oocon', () => {
    if (OOC.isEnabled) {
        OOC.addMessage( ['OOC is already on.'] );
        return;
    }

    OOC.isEnabled = true;
    OOC.addMessage( ['OOC turned on.'] );
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