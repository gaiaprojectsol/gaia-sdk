export function mockSubmitScore(data) {
    console.warn("⚠ MOCK MODE: Score submission skipped.");
    return { status: "mock-ok", submitted: data };
}

export function mockFetchLeaderboard(gameId) {
    return {
        gameId,
        leaderboard: [
            { wallet: "Mock111", score: 123 },
            { wallet: "Mock222", score: 98 },
        ]
    };
}
