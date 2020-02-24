onNet('ooc', (playerName, msg) => {
    exports['w-base'].globalMessage( -1, [`OOC ${playerName}`, msg] );
});