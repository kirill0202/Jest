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
};

export default config;
