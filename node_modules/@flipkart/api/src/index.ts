import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import v1Routes from './routes/v1';
import { errorMiddleware } from './middleware/error.middleware';
import { httpStatus } from './utils/httpStatus';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/v1', v1Routes);

// Handle 404 - Route Not Found
app.use((req: Request, res: Response, next: NextFunction) => {
    const error: any = new Error('Route Not Found');
    error.statusCode = httpStatus.NOT_FOUND;
    next(error);
});

// Global Error Middleware
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
