<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="../../css/style.css" type="text/css">
	<link rel="stylesheet" href="../../css/nomina.css" type="text/css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/journal/bootstrap.min.css" integrity="sha384-QDSPDoVOoSWz2ypaRUidLmLYl4RyoBWI44iA5agn6jHegBxZkNqgm2eHb6yZ5bYs" crossorigin="anonymous">
</head>

<body>
	<header>

		<nav>
			<ul>
				<li><img class="logo1" src="../../src/img/logo.png" alt=""></li>
				<li><a href="../admin/login.php">Administrador</a></li>
				<li><a href="../../index.php">Registro Actividad Empleado</a></li>
				<li><a href="./detalleActividadEmpleado.php">Detalle Actividad Empleado</a></li>
				<li><a href="./nominaEmpleado.php">Nomina Empleado</a></li>
			</ul>
		</nav>
	</header>
	<main>
		<div class="container">
			<h1>Comprobante de nómina</h1>
			<p>Fecha: 01 de abril de 2023</p>
			<table>
				<thead>
					<tr>
						<th>Concepto</th>
						<th>Cantidad</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Salario base</td>
						<td>$10,000.00</td>
						<td>$10,000.00</td>
					</tr>
					<tr>
						<td>Bonificación</td>
						<td>$2,000.00</td>
						<td>$2,000.00</td>
					</tr>
					<tr>
						<td>Descuento de Seguro Social</td>
						<td>$500.00</td>
						<td>-$500.00</td>
					</tr>
					<tr>
						<td>Impuesto sobre la renta</td>
						<td>$1,500.00</td>
						<td>-$1,500.00</td>
					</tr>
					<tr>
						<td>Total</td>
						<td></td>
						<td>$10,000.00</td>
					</tr>
				</tbody>
			</table>
			<p>El presente comprobante de nómina se expide en cumplimiento de las obligaciones fiscales establecidas
				por las leyes aplicables.</p>
		</div>
	</main>

	<footer>
		<p>Derechos reservados &copy; 2023</p>
	</footer>

	<script src="../../js/main.js"></script>

</body>

</html>