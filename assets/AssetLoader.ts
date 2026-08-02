import { Logger } from '../utils/Logger';
import { CacheManager } from './CacheManager';
import { AssetStore } from './AssetStore';

interface Manifest {
  isValid: boolean;
  version: string;
  assets: Record<string, string>;
}

/**
 * Helper function to fetch and validate the initial asset manifest.
 */
async function fetchAssetManifest(): Promise<Manifest> {
  try {
    const response = await fetch('/assets/manifest.json');
    if (!response.ok) {
      return { isValid: false, version: '', assets: {} };
    }

    const data = await response.json();
    return {
      isValid: true,
      version: data.version,
      assets: data.assets,
    };
  } catch (error) {
    Logger.error('Failed to fetch asset manifest', error);
    return { isValid: false, version: '', assets: {} };
  }
}

/**
 * Bootstraps the core assets required for the game engine.
 * Called directly by bootSequence() in src/game/engine/boot.ts.
 */
export async function loadCoreAssets(): Promise<void> {
  Logger.info('Starting core asset loading phase...');

  const manifest = await fetchAssetManifest();

  if (!manifest.isValid) {
    throw new Error('Game initialization failed: Required asset manifest is missing or corrupted.');
  }

  AssetStore.setManifest(manifest);
  await CacheManager.preload(manifest.assets);

  Logger.info('Core assets successfully loaded and cached.');
}
