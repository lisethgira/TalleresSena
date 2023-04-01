<?php require_once "header.php" ?>
<!--Inicio del contenido principal-->
<div class="container">
    <h1>Panel de Control</h1>

    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <button id="btnNuevo" type="button" class="btn btn-success" data-toggle="modal">Nuevo</button>
            </div>
        </div>
    </div>
    <br>
    <div class="container"></div>
    <div class="row">
        <div class="col-lg-12">
            <div class="table-responsive">
                <table id="tablaPersonas" class="table table-striped table-bordered table-condensed" style="width:100%">
                    <thead class="text-center">
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Tipo Documento</th>
                            <th>Documento</th>
                            <th>Correo</th>
                            <th>Celular</th>
                            <th>Entidad Bancaria</th>
                            <th>N° de Cuenta</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Liseth Arelis Giraldo Morales </td>
                            <td></td>
                            <td>cc</td>
                            <td>10264565</td>
                            <td>skjdskjd@gmaiil.com</td>
                            <td>3120545994</td>
                            <td>banco</td>
                            <td>156584545454</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Heider Camilo </td>
                            <td>Alvarez Alvarez</td>
                            <td>cc</td>
                            <td>10264565</td>
                            <td>skjdskjd@gmaiil.com</td>
                            <td>3120545994</td>
                            <td>banco</td>
                            <td>156584545454</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Maria Carolina </td>
                            <td>Escudero</td>
                            <td>cc</td>
                            <td>10264565</td>
                            <td>skjdskjd@gmaiil.com</td>
                            <td>3120545994</td>
                            <td>banco</td>
                            <td>156584545454</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<!--Modal para CRUD-->
<div class="modal fade" id="modalCRUD" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="formPersonas">
                <div class="modal-body">
                    <div class="form-group">
                        <label for="nombre" class="col-form-label">Nombre:</label>
                        <input type="text" class="form-control" id="nombre">
                    </div>
                    <div class="form-group">
                        <label for="pais" class="col-form-label">País:</label>
                        <input type="text" class="form-control" id="pais">
                    </div>
                    <div class="form-group">
                        <label for="edad" class="col-form-label">Edad:</label>
                        <input type="number" class="form-control" id="edad">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-dismiss="modal">Cancelar</button>
                    <button type="submit" id="btnGuardar" class="btn btn-dark">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>
<!--Fin contenido prinicpal-->
<?php require_once "footer.php" ?>