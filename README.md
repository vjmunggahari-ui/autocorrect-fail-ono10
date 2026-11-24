# Funniest Autocorrect Fail

[![bounty](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154.svg)](https://make.fun/competitions/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![rank](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/vjmunggahari-ui/autocorrect-fail-ono10/rank.svg)](https://make.fun/competitions/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![reward](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/vjmunggahari-ui/autocorrect-fail-ono10/reward.svg)](https://make.fun/competitions/u-zeroxfive-funniest-autocorrect-fail-ddf82154)

## The entry

> I meant to write 'good luck on your exam' — autocorrect sent 'good luck on your exorcism.'

A one-line autocorrect fail (90 characters): the intended word "exam" becomes the
surprising "exorcism", and the sender's own narration makes the slip unmistakable
on first read — a real text-message fail, not a written joke.

## How it works

`main.ts` (Node, no dependencies) writes exactly that line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` and nothing else. It throws if
`MAKEFUN_OUTPUT_DIR` is unset, then reads the file back and verifies the exact
text, the 1–199 character gate, the single line, and the pinned sha256.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```
