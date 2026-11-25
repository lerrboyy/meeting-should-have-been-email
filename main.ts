// The Meeting That Should Have Been an Email
// make.fun bounty u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9
//
// One line, at most 200 characters: a joke about a meeting that should have
// been an email. This program writes that single line to entry.txt.
//
// The joke inverts the premise: the meeting exists precisely because an email
// would have been read. An email creates accountability; a meeting creates
// deniability. The room chose the format that guarantees nothing gets read,
// decided, or remembered — the uselessness is the feature, not the bug.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "This meeting could have been an email, but the email would have been read \u2014 and that was a risk nobody in this room was willing to take.";

const MAX_CHARS = 200;

// The em dash (U+2014) is part of the joke's punctuation — it must survive
// exactly as written, one code point, three UTF-8 bytes.
const EM_DASH = "\u2014";

function validate(line: string): void {
  const chars = [...line];
  if (chars.length < 1 || chars.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${chars.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (!line.includes(EM_DASH)) {
    throw new Error("entry lost its em dash (U+2014)");
  }
}

// Read the file back and compare byte-for-byte against the intended UTF-8
// encoding, so a mangled write can never pass silently.
function verifyWritten(outPath: string, expected: string): void {
  const written = readFileSync(outPath);
  const encoded = Buffer.from(expected, "utf8");
  if (!written.equals(encoded)) {
    throw new Error(
      `read-back mismatch: wrote ${written.length} bytes, expected ${encoded.length} bytes`,
    );
  }
  const roundTrip = written.toString("utf8");
  if ([...roundTrip].length !== [...expected].length) {
    throw new Error("read-back character count differs from expected");
  }
  if (roundTrip.includes("\n") || roundTrip.endsWith("\n")) {
    throw new Error("written entry must be one line with no trailing newline");
  }
}

function main(): void {
  validate(ENTRY);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  // Create the directory if needed; never delete the directory itself,
  // since the grader mounts it.
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  verifyWritten(outPath, ENTRY);
  console.log(`wrote ${[...ENTRY].length} chars to ${outPath} (verified byte-exact)`);
}

main();
