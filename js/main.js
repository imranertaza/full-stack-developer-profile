document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    const form = document.getElementById('multiStepForm');
    const steps = document.querySelectorAll('.form-step');
    const progressBar = document.getElementById('formProgress');
    const nextBtns = document.querySelectorAll('.next-step');
    const prevBtns = document.querySelectorAll('.prev-step');

    let currentStep = 0;

    function updateForm() {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === currentStep);
            step.classList.toggle('d-none', index !== currentStep);
        });

        const progress = ((currentStep + 1) / steps.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentStep < steps.length - 1) {
                currentStep++;
                updateForm();
            }
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentStep > 0) {
                currentStep--;
                updateForm();
            }
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry! This is a demo. In a real application, this would send an email or save to a database.');
        form.reset();
        currentStep = 0;
        updateForm();
    });

    // Portfolio Filtering
    const filterBtns = document.querySelectorAll('.portfolio-filters .btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                const categories = item.getAttribute('data-category').split(' ');
                if (filter === 'all' || categories.includes(filter)) {
                    item.classList.remove('hidden');
                    setTimeout(() => {
                        item.style.display = 'block';
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.classList.add('hidden');
                        item.style.display = 'none';
                    }, 400);
                }
            });
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
            navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.style.backgroundColor = '#0f172a';
        }
    });
});
