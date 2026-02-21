import prisma from '../config/prisma';

export const checkHealth = async () => {
    try {
        // Check DB status by running a simple query
        await prisma.$queryRaw`SELECT 1`;
        return {
            status: 'ok',
            database: 'connected',
        };
    } catch (error) {
        return {
            status: 'ok',
            database: 'disconnected',
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }
};
