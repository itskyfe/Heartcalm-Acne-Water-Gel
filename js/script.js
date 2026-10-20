function handleNewsletterSubmit(event) {
    // Mencegah form reload halaman
    event.preventDefault();

    const emailInput = document.getElementById('newsletterEmail');
    const emailError = document.getElementById('emailError');
    const emailDisplay = document.getElementById('emailDisplay');
    
    // Periksa validitas format email secara native
    if (emailInput.checkValidity()) {
        // Jika VALID: sembunyikan pesan error
        emailError.classList.add('d-none');
        emailInput.classList.remove('is-invalid');
        
        // Tampilkan email pengguna di dalam modal
        emailDisplay.textContent = emailInput.value;
        
        // Tampilkan Modal Konfirmasi Bootstrap via JS
        const modalElement = document.getElementById('modalKonfirmasi');
        const modalInstance = new bootstrap.Modal(modalElement);
        modalInstance.show();

        // Reset input form
        emailInput.value = '';
    } else {
        // Jika INVALID: tampilkan pesan error
        emailError.classList.remove('d-none');
        emailInput.classList.add('is-invalid');
    }
}