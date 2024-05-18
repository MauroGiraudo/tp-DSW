# Propuesta TP DSW

## Grupo

### Integrantes

| Legajo | Apellido  | Nombre/s      |
| :----- | :-------- | ------------- |
| 51278  | Giraudo   | Mauro Facundo |
| 50469  | Pastorino | Juan José     |
| 50707  | González  | Tomás         |

### Repositorios

- [backend app](https://github.com/MauroGiraudo/tp_DSW_backend/tree/main)

* [frontend app](https://github.com/MauroGiraudo/tp_DSW_frontend)

## Tema

### Descripción

Nuestro proyectó tratará de una aplicación para un restaurante que permitirá a los clientes, entre otras funcionalidades, registrarse e iniciar sesión (identificarse) y realizar pedidos, armándolos con los distintos platos disponibles. Estos tienen la posibilidad de ser cancelados en cualquier momento antes de la hora de la entrega.

### Modelo

- [Modelo de Dominio](https://github.com/MauroGiraudo/tp-DSW/blob/main/Modelo_de_Dominio_Premilimar_TP_DSW.drawio.pdf)

## Alcance Funcional

### Alcance Mínimo

| Req               | Detalle                                                                                                                                                                                                                                                                                                                                     |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CRUD simple       | 1. Cliente<br>2. TipoPlato<br>3. TipoIngrediente                                                                                                                                                                                                                                                                                            |
| CRUD dependiente  | 1. Ingrediente {depende de} CRUD TipoIngrediente<br>2. Plato {depende de} CRUD TipoPlato y CRUD Ingrediente<br>3. PrecioPlato {depende de} CRUD Plato<br>4. Pedido {depende de} CRUD Plato                                                                                                                                                  |
| Listado + Detalle | 1. Listado de Platoes por ingredientes/tipoPlato/apto para veganos o celíacos/etc, muestra descripción de los Platoes<br>2. Listado de pedidos cancelados, muestra id y detalle del pedido, id del cliente y fecha y hora de cancelación<br>3. Listado de ingredientes que han alcanzado el punto de pedido y necesitan reposición de stock |
| CUU/Epic          | 1. Realizar un pedido<br>2. Cancelar un pedido<br>3. Registrar Reseña                                                                                                                                                                                                                                                                       |

Adicional para Aprobación:

| Req      | Detalle                                                                                                       |
| :------- | :------------------------------------------------------------------------------------------------------------ |
| CRUD     | 1. Cliente<br>2. Pedido<br>3. TipoPlato<br>4. TipoIngrediente<br>5. Ingrediente<br>6. Plato<br>7. PrecioPlato |
| CUU/Epic | 1. Realizar un pedido<br>2. Cancelar un pedido<br>3. Registrar Reseña                                         |
