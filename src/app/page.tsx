'use client'

import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Mail, ExternalLink, ChevronDown } from 'lucide-react'

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
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, rgb(248 250 252), rgb(255 255 255), rgb(248 250 252))' }}>
      {/* Navigation */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid rgba(203, 213, 225, 0.5)', background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontWeight: 'bold', fontSize: '1.25rem', color: 'rgb(15, 23, 42)' }}>이소라</div>
          <div style={{ display: 'none', gap: '2rem' }} className="md:flex">
            {['about', 'experience', 'projects', 'skills'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                style={{ fontSize: '0.875rem', fontWeight: '500', color: 'rgb(71, 85, 105)', cursor: 'pointer', background: 'none', border: 'none' }}
              >
                {item === 'about' && '소개'}
                {item === 'experience' && '경력'}
                {item === 'projects' && '프로젝트'}
                {item === 'skills' && '기술'}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:2sora71@gmail.com">
                <Mail style={{ width: '1.25rem', height: '1.25rem' }} />
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ maxWidth: '64rem', margin: '0 auto', padding: '6rem 1.5rem', textAlign: 'center' }}>
        <div style={{ marginBottom: '2rem', display: 'inline-block' }}>
          <Badge variant="secondary" style={{ fontSize: '0.875rem' }}>
            Web Publisher & Frontend Developer
          </Badge>
        </div>
        <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2rem, 8vw, 3.75rem)', fontWeight: 'bold', color: 'rgb(15, 23, 42)' }}>
          디자인을 정확하게
          <br />
          <span style={{ background: 'linear-gradient(to right, rgb(37, 99, 235), rgb(6, 182, 212))', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            구현하는 개발자
          </span>
        </h1>
        <p style={{ maxWidth: '42rem', margin: '0 auto 2rem', fontSize: '1.125rem', color: 'rgb(71, 85, 105)', lineHeight: '1.75' }}>
          7년 이상의 경험으로 사용자 중심의 웹 인터페이스를 설계하고 구현합니다.
          React, Vue.js, TypeScript를 활용한 현대적인 웹 개발을 전문으로 합니다.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
          <Button size="lg" onClick={() => scrollToSection('projects')} style={{ width: '100%', maxWidth: '15rem' }}>
            프로젝트 보기
          </Button>
          <Button size="lg" variant="outline" asChild style={{ width: '100%', maxWidth: '15rem' }}>
            <a href="mailto:2sora71@gmail.com">
              <Mail style={{ marginRight: '0.5rem', width: '1rem', height: '1rem' }} />
              이메일 문의
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', animation: 'bounce 2s infinite' }}>
          <ChevronDown style={{ width: '1.5rem', height: '1.5rem', color: 'rgb(148, 163, 184)' }} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ maxWidth: '64rem', margin: '0 auto', padding: '5rem 1.5rem', borderTop: '1px solid rgb(226, 232, 240)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'rgb(15, 23, 42)', marginBottom: '1.5rem' }}>소개</h2>
            <p style={{ color: 'rgb(71, 85, 105)', marginBottom: '1rem', lineHeight: '1.75' }}>
              안녕하세요. 웹 퍼블리셔 이소라입니다.
            </p>
            <p style={{ color: 'rgb(71, 85, 105)', marginBottom: '1rem', lineHeight: '1.75' }}>
              강원대학교 방송영상학과를 졸업했으며, 7년 이상의 웹 개발 경험을 갖고 있습니다.
              플랫폼 UI 개발, 어드민 시스템 구축, 반응형 웹 디자인 등 다양한 프로젝트를 통해
              사용자 중심의 인터페이스 설계 능력을 키워왔습니다.
            </p>
            <p style={{ color: 'rgb(71, 85, 105)', marginBottom: '1.5rem', lineHeight: '1.75' }}>
              현재 더이앤엠주식회사에서 기술개발본부 연구원으로 근무 중이며,
              최신 기술 스택을 학습하며 끊임없이 성장하고 있습니다.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Badge>성실성</Badge>
              <Badge>꼼꼼함</Badge>
              <Badge>적응성</Badge>
              <Badge>긍정적</Badge>
            </div>
          </div>
          <div style={{ background: 'linear-gradient(135deg, rgb(219, 234, 254), rgb(164, 243, 250))', borderRadius: '0.5rem', padding: '2rem', height: '20rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3.75rem', fontWeight: 'bold', color: 'rgb(37, 99, 235)', marginBottom: '1rem' }}>7+</div>
              <div style={{ fontSize: '1.25rem', fontWeight: '600', color: 'rgb(15, 23, 42)' }}>Years of Experience</div>
              <div style={{ color: 'rgb(71, 85, 105)', marginTop: '1rem' }}>
                <div>5개 회사</div>
                <div>50+ 프로젝트</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{ maxWidth: '64rem', margin: '0 auto', padding: '5rem 1.5rem', borderTop: '1px solid rgb(226, 232, 240)' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'rgb(15, 23, 42)', marginBottom: '3rem' }}>경력</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {EXPERIENCE.map((exp, idx) => (
            <Card key={idx} style={{ padding: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'rgb(15, 23, 42)' }}>{exp.role}</h3>
                  <p style={{ color: 'rgb(37, 99, 235)', fontWeight: '500' }}>{exp.company}</p>
                </div>
                <div style={{ fontSize: '0.875rem', color: 'rgb(71, 85, 105)', textAlign: 'right' }}>
                  <div>{exp.period}</div>
                  <div style={{ color: 'rgb(100, 116, 139)' }}>{exp.duration}</div>
                </div>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {exp.highlights.map((highlight, hidx) => (
                  <li key={hidx} style={{ color: 'rgb(71, 85, 105)', display: 'flex', gap: '0.75rem' }}>
                    <span style={{ color: 'rgb(37, 99, 235)', fontWeight: 'bold' }}>•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ maxWidth: '64rem', margin: '0 auto', padding: '5rem 1.5rem', borderTop: '1px solid rgb(226, 232, 240)' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'rgb(15, 23, 42)', marginBottom: '3rem' }}>주요 프로젝트</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {PROJECTS.map((project, idx) => (
            <Card key={idx} style={{ padding: '2rem', cursor: 'pointer' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', marginBottom: '1rem', alignItems: 'start' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'rgb(15, 23, 42)', marginBottom: '0.5rem' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: 'rgb(71, 85, 105)', fontWeight: '500' }}>{project.company}</p>
                  <p style={{ fontSize: '0.875rem', color: 'rgb(100, 116, 139)', marginTop: '0.5rem' }}>{project.period}</p>
                </div>
                <ExternalLink style={{ width: '1.25rem', height: '1.25rem', color: 'rgb(148, 163, 184)', flexShrink: 0 }} />
              </div>
              <p style={{ color: 'rgb(71, 85, 105)', marginBottom: '1rem', lineHeight: '1.75' }}>{project.description}</p>
              <div style={{ marginBottom: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tech.map((t, tidx) => (
                  <Badge key={tidx} variant="secondary">{t}</Badge>
                ))}
              </div>
              <div style={{ paddingTop: '1rem', borderTop: '1px solid rgb(226, 232, 240)' }}>
                <p style={{ fontSize: '0.875rem', fontWeight: '500', color: 'rgb(37, 99, 235)' }}>💡 {project.impact}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ maxWidth: '64rem', margin: '0 auto', padding: '5rem 1.5rem', borderTop: '1px solid rgb(226, 232, 240)' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'rgb(15, 23, 42)', marginBottom: '3rem' }}>기술 스택</h2>
        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-1 gap-2 mb-8 sm:grid-cols-4">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="styling">Styling</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
          </TabsList>
          
          <TabsContent value="frontend">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {SKILLS.frontend.map((skill, idx) => (
                <Card key={idx} className="p-4 bg-gradient-to-br from-sky-100 via-sky-100 to-cyan-100 border border-sky-200">
                  <p className="font-medium text-slate-900">{skill}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="styling">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {SKILLS.styling.map((skill, idx) => (
                <Card key={idx} className="p-4 bg-gradient-to-br from-violet-100 via-fuchsia-100 to-pink-100 border border-fuchsia-200">
                  <p className="font-medium text-slate-900">{skill}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="tools">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {SKILLS.tools.map((skill, idx) => (
                <Card key={idx} className="p-4 bg-gradient-to-br from-emerald-100 via-emerald-100 to-teal-100 border border-emerald-200">
                  <p className="font-medium text-slate-900">{skill}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="design">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {SKILLS.design.map((skill, idx) => (
                <Card key={idx} className="p-4 bg-gradient-to-br from-amber-100 via-amber-100 to-orange-100 border border-amber-200">
                  <p className="font-medium text-slate-900">{skill}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Contact Section */}
      <section style={{ maxWidth: '64rem', margin: '0 auto', padding: '5rem 1.5rem', borderTop: '1px solid rgb(226, 232, 240)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'rgb(15, 23, 42)', marginBottom: '1.5rem' }}>함께 일하고 싶으신가요?</h2>
        <p style={{ color: 'rgb(71, 85, 105)', marginBottom: '2rem', maxWidth: '42rem', margin: '0 auto 2rem' }}>
          새로운 프로젝트나 협업 기회에 항상 열려있습니다.
          편하게 연락주세요!
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
          <Button size="lg" asChild style={{ width: '100%', maxWidth: '15rem', margin: '0 auto' }}>
            <a href="mailto:2sora71@gmail.com">
              <Mail style={{ marginRight: '0.5rem', width: '1rem', height: '1rem' }} />
              이메일 보내기
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild style={{ width: '100%', maxWidth: '15rem', margin: '0 auto' }}>
            <a href="tel:01040007968">
              전화하기
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgb(226, 232, 240)', background: 'rgb(15, 23, 42)', color: 'white', padding: '3rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <p style={{ marginBottom: '1rem' }}>© 2026 Lee Sora. All rights reserved.</p>
          <p style={{ color: 'rgb(148, 163, 184)' }}>디자인을 정확하게 구현하는 웹 퍼블리셔</p>
        </div>
      </footer>
    </div>
  )
}