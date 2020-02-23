const chat = {
    addSuggestion: exports['w-base'].addSuggestion
};

RegisterCommand( 'cls', () => emit('chat:clear'), false );
chat.addSuggestion( '/cls', 'Clears the chat screen.' );

RegisterCommand( 'clsall', () => emitNet('w-chat:clearAll'), false );
chat.addSuggestion( '/clsall', 'Clears the chat screen for all players.' );