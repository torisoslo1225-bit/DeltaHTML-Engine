// First playable test room

export const TestRoom = {
  name: "TestRoom",
  width: 20,
  height: 15,

  objects: [
    {
      type: "door",
      x: 10,
      y: 2,
      target: "Room2"
    },
    {
      type: "npc",
      x: 5,
      y: 5,
      text: "Hello! This is a test NPC."
    }
  ]
};
