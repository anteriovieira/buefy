import { PluginObject, PluginFunction } from 'vue'
import { BuefyConfig } from './config';

interface BuefyPlugin extends PluginObject<BuefyConfig> {
  [key: string]: any;
  install: PluginFunction<BuefyConfig>;
}

export const Buefy: BuefyPlugin;
