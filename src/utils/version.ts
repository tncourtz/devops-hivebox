import { readFileSync } from 'fs';
import { join } from 'path';

 export function printVersionAndExit(): void {
  try {
    const packageJsonPath = join(__dirname, '../../package.json');
    const packageJsonContent = readFileSync(packageJsonPath, 'utf-8');
    const packageJson = JSON.parse(packageJsonContent);
    console.log(`Version: ${packageJson.version}`);
  } catch (error) {
    console.error('Failed to read version:', error);
  } finally {
    process.exit(0);
  }
}