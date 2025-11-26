import { USE_MOCK_CHAIN } from "../../config/env.js";
import { mockPayment } from "./mockPayments.js";
import { splitPayment } from "./splitPayment.js";

export async function sendPayment(opts) {
    return USE_MOCK_CHAIN ? mockPayment(opts) : splitPayment(opts);
}
