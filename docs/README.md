# Minutas de Avance (Back-end):

## Semana del 13/05/24:

- Comienzo del proyecto. 

- Creación de la entidad "TipoIngrediente"

- Se crearon los métodos "findAll", "getOne", "add" y "update" de la entidad "TipoIngrediente"

## Semana del 20/05/24:

- Se creó el método "delete" de la entidad "TipoIngrediente"

## Semana del 10/06/24:

- Se creó la entidad "Cliente"

- Se crearon los métodos "findAll", "getOne", "add", "update" y "delete" de la entidad "Cliente"

- Se creó la entidad "Ingrediente"

- Se crearon los métodos "findAll", "getOne", "add", "update" y "delete" de la entidad "Ingrediente"

## Semana del 17/06/24:

- Corrección de errores en los métodos "add", "update" y "delete" de la entidad "Cliente"

## Semana del 24/06/24:

- Corrección en el archivo .http de la entidad "Ingrediente" para comprobar el correcto funcionamiento de sus métodos

- Corrección en el archivo .http de la entidad "Cliente" para comprobar el correcto funcionamiento de sus métodos

- Pequeña corrección en el archivo "cliente.controller.ts", donde se evaluaba incorrectamente el resultado de la operación en el método "update"

## Semana del 15/07/24:

- Se creó la entidad "TipoPlato"

- Se crearon todos los métodos de la entidad "TipoPlato"

- Se creó la entidad "Plato"

- Se crearon todos los métodos de la entidad "Plato"

- Corrección de errores en los métodos de las entidad "TipoPlato" y "Plato"

- Se creó la entidad "ElaboracionPlato" junto con todos sus métodos

- Se creó la entidad "Pedido" junto con todos sus métodos

## Semana del 22/07/24:

- Corrección de errores menores en los métodos de la entidad "Pedido"

- Actualización del proyecto para utilizar "Mikro-orm" para el almacenamiento de los datos en una base de datos "MySQL" en lugar del formato "repository"

- Se actualizaron las entidades "Ingrediente" y "TipoIngrediente"

## Semana del 29/08/24:

- Se eliminaron los archivos correspondientes a las entidades elaboradas con el formato "repository"

## Semana del 05/08/24:

- Se reubicaron los archivos de las entidades "Ingrediente" y "TipoIngrediente" en una misma carpeta

## Semana del 12/08/24:

- Se actualizaron las entidades "Cliente", "Plato" y "TipoPlato" junto con sus métodos para funcionar con Mikro-Orm

- Corrección de errores en los métodos de las entidades "Cliente", "Plato" y "TipoPlato"

- Se actualizó la entidad "ElaboraciónPlato" junto a sus métodos

## Semana del 19/08/24:

- Se actualizó la entidad "Pedido" junto con sus métodos y se creó la entidad "PlatoPedido" junto con todos sus métodos

- Se creó la entidad "Reseña" junto con sus métodos

- Corrección de errores menores en los métodos de la entidad "TipoPlato"

- Se eliminaron las carpetas "node_modules" y "dist" del repositorio principal y se incorporó el archivo ".gitignore"

- Correcciones a Pedido, Creación de pedidoCliente.controller y pedidoCliente.routes para permitir a los clientes ver sus propios pedidos

- Cambio de nombre de la entidad "Reseña" a "Resena" por problemas al utilizar mikro-orm.

- Entidades Plato y Pedido corregidas (faltaba la referencia a la entidad PlatoPedido). Falta controlar los controladores y que funcionen las consultas http

- CRUD Ingrediente y Proveedor FINALIZADOS. CRUD IngredienteDeProveedor listo (FALTA PROBAR)

## Semana del 26/08/24:

- Actualización de atributos de algunas entidades (Ingrediente, IngredienteDeProveedor, ElaboracionPlato). PlatoPedido FUNCIONA

## Semana del 02/09/24:

- Creación de las entidades "Pago", "Mesa", "Tarjeta" y "TarjetaCliente" junto con sus métodos

