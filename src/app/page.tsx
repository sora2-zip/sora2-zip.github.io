'use client'

import { useState } from 'react'
import { Button } from '../components/sections/button'
import { Card } from '../components/sections/card'
import { Badge } from '../components/sections/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/sections/tabs'
import {  Mail, ExternalLink, ChevronDown } from 'lucide-react'

const SKILLS = {
  frontend: ['React.js', 'Vue.js', 'TypeScript', 'JavaScript (ES5+)', 'HTML5', 'CSS3/SCSS'],
  styling: ['Tailwind CSS', 'CSS Modules', 'styled-components', 'shadcn/ui'],
  tools: ['Git/GitLab', 'Figma', 'Jenkins', 'Webpack', 'Vite'],
  design: ['Photoshop', 'UI/UX', '반응형 웹', '크로스 브라우징']
}

const PROJECTS = [
  {
    title: '메인 화면 개편 작업',
    period: '2026.03 ~ 진행중',
    company: '더이앤엠주식회사',
    description: '사용자 경험 개선을 위한 메인 페이지 리뉴얼, 반응형 레이아웃 구현 및 크로스 브라우징 대응',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    impact: '플랫폼 전체 사용자 경험 향상'
  },
  {
    title: '에이전트 관리 어드민 개발',
    period: '2026.04 ~ 진행중',
    company: '더이앤엠주식회사',
    description: '신규 백오피스 시스템 UI/UX 구현 및 반응형 디자인 적용',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS'],
    impact: '관리자 업무 효율성 30% 증대'
  },
  {
    title: '코인 관련 시스템 리뉴얼',
    period: '2025.07 ~ 2025.12',
    company: '더이앤엠주식회사',
    description: '사용자 편의성 개선을 위한 UI 재설계, 인터랙션 효과 추가로 사용성 향상',
    tech: ['React.js', 'CSS3', 'JavaScript'],
    impact: '사용자 만족도 42% 향상'
  },
  {
    title: '슈퍼브이 서비스 (Tablet)',
    period: '2022.04 ~ 2024.04',
    company: '그로비교육',
    description: 'Vue.js 기반 개인화 학습 관리 웹뷰 페이지 개발, 학생용 대시보드 UI 구현',
    tech: ['Vue.js', 'HTML5', 'CSS3/SCSS', 'Chart.js'],
    impact: '월 활성 사용자 5만명 이상'
  }
]

