---
name: Vladislav Fidrik Portfolio
description: A warm, serif-led portfolio faithfully translated from its existing Figma source.
colors:
  text-primary: "#332e1c"
  text-secondary: "#838074"
  background-primary: "#fafaf9"
  background-secondary: "#f1f1ef"
typography:
  display:
    fontFamily: "Averia Serif Libre, serif"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-2.4px"
  headline:
    fontFamily: "Averia Serif Libre, serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-2px"
  body:
    fontFamily: "Averia Serif Libre, serif"
    fontSize: "20px"
    fontWeight: 300
    lineHeight: 1.4
    letterSpacing: "-0.4px"
  label:
    fontFamily: "Averia Serif Libre, serif"
    fontSize: "16px"
    fontWeight: 300
    lineHeight: 1.4
    letterSpacing: "-0.4px"
rounded:
  media: "16px"
  pill: "24px"
spacing:
  s: "16px"
  l: "32px"
  xl: "48px"
  xxl: "80px"
  2xl: "128px"
components:
  text-link:
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
  text-link-hover:
    textColor: "{colors.text-secondary}"
  media-frame:
    backgroundColor: "{colors.background-secondary}"
    rounded: "{rounded.media}"
  return-link-outlined:
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
---

# Design System: Vladislav Fidrik Portfolio

## Overview

**Creative North Star: "The existing Figma portfolio"**

A quiet editorial presentation built around warm paper-like surfaces, expressive serif headings, generous vertical space, and large project imagery. The supplied Figma file is the visual authority. This document records the built system without introducing a new identity.

**Key Characteristics:**
- Warm neutral surfaces and dark brown text.
- Light serif prose paired with bold italic serif headings.
- Narrow reading columns and wider case-study media.
- Flat, gently rounded image frames.

## Colors

### Primary

- **Dark brown:** primary text, links, outline controls, and the faint decorative divider.

### Neutral

- **Warm paper:** the page background.
- **Soft stone:** image and video frames.
- **Muted taupe:** secondary copy and link-hover feedback.

**The Source Palette Rule.** Keep the supplied neutral palette when reproducing these screens. Muted taupe is an inherited contrast limitation, not a recommended accessible normal-text color for new interfaces: it measures approximately 3.79:1 on the page and 3.50:1 on the secondary surface.

## Typography

Both primary faces are local Averia Serif Libre files: Light (300) for body copy and Bold Italic (700) for headings. Display and headline roles use italic styling in addition to the frontmatter properties. There is no synthetic font weight or style.

The page requests antialiased WebKit text rendering and grayscale macOS Firefox rendering (`-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale`) to bring glyph density closer to the source. These rendering hints do not change the source text colors or font weights; rasterization can still vary by browser and platform.

The display role serves case-study titles; the headline role serves home introduction and project titles. Body copy and text links share a relaxed line height. Smaller labels serve captions and footer copy; the home footer uses the source-specific 22px line-height rather than the general label line-height. Some source-specific media annotations use intermediate sizes; they are not a separate global type scale.

The language-demo annotations preserve the exact source Figma Hand glyph outlines in `public/lettering/english.svg` and `polski.svg`, and as vector paths in the main editable `.pen` import. They are source lettering assets, not a fallback font or an additional body typeface. Flag graphics use Apple Color Emoji PNGs.

**The Two-Face Rule.** Preserve the light normal/bold italic pairing and its tight heading tracking; introducing a different heading family changes the source identity.

## Layout

Reading columns are centered and capped at 640px. Case-study media expand to 1024px. Page gutters remain 16px. The main rhythm uses the frontmatter spacing scale, with the largest gap separating major story sections. Home has 128px top and bottom padding; case-study compositions use their own source-specific starting and ending space.

The app selects mobile compositions through 719px and desktop compositions from 720px. Reference checks use desktop at 1280px, mobile home at 399px, and mobile cases at 375px. Preserve source ordering and image aspect ratios as containers narrow. Source-specific media grids, phone frames, and collages are content compositions rather than universal layout primitives.

## Elevation & Depth

The shell is flat, with no box-shadow vocabulary. Depth comes from the two surface tones and from the supplied project imagery. Image-internal shadows remain part of those assets. Keyboard focus adds a visible outline; it does not elevate the component.

## Shapes

Media and cover frames use the media radius. The outlined return link uses a pill-like radius and a thin dark border. Image clipping follows the source frame, while phone silhouettes and other special shapes remain inside project imagery.

## Components

### Text links and contact navigation

Underlined serif links share body typography. Hover changes their foreground to secondary text over 160ms. Contact navigation is a horizontal group of real anchors, preserving the source spacing and destinations.

### Return links

The simple return link pairs an arrow with an underlined “Main page” label. Its outlined variant uses a thin border, small vertical padding, and no underline. Both route home and request saved-position restoration.

### Project cards

A rounded cover sits above a bold italic title and platform/duration metadata. Each available case study is one anchor across the complete card, including cover, gaps, title, and metadata. Hover anywhere on the card, keyboard focus, or its active state dims the cover to 0.8 opacity and changes its title and metadata to secondary text, following source component `1:33`. Cover feedback transitions over 180ms; text feedback remains 160ms. Keyboard focus also outlines the card.

The two unfinished projects are focusable articles without a link or navigation action. Hover anywhere on such a card, or keyboard focus, reveals the source `1:48` cover overlay with 7.5px backdrop blur and the authentic “Case Study in Progress …” lettering. Its glyph outlines come from source node `1:51`, extracted as `public/lettering/in-progress.svg`; do not substitute ordinary type or a newly drawn label. On devices without hover, a compact status badge remains visible over the cover. These overlays do not change card dimensions or document flow.

### Media frames

Large clipped surfaces preserve the source aspect ratio. A media manifest connects the original local videos and poster frames. Ordinary videos autoplay muted and loop when in view; reduced motion suppresses automatic playback. Language videos start manually with sound through native controls and pause other audible videos. Both original GIFs use still PNGs for reduced motion. Keep these playback behaviors separate from the source frame geometry.

### Navigation and focus

Route transitions fade out for 140ms and bring the next view in over 260ms after a 120ms delay, with an 8px incoming translation. A roughly equivalent fallback is present where View Transitions are unavailable. Reduced-motion preferences suppress these transitions. Focus uses a visible dark outline and the page includes a skip link.

## Do's and Don'ts

### Do:
- **Do** use the supplied Figma composition and local original imagery as the visual authority.
- **Do** preserve the centered prose/media width relationship and generous section rhythm.
- **Do** keep the local light normal and bold italic Averia font pairing.
- **Do** preserve the original media, source lettering outlines, and explicit verification limits.

### Don't:
- **Don't** add decorative effects or a new visual identity to this faithful reproduction.
- **Don't** present static poster images as verified animation or video.
- **Don't** alter source composition merely to force a target page height.
- **Don't** describe the inherited secondary-text contrast as an accessibility standard.
