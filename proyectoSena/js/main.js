const form = document.getElementById('registro-form');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	const codigoEmpleado = document.getElementById('codigo-empleado').value;
	const fechaRegistro = document.getElementById('fecha-registro').value;
	const horaRegistro = document.getElementById('hora-registro').value;
	const actividad = document.getElementById('actividad').value;
	const area = document.getElementById('area').value;
	const numPrendas = document.getElementById('num-prendas').value;
	const refPrenda = document.getElementById('ref-prenda').value;
	const comentario = document.getElementById('comentario').value;

	const data = {
		codigo_empleado: codigoEmpleado,
		fecha_registro: fechaRegistro,
		hora_registro: horaRegistro,
		actividad: actividad,
		area:area,
		num_prendas: numPrendas,
		ref_prenda: refPrenda,
		comentario: comentario,
	};

	fetch('/api/registro-empleado', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(function(response) {
		if (!response.ok) {
			throw new Error('Error al enviar los datos');
		}
		return response.json();
	})
	.then(function(data) {
		console.log(data);
	})
	.catch(function(error) {
		console.error(error);
	});
});