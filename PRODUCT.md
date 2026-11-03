# Vladislav Fidrik portfolio

## Purpose

A local portfolio for a UX/UI designer based in Gdańsk. Visitors can read the designer’s background, browse project summaries, open two detailed case studies, and follow the résumé, LinkedIn, email, and app-store links.

## Scope and source of truth

The user requested a faithful implementation of the existing [Portfolio 2026 Figma file](https://www.figma.com/design/xBFLdFnKvYmVF1SITAodWL/Portfolio-2026--Copy-?node-id=0-1). This is an established visual identity, not a redesign. Preserve the supplied composition, typography, imagery, media, and wording, including repeated source paragraphs.

`design/portfolio.fig` retains the original source archive intact. Its imported, editable counterpart is `design/portfolio-original.pen`: three sections, six screens, 12 reusable masters, and 66 references. The older `design/portfolio.pen` is a backup reconstruction.

The local React/TypeScript app exposes `/`, `/case-study-1`, and `/case-study-2`. Each has a dedicated desktop and mobile composition; the implementation switches below 720px. The reference widths are 1280px desktop, 399px mobile home, and 375px mobile case studies.

## Local artifacts

- `src/`: application source, extracted styles, and media manifest.
- `public/assets/`, `public/fonts/`: static imagery and the two main local font files.
- `public/media/`: all 12 original MP4 sources, both original animated GIFs, and still frames for reduced motion. Ten unique videos appear in the six screen compositions; the game video repeats and two additional sources are retained without adding them to visible screens.
- `public/lettering/`: source glyph outlines for the English/Polski and in-progress labels, plus Apple Color Emoji flag PNGs. The lettering does not require a Figma Hand font file.
- `design/original-assets/`: all 69 source images and the original MP3; lettering is also represented by vector paths in the main editable import.
- `design/source/`: captured source compositions; `design/images/` supports the backup reconstruction.
- `outputs/`: screenshots, verification notes, import metadata, and source-integrity results.

Run `npm install` if dependencies are absent, then `npm run dev` for the local site. `npm run check` checks TypeScript, `npm run check:assets` checks referenced assets, and `npm run build` creates the production build. `node scripts/verify-originals.mjs` checks original asset bytes against the archive; its successful report is `outputs/verification/source-integrity.json`.

`node scripts/import-fig.mjs design/portfolio.fig` parses the source with `openfig-core`, extracts assets, and writes `work/figma-original/import-trees.json`. It does not save `.pen` files; the editable native import was saved through pen.dev MCP. All work remains local and unpublished.

## Interaction contract

Available case studies use the entire card as one link: cover, gaps, title, and metadata all open the same local case route. Hover, keyboard focus, and active feedback dim the cover and shift linked copy to the secondary color. The two unfinished projects remain non-navigating, keyboard-focusable articles. Hover or focus reveals their authentic source “Case Study in Progress …” lettering over a blurred cover; devices without hover show a persistent compact badge. The same contract applies to desktop and mobile without changing card geometry.

Case-study links open their local routes. Returning home and browser history restore recorded scroll and focus positions, including rapid back navigation. Route transitions fade and move the incoming page slightly, with a fallback where View Transitions are unavailable; reduced-motion preferences disable this motion. External links retain their real destinations.

Ordinary videos autoplay muted and loop while in view; reduced motion suppresses automatic playback. Language videos use manual, unmuted playback and native controls, pausing other audible video playback. GIFs use static PNGs for reduced motion. The portfolio shell and media are local; following external links requires the destination service.

## Acceptance and verification limits

Acceptance requires faithful desktop/mobile composition, original media, working navigation, and locally editable artifacts. Original media and glyph outlines are now available and connected. Fresh captures match all six source frame heights: home 3384px / 3117.5px, case 1 20050px / 18403.25px, and case 2 10022px / 9264.25px (desktop / mobile). `outputs/verification/final-layouts.json` records these measurements without horizontal overflow or missing images at the reference widths. Browser playback of audio-creation and both language videos was checked and recorded in `outputs/verification/browser-playback.json`; this is a sample, not an all-media or all-browser certification.

Byte integrity and matching dimensions do not certify every rendered pixel or every browser. The inherited secondary text contrast remains below the normal-text AA threshold (approximately 3.79:1 on the page and 3.50:1 on secondary surfaces). Preserve this explicit fidelity exception without claiming full accessibility. See `outputs/VERIFICATION.md` and `outputs/verification/` for the latest verification evidence.
