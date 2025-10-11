import { Router } from 'express';
import { AnalyticsController } from '../controllers/analytics.controller';
import { authAdmin } from '../middleware/auth.middleware';
import { asyncHandler } from '../middleware/error.middleware';

const router = Router();

// All analytics routes require admin access
router.get('/overview', authAdmin, asyncHandler(AnalyticsController.getOverview));
router.get('/downloads/trend', authAdmin, asyncHandler(AnalyticsController.getDownloadTrend));
router.get('/wallpapers/top', authAdmin, asyncHandler(AnalyticsController.getTopWallpapers));
router.get('/wallpapers/least', authAdmin, asyncHandler(AnalyticsController.getLeastDownloaded));
router.get('/categories', authAdmin, asyncHandler(AnalyticsController.getCategoryStats));
router.get('/devices', authAdmin, asyncHandler(AnalyticsController.getDeviceStats));
router.get('/resolutions', authAdmin, asyncHandler(AnalyticsController.getResolutionStats));
router.get('/reports/monthly', authAdmin, asyncHandler(AnalyticsController.getMonthlyReport));
router.get('/reports/yearly', authAdmin, asyncHandler(AnalyticsController.getYearlyReport));

export default router;