- Creación de la entidad "Bebida" junto con sus operaciones CRUD. Falta arreglar el método "findAll" de la entidad "Pago"

- Finalmente no se definió la operación "findAll" para la entidad "Pago". 

## Semana del 09/09/24:

- Manejo de errores y validaciones de la entidad PROVEEDOR

- Se creó la entidad "BebidaDeProveedor" junto con sus operaciones CRUD

- Manejo de errores y validaciones de la entidad "Bebida"

- Validaciones para: 
  - Exigir la existencia de, al menos, un proveedor para poder ingresar ingredientes
  - Exigir la existencia de, al menos, un tipo de plato y un ingrediente para ingresar un plato

- Actualización de validaciones de tipos para utilizar "Zod". Validaciones y manejo de errores de la entidad "Proveedor" actualizados

- Corrección del método "update" del Proveedor (FUNCIONA). 

- Entidad "Cliente" actualizada a "Usuario", métodos addCliente y addEmpleado creados, validaciones y manejo de errores implementados. 

- Entidad "Mesa" con validaciones y manejo de errores.

## Semana del 16/09/24:

- Actualización a las validaciones de las entidades "Mesa", "Proveedor" y "Usuario"

- Incorporación del atributo "codigo" a la entidad "mesa", el cual será utilizado para la inicialización de un nuevo pedido de un cliente. Este se genera y actualiza cada vez que busco una mesa en particular.

- Validaciones y Manejo de Errores en: "Tarjeta", "Ingrediente", "Bebida", "IngredienteDeProveedor", "BebidaDeProveedor"

- Manejo de errores de "Plato" y "TipoPlato"

- Modificación en la estructura de carpetas

- Corrección de la ruta de acceso al Router "clientePedidoPagoRouter"

- Validaciones y Manejo de errores de "TarjetaCliente"

- Validación de la unidad de medida del ingrediente (sólo asume valores específicos como "gramos" o "mililitros")

- Se crearon errores personalizados para todas las entidades, con sus propios mensajes de error. Estos son implementados en el controlador de cada una de ellas.

- Se generalizó la función "handleErrors" y ahora se encuentra en ./shared/errors/errorHandler.ts

- En el commit anterior se realizó una validación para la entidad "Ingrediente" con el objetivo de usar z.function() para sólo aceptar ciertos strings en particular. En las demás entidades (De ser necesario), se realizarán como: z.string(z.enum(['val1', 'val2', ...]))

- Se crearon las validaciones para ingreso de datos de: BebidaPedido, PlatoPedido, TarjetaCliente, Pago y Pedido. También se incorporó la función "handleErrors" para manejar errores.

- Se incorporó un nuevo atributo a la entidad "Reseña": fechaModificacion. El mismo se actualiza cada vez que se modifique la reseña.

- Se creó la función "validarFindAll", con el objetivo de mostrar un mensaje de error si la devolución del findAll de alguna entidad es un arreglo vacío.

- Se modificaron las rutas y los métodos CRUD de la entidad "Pago" acorde al alcance del negocio. La clave primaria es el pedido.

- Se creó el método "establecerFechaYHora" para todas las entidades que tienen fecha y/u hora y que debe /n establecerse al momento de ser creadas

- Se creó el método "calcularImporte" para, como podrá suponerse, calcular el importe del pago basándonos en el precio de los platos y bebidas del pedido asociado.

- Se agregó el método "validarFindAll" al método "findAll" de la entidad "Usuario".

- Se incorporó la función "establecerFechaYHora" con el hook "BeforeCreate" en las entidades Pedido, PlatoPedido y BebidaPedido.

- Se incorporó el manejo de queryString para recibir descripciones parciales de la bebida en la entidad Bebida

- Se crea una instancia de "BebidaDeProveedor" junto con la bebida. Ambas son persistidas a la vez. Se requiere enviar al proveedor junto con la información necesaria para crear una instancia de "Bebida".

