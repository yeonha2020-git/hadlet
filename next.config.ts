import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 상위 폴더에 다른 lockfile이 있어도 이 폴더를 프로젝트 루트로 고정합니다.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
