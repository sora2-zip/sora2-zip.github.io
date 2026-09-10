'use client'
/* eslint-disable @next/next/no-img-element */

import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import * as Dialog from '@radix-ui/react-dialog'
import { Mail, ExternalLink, ChevronDown, X, ChevronLeft, ChevronRight } from 'lucide-react'


const SKILLS = {
  core: ['HTML5', 'CSS3 / SCSS', 'Responsive Web', 'Semantic Markup', 'WebView UI', 'Cross Browsing'],
  production: ['React.js', 'Vue.js', 'JavaScript', 'Tailwind CSS', 'CSS Modules', 'styled-components'],
  uiDevelopment: ['TypeScript', 'shadcn/ui', 'API Integration', 'Component UI', 'Admin UI', 'Design System'],
  tools: ['Git', 'GitLab', 'GitHub', 'Figma', 'Photoshop', 'Jenkins', 'Redmine', 'Swagger']
}

const WORK_KEYWORDS = ['Responsive UI', 'WebView', 'Design to Code', 'Component UI', 'Service Maintenance']

const FEATURED_PROJECTS = [
  {
    title: '메인 서비스 개편',
    period: '2026.03 ~ 07',
    company: '더이앤엠주식회사',
    description: '사용자 경험 개선을 위한 메인 서비스 UI 리뉴얼, PC/Mobile 반응형 레이아웃 구현 및 크로스 브라우징 대응',
    role: 'UI Development / Publishing',
    contribution: '서비스 UI 개편 화면 구현',
    environment: 'React / Tailwind CSS',
    device: 'PC / Mobile',
    keyWork: ['Main UI Renewal', 'Responsive Layout', 'Component UI', 'Service Maintenance'],
    tech: ['React.js', 'Tailwind CSS'],
    images: ['/images/work/main-service-renewal.png'],
    // impact: '플랫폼 전체 사용자 경험 향상'
  },
  {
    title: '에이전트 관리 어드민 개발',
    period: '2026.04 ~ 07',
    company: '더이앤엠주식회사',
    description: '신규 Back-office 시스템 UI 구현, 개인정보 조회·수정 화면 및 Swagger API 명세 기반 기능 연동',
    role: 'Admin UI Development',
    contribution: '관리 화면 UI 구현 및 API 연동 화면 작업',
    environment: 'React / Tailwind CSS / shadcn/ui',
    device: 'PC / Tablet',
    keyWork: ['Table / Form UI', 'Modal / Dialog', 'Responsive Admin', 'shadcn/ui Customizing'],
    tech: ['React.js', 'Tailwind CSS', 'shadcn/ui', 'Swagger'],
    images: []
    // impact: '관리자 업무 효율성 30% 증대'
  },
  {
    title: '코인 관련 시스템 리뉴얼',
    period: '2025.07 ~ 2025.12',
    company: '더이앤엠주식회사',
    description: '사용자 편의성 개선을 위한 기존 UI 재구성, PC 프로그램 Modal·Popup Layer 및 채팅 화면 내 코인 UI 개편',
    role: 'UI Development / Publishing',
    contribution: '코인 관련 사용자 화면 UI 리뉴얼',
    environment: 'React / JavaScript / CSS',
    device: 'PC / Mobile / 방송용 PC 프로그램 HTML UI',
    keyWork: ['Payment UI', 'Interaction UI', 'Modal / Popup Layer', 'Chat UI'],
    tech: ['React.js', 'CSS3', 'JavaScript', 'HTML5', 'FTP'],
    images: ['/images/work/renewal-coin.png'],
    // impact: '사용자 만족도 42% 향상'
  },
  {
    title: '슈퍼브이 서비스 (Tablet)',
    period: '2022.04 ~ 2024.04',
    company: '그로비교육',
    description: 'Vue.js 기반 개인화 학습 관리 WebView UI 개발, 스케줄 확인 및 학습 현황 등 학생용 대시보드 구현',
    role: 'WebView UI Development',
    contribution: '태블릿 학습 화면 UI 구현',
    environment: 'Vue.js / SCSS / Chart.js',
    device: 'Tablet / WebView',
    keyWork: ['Learning Dashboard', 'Schedule UI', 'WebView Layout', 'Chart UI'],
    tech: ['Vue.js', 'HTML5', 'CSS3/SCSS', 'Chart.js', 'Swiper.js'],
    images: [
      '/images/work/project1-2.png',
    ],
    // impact: '월 활성 사용자 5만명 이상'
  }
]