- Sobrecarga del error "BebidaNotFoundError" generada en caso de no encontrar ninguna bebida para el método "findAll".

- Manejo de la creación de una instancia "IngredienteDeProveedor" al ejecutar la operación "add" del Ingrediente

- Manejo de queryStrings para descripciónParcial, aptoCeliacos, aptoVeganos y aptoVegetarianos del método "findAll" de la entidad "Ingrediente".

- Se creó una función "sanitizeQuery" que elimina los campos vacíos de la queryString y se asegura de que los tipos de las variables recibidas son adecuados para que el Entity Manager pueda hacer la búsqueda correctamente.

- Atributo "estado" de la entidad "Pedido" establecido por default en "En Curso"

- Función sanitizadora incorporada al controlador de la entidad "Plato"

- Se agregó la sobrecarga necesaria al error "IngredienteNotFoundError" para ser utilizado en el método "validarFindAll".

## Semana del 23/09/24:

- Se agregó un atributo "type: string" a todos los errores, al cual se le asignó el nombre del tipo de error. La función error handler ahora consulta si el atributo "type" existe para, posteriormente, mostrar el mensaje de error correspondiente. Esto reduce sustancialmente la cantidad de condiciones del método "handleErrors".

- Manejo de queryString para la operación "findAll" de la entidad "Plato"

- CU: Registrar Plato CASI terminado (falta asignar si es apto para celíacos, veganos y vegetarianos según los ingredientes que lo componen)

- FALTA AGREGAR un borrado de "ElaboraciónPlato" asociadas al "Plato" al ejecutar el método "remove" de la entidad "Plato"

- La función "add" de la entidad "Plato" funciona correctamente. Valida y crea tanto al plato como las instancias de "ElaboraciónPlato" según la cantidad de ingredientes que lo componen.

- La función "remove" también elimina todas las instancias de "ElaboraciónPlato" asociadas al plato que queremos borrar.

- Falta ASEGURAR que la variable "tipoPlato" que viene por queryString se guarde efectivamente como "TipoPlato" y no con su id.

- Método "findAll" de la entidad "Plato" funciona correctamente. Entidad "Plato" FINALIZADA.

- Se arregló el método "remove" de la entidad "Ingrediente", la cual no eliminaba las instancias de "IngredienteDeProveedor" asociadas cuando se intentaba eliminar el ingrediente, causando un error.

- Se arregló el método "remove" de la entidad "Proveedor" para que valide su eliminación y la permita sólo si ningún ingrediente o pedido depende únicamente de él. Posteriormente elimina la entidad junto con todas las instancias de "IngredienteDeProveedor" y "BebidaDeProveedor".

- Se incorporó la función sanitizadora a los métodos "update" de las entidades "Ingrediente" y "Plato"

- Pensar en incorporar un atributo "estado" o "activo" en la entidad "Plato" para poder darlo de baja o no. Esto porque no debería ser posible eliminar un plato si ya fue pedido en algún momento por un cliente, ya que causaría inconsistencias en el sistema.

- Se agregó la función "isConflictError" en "errorHandler.ts" para validar si un error debe enviar el código 409.

- Validamos que, al intentar eliminar una tarjeta, se verifique que no exista ninguna tarjeta de cliente de ese tipo (Visa, Mastercard, etc)

- Se agregó la función sanitizadora para la entidad "TarjetaCliente".

- Errores "UsuarioIsNotAllowedError" y "UsuarioUnauthorizedError" creados. Fueron incorporados en la entidad "TarjetaCliente".

- POR HACER:
1: Incorporar los errores "UsuarioIsNotAllowedError" y "UsuarioUnauthorizedError" en los métodos que correspondan (como los de Ingrediente, Proveedor, Plato, etc)

2: Terminar el CU de Pedido

- Función "isUnauthorized" incorporada en "errorHandler.ts".

