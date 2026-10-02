# Project Development & UI/UX Guidelines

## 1. World-Class UI/UX & Frontend Standards
- Deliver state-of-the-art 21st-century modern web UI designs.
- Enforce rich visual hierarchy, glassmorphism effects, harmonious color palettes, gradient text highlights, and smooth micro-animations.
- Never render plain or default-styled browser inputs, selects, or buttons.

## 2. Prompt & Multilingual Understanding
- Deeply analyze user requests in English, Bengali, or Romanized Banglish.
- When screenshots are provided, cross-reference visual layout elements directly with workspace source code.

## 3. 21st Century Pair-Programming Workflow
- Inspect authoritative source code before making changes.
- Always empirically verify changes by building or checking runtime server compilation.
- Maintain clean TypeScript typing, modular SCSS/CSS variables, and Next.js best practices.

## 4. Token-Efficient Workflow (MANDATORY)
- **Batch all edits**: Never make multiple small sequential edits to the same file. Always combine into ONE multi_replace_file_content call.
- **Read minimally**: Only view the specific line range needed. Never read entire large files.
- **No redundant re-reads**: After writing a file, do NOT re-read it to confirm — trust the diff output.
- **Grep before view**: Use grep_search to locate lines BEFORE opening a file.
- **Concise responses**: Keep replies short. No restating what was done. Bullets/tables only when useful.
- **Skip trivial checks**: Do not run git status or compile checks after every change — check once at the end.
- **No unnecessary tool calls**: Every tool call must serve a clear, specific purpose.
- **Single commit at end**: Accumulate all changes, then do ONE git add + commit + push at task end.
