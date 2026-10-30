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
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/main.html", destination: "/preview", permanent: true },
      {
        source: "/components.html",
        destination: "/components",
        permanent: true,
      },
      { source: "/all-pages.html", destination: "/explore", permanent: true },
      { source: "/pages/:path*.html", destination: "/:path*", permanent: true },
    ];
  },
};
export default nextConfig;