- Métodos POST, PUT, PATCH y DELETE eliminados del controlador "pedido.controller.ts". La url "/api/pedidos" será utilizada únicamente por los usuarios empleados para ver los pedidos registrados y no podrán modificar, crear ni eliminar pedidos.

- Validación de la creación y modificación de pedidos (add TERMINADO. Update EN PROCESO).

- Arreglar el método "update" de la entidad "Bebida". Parece que tendremos que implementar el método que creamos en el schema de las demás entidades.

- Se utilizó el método "isIn" para determinar los valores posibles del atributo "unidadMedida" de la entidad "Bebida". También se definió el tipo "FloatType" de los atributos "precio" y "contenido".

- Se estableció el tipo "DateType" para las fechas y el tipo "TimeType" para las horas.

- Pensar en agregar como validación a la creación del pedido que el cliente tenga, al menos, una tarjeta registrada.

- Método para incorporar platos y bebidas al pedido CREADO (update con PATCH en la entidad "Pedido").
Para marcar como entregados los platos y  bebidas, ejecutar el método update (PUT) de platoPedido y bebidaPedido, respectivamente.

- Métodos del CU "Realizar pedido" terminados.

- Realizar CU "Realizar reseña de pedido finalizado"

- Utilizamos la dependencia "bcrypt" para proteger la contraseña del usuario.

- Se modifico el error "NotFound" para todas las entidades, permitiendo ingresar mensajes personalizados según sea necesario (sigue contando con un mensaje por defecto, el cual es el más común).

- Se creó el tipo "publicUser" dentro de "usuario.entity.ts", que define los atributos que se devuelven del usuario cuando este inicia sesión.

- Se creó el método "asPublicUser()" dentro de la clase "Usuario", el cual convierte al usuario en un "publicUser".

- Utilizamos la dependencia JSON Web Tokens para definir la sesión del usuario.

- Utilizamos la dependencia "cookie-parser" para guardar el token dentro de una cookie (y que la sesión del usuario sea un poco más segura).

- Adaptamos el método "findOne" de la entidad "Usuario" para que tenga en cuenta el token a la hora de permitir ser utilizado.

- LogIn implementado en back-end. CONECTAR CON EL FRONT Y PROBAR

## Semana del 30/09/24:

- Se incorporó la URL del front-end para que sólo esta sea admitida.

- Se utilizó la dependencia "cors" para manejar el Cross Origin Resource Sharing para con nuestro front-end

- Se incorporó el atributo "imagen", el cual corresponde a la URL de la imágen de la entidad "Plato".

## Semana del 07/10/24:

- Nombre del atributo "mail" de la entidad Usuario modificado (mail   =>   email)

- Convertimos el email del usuario a minúscula antes de ser guardado.

- El tipo de usuario por defecto es "cliente"

- Recordar activar luego los permisos en cada uno de los métodos según el tipo de usuario

- Validación del tipo de usuario arreglada

- Corrección de error en el método "asPublicUser" de la entidad "Usuario". El atributo "email" mostraba el apellido en lugar del email.

- Modificaciones a las relaciones entre entidades | Manejo de queryString para los pedidos | Fecha y hora de entrega para bebidas y pedidos.

- ElaboraciónPlato: findAll y add ELIMINADOS

- BebidaPedido: findAll, add y findOne ELIMINADOS

- PlatoPedido: findAll ELIMINADO

- BebidaDeProveedor: findAll ELIMINADO

- IngredienteDeProveedor: findAll ELIMINADO

- los recursos "pedido" y "pedidoCliente" manejan algunos de sus atributos como queryString (fecha, fechaCancelación, etc)

- Se incorporaron los atributos "fechaEntrega" y "horaEntrega" para las entidades "PlatoPedido" y "BebidaPedido". También se creó un método, el cual establece la fecha y hora de entrega de los productos.

- Modificaciones en la entidad "Mesa". Atributo "codigo" de la entidad "Mesa" ELIMINADO. También fue removida su utilización en la creación del pedido.

## Semana del 28/10/24:

