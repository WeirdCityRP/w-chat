/**
 * Clear chat screen for all connected players.
 */
onNet('w-chat:clearAll', () => emitNet('chat:clear', -1));