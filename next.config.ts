import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async headers() {
    return [
      {
        source: "/stay/guest",
        headers: [
          {
            key: "Cache-Control",
            value: "private, no-store, max-age=0",
          },
          {
            key: "Referrer-Policy",
            value: "no-referrer",
          },
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
    ];
  },
};

export default withBotId(nextConfig);
