# robertkoszegi.com: development notes

A static, dependency-free site (HTML, CSS, a little JavaScript) that can be hosted on GitHub Pages or any static host.

## Structure

| Path            | Purpose                                            |
| --------------- | -------------------------------------------------- |
| `index.html`    | Page content: about, work history, certifications  |
| `styles.css`    | Layout and theme (light and dark mode)             |
| `script.js`     | Email obfuscation, scroll reveal, active nav link  |
| `favicon.svg`   | Site icon                                          |
| `assets/logos/` | Employer logos for the work history                |
| `assets/certs/` | Issuer logos and badges for certifications         |

## Local preview

Any static file server works, for example:

```bash
python -m http.server 5173
```

## Updating content

- **Work history**: edit the `<ol class="timeline">` list in `index.html`.
- **Certifications**: edit the `<div class="certs">` block in `index.html`.
