onNet('ooc', (playerName, msg) => {
    exports['w-base'].globalMessage( [`OOC ${playerName}`, msg] );
});