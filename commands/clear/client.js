/**
 * Commands.
 */
RegisterCommand( 'cls', () => emit('chat:clear'), false );
RegisterCommand( 'clsall', () => emitNet('w-chat:clearAll'), false );

/**
 * Command Suggestions.
 */
setImmediate(() => {
    emit('chat:addSuggestions', [
        { name: '/cls', help: 'Clears the chat.' },
        { name: '/clsall', help: 'Clear the chat for all players.' }
    ]);
});