import { writable } from "svelte/store";

export const nightMode = createNightMode();

function createNightMode() {
  const enabled = localStorage.getItem("dark-mode") || "false";
  const { subscribe, set } = writable(enabled === "true");
  return {
    subscribe,
    toggle: () => {
      const on = localStorage.getItem("dark-mode") || "false";
      if (on == "true") {
        localStorage.setItem("dark-mode", "false");
        set(false);
      } else {
        localStorage.setItem("dark-mode", "true");
        set(true);
      }
    },
  };
}