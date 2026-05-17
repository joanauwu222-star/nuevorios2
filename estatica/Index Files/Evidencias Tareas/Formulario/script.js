(function() {

    const formContainer = document.getElementById('formContainer');
    const successMsgDiv = document.getElementById('successMessage');
    const btnAceptar = document.getElementById('btnAceptar');
    
    const usuarioInput = document.getElementById('usuario');
    const contrasenaInput = document.getElementById('contrasena');
    const emailInput = document.getElementById('email');
    const nombreInput = document.getElementById('nombre');
    const apellidosInput = document.getElementById('apellidos');
    const direccionInput = document.getElementById('direccion');
    
    let countdownInterval = null;
    let resetTimeout = null;   
    
    function clearFieldErrors() {
        const allInputs = [usuarioInput, contrasenaInput, emailInput, nombreInput, apellidosInput, direccionInput];
        allInputs.forEach(input => {
            if(input) input.classList.remove('error-field');
        });
    }
    
    function markErrorField(inputElement) {
        if(inputElement) inputElement.classList.add('error-field');
    }

    function validateForm() {
        clearFieldErrors();
        let isValid = true;
        
        const usuario = usuarioInput.value.trim();
        const contrasena = contrasenaInput.value.trim();
        const email = emailInput.value.trim();
        const nombre = nombreInput.value.trim();
        const apellidos = apellidosInput.value.trim();
        const direccion = direccionInput.value.trim();
        
        if(usuario === "") {
            markErrorField(usuarioInput);
            isValid = false;
        }
        if(contrasena === "") {
            markErrorField(contrasenaInput);
            isValid = false;
        } else if(contrasena.length < 4) {
            markErrorField(contrasenaInput);
            isValid = false;
            contrasenaInput.placeholder = "Mínimo 4 caracteres";
            setTimeout(() => { if(contrasenaInput.placeholder === "Mínimo 4 caracteres") contrasenaInput.placeholder = "Mínimo 4 caracteres"; }, 1500);
        }
        if(email === "") {
            markErrorField(emailInput);
            isValid = false;
        } else if(!isValidEmail(email)) {
            markErrorField(emailInput);
            isValid = false;
            emailInput.placeholder = "email válido: ejemplo@dominio.com";
            setTimeout(() => { if(emailInput.placeholder === "email válido: ejemplo@dominio.com") emailInput.placeholder = "usuario@ejemplo.com"; }, 2000);
        }
        if(nombre === "") {
            markErrorField(nombreInput);
            isValid = false;
        }
        if(apellidos === "") {
            markErrorField(apellidosInput);
            isValid = false;
        }
        if(direccion === "") {
            markErrorField(direccionInput);
            isValid = false;
        }
        
        return isValid;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function stopPendingReset() {
        if(countdownInterval) {
            clearInterval(countdownInterval);
            countdownInterval = null;
        }
        if(resetTimeout) {
            clearTimeout(resetTimeout);
            resetTimeout = null;
        }
    }

    function resetFormAndShowForm() {
        stopPendingReset();
        
        usuarioInput.value = '';
        contrasenaInput.value = '';
        emailInput.value = '';
        nombreInput.value = '';
        apellidosInput.value = '';
        direccionInput.value = '';
        
        clearFieldErrors();
        
        formContainer.style.display = 'block';
        successMsgDiv.style.display = 'none';
        
        usuarioInput.focus();
    }
    
    function showSuccessAndReset() {
        formContainer.style.display = 'none';
        successMsgDiv.style.display = 'block';
        
        const timerSpan = document.getElementById('countdownTimer');
        let secondsLeft = 5;
        if(timerSpan) timerSpan.innerText = secondsLeft;

        if(countdownInterval) clearInterval(countdownInterval);
        
        countdownInterval = setInterval(() => {
            secondsLeft--;
            if(timerSpan) timerSpan.innerText = secondsLeft >= 0 ? secondsLeft : 0;
            if(secondsLeft <= 0) {
                clearInterval(countdownInterval);
                countdownInterval = null;
            }
        }, 1000);
        
        if(resetTimeout) clearTimeout(resetTimeout);
        resetTimeout = setTimeout(() => {
            if(countdownInterval) {
                clearInterval(countdownInterval);
                countdownInterval = null;
            }
            resetFormAndShowForm();
            successMsgDiv.style.display = 'none';
            formContainer.style.display = 'block';
            clearFieldErrors();
        }, 5000);
    }

    function onSubmit(event) {
        event.preventDefault();
        
        const isValid = validateForm();
        if(!isValid) {
            showTemporaryWarning(" Por favor completa todos los campos correctamente.");
            return;
        }
        showSuccessAndReset();
    }
    
    function showTemporaryWarning(message) {
        const existingToast = document.querySelector('.aqua-toast-warning');
        if(existingToast) existingToast.remove();
        
        const toast = document.createElement('div');
        toast.className = 'aqua-toast-warning';
        toast.textContent = message;
        toast.style.position = 'fixed';
        toast.style.bottom = '30px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.backgroundColor = '#0a4c5c';
        toast.style.color = 'white';
        toast.style.padding = '12px 24px';
        toast.style.borderRadius = '60px';
        toast.style.fontWeight = 'bold';
        toast.style.fontSize = '0.9rem';
        toast.style.zIndex = '2000';
        toast.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
        toast.style.backdropFilter = 'blur(4px)';
        toast.style.border = '1px solid #8cd9e8';
        toast.style.fontFamily = 'inherit';
        toast.style.letterSpacing = '0.3px';
        document.body.appendChild(toast);
        
        setTimeout(() => {
            if(toast && toast.parentNode) toast.remove();
        }, 2500);
    }
    
    btnAceptar.addEventListener('click', onSubmit);
    
    const allInputs = [usuarioInput, contrasenaInput, emailInput, nombreInput, apellidosInput, direccionInput];
    allInputs.forEach(input => {
        if(input) {
            input.addEventListener('keypress', function(e) {
                if(e.key === 'Enter') {
                    e.preventDefault();
                    btnAceptar.click();
                }
            });
        }
    });
    
    const style = document.createElement('style');
    style.textContent = `
        .input-group input.error-field {
            border-color: #e68a8a !important;
            background-color: #fff3f3 !important;
            box-shadow: 0 0 0 1px #e68a8a80;
        }
        .aqua-toast-warning {
            animation: fadeSlideUp 0.2s ease-out;
        }
        @keyframes pulseWidth {
            0% { width: 0%; background: #0e6b7c; }
            100% { width: 100%; background: #40b0c0; }
        }
    `;
    document.head.appendChild(style);

    formContainer.style.display = 'block';
    successMsgDiv.style.display = 'none';

})();