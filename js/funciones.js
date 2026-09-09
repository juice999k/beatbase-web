const formulario = document.getElementById("formularioContacto");

if (formulario) {
    formulario.addEventListener(
        "submit",
        function (event) {
            event.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const correo = document.getElementById("correo").value.trim().toLowerCase();
            const mensaje = document.getElementById("mensaje").value.trim();

            const alertaMensaje = document.getElementById("alertaMensaje");

            if (nombre === "" || correo === "" || mensaje === "") {
                alertaMensaje.className = "alert alert-danger mt-3";
                alertaMensaje.textContent = "Error: Todos los campos son obligatorios. Por favor, revísalos.";
                return;
            }

            if (nombre.length < 10) {
                alertaMensaje.className = "alert alert-warning mt-3";
                alertaMensaje.textContent = "Aviso: El nombre es muy corto. Debe tener al menos 10 caracteres.";
                return;
            }

            if (
                !/^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/.test(correo)
            ) {
                alertaMensaje.className = "alert alert-warning mt-3";
                alertaMensaje.textContent = "Aviso: Utiliza un correo institucional (@duoc.cl, @profesor.duoc.cl) o una cuenta de @gmail.com.";
                return;
            }

            if (mensaje.length < 50) {
                alertaMensaje.className = "alert alert-warning mt-3";
                alertaMensaje.textContent = "Aviso: Tu mensaje es muy breve. Explícanos un poco más tu consulta (mínimo 50 caracteres).";
                return;
            }

            alertaMensaje.className = "alert alert-success mt-3";
            alertaMensaje.textContent = "¡Mensaje enviado correctamente! Nos pondremos en contacto en breves contigo";
            
            formulario.reset();
        }
    );
}


const btnCopiarEmail = document.getElementById("btnCopiarEmail");

if (btnCopiarEmail) {
    btnCopiarEmail.addEventListener("click", async function () {
        try {
            await navigator.clipboard.writeText("soporte@beatbase.dev");
            btnCopiarEmail.textContent = "✅ ¡Correo copiado!";
        } catch (error) {
            btnCopiarEmail.textContent = "Copia manualmente: soporte@beatbase.dev";
        }
        setTimeout(function () {
            btnCopiarEmail.textContent = "📧 Email: soporte@beatbase.dev";
        }, 2000);
    });
}


const btnPlanGratis = document.getElementById("btnPlanGratis");
const btnPlanPro = document.getElementById("btnPlanPro");

if (btnPlanGratis) {
    btnPlanGratis.addEventListener("click", function() {
        alert("¡Gracias por tu interés! 🛠️\nEl Plan Gratuito para desarrolladores estará disponible próximamente.");
    });
}

if (btnPlanPro) {
    btnPlanPro.addEventListener("click", function() {
        alert("¡Gracias por tu interés! 💎\nEl sistema de pagos para el Plan Pro estará habilitado muy pronto.");
    });
}
