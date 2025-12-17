// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Rental Refresh Calculator
    const bhkSelect = document.getElementById('bhk-select');
    const rentalPriceDisplay = document.getElementById('rental-price');

    const rentalRates = {
        '1': '₹8,000',
        '2': '₹12,000',
        '3': '₹16,000'
    };

    if (bhkSelect && rentalPriceDisplay) {
        bhkSelect.addEventListener('change', (e) => {
            const val = e.target.value;
            rentalPriceDisplay.textContent = rentalRates[val] || 'Ask for Quote';
            // Animation effect
            rentalPriceDisplay.style.opacity = 0;
            setTimeout(() => {
                rentalPriceDisplay.style.opacity = 1;
            }, 200);
        });
    }

    // Intelligent Cost Estimator
    const areaInput = document.getElementById('area-input');
    const qualityRadios = document.querySelectorAll('input[name="quality"]');
    const estimateResult = document.getElementById('estimate-result');

    const paintRates = {
        'economy': { min: 20, max: 25 }, // Per sq ft
        'royal': { min: 35, max: 45 }
    };

    function updateEstimate() {
        const area = parseFloat(areaInput.value) || 0;
        let quality = 'economy';
        qualityRadios.forEach(r => {
            if (r.checked) quality = r.value;
        });

        const rate = paintRates[quality];

        if (area > 0) {
            const minPrice = (area * rate.min).toLocaleString('en-IN');
            const maxPrice = (area * rate.max).toLocaleString('en-IN');
            estimateResult.textContent = `₹${minPrice} - ₹${maxPrice}`;
        } else {
            estimateResult.textContent = "Please enter area";
        }
    }

    if (areaInput) {
        areaInput.addEventListener('input', updateEstimate);
        qualityRadios.forEach(r => r.addEventListener('change', updateEstimate));
    }

    // Initial calculation
    updateEstimate();

    // Before/After Slider Logic
    // For now, we don't have the actual elements fully interactive with drag, 
    // but here is the logic structure. 
    // We need to implement the drag functionality.

    /* 
       Note: The HTML structure has:
       .ba-slider-container (wrapper)
       .ba-overlay (the top image, variable width)
       .ba-handle (the drag handle)
    */

    const sliderContainer = document.querySelector('.ba-slider-container');
    const overlay = document.querySelector('.ba-overlay');
    const handle = document.querySelector('.ba-handle');

    if (sliderContainer && overlay && handle) {
        let isDragging = false;

        const move = (e) => {
            if (!isDragging) return;

            const rect = sliderContainer.getBoundingClientRect();
            // Get X position relative to the container
            // Support both mouse and touch events
            const clientX = e.clientX || e.touches[0].clientX;

            let x = clientX - rect.left;

            // Constraints
            if (x < 0) x = 0;
            if (x > rect.width) x = rect.width;

            const percent = (x / rect.width) * 100;

            overlay.style.width = `${percent}%`;
            handle.style.left = `${percent}%`;
        }

        handle.addEventListener('mousedown', () => isDragging = true);
        handle.addEventListener('touchstart', () => isDragging = true);

        document.addEventListener('mouseup', () => isDragging = false);
        document.addEventListener('touchend', () => isDragging = false);

        document.addEventListener('mousemove', move);
        document.addEventListener('touchmove', move);
    }

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