const OTHER_PROJECTS = [
  {
    title: '시그니처 이미지 업로드 및 채팅 적용',
    period: '2025.09 ~ 2026.05',
    company: '더이앤엠주식회사',
    description: '사용자 시그니처 이미지 업로드·심사 상태 관리 UI 구현 및 채팅 화면 적용 흐름 개선',
    tech: ['React.js', 'JavaScript', 'CSS3', 'HTML5'],
    images: ['/images/work/signature-upload-admin.png']
  },
  {
    title: '상품권 결제 페이지 개발',
    period: '2025.09',
    company: '더이앤엠주식회사',
    description: '신규 결제 수단 추가에 따른 상품권 등록 화면, 입력 폼, 선택 옵션 및 안내 영역 UI 구현',
    tech: ['React.js', 'JavaScript', 'CSS3', 'HTML5'],
    images: ['/images/work/gift-card-payment.png']
  },
  {
    title: '월간 이벤트 페이지 개발',
    period: '2025.01 ~ 현재',
    company: '더이앤엠주식회사',
    description: '월 단위 프로모션 이벤트 페이지 퍼블리싱 및 운영, 반복 제작되는 페이지의 템플릿 구조화',
    tech: ['React.js', 'Tailwind CSS'],
    images: ['/images/work/event-monthly-01.png', '/images/work/event-monthly-02.png'],
    // impact: '사용자 만족도 42% 향상'
  },
  {
    title: '숏폼 하이브리드 앱 화면 개발',
    period: '2025.01 ~ 2025.03',
    company: '더이앤엠주식회사',
    description: '모바일 Hybrid App WebView UI 컴포넌트 및 Back-office UI 컴포넌트 개발',
    tech: ['React.js', 'HTML5', 'CSS3', 'WebView'],
    images: []
  },
  {
    title: '슈퍼브이 서비스 (Website)',
    period: '2022.04 ~ 2024.04',
    company: '그로비교육',
    description: '서비스 홈페이지 및 프로모션 페이지 퍼블리싱, 운영 페이지 UI 유지보수 및 개선',
    tech: ['HTML5', 'CSS3'],
    images: [
      '/images/work/project1-1.png',
    ],
    // impact: '월 활성 사용자 5만명 이상'
  },
  {
    title: '슈퍼리딩 전자도서관 시스템',
    period: '2023.04 ~ 2024.04',
    company: '그로비교육',
    description: '태블릿 전자도서관 WebView 메인 화면 UI 퍼블리싱, 학습 현황·도서 영역 화면 구성 및 SCSS 마이그레이션',
    tech: ['HTML5', 'CSS3/SCSS', 'Vue.js'],
    images: [
      '/images/work/super-reading-tablet.png',
      '/images/work/super-reading-library-english-theme.png',
      '/images/work/super-reading-library-english-books.png',
      '/images/work/super-reading-library-hangul-level.png',
      '/images/work/super-reading-my-library.png'
    ]
  },
  {
    title: '학부모 관리 앱',
    period: '2023.07 ~ 2024.04',
    company: '그로비교육',
    description: '학부모용 모바일 WebView 메인 화면과 학습 현황 조회 UI 구현, 운영 과정에서 발생한 UI 이슈 개선',
    tech: ['Vue.js', 'HTML5', 'CSS3/SCSS', 'WebView'],
    images: ['/images/work/parents-app-main.png']
  },
  {
    title: '관리자 페이지',
    period: '2022.04 ~ 2024.04',
    company: '그로비교육',
    description: '사이트·회원·콘텐츠 관리 시스템 UI 개발 및 Chart.js 기반 데이터 시각화 대시보드 구현',
    tech: ['Vue.js', 'HTML5', 'CSS3/SCSS', 'Chart.js'],
    images: []
  },
  {
    title: '전자도서관 서비스 (Website)',
    period: '2018.05 ~ 2020.02',
    company: '이퓨쳐',
    description: '영어 전자도서관 서비스 웹·모바일 UI 퍼블리싱, 국내 기관 및 해외 서비스 환경별 UI 구현',
    tech: ['HTML5', 'CSS3', 'jQuery', 'chart.js'],
    images: [
      '/images/work/project2-1.jpg',
      '/images/work/project2-2.jpg',
      '/images/work/project2-5.jpg'
    ],
    // impact: '월 활성 사용자 5만명 이상'
  },
  {
    title: '이퓨쳐 앱 서비스 (App)',
    period: '2018.03 ~ 2021.11',
    company: '이퓨쳐',
    description: '자체 개발 교육 앱 모바일·태블릿 UI 구현, Smart English 앱 디자인 및 퍼블리싱',
    tech: ['HTML5', 'CSS3', 'jQuery'],
    images: ['/images/work/project3-1.png', '/images/work/project3-2.png'],
    // impact: '월 활성 사용자 5만명 이상'
  }
]

