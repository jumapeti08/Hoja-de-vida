document.addEventListener('DOMContentLoaded', () => {
    // Cargar los datos de localStorage
    const primerNombre = localStorage.getItem('primerNombre');
    const segundoNombre = localStorage.getItem('segundoNombre');
    const primerApellido = localStorage.getItem('primerApellido');
    const segundoApellido = localStorage.getItem('segundoApellido');
    const numeroCedula = localStorage.getItem('numeroCedula');
    const correo = localStorage.getItem('correo');
    const numeroCelular = localStorage.getItem('numeroCelular');
    const cargo = localStorage.getItem('cargo');
    const infoPersonal = localStorage.getItem('infoPersonal');
    const experiencia = localStorage.getItem('experiencia');
    const opcionSeleccionada = localStorage.getItem('opcionSeleccionada');
    const sexoSeleccionado = localStorage.getItem('sexoSeleccionado');
    const nivelEducacion = localStorage.getItem('nivelEducacion');
    const fechaSeleccionada = localStorage.getItem('fechaSeleccionada');
    const nombre_1 = localStorage.getItem('nombre_1');
    const nombre_2 = localStorage.getItem('nombre_2');
    const cargo_1 = localStorage.getItem('cargo_1');
    const cargo_2 = localStorage.getItem('cargo_2');
    const correo_1 = localStorage.getItem('correo_1');
    const correo_2 = localStorage.getItem('correo_2');
    const celular_1 = localStorage.getItem('celular_1');
    const celular_2 = localStorage.getItem('celular_2');

    // Mostrar los datos en la página
    document.getElementById('nombreCompleto').textContent = `${primerNombre} ${segundoNombre} ${primerApellido} ${segundoApellido}`;
    document.getElementById('celular').textContent = numeroCelular;
    document.getElementById('correo').textContent = correo;
    document.getElementById('cedula').textContent = `${opcionSeleccionada}: ${numeroCedula}`;
    document.getElementById('sexo').textContent = sexoSeleccionado;
    document.getElementById('nacimiento').textContent = localStorage.getItem('fechaSeleccionada');
    document.getElementById('nivelEducacion').textContent = nivelEducacion;
    document.getElementById('cargo').textContent = cargo;
    document.getElementById('infoPersonal').textContent = infoPersonal;
    document.getElementById('experiencia').textContent = experiencia;
    document.getElementById('nacimiento').textContent = fechaSeleccionada;
    document.getElementById('cargo').textContent = cargo;
    document.getElementById('nombre_1').textContent = nombre_1;
    document.getElementById('cargo_1').textContent = cargo_1;
    document.getElementById('correo_1').textContent = correo_1;
    document.getElementById('celular_1').textContent = celular_1;
    document.getElementById('nombre_2').textContent = nombre_2;
    document.getElementById('cargo_2').textContent = cargo_2;
    document.getElementById('correo_2').textContent = correo_2;
    document.getElementById('celular_2').textContent = celular_2;
});
