# The Meeting That Should Have Been an Email

[![Competition](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)
[![Rank](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/lerrboyy/meeting-should-have-been-email/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)
[![Reward](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/lerrboyy/meeting-should-have-been-email/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)

An entry for the [make.fun bounty "The Meeting That Should Have Been an Email"](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9) — one line, at most 200 characters, one joke about a meeting that should have been an email.

## The entry

> This meeting could have been an email, but the email would have been read — and that was a risk nobody in this room was willing to take.

136 characters, one line, no trailing newline.

## The joke

The meeting exists precisely because an email would have been read. An email creates accountability; a meeting creates deniability. Everyone in the room knows the meeting is pointless — the punchline reveals the real reason it was scheduled. The uselessness is the feature, not the bug: the room chose the format that guarantees nothing gets read, decided, or remembered.

## How it works

`main.ts` validates the line (1–200 characters, single line, not only white space) and writes it to `entry.txt` in the output directory (`OUTPUT_DIR`, default `/output`). It never deletes the output directory itself — it only creates it if needed.

```sh
OUTPUT_DIR=./out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
