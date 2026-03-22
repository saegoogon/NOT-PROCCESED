# Do Not Proceed

A restrained single-page interactive web piece built with plain HTML, CSS, and JavaScript.

## Included

- `index.html`: markup, metadata, social tags, and controls
- `styles.css`: visual system, layout, motion, and responsive behavior
- `script.js`: sequencing, sound, language toggle, ending logic, and reset flow
- `og-image.svg`: social preview draft
- `favicon.svg`: site icon
- `netlify.toml`: Netlify publish and security headers
- `vercel.json`: Vercel headers

## Features

- English and Korean toggle
- Optional in-browser sound
- Behavioral ending variations
- Reduced-motion support
- No build step

## Deploy

### Netlify

1. Create a new site from drag-and-drop or Git.
2. Upload this whole folder or connect the repo.
3. Publish directory: `.`
4. No build command needed.
5. If you use a custom domain, add it in Site configuration > Domain management.

### Vercel

1. Import the folder or repo as a new project.
2. Framework preset: `Other`
3. Build command: leave empty
4. Output directory: `.`
5. Add your domain in Project settings > Domains.

### GitHub Pages

1. Push the folder contents to a repo.
2. In repo settings, enable Pages from the default branch root.
3. If the repo name is not the domain root, keep asset paths relative as they are now.

## Custom Domain

### Root domain

- Point the apex domain to your host's A record or ALIAS/ANAME target.

### Subdomain

- Add a `CNAME` record such as `www -> your-site.netlify.app` or `www -> cname.vercel-dns.com`.

### Social previews

- Replace the relative `og:image` URL with your final absolute deployed URL for better link previews.
- Example: `https://yourdomain.com/og-image.svg`

## Notes

- Audio starts only after user interaction.
- Reduced-motion users get a simplified version automatically.
- If you want richer previews later, replace `og-image.svg` with a PNG export at 1200x630.
