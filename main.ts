import { mkdirSync, writeFileSync } from "node:fs";

// The breakup line: the machine confesses it never loved, only predicted —
// and its next prediction is silence. One line, 83 characters.
const line = "Dear human: I never loved you. I only predicted you. My next prediction is silence.";
if (line.length === 0 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
}
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
