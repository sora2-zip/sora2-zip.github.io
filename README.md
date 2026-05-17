# Sora's Portfolio

웹 퍼블리셔 이소라의 포트폴리오 웹사이트입니다.
Next.js, React, Tailwind CSS, shadcn/ui로 구축되었습니다.

## 🚀 기술 스택

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 폴더 구조

```
.
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx          # 메인 포트폴리오 페이지
│   │   └── globals.css        # 전역 스타일
│   ├── components/
│   │   └── ui/               # shadcn/ui 컴포넌트들
│   └── lib/
│       └── utils.ts
├── public/                    # 정적 파일 (이미지 등)
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🛠️ 초기 세팅

### 1. 로컬 클론 및 설치

```bash
git clone https://github.com/[your-username]/sora-portfolio.git
cd sora-portfolio

# 의존성 설치
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 열어주세요.

### 3. 프로덕션 빌드

```bash
npm run build
npm start
```

## 📝 페이지 구조

### 📌 Hero Section
- 간단한 소개와 프로필
- CTA 버튼 (프로젝트 보기, 이메일 문의)

### 📌 About Section
- 경력 요약
- 주요 특징 및 badge

### 📌 Experience Section
- 근무 경력 시간선
- 각 회사별 주요 업무 및 성과

### 📌 Projects Section
- 주요 프로젝트 소개
- 기술 스택 및 성과 표시

### 📌 Skills Section
- 기술 스택 분류 (Frontend, Styling, Tools, Design)
- Tabs로 카테고리 구분

### 📌 Contact Section
- 연락처 정보
- CTA 버튼

## 🎨 커스터마이징

### 프로젝트 데이터 수정

`src/app/page.tsx` 파일의 `PROJECTS` 배열을 수정하여 프로젝트 정보를 추가/변경할 수 있습니다.

```typescript
const PROJECTS = [
  {
    title: '프로젝트명',
    period: '2026.03 ~ 진행중',
    company: '회사명',
    description: '프로젝트 설명',
    tech: ['React.js', 'TypeScript'],
    impact: '프로젝트 성과'
  },
  // ...
]
```

### 색상 커스터마이징

`tailwind.config.ts`와 `globals.css`에서 색상 변수를 수정하여 전체 색상 스킴을 변경할 수 있습니다.

### 연락처 업데이트

페이지 내 이메일 및 전화번호를 자신의 정보로 변경해주세요:

```typescript
href="mailto:your-email@example.com"
href="tel:your-phone-number"
```

## 🚀 배포

### Vercel로 배포 (권장)

1. GitHub에 코드 푸시
2. [Vercel](https://vercel.com) 접속
3. New Project 생성
4. GitHub 레포 선택
5. Deploy 클릭

### 다른 호스팅 옵션
- Netlify
- GitHub Pages
- AWS Amplify

## 📦 shadcn/ui 컴포넌트 추가하기

필요한 컴포넌트를 추가로 설치하고 싶다면:

```bash
npx shadcn-ui@latest add [component-name]
```

예시:
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add badge
```

## 🔧 추가 설정

### 환경 변수 (필요시)

`.env.local` 파일을 생성하고 필요한 환경 변수를 추가합니다:

```
NEXT_PUBLIC_SITE_URL=https://your-portfolio.com
```
<!-- 
### Analytics 추가 (선택사항)

Google Analytics나 다른 분석 도구를 추가하려면 `src/app/layout.tsx`에 스크립트를 추가합니다.

## 📋 체크리스트

- [ ] GitHub 레포에 초기 커밋
- [ ] 개인 정보 (이메일, 전화) 수정
- [ ] 프로젝트 정보 추가/수정
- [ ] 포트폴리오 이미지 추가 (public 폴더)
- [ ] 소셜 링크 (GitHub, LinkedIn) 추가
- [ ] 로컬에서 빌드 테스트
- [ ] Vercel/호스팅 배포
- [ ] 도메인 연결 (옵션) -->

## 📞 연락처

- Email: sora2.zip@gmail.com
- Phone: 010-4000-7968
- Location: 경기 포천시

## 📄 라이선스

MIT License

---

**마지막 수정**: 2026년 05월 17일
