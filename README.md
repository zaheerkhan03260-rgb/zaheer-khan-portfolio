# Zaheer Khan — AI & ML Portfolio

Advanced, animated portfolio site. Dark theme with a green + teal accent,
animated neural-network hero, scroll-reveal animations, and topic-matched
icons on every project card.

## Folder structure (flat — no subfolders for css/js)

```
zk-portfolio/
├── index.html
├── style.css
├── script.js
├── images/
│   └── profile.png     → your photo (placeholder — replace this)
└── README.md
```

## How to deploy (GitHub Pages)

1. Upload ALL of these files/folders to your GitHub repo root — index.html,
   style.css, script.js, images/, README.md — keeping images/profile.png
   inside its own images folder.
2. Commit and push.
3. Go to repo → Settings → Pages → Branch: `main`, folder: `/ (root)` → Save.
4. Your live URL will appear on that same Pages settings screen after
   1–2 minutes.

## Already set up

- ✅ Email: zaheerkhan0326@gmail.com (Contact section, footer, hero button)
- ✅ LinkedIn: linked in Contact section and footer
- ✅ GitHub: linked throughout

## Still to add: CV / Resume

A "Download CV" button already exists in the hero section but is disabled
until you add your CV file. To activate it:

1. Add your CV file at `images/cv.pdf`
2. In `index.html`, find the comment `DOWNLOAD CV BUTTON` in the hero
   section and remove `class="is-disabled"` (and the `title="..."`
   attribute) from that button.
3. Commit and push.

## Replacing the profile photo

`images/profile.png` is currently a placeholder. Replace it with your real
photo — same filename `profile.png`.

## A note on style.css opening in Notepad

That's normal — Windows opens `.css` files in Notepad by default because it
doesn't have a dedicated CSS editor associated. It's not a broken file.
Open the whole folder in VS Code instead (File → Open Folder) rather than
double-clicking the file, and it will open correctly with syntax highlighting.

## Notes

- Plain HTML/CSS/JS — no build step, works directly on GitHub Pages.
- Fully responsive (includes a mobile nav menu).
