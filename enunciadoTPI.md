Integrantes:

| Legajo | Apellido  | Nombre/s      |
| :----- | :-------- | ------------- |
| 51278  | Giraudo   | Mauro Facundo |
| 50469  | Pastorino | Juan José     |
| 50707  | González  | Tomás         |

Descripción:

Nuestro proyectó tratará de una aplicación para un restaurante que permitirá a los clientes, entre otras funcionalidades, registrarse e iniciar sesión (identificarse) y realizar pedidos, armándolos con los distintos menúes disponibles. Estos tienen la posibilidad de ser cancelados en cualquier momento antes de la hora de la entrega.

Alcance:

| Req               | Detalle                                                                                                                                                                                                                               |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CRUD simple       | 1. Cliente<br>2. TipoMenú<br>3. TipoIngrediente                                                                                                                                                                                       |
| CRUD dependiente  | 1. Ingrediente {depende de} CRUD TipoIngrediente<br>2. Menú {depende de} CRUD TipoMenú<br>3. PrecioMenú {depende de} CRUD Menú<br>4. Pedido {depende de} CRUD Menú                                                                    |
| Listado + Detalle | 1. Listado de menúes por ingredientes/tipomenú/apto para veganos o celíacos/etc, muestra descripción de los menúes<br>2. Listado de pedidos cancelados, muestra id y detalle del pedido, id del cliente y fecha y hora de cancelación |
| CUU/Epic          | 1. Realizar un pedido<br>2. Cancelar un pedido                                                                                                                                                                                        |

Adicional para Aprobación:

| Req      | Detalle                                                                                                    |
| :------- | :--------------------------------------------------------------------------------------------------------- |
| CRUD     | 1. Cliente<br>2. Pedido<br>3. TipoMenú<br>4. TipoIngrediente<br>5. Ingrediente<br>6. Menú<br>7. PrecioMenú |
| CUU/Epic | 1. Realizar un pedido<br>2. Cancelar un pedido<br>3. Reponer stock de ingrediente                          |
