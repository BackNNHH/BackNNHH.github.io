import { loadCoreAssets } from './AssetLoader';
import { initializeRenderer } from './renderer';
import { setupInputHandlers } from './input';
import { Logger } from '../utils/Logger';

interface BootConfig {
  debug: boolean;
  version: string;
}

const defaultConfig: BootConfig = {
  debug: process.env.NODE_ENV !== 'production',
  version: '1.0.0',
};

/**
 * Main boot sequence for the game engine.
 * Called during app initialization.
 */
export async function bootSequence(config: Partial<BootConfig> = {}): Promise<void> {
  Logger.info('Initializing boot sequence...');
  const finalConfig = { ...defaultConfig, ...config };

  await loadCoreAssets();

  await initializeRenderer(finalConfig);
  setupInputHandlers();
  Logger.info('Boot sequence completed successfully.');
}
