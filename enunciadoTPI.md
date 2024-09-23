# Propuesta TP DSW

## Grupo

### Integrantes

| Legajo | Apellido  | Nombre/s      |
| :----- | :-------- | ------------- |
| 51278  | Giraudo   | Mauro Facundo |
| 50469  | Pastorino | Juan José     |
| 50707  | González  | Tomás         |

### Repositorios

- [backend app](https://github.com/MauroGiraudo/tp_DSW_backend)

* [frontend app](https://github.com/MauroGiraudo/tp_DSW_frontend)

## Tema

### Descripción

Nuestro proyectó tratará de una aplicación para un restaurante que permitirá a los clientes, entre otras funcionalidades, registrarse e iniciar sesión (identificarse) y realizar pedidos, armándolos con los distintos platos disponibles. Estos tienen la posibilidad de ser cancelados en cualquier momento antes de la hora de la entrega.

### Modelo

- [Modelo de Dominio](https://drive.google.com/drive/folders/1Gl5JQgvYNaK7awIbvqVYGqJqiM9sf3kV?usp=sharing)

* [Modelo Entidad Relacion](https://drive.google.com/drive/folders/1Gl5JQgvYNaK7awIbvqVYGqJqiM9sf3kV?usp=sharing)

## Alcance Funcional

### Alcance Mínimo

| Req               | Detalle                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CRUD simple       | 1. Usuario<br>2. TipoPlato<br>3. Mesa<br>4. Tarjeta<br>5. Proveedor                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| CRUD dependiente  | 1. Ingrediente {depende de} CRUD Proveedor<br>2. Plato {depende de} CRUD TipoPlato y CRUD Ingrediente<br>3. Pedido {depende de} CRUD Plato, CRUD Bebida, CRUD Usuario y CRUD Mesa<br>4. Reseña {depende de} CRUD Pedido<br>5. ElaboracionPlato {depende de} CRUD Ingrediente y CRUD Plato<br>6. PlatoPedido {depende de} CRUD Plato y CRUD Pedido<br>7. BebidaPedido {depende de} CRUD Bebida y CRUD Pedido<br>8. TarjetaCliente {depende de} CRUD Tarjeta y CRUD Usuario<br>9. Pago {depende de} CRUD Pedido y CRUD TarjetaCliente<br>10. Bebida {depende de} CRUD Proveedor |
| Listado + Detalle | 1. Listado de Platos por tipoPlato, apto para veganos, celíacos o vegetarianos.<br>2. Listado de pedidos cancelados, muestra id y detalle del pedido, id del cliente y fecha y hora de cancelación<br>3. Listado de ingredientes que han alcanzado el punto de pedido y necesitan reposición de stock                                                                                                                                                                                                                                                                         |
| CUU/Epic          | 1. Realizar un pedido (implica creación y actualización constante del mismo hasta alcanzar el estado "Finalizado")<br>2. Cancelar un pedido<br>3. Registrar Reseña de pedido finalizado                                                                                                                                                                                                                                                                                                                                                                                       |

Adicional para Aprobación:

| Req      | Detalle                                                                                                                                                                                                                                     |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CRUD     | 1. Usuario<br>2. Pedido<br>3. TipoPlato<br>4. Tarjeta<br>5. Ingrediente<br>6. Plato<br>7. TarjetaCliente<br>8. Reseña<br>9. ElaboracionPlato<br> 10. PlatoPedido<br>11. Mesa<br>12. Pago<br>13. Proveedor<br>14. Bebida<br>15. BebidaPedido |
| CUU/Epic | 1. Realizar un pedido<br>2. Cancelar un pedido<br>3. Registrar Reseña de pedido finalizado                                                                                                                                                  |
