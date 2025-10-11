import { Router } from 'express';
import { DownloadController } from '../controllers/download.controller';
import { optionalAuth, authenticateToken } from '../middleware/auth.middleware';
import { asyncHandler } from '../middleware/error.middleware';

const router = Router();

// Track download (optional auth for guests)
router.post('/', optionalAuth, asyncHandler(DownloadController.trackDownload));

// Get download history (requires auth)
router.get('/history', authenticateToken, asyncHandler(DownloadController.getHistory));

export default router;
