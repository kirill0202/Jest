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
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 90,
      statements: 100,
    },
  },
};

export default config;
