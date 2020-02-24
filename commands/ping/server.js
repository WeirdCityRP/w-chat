RegisterCommand( 'ping', src => {
    const playerPing = GetPlayerPing(src);
    exports['w-base'].globalMessage( src, ['PING', playerPing] );
}, false );