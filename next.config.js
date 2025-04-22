import './src/env.js';

const isAnalyze = process.env.ANALYZE === 'true';

/** @type {import("next").NextConfig} */
const baseConfig = {
  reactStrictMode: true,
};

const config = isAnalyze
  ? (await import('@next/bundle-analyzer')).default({ enabled: true })(baseConfig)
  : baseConfig;

export default config;
