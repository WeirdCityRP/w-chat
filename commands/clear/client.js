const addSuggestion = exports['w-base'].addSuggestion;

RegisterCommand( 'cls', () => emit('chat:clear'), false );
addSuggestion( 'cls', 'Clears the chat screen.' );

RegisterCommand( 'clsall', () => emitNet('w-chat:clearAll'), false );
addSuggestion( 'clsall', 'Clears the chat screen for all players.' );