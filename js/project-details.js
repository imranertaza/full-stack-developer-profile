/* ============================================================
   PROJECT DETAILS PAGE LOADER (CASE STUDY FORMAT)
   ------------------------------------------------------------
   Reads ?project=<slug> from the URL, looks up the project in
   PROJECTS (js/projects-data.js) and populates the page.
   Falls back to the first project if the slug is missing/invalid.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS animations
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: true, offset: 100 });
    }

    const params = new URLSearchParams(window.location.search);
    const slug = params.get('project');
    const project = PROJECTS[slug] || PROJECTS[Object.keys(PROJECTS)[0]];

    if (!project) return;

    // ---------- Hero ----------
    document.getElementById('pdTitle').textContent = project.title;
    document.getElementById('pdTagline').textContent = project.tagline;
    document.title = `${project.title} - Case Study - Syed Imran Ertaza`;

    // ---------- Meta Strip ----------
    document.getElementById('pdClient').textContent = project.client;
    document.getElementById('pdIndustry').textContent = project.industry;
    document.getElementById('pdTechnology').textContent = project.technology;

    // ---------- Cover ----------
    const cover = document.getElementById('pdCoverImage');
    cover.src = project.cover;
    cover.alt = `${project.title} - Project Cover`;

    // ---------- The Challenge ----------
    document.getElementById('pdChallenge').textContent = project.challenge;

    // ---------- What I Did ----------
    const workWrap = document.getElementById('pdWork');
    workWrap.innerHTML = project.work.map(item => `
        <div class="pd-work-item">
            <i class="fas fa-circle-check text-red"></i>
            <span class="text-secondary">${item}</span>
        </div>
    `).join('');

    // ---------- Result ----------
    const resultsWrap = document.getElementById('pdResults');
    resultsWrap.innerHTML = project.results.map(r => `
        <div class="pd-result-row">
            <span class="pd-result-value">${r.value}</span>
            <span class="pd-result-label">${r.label}</span>
        </div>
    `).join('');

    // ---------- Gallery ----------
    const galleryWrap = document.getElementById('pdGallery');
    galleryWrap.innerHTML = project.gallery.map((img, i) => `
        <div class="col-md-6" data-aos="zoom-in" data-aos-delay="${(i + 1) * 100}">
            <div class="pd-gallery-item">
                <img src="${img}" alt="${project.title} screenshot ${i + 1}" loading="lazy">
            </div>
        </div>
    `).join('');

    // ---------- Visit Live Website CTA ----------
    const liveLink = document.getElementById('pdLiveLink');
    if (project.liveUrl && project.liveUrl !== '#') {
        liveLink.href = project.liveUrl;
        liveLink.style.display = '';
    } else {
        liveLink.style.display = 'none';
    }

    // ---------- Next Project ----------
    const keys = Object.keys(PROJECTS);
    const currentIndex = keys.indexOf(slug);
    const nextKey = keys[(currentIndex + 1) % keys.length];
    const nextProject = PROJECTS[nextKey];

    const nextLink = document.getElementById('pdNextLink');
    nextLink.href = `project-details.html?project=${nextKey}`;
    document.getElementById('pdNextTitle').textContent = nextProject.title;
});