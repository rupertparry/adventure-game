import { Room } from "./room.js";

// const rows = new Array(3);
// const cols = [];
// rows.forEach(row => cols.push(rows));

// export const rooms = cols;

export const rooms = [
  [
    new Room({
      description:
        "You are standing in a dimly lit forest. Light filters through the canopy. It smells musty."
    }),
    new Room({
      description:
        "You are in the forest. On the ground is an empty well. Ahead of you there is a marsh."
    })
  ]
];
