import { writable } from "svelte/store";
export const found = writable(false);

export const scanning = writable(false); // Triggered when camera is ready to scan
export const loading = writable(false); // Loading animation
export const trigger = writable(0); //trigger DOM refresh when incremented
export const menuState = writable("Home");

// MONSTER LIST
export let monsterCollection = writable({});
