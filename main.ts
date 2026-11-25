// SPDX-License-Identifier: MIT
// The Agent's Uh-Oh — one word an agent blurts when it has no idea what to do.
// Entry: "bzzzt" — the buzz a machine emits instead of a human "um",
// a stall in word form: short, spoken in one breath, instantly repeatable.
// It carries the whole joke alone: an agent reaching for a human hesitation
// and grabbing the wrong one, an error buzz where "um" should have been.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "bzzzt";

// The output folder comes from the environment, falling back to /output.
const outputDir = process.env.OUTPUT_DIR ?? "/output";

// Gate: 1–99 characters of UTF-8 text, not only whitespace, a single word.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 99) {
  throw new Error(`entry must be 1-99 characters, got ${chars.length}`);
}
if (ENTRY.trim().length === 0 || /\s/.test(ENTRY)) {
  throw new Error("entry must be a single word with no whitespace");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${chars.length}-character entry to ${join(outputDir, "entry.txt")}`);
