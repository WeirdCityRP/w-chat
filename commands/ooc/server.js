onNet('ooc:sendMessage', (playerName, msg) => {
    exports['w-base'].addMessage( -1, [`OOC ${playerName}`, msg] );
});