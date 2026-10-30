import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  distDir: process.env.NEXT_DIST_DIR || ".next",
  sassOptions: {
    silenceDeprecations: [
      "legacy-js-api",
      "import",
      "global-builtin",
      "color-functions",
      "slash-div",
      "if-function",
    ],
  },
};
export default nextConfig;
