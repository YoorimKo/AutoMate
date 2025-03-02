# Business Automation Service Website

This project is a multi-language (Korean/English) website for a business automation service company, built with Next.js and React.

[한국어 문서는 아래에 있습니다 / Korean documentation below](#비즈니스-자동화-서비스-웹사이트)

## Features

- **Multi-language Support**: Full support for Korean and English with language switching
- **Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- **Dark Mode Support**: Toggle between light and dark themes
- **Modern UI**: Clean, professional interface with animations
- **Key Pages**:
  - **Home**: Introduction to the service
  - **Services**: Six automation services with details
  - **Benefits**: Key advantages of automation
  - **Process**: Step-by-step implementation process
  - **Case Studies**: Real-world automation success stories
  - **Pricing**: Transparent pricing plans
  - **Contact**: Form for inquiries and contact information

## Implementation

### Technologies Used

- **Next.js 13+**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Context**: For managing language and theme state
- **Scroll Animations**: For enhanced user experience

### Project Structure

- `/src/app`: Next.js App Router pages
- `/src/components`: Reusable UI components
- `/src/context`: React Context providers (language, theme)
- `/src/utils`: Utility functions including animations
- `/public`: Static assets and images

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd web
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the website.

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Starting Production Server

```bash
npm run start
# or
yarn start
# or
pnpm start
```

---

# 비즈니스 자동화 서비스 웹사이트

이 프로젝트는 Next.js와 React로 구축된 비즈니스 자동화 서비스 회사를 위한 다국어(한국어/영어) 웹사이트입니다.

## 기능

- **다국어 지원**: 언어 전환 기능이 있는 한국어 및 영어 완벽 지원
- **반응형 디자인**: 모든 기기 크기(모바일, 태블릿, 데스크톱)에 최적화
- **다크 모드 지원**: 라이트 및 다크 테마 간 전환 가능
- **현대적인 UI**: 애니메이션이 포함된 깔끔하고 전문적인 인터페이스
- **주요 페이지**:
  - **홈**: 서비스 소개
  - **서비스**: 6가지 자동화 서비스 상세 설명
  - **혜택**: 자동화의 주요 이점
  - **프로세스**: 단계별 구현 과정
  - **사례 연구**: 실제 자동화 성공 사례
  - **가격**: 투명한 가격 플랜
  - **문의**: 문의 양식 및 연락처 정보

## 구현 방식

### 사용된 기술

- **Next.js 13+**: App Router가 포함된 React 프레임워크
- **TypeScript**: 타입 안전 JavaScript
- **Tailwind CSS**: 유틸리티 우선 CSS 프레임워크
- **React Context**: 언어 및 테마 상태 관리용
- **스크롤 애니메이션**: 향상된 사용자 경험을 위한 기능

### 프로젝트 구조

- `/src/app`: Next.js App Router 페이지
- `/src/components`: 재사용 가능한 UI 컴포넌트
- `/src/context`: React Context 제공자(언어, 테마)
- `/src/utils`: 애니메이션을 포함한 유틸리티 함수
- `/public`: 정적 자산 및 이미지

## 시작하기

### 사전 요구 사항

- Node.js 16.8.0 이상
- npm, yarn 또는 pnpm 패키지 관리자

### 설치

1. 리포지토리 복제:
   ```bash
   git clone <repository-url>
   cd web
   ```

2. 종속성 설치:
   ```bash
   npm install
   # 또는
   yarn install
   # 또는
   pnpm install
   ```

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 웹사이트를 확인하세요.

### 프로덕션용 빌드

```bash
npm run build
# 또는
yarn build
# 또는
pnpm build
```

### 프로덕션 서버 시작

```bash
npm run start
# 또는
yarn start
# 또는
pnpm start
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
