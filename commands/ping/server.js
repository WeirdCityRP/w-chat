RegisterCommand( 'ping', src => {
    const playerPing = GetPlayerPing(src);
    exports['w-base'].addMessage( src, ['PING', playerPing] );
}, false );