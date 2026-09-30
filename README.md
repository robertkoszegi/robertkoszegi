# robertkoszegi.com

Personal website for Robert Koszegi — FileMaker and full-stack developer.

A static, dependency-free site (HTML, CSS, a little JavaScript) that can be hosted on GitHub Pages or any static host.

## Structure

| File          | Purpose                                            |
| ------------- | -------------------------------------------------- |
| `index.html`  | Page content: about, work history, certifications  |
| `styles.css`  | Layout and theme (light and dark mode)             |
| `script.js`   | Email obfuscation, scroll reveal, active nav link  |
| `favicon.svg` | Site icon                                          |

## Local preview

Any static file server works, for example:

```bash
npx serve .
```

## Updating content

- **Work history** — edit the `<ol class="timeline">` list in `index.html`.
- **Certifications** — edit the `<div class="certs">` block in `index.html`.
