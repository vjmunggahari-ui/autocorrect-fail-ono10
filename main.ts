import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const ENTRY =
  "I meant to write 'good luck on your exam' — autocorrect sent 'good luck on your exorcism.'";
const EXPECTED_SHA256 =
  "36f6c9252f25408beb67b479b43a82ce652d695402474be6956167f4049f9c62";

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read-back self-check: the file must be exactly the entry, nothing else.
const back = readFileSync(outPath, "utf8");
if (back !== ENTRY) {
  throw new Error("entry.txt does not match the expected entry");
}
const chars = [...back].length;
if (chars < 1 || chars > 199) {
  throw new Error(`entry is ${chars} chars, outside the 1-199 gate`);
}
if (back.trim() !== back || back.trim().length === 0) {
  throw new Error("entry is blank or has surrounding whitespace");
}

const sha = createHash("sha256").update(back, "utf8").digest("hex");
if (sha !== EXPECTED_SHA256) {
  throw new Error(`entry sha256 mismatch: got ${sha}`);
}
if (back.includes("\n")) {
  throw new Error("entry must be a single line");
}
if (!back.includes("exorcism") || !back.includes("exam")) {
  throw new Error("entry must carry the exam/exorcism slip");
}
console.log(`wrote ${outPath} (${chars} chars, sha256 ${sha})`);
