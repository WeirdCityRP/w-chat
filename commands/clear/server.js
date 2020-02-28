RegisterCommand( 'clsall', src => {
	if (IsPlayerAceAllowed( src, 'admin' )) {
		emitNet( 'chat:clear', -1 );
	} else {
		emitNet( 'chat:addMessage', src, {args: ['SYSTEM', 'This command is only available for admins.']} );
	};
}, false );