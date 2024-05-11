import express from 'express';
import { tipoIngrediente } from "./tipo-ingrediente.js";
const port = 3000;
const app = express();
app.use(express.json());
const tiposIngrediente = [
    new tipoIngrediente('1', 'Verdura')
];
function sanitizeTipoIngrediente(req, res, next) {
    req.body.sanitizedTIngrediente = {
        codigo: req.body.codigo,
        descripcion: req.body.descripcion
    };
    Object.keys(req.body.sanitizedTIngrediente).forEach((keys) => {
        if (req.body.sanitizedTIngrediente[keys] === undefined) {
            delete req.body.sanitizedTIngrediente[keys];
        }
    });
    next();
}
//getAll => muestra todos los tipos de ingredientes registrados
app.get('/api/tiposIngrediente', (req, res) => {
    res.json({ data: tiposIngrediente });
});
//getOne => muestra un único tipo de ingrediente
app.get('/api/tiposIngrediente/:cod', (req, res) => {
    const tIngrediente = tiposIngrediente.find((tipoIngre) => tipoIngre.codigo === req.params.cod);
    if (!tIngrediente) {
        return res.status(404).send({ message: 'Este tipo de ingrediente no se ha encontrado' });
    }
    res.json({ data: tiposIngrediente });
});
//Post => El usuario ingresa un nuevo tipo de ingrediente
app.post('/api/tiposIngrediente', sanitizeTipoIngrediente, (req, res) => {
    const input = req.body.sanitizedTIngrediente;
    const tIngrediente = new tipoIngrediente(input.codigo, input.descripcion);
    tiposIngrediente.push(tIngrediente);
    return res.status(201).send({ message: 'Nuevo tipo de ingrediente creado con éxito', data: tIngrediente });
});
//Faltan PUT, PATCH y DELETE
app.listen(port, () => {
    console.log(`Server running in: http://localhost:${port}/`);
});
//# sourceMappingURL=app.js.map