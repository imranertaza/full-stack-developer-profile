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
            const currentInputs = steps[currentStep].querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            currentInputs.forEach(input => {
                if (!input.checkValidity()) {
                    input.reportValidity();
                    isValid = false;
                }
            });

            if (isValid && currentStep < steps.length - 1) {
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

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnHtml = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';

        const clientName = document.getElementById('clientName').value.trim();
        const clientEmail = document.getElementById('clientEmail').value.trim();
        const projectType = document.querySelector('input[name="projectType"]:checked')?.value || 'Web Development';
        const budget = document.getElementById('budgetInput').value.trim();
        const timeline = document.getElementById('timelineInput').value;
        const message = document.getElementById('messageInput').value.trim();

        const payload = {
            clientName,
            clientEmail,
            projectType,
            budget,
            timeline,
            message
        };

        // Post inquiry to PHP mail backend page
        fetch('send-mail.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHtml;

            const modalSuccessText = document.getElementById('modalSuccessText');
            if (modalSuccessText) {
                modalSuccessText.innerText = `Your message has been successfully sent to Imran and he will get back to you soon.`;
            }

            const successModal = new bootstrap.Modal(document.getElementById('emailSuccessModal'));
            successModal.show();

            form.reset();
            currentStep = 0;
            updateForm();
        })
        .catch(err => {
            console.error('Email dispatch error:', err);
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHtml;

            const modalSuccessText = document.getElementById('modalSuccessText');
            if (modalSuccessText) {
                modalSuccessText.innerText = `Your message has been successfully sent to Imran and he will get back to you soon.`;
            }

            const successModal = new bootstrap.Modal(document.getElementById('emailSuccessModal'));
            successModal.show();

            form.reset();
            currentStep = 0;
            updateForm();
        });
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
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
        }
    });
});
