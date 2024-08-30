document.addEventListener('DOMContentLoaded', () => {
    // Manejo de los radio buttons
    const radios = document.querySelectorAll('.tipo_cedula input[name="opcion"]');
    radios.forEach(radio => {
        radio.addEventListener('change', (event) => {
            sessionStorage.setItem('opcionSeleccionada', event.target.value);
        });
    });

    // Manejo del input de fecha
    const fechaInput = document.getElementById('fechaNacimiento');
    fechaInput.addEventListener('change', (event) => {
        sessionStorage.setItem('fechaSeleccionada', event.target.value);
    });

    // Manejo del select de sexo
    const selectSexo = document.getElementById('sexo');
    selectSexo.addEventListener('change', (event) => {
        sessionStorage.setItem('sexoSeleccionado', event.target.value);
    });

    // Manejo del select de nivel de educación
    const selectEducacion = document.getElementById('nivelEducacion');
    selectEducacion.addEventListener('change', (event) => {
        sessionStorage.setItem('nivelEducacion', event.target.value);
    });

});

function generar() {

    // Recoger los datos de los formularios
    const primerNombre = document.getElementById('primerNombre').value;
    const segundoNombre = document.getElementById('segundoNombre').value;
    const primerApellido = document.getElementById('primerApellido').value;
    const segundoApellido = document.getElementById('segundoApellido').value;
    const numeroCedula = document.getElementById('numeroCedula').value;
    const correo = document.getElementById('correo').value;
    const numeroCelular = document.getElementById('numeroCelular').value;
    const cargo = document.getElementById('cargo').value;
    const infoPersonal = document.getElementById('infoPersonal').value;
    const experiencia = document.getElementById('experiencia').value;
    const nombre_1 = document.getElementById('nombre_1').value;
    const cargo_1 = document.getElementById('cargo_1').value;
    const correo_1 = document.getElementById('correo_1').value;
    const celular_1 = document.getElementById('celular_1').value;
    const nombre_2 = document.getElementById('nombre_2').value;
    const cargo_2 = document.getElementById('cargo_2').value;
    const correo_2 = document.getElementById('correo_2').value;
    const celular_2 = document.getElementById('celular_2').value;

    localStorage.setItem('primerNombre', primerNombre);
    localStorage.setItem('segundoNombre', segundoNombre);
    localStorage.setItem('primerApellido', primerApellido);
    localStorage.setItem('segundoApellido', segundoApellido);
    localStorage.setItem('numeroCedula', numeroCedula);
    localStorage.setItem('correo', correo);
    localStorage.setItem('numeroCelular', numeroCelular);
    localStorage.setItem('cargo', cargo);
    localStorage.setItem('infoPersonal', infoPersonal);
    localStorage.setItem('experiencia', experiencia);
    localStorage.setItem('nombre_1', nombre_1);
    localStorage.setItem('cargo_1', cargo_1);
    localStorage.setItem('correo_1', correo_1);
    localStorage.setItem('celular_1', celular_1);
    localStorage.setItem('nombre_2', nombre_2);
    localStorage.setItem('cargo_2', cargo_2);
    localStorage.setItem('correo_2', correo_2);
    localStorage.setItem('celular_2', celular_2);

    const opcionSeleccionada = sessionStorage.getItem('opcionSeleccionada');
    const sexoSeleccionado = sessionStorage.getItem('sexoSeleccionado');
    const nivelEducacion = sessionStorage.getItem('nivelEducacion');
    const fechaSeleccionada = sessionStorage.getItem('fechaSeleccionada');

    localStorage.setItem('opcionSeleccionada', opcionSeleccionada);
    localStorage.setItem('sexoSeleccionado', sexoSeleccionado);
    localStorage.setItem('nivelEducacion', nivelEducacion);
    localStorage.setItem('fechaSeleccionada', fechaSeleccionada);


    window.location.href = './hojaVida/hoja.html';


}
