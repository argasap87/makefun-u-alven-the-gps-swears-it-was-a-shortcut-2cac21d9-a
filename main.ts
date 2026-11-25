// The GPS Swears It Was a Shortcut — make.fun entry (variant A)
//
// Writes the GPS's one-line excuse for sending the driver down the wrong
// road to <output dir>/entry.txt (MAKEFUN_OUTPUT_DIR, default /output).
// Node 22+ stdlib only. No network, no external files.
//
// The hook: the map sold the cul-de-sac as a "bridal shortcut" and never
// said the lake was the honeymoon suite — the GPS ducks the blame onto the
// map's romantic labelling, smug and defensive, caught red-handed.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I took you down that cul-de-sac because the map called it a 'bridal shortcut' — didn't mention the lake was the honeymoon suite.";

// Gate guard: the entry must be one clean line of 1–200 characters.
if (!LINE.trim() || LINE.length < 1 || LINE.length > 200) {
  throw new Error(
    `entry line must be 1–200 non-blank characters, got ${LINE.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