const ALL_PROJECTS = [...FEATURED_PROJECTS, ...OTHER_PROJECTS]

const EXPERIENCE = [
  {
    role: '기술개발본부 연구원',
    company: '더이앤엠주식회사',
    period: '2025.01 ~ 재직중',
    duration: '재직중',
    highlights: [
      '라이브 플랫폼 웹/앱 서비스 UI 개발 및 유지보수',
      'React 기반 서비스의 UI 컴포넌트 구현 및 기존 기능 개선',
      'PC/Mobile 반응형 UI 구현 및 크로스 브라우징 대응',
      '메인 화면, 결제 페이지, 코인 시스템, 채팅 UI 등 사용자 접점 화면 리뉴얼',
      'PC 프로그램 내 모달/팝업 레이어 및 WebView 화면 UI 구현',
      'Tailwind CSS, CSS Modules, styled-components를 활용한 스타일 구조화',
      '월간 이벤트 페이지 템플릿화 및 반복 배포 대응',
      '신규 에이전트 관리 어드민의 반응형 UI 및 API 연동 화면 구현'
    ]
  },
  {
    role: '기술개발팀 대리',
    company: '그로비교육',
    period: '2022.04 ~ 2024.04',
    duration: '2년 1개월',
    highlights: [
      'Vue.js 기반 교육 서비스 태블릿 WebView 및 모바일 앱 UI 개발',
      '학생/학부모용 학습 현황, 스케줄, 콘텐츠 화면 구현',
      '관리자 페이지 및 데이터 시각화 대시보드 UI 개발',
      '레거시 CSS를 SCSS 구조로 전환하여 유지보수성 개선',
      '슈퍼리딩 전자도서관, 학부모 관리 앱, 관리자 서비스 UI 유지보수',
      '반응형 웹, 태블릿, 모바일 환경에 맞춘 화면 최적화',
      '홈페이지 및 프로모션 페이지 퍼블리싱'
    ]
  },
  {
    role: '웹 퍼블리셔',
    company: '쌤투쌤',
    period: '2021.11 ~ 2021.12',
    duration: '2개월',
    highlights: [
      '사이트 UI 오류 수정 및 유지보수'
    ]
  },
  {
    role: '웹 퍼블리셔 (R&D)',
    company: '주식회사이퓨쳐',
    period: '2018.03 ~ 2021.11',
    duration: '3년 9개월',
    highlights: [
      '영어교육 서비스 웹사이트, CMS, LMS, 전자도서관 화면 퍼블리싱',
      '국내/해외 사용자 대상 다국어 UI 및 교육 콘텐츠 화면 구현',
      '모바일/태블릿 앱 내 학습 화면 마크업 및 유지보수',
      'SMARTree CMS/LMS/Placement Test UI 퍼블리싱',
      'Smart English 앱 디자인 및 퍼블리싱',
      'jQuery, Chart.js 기반 인터랙션 및 데이터 화면 구현',
      '운영 중인 교육 서비스의 오류 수정, 이벤트 관리, 콘텐츠 반영'
    ]
  }
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof ALL_PROJECTS[number] | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold text-slate-900">이소라</div>
          <div className="hidden gap-6 md:flex">
            {['about', 'featured-projects', 'experience', 'other-projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
              >
                {item === 'about' && '소개'}
                {item === 'featured-projects' && '주요 프로젝트'}
                {item === 'experience' && '경력'}
                {item === 'other-projects' && '기타 프로젝트'}
                {item === 'skills' && '기술'}
                {item === 'contact' && '연락'}
              </button>
            ))}
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:sora2.zip@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <div className="mb-8 inline-block">
          <Badge variant="secondary" className="text-sm">
            UI Developer · Web Publisher
          </Badge>
        </div>
        <h1 className="mb-6 text-5xl font-bold leading-tight text-slate-900 sm:text-6xl md:text-7xl">
          운영까지 생각하며
          <br />
          <span className="bg-gradient-to-r from-sky-700 via-cyan-500 to-cyan-400 bg-clip-text text-transparent">
            서비스 UI를 구현합니다
          </span>
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-slate-600">
          7년 이상 다양한 웹·앱 서비스를 운영하며 반응형 UI, WebView, 관리자 화면을 구현해온 UI Developer입니다.
          HTML/CSS 기반의 탄탄한 퍼블리싱 경험을 바탕으로 React·Vue 환경에서 컴포넌트 기반 UI 개발까지 영역을 확장하고 있습니다.
        </p>
        <div className="mx-auto mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" onClick={() => scrollToSection('featured-projects')} className="w-full max-w-[15rem]">
            프로젝트 보기
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full max-w-[15rem]">
            <a href="mailto:sora2.zip@gmail.com" className="inline-flex items-center justify-center gap-2">
              <Mail className="h-4 w-4" />
              이메일 문의
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center animate-bounce">
          <ChevronDown className="h-6 w-6 text-slate-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mx-auto max-w-5xl border-t border-slate-200 px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-slate-900">소개</h2>
            <p className="mb-4 leading-7 text-slate-600">
              안녕하세요. 웹 퍼블리셔 이소라입니다.
            </p>
            <p className="mb-4 leading-7 text-slate-600">
              7년 이상의 실무 경험을 바탕으로 교육 서비스, 라이브 플랫폼, WebView, 관리자 시스템 등 다양한 웹·앱 UI를 구현해왔습니다.
              HTML, CSS/SCSS, JavaScript, Vue.js, React를 활용해 디자인을 정확하게 화면에 옮기고, 운영과 유지보수를 고려한 UI 구조를 만드는 데 강점이 있습니다.
            </p>
            <p className="mb-6 leading-7 text-slate-600">
              현재는 React 기반 라이브 플랫폼에서 서비스 UI 개편과 관리자 시스템 개발을 담당하며, 안정적으로 구현 가능한 화면을 만들고 지속적으로 개선하고 있습니다.
            </p>
            <div className="flex flex-wrap gap-3">
              {WORK_KEYWORDS.map((keyword) => (
                <Badge key={keyword}>{keyword}</Badge>
              ))}
            </div>
          </div>
          <div className="flex h-80 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-cyan-100 p-8">
            <div className="text-center">
              <div className="mb-4 text-6xl font-bold text-sky-700">7년 8개월</div>
              <div className="text-xl font-semibold text-slate-900">Years of Experience</div>
              <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm text-slate-600">
                <span className="rounded-full bg-white/70 px-3 py-1">Web / App UI</span>
                <span className="rounded-full bg-white/70 px-3 py-1">React & Vue</span>
                <span className="rounded-full bg-white/70 px-3 py-1">Admin / WebView</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="mx-auto max-w-5xl border-t border-slate-200 px-6 py-20">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">Featured Projects</p>
          <h2 className="text-3xl font-bold text-slate-900">대표 프로젝트</h2>
        </div>
        <div className="flex flex-col gap-6">
          {FEATURED_PROJECTS.map((project, idx) => (
            <Card key={idx} className="overflow-hidden p-0">
              <div className="grid gap-0 lg:grid-cols-[1.08fr_1fr]">
                <button
                  type="button"
                  onClick={() => {
                    if (project.images?.length) {
                      setSelectedProject(project)
                      setSelectedImageIndex(0)
                    }
                  }}
                  className="group relative flex min-h-[16rem] items-center justify-center overflow-hidden bg-slate-100 text-left"
                >
                  {project.images?.length ? (
                    <>
                      <img
                        src={project.images[0]}
                        alt={`${project.title} preview`}
                        className="h-full min-h-[16rem] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                      />
                      <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                        <ExternalLink className="h-3.5 w-3.5" />
                        크게 보기
                      </span>
                    </>
                  ) : (
                    <div className="px-8 text-center">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Confidential Project</p>
                      <p className="text-lg font-semibold text-slate-900">공개 가능한 화면 대신 담당 범위를 정리했습니다.</p>
                      <p className="mt-3 text-sm leading-6 text-slate-600">관리자 서비스 특성상 실제 화면은 외부 공개가 어렵습니다.</p>
                    </div>
                  )}
                </button>
                <div className="p-8">
                  <div className="mb-4">
                    <p className="mb-2 text-sm font-semibold text-sky-600">0{idx + 1}</p>
                    <h3 className="mb-2 text-2xl font-bold text-slate-900">{project.title}</h3>
                    <p className="font-medium text-slate-600">{project.company}</p>
                    <p className="mt-2 text-sm text-slate-500">{project.period}</p>
                  </div>
                  <p className="mb-5 leading-7 text-slate-600">{project.description}</p>
                  <div className="mb-5 grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 sm:grid-cols-2">
                    <div>
                      <span className="font-semibold text-slate-900">역할</span>
                      <p className="mt-1">{project.role}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">기여</span>
                      <p className="mt-1">{project.contribution}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">환경</span>
                      <p className="mt-1">{project.environment}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">대응 화면</span>
                      <p className="mt-1">{project.device}</p>
                    </div>
                  </div>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.keyWork.map((work) => (
                      <Badge key={work}>{work}</Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, tidx) => (
                      <Badge key={tidx} variant="secondary">{t}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mx-auto max-w-5xl border-t border-slate-200 px-6 py-20">
        <h2 className="mb-12 text-3xl font-bold text-slate-900">경력</h2>
        <div className="flex flex-col gap-6">
          {EXPERIENCE.map((exp, idx) => (
            <Card key={idx} className="p-6">
              <div className="mb-4 grid gap-6 md:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{exp.role}</h3>
                  <p className="font-medium text-sky-600">{exp.company}</p>
                </div>
                <div className="text-right text-sm text-slate-600">
                  <div>{exp.period}</div>
                  <div className="text-slate-500">{exp.duration}</div>
                </div>
              </div>
              <ul className="flex flex-col gap-2">
                {exp.highlights.map((highlight, hidx) => (
                  <li key={hidx} className="flex gap-3 text-slate-600">
                    <span className="font-bold text-sky-600">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Projects Section */}
      <section id="other-projects" className="mx-auto max-w-5xl border-t border-slate-200 px-6 py-20">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Other Projects</p>
          <h2 className="text-3xl font-bold text-slate-900">기타 프로젝트</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {OTHER_PROJECTS.map((project, idx) => (
            <Card key={idx} className="grid overflow-hidden p-0 sm:grid-cols-[9rem_1fr]">
              <button
                type="button"
                onClick={() => {
                  if (project.images?.length) {
                    setSelectedProject(project)
                    setSelectedImageIndex(0)
                  }
                }}
                className="flex min-h-[8rem] items-center justify-center bg-slate-100"
              >
                {project.images?.length ? (
                  <img
                    src={project.images[0]}
                    alt={`${project.title} preview`}
                    className="h-full min-h-[8rem] w-full object-cover"
                  />
                ) : (
                  <span className="px-4 text-center text-xs font-semibold text-slate-500">이미지 비공개</span>
                )}
              </button>
              <div className="p-5">
                <div className="mb-3">
                  <h3 className="mb-1 text-lg font-bold text-slate-900">{project.title}</h3>
                  <p className="text-sm font-medium text-slate-600">{project.company}</p>
                  <p className="mt-1 text-xs text-slate-500">{project.period}</p>
                </div>
                <p className="mb-4 text-sm leading-6 text-slate-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, tidx) => (
                    <Badge key={tidx} variant="secondary">{t}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mx-auto max-w-5xl border-t border-slate-200 px-6 py-20">
        <h2 className="mb-12 text-3xl font-bold text-slate-900">기술 스택</h2>
        <Tabs defaultValue="core" className="w-full">
          <TabsList className="mb-8 grid !h-auto w-full grid-cols-2 gap-2 border border-slate-200 bg-slate-100/80 p-1.5 sm:grid-cols-4">
            <TabsTrigger value="core" className="min-h-10 px-3 text-[11px] sm:text-xs">Core UI</TabsTrigger>
            <TabsTrigger value="production" className="min-h-10 px-3 text-[11px] sm:text-xs">Production</TabsTrigger>
            <TabsTrigger value="ui-development" className="min-h-10 px-3 text-[11px] sm:text-xs">UI Development</TabsTrigger>
            <TabsTrigger value="tools" className="min-h-10 px-3 text-[11px] sm:text-xs">Tools</TabsTrigger>
          </TabsList>
          
          <TabsContent value="core">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 w-full">
              {SKILLS.core.map((skill, idx) => (
                <Card key={idx} className="p-4 bg-gradient-to-br from-sky-100 via-sky-100 to-cyan-100 border border-sky-200">
                  <p className="font-medium text-slate-900">{skill}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="production">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {SKILLS.production.map((skill, idx) => (
                <Card key={idx} className="p-4 bg-gradient-to-br from-violet-100 via-fuchsia-100 to-pink-100 border border-fuchsia-200">
                  <p className="font-medium text-slate-900">{skill}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ui-development">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {SKILLS.uiDevelopment.map((skill, idx) => (
                <Card key={idx} className="p-4 bg-gradient-to-br from-emerald-100 via-emerald-100 to-teal-100 border border-emerald-200">
                  <p className="font-medium text-slate-900">{skill}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="tools">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {SKILLS.tools.map((skill, idx) => (
                <Card key={idx} className="p-4 bg-gradient-to-br from-amber-100 via-amber-100 to-orange-100 border border-amber-200">
                  <p className="font-medium text-slate-900">{skill}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <Dialog.Root open={Boolean(selectedProject)} onOpenChange={(open) => { if (!open) setSelectedProject(null) }}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[min(95vw,44rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl bg-white p-6 shadow-2xl focus:outline-none">
            {selectedProject && (
              <>
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <Dialog.Title className="text-xl font-semibold text-slate-900">{selectedProject.title}</Dialog.Title>
                    <Dialog.Description className="mt-2 text-sm text-slate-600">{selectedProject.company}</Dialog.Description>
                  </div>
                  <Dialog.Close className=" px-3 py-1">
                    <X className="h-4 w-4" />
                  </Dialog.Close>
                </div>
                <div className="overflow-hidden rounded-[2rem] bg-slate-100">
                  {selectedProject.images?.length ? (
                    <img
                      src={selectedProject.images[selectedImageIndex]}
                      alt={`${selectedProject.title} ${selectedImageIndex + 1}`}
                      draggable="false"
                      onDragStart={(event) => event.preventDefault()}
                      onDoubleClick={(event) => event.preventDefault()}
                      onTouchStart={(event) => event.preventDefault()}
                      className="h-[min(60vh,32rem)] w-full object-contain touch-none select-none"
                    />
                  ) : (
                    <div className="flex h-[min(60vh,32rem)] items-center justify-center px-6 py-10 text-center text-sm text-slate-600">
                      이 작업물 이미지는 외부에 공개할 수 없습니다.
                    </div>
                  )}
                </div>
                {selectedProject.images?.length > 1 && (
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setSelectedImageIndex((prev) => Math.max(prev - 1, 0))}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                      disabled={selectedImageIndex === 0}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <p className="text-sm text-slate-600">
                      {selectedImageIndex + 1} / {selectedProject.images.length}
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedImageIndex((prev) =>
                          Math.min(prev + 1, selectedProject.images.length - 1)
                        )
                      }
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                      disabled={selectedImageIndex === selectedProject.images.length - 1}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, idx) => (
                    <Badge key={idx} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{selectedProject.description}</p>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-5xl border-t border-slate-200 px-6 py-20 text-center">
        <h2 className="mb-6 text-3xl font-bold text-slate-900">운영 가능한 UI를 함께 만들어가고 싶습니다.</h2>
        <p className="mx-auto mb-8 max-w-3xl leading-7 text-slate-600">
          웹·앱 UI 구현, WebView, 관리자 화면 작업에 대해 편하게 연락주세요.
        </p>
        <div className="mx-auto flex w-full max-w-[38rem] flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild className="w-full max-w-[15rem]">
            <a href="mailto:sora2.zip@gmail.com" className="inline-flex items-center justify-center gap-2">
              <Mail className="h-4 w-4" />
              이메일 보내기
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full max-w-[15rem]">
            <a href="tel:01040007968" className="inline-flex items-center justify-center">
              전화하기
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-950 px-6 py-12 text-center text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4">© 2026 Lee Sora. All rights reserved.</p>
          <p className="text-slate-400">디자인과 운영 환경을 함께 고려해 안정적인 서비스 UI를 구현합니다.</p>
        </div>
      </footer>
    </div>
  )
}
