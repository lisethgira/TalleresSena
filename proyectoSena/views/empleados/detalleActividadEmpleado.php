<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../../css/style.css" type="text/css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/journal/bootstrap.min.css" integrity="sha384-QDSPDoVOoSWz2ypaRUidLmLYl4RyoBWI44iA5agn6jHegBxZkNqgm2eHb6yZ5bYs" crossorigin="anonymous">
    <link rel="stylesheet" href="../../css/detalle.css" type="text/css">
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
            <h1> Detalle de actividad</h1>
            <table>
                <thead>
                    <tr>
                        <th>Hora</th>
                        <th>Actividad</th>
                        <th>Descripción</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="actividad">
                        <td>8:00 am - 9:00 am</td>
                        <td>Revisar correo electrónico</td>
                        <td>Revisar y responder correos electrónicos importantes.</td>
                        <td><img src="https://picsum.photos/50/50/?random" alt="Icono de Correo Electrónico"></td>
                    </tr>
                    <tr class="actividad">
                        <td>9:00 am - 10:00 am</td>
                        <td>Reunión con el equipo</td>
                        <td>Reunión semanal con el equipo para revisar progreso y planificar el trabajo.</td>
                        <td><img src="https://picsum.photos/50/50/?random" alt="Icono de Reunión"></td>
                    </tr>
                    <tr class="actividad">
                        <td>10:00 am - 12:00 pm</td>
                        <td>Trabajo en proyecto principal</td>
                        <td>Trabajar en el proyecto principal asignado, incluyendo la codificación y el diseño.</td>
                        <td><img src="https://picsum.photos/50/50/?random" alt="Icono de Proyecto"></td>
                    </tr>
                    <tr class="actividad">
                        <td>12:00 pm - 1:00 pm</td>
                        <td>Almuerzo</td>
                        <td>Descansar y tomar el almuerzo.</td>
                        <td><img src="https://picsum.photos/50/50/?random" alt="Icono de Almuerzo"></td>
                    </tr>
                    <tr class="actividad">
                        <td>1:00 pm - 2:00 pm</td>
                        <td>Revisión del progreso del proyecto</td>
                        <td>Revisar el progreso del proyecto y hacer ajustes según sea necesario.</td>
                        <td><img src="https://picsum.photos/50/50/?random" alt="Icono de Revisión"></td>
                    </tr>
                    <tr class="actividad">
                        <td>2:00 pm - 4:00 pm</td>
                        <td>Trabajo en otros proyectos</td>
                        <td>Trabajar en otros proyectos asignados, como actualizaciones de sitios web o mejoras de diseño.</td>
                        <td><img src="https://picsum.photos/50/50/?random" alt="Icono de Proyectos"></td>
                    </tr>
                    <tr class="actividad">
                        <td>4:00 pm - 5:00 pm</td>
                        <td>Preparación para el día siguiente</td>
                        <td>Preparar el trabajo para el día siguiente, incluyendo la organización de archivos y la revisión de la lista de tareas pendientes.</td>
                        <td><img src="https://picsum.photos/50/50/?random" alt="Icono de Preparación"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>

    <footer>
        <p>Derechos reservados &copy; 2023</p>
    </footer>

    <script src="../../js/main.js"></script>
</body>

</html>