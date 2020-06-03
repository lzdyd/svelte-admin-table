import { writable } from 'svelte/store';

export const user = writable('USER');

export const UI = writable({
  isNavBarActive: false,
})