const EXPERIENCE = [
  {
    role: '기술개발본부 연구원 팀원',
    company: '더이앤엠주식회사',
    period: '2025.01 ~ 재직중',
    duration: '약 7개월',
    highlights: [
      '플랫폼 웹/앱 서비스 UI 개발 및 유지보수',
      '월간 이벤트 페이지 마크업 및 기능 구현',
      '신규 서비스(에이전트 관리 어드민) UI 개발'
    ]
  },
  {
    role: '기술개발팀 대리 팀원',
    company: '그로비교육',
    period: '2022.04 ~ 2024.04',
    duration: '2년 1개월',
    highlights: [
      '교육 서비스 웹/앱 UI 개발 및 유지보수',
      '레거시 CSS 코드베이스 SCSS 마이그레이션',
      'Chart.js를 활용한 데이터 시각화 대시보드 구현'
    ]
  },
  {
    role: '웹퍼블리셔 (R&D)',
    company: '주식회사이퓨쳐',
    period: '2018.03 ~ 2021.11',
    duration: '3년 9개월',
    highlights: [
      '자체 교육 서비스 및 CMS 페이지 퍼블리싱',
      '모바일 최적화 및 태블릿 최적화',
      '교재 쇼핑몰, 온라인 영어 교육사이트 운영'
    ]
  }
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about')

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-xl text-slate-900">이소라</div>
          <div className="hidden md:flex gap-8">
            {['about', 'experience', 'projects', 'skills'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors capitalize"
              >
                {item === 'about' && '소개'}
                {item === 'experience' && '경력'}
                {item === 'projects' && '프로젝트'}
                {item === 'skills' && '기술'}
              </button>
            ))}
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                {/* <Github className="h-5 w-5" /> */}
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:2sora71@gmail.com">
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
            Web Publisher & Frontend Developer
          </Badge>
        </div>
        <h1 className="mb-6 text-5xl md:text-6xl font-bold text-slate-900">
          디자인을 정확하게
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
            구현하는 개발자
          </span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600">
          7년 이상의 경험으로 사용자 중심의 웹 인터페이스를 설계하고 구현합니다.
          React, Vue.js, TypeScript를 활용한 현대적인 웹 개발을 전문으로 합니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => scrollToSection('projects')}>
            프로젝트 보기
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="mailto:2sora71@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
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
      <section id="about" className="mx-auto max-w-5xl px-6 py-20 border-t border-slate-200">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">소개</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              안녕하세요. 웹 퍼블리셔 이소라입니다.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed">
              강원대학교 방송영상학과를 졸업했으며, 7년 이상의 웹 개발 경험을 갖고 있습니다.
              플랫폼 UI 개발, 어드민 시스템 구축, 반응형 웹 디자인 등 다양한 프로젝트를 통해
              사용자 중심의 인터페이스 설계 능력을 키워왔습니다.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              현재 더이앤엠주식회사에서 기술개발본부 연구원으로 근무 중이며,
              최신 기술 스택을 학습하며 끊임없이 성장하고 있습니다.
            </p>
            <div className="flex gap-3">
              <Badge>성실성</Badge>
              <Badge>꼼꼼함</Badge>
              <Badge>적응성</Badge>
              <Badge>긍정적</Badge>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg p-8 h-80 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-600 mb-4">7+</div>
              <div className="text-xl font-semibold text-slate-900">Years of Experience</div>
              <div className="text-slate-600 mt-4">
                <div>5개 회사</div>
                <div>50+ 프로젝트</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mx-auto max-w-5xl px-6 py-20 border-t border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">경력</h2>
        <div className="space-y-6">
          {EXPERIENCE.map((exp, idx) => (
            <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{exp.role}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </div>
                <div className="text-sm text-slate-600 mt-2 md:mt-0 md:text-right">
                  <div>{exp.period}</div>
                  <div className="text-slate-500">{exp.duration}</div>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, hidx) => (
                  <li key={hidx} className="text-slate-600 flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mx-auto max-w-5xl px-6 py-20 border-t border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">주요 프로젝트</h2>
        <div className="grid gap-6">
          {PROJECTS.map((project, idx) => (
            <Card key={idx} className="p-6 md:p-8 hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 font-medium mt-1">{project.company}</p>
                  <p className="text-sm text-slate-500 mt-2">{project.period}</p>
                </div>
                <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0 mt-4 md:mt-0" />
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((t, tidx) => (
                  <Badge key={tidx} variant="secondary">{t}</Badge>
                ))}
              </div>
              <div className="pt-4 border-t border-slate-200">
                <p className="text-sm font-medium text-blue-600">💡 {project.impact}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mx-auto max-w-5xl px-6 py-20 border-t border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">기술 스택</h2>
        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="styling">Styling</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
          </TabsList>
          <TabsContent value="frontend" className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {SKILLS.frontend.map((skill, idx) => (
                <Card key={idx} className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:shadow-md transition-shadow">
                  <p className="font-medium text-slate-900">{skill}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="styling" className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {SKILLS.styling.map((skill, idx) => (
                <Card key={idx} className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:shadow-md transition-shadow">
                  <p className="font-medium text-slate-900">{skill}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="tools" className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {SKILLS.tools.map((skill, idx) => (
                <Card key={idx} className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:shadow-md transition-shadow">
                  <p className="font-medium text-slate-900">{skill}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="design" className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {SKILLS.design.map((skill, idx) => (
                <Card key={idx} className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 hover:shadow-md transition-shadow">
                  <p className="font-medium text-slate-900">{skill}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-5xl px-6 py-20 border-t border-slate-200 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">함께 일하고 싶으신가요?</h2>
        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
          새로운 프로젝트나 협업 기회에 항상 열려있습니다.
          편하게 연락주세요!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="mailto:2sora71@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              이메일 보내기
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="tel:01040007968">
              전화하기
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-900 text-white py-12">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4">© 2026 Lee Sora. All rights reserved.</p>
          <p className="text-slate-400">디자인을 정확하게 구현하는 웹 퍼블리셔</p>
        </div>
      </footer>
    </div>
  )
}
