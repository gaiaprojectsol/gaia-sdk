import { LEADERBOARD_ENDPOINTS } from "../../config/constants.js";

export async function fetchLeaderboardReal(gameId) {
    const res = await fetch(`${LEADERBOARD_ENDPOINTS.fetch}?gameId=${gameId}`);
    return await res.json();
}
