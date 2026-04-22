# Claude Handoff

## Goal

Final booth setup should have only 2 games:

1. map game
2. easier quiz

The map game already exists in:

- `01-map-challenge/index.html`

The quiz content source now exists in:

- `easy_quiz_question_bank.js`
- `quiz_asset_map.js`

## What Was Added

### Question bank

Reusable easy bank with mixed question types:

- text
- true/false
- flag-pick
- image-pick

File:

- `easy_quiz_question_bank.js`

### Asset map

Keys match `QUIZ_VISUALS` from the question bank.

File:

- `quiz_asset_map.js`

### Local assets

SVG assets:

- `assets/svg/flags/*.svg`
- `assets/svg/symbols/*.svg`

Photo assets:

- `assets/images/*.jpg`

Web-optimized photo copies:

- `assets/web/*.webp`

## Recommended Rendering Rules

### For `flag-pick`

- render visual options from `QUIZ_ASSET_MAP[key].src`
- use `img` tags for SVGs too unless inline styling is needed
- show no long captions, or only small labels if necessary

### For `image-pick`

- render the image from the asset map
- use `object-fit: cover`
- keep cards visually consistent with flags

### For `text` and `true-false`

- keep the same card shell so the quiz feels like one product
- use large prompt text and fewer words

## Important Notes

### Existing map game

Keep using:

- `01-map-challenge/index.html`

It is already the cleanest editable map implementation.

### Existing quiz pages

Do not treat these as the source of truth anymore:

- `02-flag-pick/index.html`
- `03-photo-quiz/index.html`
- `04-booth-mix/index.html`
- `00-original-snapshots/lithuania-quiz-original.html`

Those were useful references only.

### Best implementation path

Create a single final quiz page, likely:

- `quiz.html`

or

- `02-quiz/index.html`

and load:

- `easy_quiz_question_bank.js`
- `quiz_asset_map.js`

## Remaining Judgment Calls

### `acorn_oak`

Current asset map uses:

- primary: `assets/svg/symbols/acorn.svg`
- secondary: `assets/svg/symbols/oak-leaf.svg`

If needed, combine them visually in one answer card.

### Image sizing

Use the WebP files in `assets/web/` by default.
Only fall back to the JPG originals if a browser issue appears.

## Suggested Next Step

Build one final easier quiz page that:

1. randomizes questions from `EASY_QUIZ_QUESTION_BANK`
2. renders image-backed questions using `QUIZ_ASSET_MAP`
3. uses only the easier question set
4. removes the harder original trivia tone
5. matches the booth visual style

