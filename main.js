document.addEventListener('DOMContentLoaded', function () {

    var showFormBtn = document.getElementById('showFormBtn');
    var appointmentForm = document.getElementById('appointmentForm');

    if (showFormBtn && appointmentForm) {

        // Hide form initially
        appointmentForm.style.display = 'none';

        showFormBtn.addEventListener('click', function () {

            // Show the form
            appointmentForm.style.display = 'block';

            // Smooth scroll to form
            appointmentForm.scrollIntoView({ behavior: 'smooth' });

            // Hide the button
            showFormBtn.style.display = 'none';
        });
    }
});