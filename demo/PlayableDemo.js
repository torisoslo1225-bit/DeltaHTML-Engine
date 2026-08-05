// DeltaHTML Engine - Playable Demo Controller
// Connects player, collision, camera, doors, and debug systems.

class PlayableDemo {
    constructor(world) {
        this.world = world;
        this.debug = false;
        this.camera = { x: 0, y: 0 };
    }

    update(player) {
        if (!player) return;

        this.camera.x = player.x - 160;
        this.camera.y = player.y - 120;
    }

    toggleDebug() {
        this.debug = !this.debug;
    }
}

export default PlayableDemo;
