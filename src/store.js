import { writable } from "svelte/store";
export const found = writable(false);

export const scanning = writable(false); // Triggered when camera is ready to scan
export const loading = writable(false); // Loading animation
export const qr_state = writable("ready");
export const trigger = writable(0); //trigger DOM refresh when incremented
export const menuState = writable("home");
export const triggerMenuState = writable(0);
export const sessionStorage = writable();
export const current_param = writable("");
export const foundStamp = writable();
export const updateStamps = writable(0);
export const foundStampCollection = writable([]);

// MONSTER LIST
export const stampCollection = writable({});

// STAMP CATEGORIES
export let stampsCategories = writable({
  1: {
    title: "Monster Collection",
    subtitle: "モンスターコレクション",
  },
  2: {
    title: "Super Rare Collection",
    subtitle: "スーパーレアコレクション",
  },
  3: {
    title: "Teacher Collections",
    subtitle: "先生コレクション",
  },
});
