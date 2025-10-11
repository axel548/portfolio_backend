
import express, { Express } from 'express';
import cors from 'cors';
import connectDB from './config/database';
import projectRoutes from './routes/project.routes';
import serviceRoutes from './routes/service.routes';
import technologyRoutes from './routes/technology.routes';
import contactRoutes from './routes/contact.routes';
import cvRoutes from './routes/cv.routes';
import languageRoutes from './routes/language.routes';
import generalRoutes from './routes/general.routes';

import { seedProjects } from './controllers/project.controller';
import { seedServices } from './controllers/service.controller';
import { seedTechnologies } from './controllers/technology.controller';
import { seedLanguages } from './controllers/language.controller';
import { seedGeneral } from './controllers/general.controller';

// Connect to Database
connectDB().then(() => {
    seedProjects();
    seedServices();
    seedTechnologies();
    seedLanguages();
    seedGeneral();
});

const app: Express = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/technologies', technologyRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/cv', cvRoutes);
app.use('/api/languages', languageRoutes);
app.use('/api/general', generalRoutes);


const PORT: string | number = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));
