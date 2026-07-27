# Project Guide: Imran Dev Portfolio

## 1. Project Overview
This project is a high-performance, responsive professional portfolio website for **Syed Imran Ertaza**, an expert Web Developer with 8+ years of experience. The site serves as both a personal brand showcase and a lead generation tool.

- **Purpose**: Showcase expertise in Laravel, WordPress, and Vue.js; capture potential client leads.
- **Key Technologies**: HTML5, CSS3, JavaScript (ES6+), Bootstrap 5.3, AOS.js, Animate.css.
- **Architecture**: Single-page application (SPA) structure with smooth scroll navigation and a multi-step lead capture form.
- **Content Creation**: The author contributes to the developer community through the YouTube channel [**codefixx**](https://www.youtube.com/@codefixx), sharing insights on Laravel, WordPress, and Vue.js.

## 2. Getting Started
### Prerequisites
- A modern web browser.
- A local development server (e.g., Live Server for VS Code) is recommended for the best experience with AOS animations.

### Installation & Usage
1. Clone the repository.
2. Open `index.html` in your browser.
3. No build steps or dependency installations are required as external libraries are loaded via CDN.

### Running Tests
Currently, the project uses manual UI testing. Verify responsiveness using browser developer tools (F12) across different breakpoints (Mobile, Tablet, Desktop).

## 3. Project Structure
- `index.html`: The main entry point containing the full structure of the site.
- `css/style.css`: Contains custom styling, CSS variables (`:root`), glassmorphism effects, and custom keyframe animations (floating, shine, pulse).
- `js/main.js`: Handles interactivity, including:
  - **AOS Initialization**: Controls scroll-triggered animations.
  - **Multi-step Form**: Logic for the 3-step project inquiry form.
  - **Navbar Effects**: Glassmorphism and shadow toggling on scroll.
- `assets/`: (Directory) Intended for local images and icons.

## 4. Development Workflow
- **Styling**: Always use the defined CSS variables in `style.css` for colors (`--cyan`, `--bg-dark`, etc.) to maintain theme consistency.
- **Layout**: Utilize Bootstrap 5 utility classes for layout and spacing where possible.
- **Animations**: Use `data-aos` attributes in HTML for scroll animations. Refer to AOS documentation for different effects.
- **Form Logic**: If adding form fields, update the validation and step logic in `js/main.js`.

## 5. Key Concepts
- **Glassmorphism**: Implementation of `backdrop-filter: blur()` and semi-transparent backgrounds on navbars and cards.
- **Lead Generation Funnel**: A 3-step interactive form designed to increase conversion by breaking down the inquiry process.
- **Custom Animations**: 
  - `floating-animation`: Used for tech icons in the hero section.
  - `shine`: Used on the main CTA button.
  - `gradientShift`: Used for text gradients.

## 6. Common Tasks
### Adding a New Portfolio Item
1. Locate the `<section id="portfolio">` in `index.html`.
2. Duplicate a project column div (`col-md-6 col-lg-4`).
3. Update the image URL, title, and technology tags.

### Modifying the Contact Form
1. To add a step: Add a new `.form-step` div in `index.html` with a unique ID.
2. Update the `updateForm` function in `js/main.js` if custom logic is required for specific steps.

## 7. Troubleshooting
- **AOS Animations not firing**: Ensure `AOS.init()` is called in `js/main.js` and that the library is correctly loaded via CDN in `index.html`.
- **Navbar covering section headers**: If the sticky navbar obscures section titles on scroll, adjust the `scroll-padding-top` in CSS or check the section IDs.

## 8. References
- [Bootstrap 5.3 Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [AOS (Animate On Scroll) Library](https://michalsnik.github.io/aos/)
- [Animate.css](https://animate.style/)
- [codefixx YouTube Channel](https://www.youtube.com/@codefixx)

## 9. Coding Standard
1. Always try to focus to keep the envato standard codeing.
2. Use animate CSS to make the pages animation and slider if needed.
