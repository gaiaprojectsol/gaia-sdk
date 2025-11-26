export function mockPayment(opts) {
    console.warn("⚠ MOCK MODE: Payment skipped.", opts);
    return { status: "mock-payment-ok", details: opts };
}
