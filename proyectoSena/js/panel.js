// Función para obtener los usuarios desde una API y mostrarlos en el dashboard
function obtenerUsuarios() {
	fetch('https://api.example.com/usuarios')
		.then(response => response.json())
		.then(data => {
			// Crear una tabla HTML con los datos de los usuarios
			let tabla = 
			'<table><thead><tr><th>Nombre</th><th>Apellido</th><th>Tipo Documento</th><th>Documento</th><th>Correo</th><th>Celular</th><th>Entidad Bancaria</th><th>N° de Cuenta</th></tr></thead><tbody>';
			data.forEach(usuario => {
				tabla += `<tr><td>${usuario.documento}</td><td>${usuario.nombre}</td><td>${usuario.correo}</td><td>${usuario.celular}</td></tr>`;
			});
			tabla += '</tbody></table>';
			// Agregar la tabla al contenedor principal del dashboard
			document.querySelector('main').innerHTML = tabla;
		})
		.catch(error => {
			console.error('Error al obtener los usuarios:', error);
		});
}

// Llamar a la función obtenerUsuarios al cargar la página
window.addEventListener('load', obtenerUsuarios);