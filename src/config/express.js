import express from 'express';
import morgan from 'morgan';
//import app from './config/express';

import rolesRoutes from '../routes/roles.routes';

const app = express();
app.use(morgan(process.env.NODE_LOG || 'dev'));
app.use(express.json());

app.use('/roles', rolesRoutes);

export default app;
