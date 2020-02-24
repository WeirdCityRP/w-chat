const Chat = {
    addSuggestion: exports['w-base'].addSuggestion
};

RegisterCommand( 'cls', () => emit('chat:clear'), false );
Chat.addSuggestion( 'cls', 'Clears the chat screen.' );

RegisterCommand( 'clsall', () => emitNet('w-chat:clearAll'), false );
Chat.addSuggestion( 'clsall', 'Clears the chat screen for all players.' );