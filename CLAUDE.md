# Project memory — June Kim portfolio

## Files
- Main page: Portfolio2.html (published as index.html)
- Case pages: Case A2 Milk.html, Case Jjan-merang.html, Case Tinder Boiler Room.html, Case D8 Crate.html, Case Think Wise.html (YouTube Shorts embeds), Case Always On Social.html
- Shared: case-kit.jsx, case.css, image-slot.js, paper-grain.svg, assets/
- Design system: _ds/june-portfolio-design-system-*/
- publish/ = deploy folder (only used images; dropped images saved as image-slots.state.json as a normal file). Upload folder to Netlify Deploys tab → same URL, new content.

## Workflow
- Edit originals first, then "발행용 파일 만들어줘" → rebuild publish/ and zip it.
- Direct editing can't handle complex layouts; user sends DOM diffs, apply them to HTML/JSX.

## Design decisions
- Hand-drawn doodles, torn paper tape, red accent on every page
- Main page: proportional responsive layout. Case pages: max-width 1520px
- Case hero padding: side max 80px, top fixed, bottom 120px
- Contact icons (mail, LinkedIn, phone) hand-drawn. Email: june.choi008@gmail.com
- How I Work descriptions: key phrases bold
- Soft Skills: bottom two items moved to top
- Goobne (Always On Social) case title: 62px

## Pending
- Case Always On Social.html was rebuilt as Goobne-only (Oct 2026). Removed Hyundai Motor and Dhuman sections are in `_archive/Case Always On Social - Hyundai Dhuman backup.html`. June plans to move them back later at the very bottom of the Goobne page.
