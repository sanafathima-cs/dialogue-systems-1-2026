import { assign, createActor, setup } from "xstate";

export function setupController(element: HTMLButtonElement) {
  element.addEventListener("click", () => {
    actor.send({ type: element.id });
  });
}

const machine = setup({
  types: {},
  actions: {},
  guards: {},
}).createMachine({
  context: {
    doorA2B2: false,
  },
  id: "Game",
  initial: "MainMenu",
  states: {
    MainMenu: {
      on: { START: "Maze.hist" },
    },
    Maze: {
      initial: "A1",
      on: { EXIT: "MainMenu" },
      states: {
        hist: { type: "history", history: "deep" },
        A2: {
          initial: "Open",
          on: {
            D: "A1",
            R: [
              {
                target: "B2",
                guard: ({ context }) => context.doorA2B2,
              },
              { actions: () => console.log("THE DOOR IS LOCKED") },
            ],
          },
          states: {
            Closed: {
              on: { D: { target: "Closed" } },
            },
            Open: {
              after: {
                5000: {
                  target: "Closed",
                  actions: () => console.log("YOU ARE LOCKED"),
                },
              },
            },
          },
        },
        B2: {
          on: { L: "A2", R: "Win" },
        },
        B1: {
          on: {
            L: "A1",
            R: {
              actions: assign({ doorA2B2: true }),
            },
          },
        },
        A1: {
          on: { U: "A2", R: "B1" },
        },
        Win: {
          entry: () => console.log("YOU WON"),
        },
      },
    },
  },
});

const actor = createActor(machine).start();
console.group("Initial state");
console.log("State value:", actor.getSnapshot().value);
console.log("State context:", actor.getSnapshot().context);

actor.subscribe((state) => {
  console.group("State update");
  console.log("State value:", state.value);
  console.log("State context:", state.context);
  console.groupEnd();
});
