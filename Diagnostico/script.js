document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registroForm');
    const radioLabels = document.querySelectorAll('.radio-label');

    // Cambiar el fondo resaltado al seleccionar género
    radioLabels.forEach(label => {
        const radio = label.querySelector('input[type="radio"]');
        radio.addEventListener('change', () => {
            radioLabels.forEach(l => l.classList.remove('selected'));
            if (radio.checked) {
                label.classList.add('selected');
            }
        });
    });

    // Validación al enviar el formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const pass = document.getElementById('password').value;
        const confirmPass = document.getElementById('confirmPassword').value;

        if (pass !== confirmPass) {
            alert('Las contraseñas no coinciden. Por favor verifica.');
            return;
        }

        alert('¡Formulario de registro enviado con éxito!');
        form.reset();
    });
});