import { readFileSync } from 'fs';

/**
 * Parse de mock file returning HTTP code, Content-Type and the Object
 *
 * @param {string} filePath
 * @returns {boolean}
 */
export function readMock(filePath: string): any {
  const file = readFileSync(filePath, 'utf8');
  return JSON.parse(file);
}
