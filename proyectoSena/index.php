<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro Colaborador</title>
    <link rel="stylesheet" href="css/style.css" type="text/css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/journal/bootstrap.min.css"
        integrity="sha384-QDSPDoVOoSWz2ypaRUidLmLYl4RyoBWI44iA5agn6jHegBxZkNqgm2eHb6yZ5bYs" crossorigin="anonymous">
</head>

<body>
    <header>

        <nav>
            <ul>
                <li><img class="logo1" src="src/img/logo.png" alt=""></li>
                <li><a href="views/admin/login.php">Administrador</a></li>
                <li><a href="index.php">Registro Actividad Empleado</a></li>
                <li><a href="views/empleados/detalleActividadEmpleado.php">Detalle Actividad Empleado</a></li>
                <li><a href="views/empleados/nominaEmpleado.php">Nomina Empleado</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <div class="container">
            <h1>Registro Actividad de empleados</h1>
            <form>
                <label for="codigo_empleado">Código de empleado:</label>
                <input type="text" id="codigo_empleado" name="codigo_empleado" required>

                <label for="fecha">Fecha:</label>
                <input type="date" id="fecha" name="fecha" required>

                <label for="hora">Hora:</label>
                <input type="time" id="hora" name="hora" required>

                <label for="area">Área asignada:</label>
                <select name="area" id="area" type="select"  required>
                    <option value="produccion">Producción</option>
                    <option value="mantenimiento">Mantenimiento</option>
                    <option value="limpieza">Limpieza</option>
                    <option value="otro">Otro</option>
                </select>

                <label for="actividad">Actividad realizada:</label>
                <select name="actividad" id="actividad" type="select" required>
                    <option value="produccion">Producción</option>
                    <option value="mantenimiento">Mantenimiento</option>
                    <option value="limpieza">Limpieza</option>
                    <option value="otro">Otro</option>
                </select>

                <label for="num_prendas">Número de prendas realizadas:</label>
                <input type="number" id="num_prendas" name="num_prendas" min="1" required>


                <label for="ref_prenda">Referencia de prenda:</label>
                <input type="text" id="ref_prenda" name="ref_prenda" required>

                <label for="comentario">Comentario</label>
                <input type="text" name="comentario" id="comentario" required>
                </input>

                <button type="reset">Limpiar campos</button>
                <button type="submit">Registrar</button>
            </form>
        </div>
    </main>
    
    <footer>
        <p>Derechos reservados &copy; 2023</p>
    </footer>

    <script src="js/main.js"></script>
</body>

</html>