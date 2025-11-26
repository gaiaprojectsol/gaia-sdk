import { TRAIT_MAP } from "../../config/traitMap.js";

export function parseGenean(nft) {
    const meta = nft.metadata;
    const atts = meta.attributes || [];
    const stats = {};

    for (const key in TRAIT_MAP) {
        const raw = atts.find(a => a.trait_type === key);
        const baseValue = raw ? Number(raw.value) : 0;
        const scale = TRAIT_MAP[key].scale;
        stats[key] = baseValue * scale;
    }

    return {
        mint: nft.mint,
        name: meta.name,
        traits: stats,
        metadata: meta
    };
}
