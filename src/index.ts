
import express, { Express } from 'express';
import cors from 'cors';
import connectDB from './config/database';
import projectRoutes from './routes/project.routes';
import serviceRoutes from './routes/service.routes';
import technologyRoutes from './routes/technology.routes';
import translationRoutes from './routes/translation.routes';
import contactRoutes from './routes/contact.routes';
import cvRoutes from './routes/cv.routes';

import { seedProjects } from './controllers/project.controller';
import { seedServices } from './controllers/service.controller';
import { seedTechnologies } from './controllers/technology.controller';

// Connect to Database
connectDB().then(() => {
    seedProjects();
    seedServices();
    seedTechnologies();
});

const app: Express = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/technologies', technologyRoutes);
app.use('/api/translations', translationRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/cv', cvRoutes);

const PORT: string | number = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));
