import * as alt from 'alt-server';
import * as chat from 'chat';

console.log('==> Your Resource Has Loaded! Horray!');

// Called on Server-side
alt.on('playerConnect', (player) => {
    // Logs to the console.
    alt.log(`==> ${player.name} has connected.`);

    // Displays message to all players.
    chat.broadcast(`==> ${player.name} has joined.`);

    // Sets the player's model.
    player.model = 'mp_m_freemode_01';

    // Spawns the player at coordinates x, y, z, with a delay of 1000 Milliseconds.
    player.spawn(813, -279, 66, 1000);

    // Emit to the player passed, the event name, the argument to send.
    alt.emitClient(player, 'Server:Log', 'hello', 'world');
});

console.log(alt.hash('weapon_ball'))