# Manual API "Alma Criolla"

## Entidades:

### Proveedor

{
id?: number

cuit!: string

razonSocial!: string

direccion!: string

ciudad!: string

provincia!: string

pais!: string

telefono!: string

email!: string

ingredienteDeProveedor = new Collection<IngredienteDeProveedor>(this)

bebidasDeProveedor = new Collection<BebidaDeProveedor>(this)
}

### Bebida

{
codBebida?: number

descripcion!: string

stock!: number

unidadMedida!: string

contenido!: number

precio!: number

alcohol?: string

imagen?: string | null

bebidasPedido = new Collection<BebidaPedido>(this)

bebidasDeProveedor = new Collection<BebidaDeProveedor>(this)
}

### BebidaDeProveedor

{
bebida!: Rel<Bebida>

proveedor!: Rel<Proveedor>
}

### Ingrediente

{
codigo?: number

descIngre!: string

puntoDePedido!: number

stock!: number

unidadMedida!: string

aptoCeliacos!: boolean

aptoVegetarianos!: boolean

aptoVeganos!: boolean

elaboracionesPlato = new Collection<ElaboracionPlato>(this)

ingredienteDeProveedor = new Collection<IngredienteDeProveedor>(this)
}

### IngredienteDeProveedor

{
ingrediente!: Rel<Ingrediente>

proveedor!: Rel<Proveedor>
}

### TipoPlato

{
numPlato?: number

descTPlato!: string

platos = new Collection<Plato>(this)
}

### Plato

{
numPlato?: number

descripcion!: string

tiempo!: number

precio!: number

aptoCeliacos!: boolean

aptoVegetarianos!: boolean

aptoVeganos!: boolean

imagen?: string

tipoPlato!: Rel<TipoPlato>

elaboracionesPlato = new Collection<ElaboracionPlato>(this)

platoPedidos = new Collection<PlatoPedido>(this)
}

### ElaboracionPlato

{
ingrediente!: Rel<Ingrediente>

plato!: Rel<Plato>

cantidadNecesaria!: number
}

### Usuario

{
id?: number

nombre!: string

apellido!: string

email!: string

contrasenia!: string

telefono?: string

tipoUsuario!: string

pedidos = new Collection<Pedido>(this)

tarjetasCliente = new Collection<TarjetaCliente>(this)
}

### Mesa

{
nroMesa?: number

cantPersonasMax!: number

estado!: string

pedidos = new Collection<Pedido>(this);
}

### Pedido

{
nroPed?: number

estado: string = 'en curso'

fecha?: Date

hora?: string

fechaCancelacion?: Date

horaCancelacion?: string

cliente!: Rel<Usuario>

mesa!: Rel<Mesa>

platosPedido = new Collection<PlatoPedido>(this)

bebidasPedido = new Collection<BebidaPedido>(this)

pago?: Rel<Pago>

resena?: Rel<Resena>
}

### PlatoPedido

{
pedido!: Rel<Pedido>

plato!: Rel<Plato>

fechaSolicitud?: Date

horaSolicitud?: string

cantidad!: number

fechaEntrega?: Date

horaEntrega?: string

entregado?: boolean = false
}

### BebidaPedido

{
bebida!: Rel<Bebida>

pedido!: Rel<Pedido>

fechaSolicitud?: Date

horaSolicitud?: string

cantidad!: number

fechaEntrega?: Date

horaEntrega?: string

entregado?: boolean = false
}

### Tarjeta

{
idTarjeta?: number

descTarjeta!: string

tarjetaClientes = new Collection<TarjetaCliente>(this)
}

### TarjetaCliente

{
nroTarjeta!: string;

tipoTarjeta!: string;

bancoTarjeta!: string;

titular!: string;

vencimiento!: Date;

codSeguridad!: number;

tarjeta!: Rel<Tarjeta>;

pagos = new Collection<Pago>(this)

cliente!: Rel<Usuario>
}

### Pago

{
pedido!: Rel<Pedido>;

idPago!: string

fechaPago?: Date

horaPago?: string

importe!: number

tarjetaCliente?: Rel<TarjetaCliente>
}

### Resena

{
pedido!: Rel<Pedido>

fechaHoraResena?: Date

fechaHoraModificacion?: Date

cuerpo!: string

puntaje!: number
}

## End-Points:

### GET /api/proveedores

- Función: Devuelve todos los proveedores registrados en el sistema

- response.body = {message: string, data: Proveedor[]}

### GET /api/proveedores/:id

- Función: Devuelve un único proveedor según el "id" ingresado

- response.body = {message: string, data: Proveedor}

### POST /api/proveedores

- Función: Registra un nuevo proveedor en el sistema

- request.body = Proveedor

- response.body = {data: Proveedor}

### PUT /api/proveedores/:id

- Función: Actualiza un proveedor existente haciendo uso de los datos enviados

- request.body = Proveedor

- response.body = {message: string, data: Proveedor}

### PATCH /api/proveedores/:id

- Función: Actualiza un proveedor existente, según el "id" ingresado, haciendo uso de los datos enviados

- request.body = Proveedor?

- response.body = {message: string, data: Proveedor}

### DELETE /api/proveedores/:id

- Función: Elimina un proveedor del sistema según el "id" ingresado

- response.body = {message: string, data: Proveedor}

##################################################################################################################################################################

### GET /api/platos/tipos

- Función: Devuelve todos los tipos de plato registrados en el sistema

- response.body = {message: string, data: TipoPlato[]}

### GET /api/platos/tipos/:numPlato

- Función: Devuelve un único tipo de plato según el "numPlato" ingresado

- response.body = {message: string, data: TipoPlato[]}

### POST /api/platos/tipos

- Función: Registra un nuevo tipo de plato en el sistema

- request.body = TipoPlato

- response.body = {message: string, data: TipoPlato[]}

### PUT /api/platos/tipos/:numPlato

- Función: Actualiza un tipo de plato existente haciendo uso de los datos enviados

- request.body = TipoPlato

- response.body = {message: string, data: TipoPlato[]}

### PATCH /api/platos/tipos/:numPlato

- Función: Actualiza un tipo de plato existente, según el "numPlato" ingresado, haciendo uso de los datos enviados

- request.body = TipoPlato?

- response.body = {message: string, data: TipoPlato[]}

### DELETE /api/platos/tipos/:numPlato

- Función: Elimina un tipo de plato del sistema según el "numPlato" ingresado

- response.body = {message: string, data: TipoPlato[]}

##################################################################################################################################################################
