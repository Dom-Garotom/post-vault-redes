import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler:{
    styledComponents:{
      ssr: true,
      fileName: true,
    }
  }
};

export default nextConfig;
