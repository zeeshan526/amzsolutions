import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/amz-line-card.pdf",
        headers: [{ key: "Content-Disposition", value: 'inline; filename="AMZ-Line-Card.pdf"' }],
      },
    ];
  },
};

export default nextConfig;
