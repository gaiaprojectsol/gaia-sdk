import { LEADERBOARD_ENDPOINTS } from "../../config/constants.js";

export async function submitScoreReal({ wallet, score, gameId }) {
    const res = await fetch(LEADERBOARD_ENDPOINTS.submit, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wallet, score, gameId })
    });

    return await res.json();
}
