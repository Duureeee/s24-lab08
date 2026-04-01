# Lab 8: Flashcard Ordering

## Commands

1. `npm install`: installs project dependencies.
2. `npm run compile`: compiles TypeScript into `dist/`.
3. `npm test`: runs the Jest tests for the card ordering logic.
4. `npm run start`: starts the flashcard CLI using the recent-mistakes-first organizer.

## Notes

- Re-run `npm run compile` after each code change before using `npm run start`.
- On Windows and restricted environments, Jest is configured with `--runInBand` so tests run in a single process reliably.
- The current lab implementation prioritizes cards answered incorrectly in the most recent round while preserving the relative order of the remaining cards.
