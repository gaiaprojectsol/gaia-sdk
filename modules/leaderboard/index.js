import { USE_MOCK_CHAIN } from "../../config/env.js";
import { mockFetchLeaderboard, mockSubmitScore } from "./mockLeaderboard.js";
import { submitScoreReal } from "./submitScore.js";
import { fetchLeaderboardReal } from "./fetchLeaderboard.js";

export async function submitScore(data) {
    return USE_MOCK_CHAIN ? mockSubmitScore(data) : submitScoreReal(data);
}

export async function getLeaderboard(gameId) {
    return USE_MOCK_CHAIN ? mockFetchLeaderboard(gameId) : fetchLeaderboardReal(gameId);
}
