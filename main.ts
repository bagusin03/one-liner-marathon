// One-liner entry for make.fun "One-Liner Marathon".
// Writes exactly one joke (1-280 characters, single line) to
// /output/entry.txt: a childhood magic trick that quietly became
// a career. Fully offline and deterministic: no network, no clock,
// no randomness, no environment reads. The joke is a fixed string
// literal below.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I wanted to be a magician, so I practiced making my homework disappear — twenty years later I'm an accountant, and the trick still works, it just pays better now.";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1-280
// characters, a single line, not only whitespace. Refuse to write
// anything else.
if (
  JOKE.length < 1 ||
  JOKE.length > 280 ||
  JOKE.trim().length === 0 ||
  JOKE.includes("\n")
) {
  throw new Error("joke fails the 1-280 character single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
