import * as config from 'config';

import { readFileSync } from 'fs';
import { join } from 'path';

export const ConfigUtil = {
  get: (key: string): any => {
    if (config.has(key)) {
      const configValue = config.get(key);
      const envKey = ConfigUtil.getEnvKey(configValue);
      if (envKey) {
        return ConfigUtil.getEnvValue(envKey);
      }
      return configValue;
    }
  },
  getJSONConfig: (filename: string): any => {
    const configDirectory = join(__dirname, '../../../config/', filename);
    try {
      const configContent = readFileSync(configDirectory, { encoding: 'utf8' });
      return JSON.parse(configContent);
    } catch (error) {
      return null;
    }
  },
  getEnvValue: (key: string): any => {
    return process.env[key];
  },
  getEnvKey: (value: any) => {
    const separator = 'ENV:';
    const [, envKey] = String(value).split(separator);
    return envKey;
  },
};

export default ConfigUtil;
