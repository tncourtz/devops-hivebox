"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printVersionAndExit = printVersionAndExit;
const fs_1 = require("fs");
const path_1 = require("path");
function printVersionAndExit() {
    try {
        const packageJsonPath = (0, path_1.join)(__dirname, '../../package.json');
        const packageJsonContent = (0, fs_1.readFileSync)(packageJsonPath, 'utf-8');
        const packageJson = JSON.parse(packageJsonContent);
        console.log(`Version: ${packageJson.version}`);
    }
    catch (error) {
        console.error('Failed to read version:', error);
    }
    finally {
        process.exit(0);
    }
}
