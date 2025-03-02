import type { NextConfig } from "next";

// 저장소 이름을 여기에 입력하세요
const repoName = "AutoMate"; 

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'out',
  // GitHub Pages에서 정적 파일 경로 설정
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '',
  basePath: process.env.NODE_ENV === 'production' ? `/${repoName}` : '',
  images: {
    unoptimized: true,
  },
  // ESLint 오류를 무시하고 빌드하도록 설정
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
