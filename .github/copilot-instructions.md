# Copilot Instructions for Technical Theater Team Website

## Repository Context
This repository hosts the GitHub Pages website for a Technical Theater Team. The site currently serves as a redirect to the main organization website at `binimum.org`, but may expand to include team-specific content in the future.

## Technology Stack
- **Frontend**: Pure HTML, CSS, and JavaScript (no frameworks)
- **Hosting**: GitHub Pages
- **Domain**: Custom domain configured via CNAME (`techteam.binimum.org`)

## Code Guidelines

### HTML
- Use semantic HTML5 elements
- Maintain accessibility standards (alt text, proper heading hierarchy, etc.)
- Keep the existing meta tags for SEO and site verification
- Preserve the existing redirect functionality unless specifically asked to change it

### CSS
- Follow the existing style patterns in `styles.css`
- Use consistent naming conventions
- Maintain responsive design principles
- Keep the existing color scheme (#72d7b6 accent color) unless asked to change

### JavaScript
- Write vanilla JavaScript (no external libraries unless necessary)
- Keep code compatible with modern browsers
- Maintain existing redirect functionality
- Use async/defer attributes appropriately

## File Structure
```
/
├── index.html              # Main landing page with redirect
├── styles.css             # Global styles
├── icon.png               # Site favicon
├── CNAME                  # Custom domain configuration
├── googleb1a0e5a39d4dd6da.html  # Google site verification
└── .github/
    └── copilot-instructions.md    # This file
```

## Development Guidelines
- Test changes locally when possible
- Ensure compatibility with GitHub Pages hosting
- Maintain the redirect functionality unless explicitly changing site purpose
- Keep file sizes optimized for web delivery
- Preserve existing meta tags and SEO elements

## Technical Theater Context
When adding content related to technical theater:
- Consider terms like: lighting, sound, rigging, set design, stage management
- Be mindful of theater safety protocols in any technical documentation
- Use appropriate technical theater terminology
- Consider accessibility needs for performance spaces

## Deployment
- This site deploys automatically via GitHub Pages
- Changes to the main branch are automatically deployed
- Custom domain is configured and should be preserved
- No build process is required - files are served directly

## Common Tasks
- Adding new pages: Create HTML files in root directory, update navigation if needed
- Styling updates: Modify `styles.css`, maintain existing structure
- Redirect changes: Update meta refresh tag and JavaScript in `index.html`
- Domain changes: Update `CNAME` file (requires repository admin access)