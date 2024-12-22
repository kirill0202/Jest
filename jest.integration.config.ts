import type { Config } from "jest";

const config: Config = {
  verbose: true,
  preset: "ts-jest",
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/*.{js,ts}",
    "!**/node_modules/**",
    "!<rootDir>/*.mock*",
    "!<rootDir>/*.config.*",
  ],
  testMatch: ["<rootDir>/src/**/*.spec.ts"],
};

export default config;
