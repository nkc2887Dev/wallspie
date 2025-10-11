import { Request, Response } from 'express';
import { DownloadModel } from '../models/Download.model';
import { WallpaperModel } from '../models/Wallpaper.model';
import { WallpaperResolutionModel } from '../models/WallpaperResolution.model';
import { FingerprintUtil } from '../utils/fingerprint.util';

export class DownloadController {
  // Track download
  static async trackDownload(req: Request, res: Response): Promise<void> {
    try {
      const { wallpaperId, resolutionId } = req.body;

      if (!wallpaperId || !resolutionId) {
        res.status(400).json({
          success: false,
          error: 'wallpaperId and resolutionId are required',
        });
        return;
      }

      // Verify wallpaper exists
      const wallpaper = await WallpaperModel.findById(wallpaperId);
      if (!wallpaper) {
        res.status(404).json({
          success: false,
          error: 'Wallpaper not found',
        });
        return;
      }

      // Verify resolution exists
      const resolution = await WallpaperResolutionModel.findById(resolutionId);
      if (!resolution) {
        res.status(404).json({
          success: false,
          error: 'Resolution not found',
        });
        return;
      }

      // Track download
      const downloadId = await DownloadModel.create({
        wallpaper_id: wallpaperId,
        user_id: req.user?.userId,
        resolution_id: resolutionId,
        ip_address: FingerprintUtil.getClientIP(req),
        user_agent: req.headers['user-agent'],
        device_type: FingerprintUtil.getDeviceType(req.headers['user-agent'] || ''),
        downloaded_at: new Date(),
      });

      // Increment wallpaper download count
      await WallpaperModel.incrementDownloadCount(wallpaperId);

      res.json({
        success: true,
        message: 'Download tracked successfully',
        data: {
          downloadId,
          downloadUrl: resolution.url,
        },
      });
    } catch (error: any) {
      console.error('Track download error:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to track download',
      });
    }
  }

  // Get user download history
  static async getHistory(req: Request, res: Response): Promise<void> {
    try {
      if (!req.user) {
        res.status(401).json({
          success: false,
          error: 'Authentication required',
        });
        return;
      }

      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 20;

      const { downloads, total } = await DownloadModel.getByUserId(
        req.user.userId,
        page,
        limit
      );

      res.json({
        success: true,
        data: downloads,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
        },
      });
    } catch (error: any) {
      console.error('Get download history error:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to fetch download history',
      });
    }
  }
}
