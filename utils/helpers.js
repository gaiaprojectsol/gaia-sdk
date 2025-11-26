export const delay = ms => new Promise(res => setTimeout(res, ms));
export const clamp = (n, min, max) => Math.min(Math.max(n, min), max);