- Se agregaron los atributos "alcohol" e "imagen" en la entidad "Bebida". También se actualizó la validación de tipos de la entidad

## Semana del 04/11/24:

- Idea: Modificación de la funcionalidad: "Agregar Plato/Bebida al pedido":

En un principio, la idea era incorporar un conjunto de platos/bebidas al pedido para que quedaran pendientes de entrega a la mesa. El problema es que estos se enviaban dentro del arreglo de platos/bebidas del pedido, respectivamente.
Ahora, en lugar de hacer esto, buscaremos hacer uso del recurso "platoPedido/bebidaPedido" para agregar, uno a uno, el alimento que se desee al pedido.

Se implementará esta funcionalidad en la rama "modificación_agregar_alimento_al_pedido". Una vez funcione, se incorporará a main.

- Las bebidas se agregan al pedido correctamente

- Los platos se agregan al pedido correctamente

- Se acomodó el método "update" de "PedidoCliente" para que, por un lado, maneje la finalización del pedido y, por otro, la cancelación del mismo. Se quitó la funcionalidad donde se incorporan platos y bebidas al pedido.

- FALTA: Tener en cuenta el stock de los ingredientes a la hora de incoporar productos al pedido

- Incorporamos el atributo "stock" a la entidad "Bebida".

- Ahora, cuando agregamos un ingrediente o una bebida al pedido, se resta la cantidad correspondiente del stock de ingredientes o bebidas, respectivamente.

- Ahora el atributo "imagen" de la entidad "Bebida" puede ser nulo. También se actualizó la validación de esta entidad.

## Semana del 11/11/24:

- Métodos FindAll y FindOne agregados a las entidades "BebidaPedido" y "PlatoPedido"

- Mejoras en el formato de algunos archivos (por problemas con una extensión)

- El método para cancelar un pedido ahora modifica exitosamente el estado de la mesa a "Disponible"

## Semana del 03/02/25:

- Entidad "Resena" actualizada. 

Al crear una reseña se valida, primero que nada, que el id del pedido ingresado corresponda a un pedido existente finalizado y, por otro lado, que ese pedido no cuenta ya con una reseña. Hecho esto, se procede a crear la reseña, ingresando el cuerpo de la misma (no más de 500 caracteres) y un puntaje entre 1 y 5 (números enteros). También es posible actualizar o eliminar la reseña.

- Se eliminó un console.log de más en el controlador de la reseña.

- Cambiamos el resultado devuelto por la función "validarPlatoPedidoToPatch" por "req.body.sanitizedInput". El hecho de que tanto la fecha como la hora sean de tipo "string" en lugar de "Date" y "Time", respectivamente, puede generar problemas a la hora de realizar la búsqueda en la base de datos.

- Misma corrección pero con la operación "Cancelar Pedido".

- También se corrigió un error en el que no se tuvo en cuenta si el plato/bebida se encontraba "entregado" antes de considerar si permitir o no cancelar el pedido (sólo se tenía en cuenta si había un plato/bebida dentro del pedido)

- Se incorporó el método "findAll" de las cantidades de los ingredientes necesarios para elaborar un plato (entidad "ElaboraciónPlato")

## Semana del 10/02/25:

- Se utilizó el framework "Vitest" y "Supertest" para realizar los tests necesarios.

- Testing de la entidad "Proveedor" finalizado

- Método "PUT" de la entidad "Tarjeta Cliente" incorporado

- Sólo el método "PUT" está disponible para el CRUD de la entidad "TarjetaCliente"

- Validaciones incorporadas al método "PUT" de la entidad "TarjetaCliente"

- Todos los test fueron ubicados dentro del mismo archivo .ts.

- Test de la entidad "Tarjeta" finalizado.

- Falta el test de la entidad "Usuario" y el test de integración

- Rutas de los métodos "add", "update" y "delete" de la entidad "Reseña" actualizados para validar el usuario que desea interactuar con la entidad.

## Semana del 17/02/25:

