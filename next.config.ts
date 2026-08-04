import type { NextConfig } from "next";

/**
 * Next.js configuration.
 *
 * - `images`: enables AVIF/WebP negotiation for the hero portrait, project
 *   thumbnails, and certification badges (biggest Lighthouse/LCP win on a
 *   photo-heavy profile page).
 * - `headers`: baseline security headers appropriate for a static marketing
 *   site with one API route (contact form).
 * - `typedRoutes`: compile-time safety for internal <Link href> usage.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
