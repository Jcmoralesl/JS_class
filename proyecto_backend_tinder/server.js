const express = require('express');
const server = express();
const port = 3000;

const Routes = require ('./routes');

server.use(express.json());
server.use('/api/v1/empresa' , Routes.empresaRoutes);
server.use('/api/v1/habilidades' , Routes.habilidadesRoutes);
server.use('/api/v1/personas' , Routes.personasRoutes);
server.use('/api/v1/servicio' , Routes.servicioRoutes);
server.use('/api/v1/personahabilidad' , Routes.persona_habilidadRoutes);



server.listen(port, () => {
    console.log(`API escuchando en puerto: ${port}`);
});