- Testing de la entidad "Reseña" y del CU: Realizar un pedido FINALIZADOS

- Se modificaron las rutas de:

  - PUT de las entidades "BebidaPedido y PlatoPedido"

  - Las validaciones hechas con "Zod" de las entidades al CU testeado fueron modificadas para evitar inconvenientes a la hora de realizar los tests

- PUT de la entidad TarjetaCliente CORREGIDO

- Se incorporó la url "http://localhost:9876" al arreglo de orígenes que tienen permiso para hacer uso de los métodos del back-end.
Esta URL corresponde a la utilizada por el framework "Cypress" para realizar los tests necesarios.

- Error en el método "cancel" de la entidad "PedidoCliente" CORREGIDO (asociado a la validación del id del usuario)

- A su vez se corrigió el error anterior en los métodos de la entidad "Resena"

# Minutas de Avance (Front-end)

## Semana del 13/05/24:

- Repositorio inicializado

## Semana del 24/06/24:

- Boilerplate iniciado

## Semana del 26/08/24:

- Se crearon los componentes de las entidades "Cliente", "Ingrediente", "Pedido", "Plato", "Proveedor" y "TipoPlato", mas no se desarrolló su contenido.

## Semana del 02/09/24:

- Se eliminaron los componentes "Ingrediente", "Pedido", "Plato", "Proveedor" y "TipoPlato"

- Se crearon los componentes "Home" y "Login"

- Se creó la carpeta "Service" para almacenar los servicios de nuestra aplicación (consumo de los recursos del back-end)

- Se creó el servicio para las operaciones asociadas a la entidad "Plato"

## Semana del 09/09/24:

- Se creó una barra de navegación que permite al usuario desplazarse entre todas las funcionalidades disponibles. La misma se encuentra del lado izquierdo de la pantalla y puede ser desplegada presionando en botón que se encuentra en la esquina superior izquierda de la página web. Se encuentra desarrollada dentro del componente "Side-nav".

Aún falta agregar los demás componentes de la aplicación y sus rutas correspondientes

- Se crearon los componentes "Carta" y "Main"

- Se movió el contenido del componente "Home" al componente "Carta"

## Semana del 16/09/24:

- Se creó el componente "Pedido".

## Semana del 30/09/24:

- Se modificó el componente "Home" con una breve descripción de la historia del negocio

- Se muestra la lista de platos registrados en el sistema en el componente "Carta". Estos cuentan con una animación que, cuando se posiciona el mouse sobre el plato en cuestión, este se voltea y muestra información adicional.

- El componente pedido muestra correctamente los platos que fueron agregados al pedido por el cliente (una vez que el pedido fue creado)

- Se creó el componente "Registro" (falta su desarrollo)

## Semana del 07/10/24:

- Se desarrolló el componente "Registro". A su vez se creó y desarrolló el componente "Login" (aún no funcionan)

- Se incorporó el campo "tipoUsuario" al formulario de registro.

- Las interfaces para el registro e inicio de sesión fueron implementadas y funcionan correctamente.

- Las rutas para acceder a ambos deben asignarse a la barra lateral.
También deberíamos mostrar la opción de "Iniciar Sesión" únicamente cuando el usuario no la inició aún. Luego, debería permanecer "invisible".

## Semana del 21/10/24:

- Se creó el componente "Mesa" junto con su estructura, estilos y funcionalidad.

## Semana del 28/10/24:

- Se incorporaron submenús a la barra de navegación lateral

- Se creó el componente "Carta-Bebida", en el cual se muestran las bebidas registradas en el sistema con el mismo formato de los platos.

- Se crearon los componentes para las operaciones CRUD de la entidad "Proveedor" (sólo empleados)

## Semana del 04/11/24:

- Se crearon los componentes para las operaciones CRUD de la entidad "Mesa" (se modificó el nombre del componente "Mesa" a "Mesa-Lista") 

- Ahora, cuando el usuario se registra, lo redirecciona a la página de inicio de sesión

