
# 1. Define una clase "Vehiculo" con propiedades "marca", "modelo" y "año". 
# También, un método "obtener_info" que muestra la información del vehículo.
class Vehiculo:
    def __init__(self, marca, modelo, año):
        self.marca = marca
        self.modelo = modelo
        self.año = año

    def obtener_info(self):
        return f"Marca: {self.marca}, Modelo: {self.modelo}, Año: {self.año}"
    
# 2. Crea una clase "Automovil" que herede de "Vehiculo" y tenga una propiedad 
# adicional "numero_puertas". Su método "obtener_info" debe mostrar la información, 
# incluyendo el número de puertas.
class Automovil(Vehiculo):
    def __init__(self, marca, modelo, año, numero_puertas):
        super().__init__(marca, modelo, año)
        self.numero_puertas = numero_puertas

    def obtener_info(self):
        return f"{super().obtener_info()}, Número de Puertas: {self.numero_puertas}"
    
# 3. Crea una clase "Camioneta" que herede de "Vehiculo" y tenga una propiedad adicional 
# "capacidad_carga". Su método "obtener_info" debe mostrar la información, incluyendo 
# la capacidad de carga.    
class Camioneta(Vehiculo):
    def __init__(self, marca, modelo, año, capacidad_carga):
        super().__init__(marca, modelo, año)
        self.capacidad_carga = capacidad_carga

    def obtener_info(self):
        return f"{super().obtener_info()}, Capacidad de Carga: {self.capacidad_carga} kg"

# 4. Define una clase "Animal" con propiedades "nombre" y "edad" y un método "hacer_ruido" 
# que muestra un mensaje genérico.
class Animal:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def hacer_ruido(self):
        return "El animal hace un ruido genérico"
    
# 5. Crea una clase "Perro" que herede de "Animal" y tenga una propiedad adicional "raza". 
# Su método "hacer_ruido" debe mostrar un ladrido.
class Perro(Animal):
    def __init__(self, nombre, edad, raza):
        super().__init__(nombre, edad)
        self.raza = raza

    def hacer_ruido(self):
        return f"{self.nombre} ladra"

# 6. Crea una clase "Gato" que herede de "Animal" y tenga una propiedad adicional "pelaje". 
# Su método "hacer_ruido" debe mostrar un maullido.
class Gato(Animal):
    def __init__(self, nombre, edad, pelaje):
        super().__init__(nombre, edad)
        self.pelaje = pelaje

    def hacer_ruido(self):
        return f"{self.nombre} maulla"
    
# 7. Define una clase "Persona" con propiedades "nombre", "apellido" y "edad", y un método 
# "obtener_nombre_completo" que devuelva el nombre completo de la persona.
class Persona:
    def __init__(self, nombre, apellido, edad):
        self.nombre = nombre
        self.apellido = apellido
        self.edad = edad

    def obtener_nombre_completo(self):
        return f"{self.nombre} {self.apellido}"
    
# 8. Crea una clase "Estudiante" que herede de "Persona" y tenga una propiedad adicional 
# "carrera". Su método "obtener_nombre_completo" debe devolver el nombre completo del 
# estudiante y su carrera.
class Estudiante(Persona):
    def __init__(self, nombre, apellido, edad, carrera):
        super().__init__(nombre, apellido, edad)
        self.carrera = carrera

    def obtener_nombre_completo(self):
        return f"{super().obtener_nombre_completo()}, Carrera: {self.carrera}"

# 9. Crea una clase "Profesor" que herede de "Persona" y tenga una propiedad adicional 
# "materia". Su método "obtener_nombre_completo" debe devolver el nombre completo del 
# profesor y la materia que enseña.
class Profesor(Persona):
    def __init__(self, nombre, apellido, edad, materia):
        super().__init__(nombre, apellido, edad)
        self.materia = materia

    def obtener_nombre_completo(self):
        return f"{super().obtener_nombre_completo()}, Materia: {self.materia}"

# 10. Define una clase "Forma" con propiedades "ancho" y "alto" y un método "calcular_area"
# que devuelva el área de la forma.
class Forma:
    def __init__(self, ancho, alto):
        self.ancho = ancho
        self.alto = alto

    def calcular_area(self):
        return self.ancho * self.alto
    
# 11. Crea una clase "Rectangulo" que herede de "Forma" y tenga un método adicional 
# "calcular_perimetro" que devuelva el perímetro del rectángulo.
class Rectangulo(Forma):
    def calcular_perimetro(self):
        return 2 * (self.ancho + self.alto)

# 12. import math
class Circulo(Forma):
    def calcular_circunferencia(self):
        return 2 * math.pi * (self.ancho / 2)
    
# 13. Define una clase "Empleado" con propiedades "nombre", "apellido" y "sueldo",
# y un método "calcular_salario_neto" que devuelva el salario neto del empleado, 
# restando impuestos y otros descuentos.
class Empleado:
    def __init__(self, nombre, apellido, sueldo):
        self.nombre = nombre
        self.apellido = apellido
        self.sueldo = sueldo

    def calcular_salario_neto(self):
        # Aquí puedes realizar cálculos para deducciones de impuestos, etc.
        return self.sueldo

# 14. Crea una clase "Gerente" que herede de "Empleado" y tenga una propiedad 
# adicional "departamento". Su método "calcular_salario_neto" debe devolver 
# el salario neto del gerente, restando impuestos, otros descuentos y un bono 
# adicional por ser gerente.
class Gerente(Empleado):
    def __init__(self, nombre, apellido, sueldo, departamento):
        super().__init__(nombre, apellido, sueldo)
        self.departamento = departamento

    def calcular_salario_neto(self):
        # Aquí puedes realizar cálculos específicos para el salario de un gerente, 
        # incluyendo bonos y deducciones.
        salario_neto = super().calcular_salario_neto()  # Obtener el salario base
        # Realizar cálculos adicionales aquí (por ejemplo, bonos, deducciones, etc.)
        return salario_neto

# 15. Crea una clase "Programador" que herede de "Empleado" y tenga una propiedad
# adicional "lenguaje". Su método "calcular_salario_neto" debe devolver el salario 
# neto del programador, restando impuestos, otros descuentos y un bono adicional por
# ser experto en un lenguaje en particular.
class Programador(Empleado):
    def __init__(self, nombre, apellido, sueldo, lenguaje):
        super().__init__(nombre, apellido, sueldo)
        self.lenguaje = lenguaje

    def calcular_salario_neto(self):
        # Aquí puedes realizar cálculos específicos para el salario de un programador,
        # incluyendo bonos y deducciones.
        salario_neto = super().calcular_salario_neto()  # Obtener el salario base
        # Realizar cálculos adicionales aquí (por ejemplo, bonos, deducciones, etc.)
        return salario_neto