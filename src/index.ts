
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
import letsTalkRoutes from './routes/lets-talk.routes';
import personalInfoRoutes from './routes/personal-info.routes';
import workRoutes from './routes/work.routes';
import aboutRoutes from './routes/about.routes';
import experienceEducationRoutes from './routes/experience_education.routes';
import testimonialRoutes from './routes/testimonial.routes';
import pricingRoutes from './routes/pricing.routes';

// Connect to Database
const startServer = async () => {
    await connectDB();
};

startServer();

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
app.use('/api/lets-talk', letsTalkRoutes);
app.use('/api/personal-info', personalInfoRoutes);
app.use('/api/works', workRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/experience-education', experienceEducationRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/pricing', pricingRoutes);


const PORT: string | number = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));