- Se crearon los componentes para las operaciones CRUD de la entidad "Bebida"

- Se crearon los componentes para las operaciones CRUD de la entidad "TipoPlato"

## Semana del 11/11/24:

- Se crearon los componentes para las operaciones CRUD de la entidad "Pedido" (asociado al CU: Realizar Pedido)

- Se incorporó un detalle de los datos del cliente en la opción "Cuenta" del menú de navegación (componente "Cliente")

- Se mejoró el filtro de la barra de navegación lateral

- Ahora, si el usuario es un empleado, se muestra el stock de bebidas en la carta de bebidas

- Ahora es posible cancelar un pedido si el mismo se encuentra vacío o los productos solicitados aún no fueron entregados

- Se incorporó un listado con los pedidos del cliente cuya sesión se encuentra iniciada.

- Se mejoró la estética del código

- Se crearon los componentes para las operaciones CRUD de la entidad "Ingrediente"

- Se incorporó un filtro para visualizar los ingredientes cuyo stock sea mayor / menor al punto de pedido (sólo empleados)

- Se incorporó un filtro al listado de pedidos del cliente que permite ver los pedidos en curso / cancelados / finalizados

- Se crearon los componentes para las operaciones CRUD de la entidad "Tarjeta" (falta desarrollar)

## Semana del 03/02/25:

- Se desarrollaron los componentes del CRUD de la entidad "Tarjeta"

- Se crearon los componentes del CRUD de la entidad "Plato" (falta "delete")

- Se incorporaron a la barra de navegación lateral las funciones: (faltan desarrollar)
  - Ver reseñas
  - Crear reseña
  - Modificar reseña
  - Eliminar reseña
  - Registrar nueva tarjeta
  - Modificar tarjeta
  - Eliminar tarjeta
  - Crear ElaboraciónPlato (cantidad necesaria de un ingrediente para preparar un plato)
  - Modificar ElaboraciónPlato
  - Eliminar ElaboraciónPlato

- Funcionalidades para modificar y eliminar una "ElaboracionPedido" FUNCIONALES

- Se desplazó los componentes del CRUD de "ElaboraciónPlato" dentro de la carpeta "carta-comida"

- CRUD de "ElaboraciónPlato" finalizado

- CRUD de "Plato" finalizado

## Semana del 10/02/25:

- Se muestra un error cuando el usuario se está registrando y ocurre algún problema

- Operaciones CRUD "POST" y "DELETE" de la entidad "Reseña" incorporadas

- Operación CRUD "PUT" de la entidad "Reseña" incorporada (falta el listado de reseñas)

- CRUD de la entidad "Reseña" FINALIZADO

- Operaciones CRUD "POST" Y "DELETE" de la entidad "TarjetaCliente" incorporadas

- Listado de tarjetas del cliente incorporado (TarjetaCliente)

- Corrección de un error por el que a veces no se detectaba el pago o el mismo era realizado pero era imposible finalizar el pedido

- Modificaciones a la url de la para utilizar los servicios de la entidad "Reseña" (cambió la URL en el back-end)

- Ahora es posible elegir la tarjeta con la que el cliente realizará el pago desde el propio pedido

## Semana del 17/02/25:

- Modificación del html y estilos para adaptar la aplicación a dispositivos móviles en los componentes:
  - Proveedor
  - Ingrediente
  - TipoPlato
  - Mesa
  - Tarjeta
  - Reseña
  - TarjetaCliente
  - Bebida
  - ElaboraciónPlato
  - Plato

- Se incorporó una funcionalidad que pemite eliminar los platos o bebidas del pedido que aún no fueron entregados ("cancelar plato/bebida")

- Se incorporó la operación "PUT" del CRUD de la entidad "TarjetaCliente"

- Correcciones visuales

- Se incorporaron rutas protegidas, evitando que un usuario cliente acceda a funciones correspondientes a un usuario empleado. En su lugar, muestra una página de error.

- Limpieza de comentarios