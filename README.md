# Fjeldmann

A people first software company website built with Jekyll for GitHub Pages.

## Website Features

- **Transparent Navigation Bar** with logo placement in top left
- **Hero Section** with slideshow background and company messaging
- **Background Slideshow** of nature photos with automatic transitions
- **Responsive Design** that works on desktop and mobile devices
- **Professional Pages**: Home, About, Services, Contact
- **Modern Styling** with animations and transitions

## Live Site

Visit the live site at: [https://fjeldmann.github.io](https://fjeldmann.github.io)

## Local Development

### Docker Compose (recommended)

This repository includes a containerized Jekyll workflow with Docker Compose Watch sync.

1. Start development with watch mode:
   `docker compose up --watch`
2. Open `http://localhost:4000` in your browser
3. Edit files locally; Compose Watch syncs changes into the container automatically
4. If `Gemfile` or `Gemfile.lock` changes, Compose Watch rebuilds the service image

### Without Docker

1. Install Ruby and Jekyll
2. Clone this repository
3. Run `bundle install` to install dependencies
4. Run `bundle exec jekyll serve` to start the development server
5. Open `http://localhost:4000` in your browser. For test repo http://localhost:4000/test-fjeldmann.github.io/

## GitHub Pages Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## Customization

### Content
Edit the markdown files to customize content:
- `index.md` - Home page
- `about.md` - About page
- `services.md` - Services page
- `contact.md` - Contact page

### Styling
Modify `assets/css/main.scss` to customize colors, fonts, and layout.
