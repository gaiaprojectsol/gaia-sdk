export function log(...args) {
    console.log("[GaiaSDK]", ...args);
}

export function warn(...args) {
    console.warn("[GaiaSDK WARNING]", ...args);
}

export function error(...args) {
    console.error("[GaiaSDK ERROR]", ...args);
}
