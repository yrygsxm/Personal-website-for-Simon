import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Mail,
  Menu,
  Newspaper,
  NotebookPen,
  Send,
  createLucideIcon,
} from 'lucide-react'

const Twitter = createLucideIcon('Twitter', [
  ['path', { d: 'M4 4l16 16', key: 'twitter-1' }],
  ['path', { d: 'M20 4 13.5 11.5', key: 'twitter-2' }],
  ['path', { d: 'M10.5 12.5 4 20', key: 'twitter-3' }],
])

const Instagram = createLucideIcon('Instagram', [
  ['rect', { x: '3', y: '3', width: '18', height: '18', rx: '5', key: 'instagram-1' }],
  ['circle', { cx: '12', cy: '12', r: '3.5', key: 'instagram-2' }],
  ['circle', { cx: '17.2', cy: '6.8', r: '1', key: 'instagram-3' }],
])

const languageOptions = [
  { key: 'en', label: 'EN' },
  { key: 'zh', label: '中' },
  { key: 'ja', label: '日' },
]

const backgroundVideos = [
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260308_114720_3dabeb9e-2c39-4907-b747-bc3544e2d5b7.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260215_121759_424f8e9c-d8bd-4974-9567-52709dfb6842.mp4',
]

const backgroundVideoStorageKey = 'simon-homepage-background-video-index'

function getInitialBackgroundVideoIndex() {
  if (typeof window === 'undefined') {
    return 0
  }

  try {
    const storedIndex = Number.parseInt(
      window.localStorage.getItem(backgroundVideoStorageKey) ?? '',
      10,
    )

    if (Number.isNaN(storedIndex)) {
      return 0
    }

    return (storedIndex + 1) % backgroundVideos.length
  } catch {
    return 0
  }
}

const dmLink = 'https://t.me/appdo_bot'

const linkMeta = [
  {
    id: 'blog',
    href: 'https://song.al/',
    icon: NotebookPen,
    external: true,
  },
  {
    id: 'newsletter',
    href: 'https://simonjp.substack.com/',
    icon: Newspaper,
    external: true,
  },
  {
    id: 'series',
    href: 'https://sspai.com/series/383',
    icon: BookOpen,
    external: true,
  },
  {
    id: 'twitter',
    href: 'https://twitter.com/SimonJP404',
    icon: Twitter,
    external: true,
  },
  {
    id: 'instagram',
    href: 'https://www.instagram.com/simon.japan/',
    icon: Instagram,
    external: true,
  },
  {
    id: 'telegram',
    href: 'https://t.me/AppDoDo',
    icon: Send,
    external: true,
  },
]

const copy = {
  en: {
    langCode: 'en',
    pageTitle: 'Simon | Photographer | Writer | Digital Media Technology',
    switchVideoLabel: 'Switch Scene',
    mobileSwitchVideoLabel: 'Scene',
    mailLabel: 'DM Me',
    mobileMailLabel: 'DM Me',
    kicker: 'Simon Personal Homepage',
    titleLead: 'Nice to meet',
    titleAccent: 'You.',
    titleAccentNeedsSpace: true,
    titleLine2: "I'm Simon.",
    descriptionLine1: 'Welcome to my personal homepage.',
    descriptionLine2: 'Photographer, writer, and digital media technology.',
    profilePills: ['Photographer', 'Writer', 'Digital Media Technology'],
    primarySectionLabel: 'Selected Links',
    socialSectionLabel: 'Social',
    links: {
      blog: {
        title: 'Blog',
        description: 'Recording my life in Tokyo!',
      },
      newsletter: {
        title: 'Newsletter',
        description:
          'Maybe next time on some rainy night with thunder and lightning.',
      },
      series: {
        title: 'Japan Nationwide Journey Project',
        description:
          'A guide for first-time visitors to Japan who do not want to travel at a glance, and for returning travelers who still want to go deeper and keep discovering.',
      },
      twitter: {
        title: 'Twitter',
        description: 'Recording daily life and small observations.',
      },
      instagram: {
        title: 'Instagram',
        description: 'Publishing my photography.',
      },
      telegram: {
        title: 'Telegram',
        description: 'Internet / Digital / App / Camera',
      },
    },
  },
  zh: {
    langCode: 'zh-CN',
    pageTitle: 'Simon | 摄影 | 写作 | 数字媒体技术',
    switchVideoLabel: '切换背景',
    mobileSwitchVideoLabel: '背景',
    mailLabel: '私信我',
    mobileMailLabel: '私信我',
    kicker: 'Simon 个人主页',
    titleLead: '很高兴认识',
    titleAccent: '你。',
    titleAccentNeedsSpace: false,
    titleLine2: '我是 Simon。',
    descriptionLine1: '欢迎来到我的个人主页。',
    descriptionLine2: '摄影、写作与数字媒体技术。',
    profilePills: ['摄影', '写作', '数字媒体技术'],
    primarySectionLabel: '主要入口',
    socialSectionLabel: '社交媒体',
    links: {
      blog: {
        title: '博客',
        description: '记录我在东京的生活。',
      },
      newsletter: {
        title: '通讯',
        description: '也许会在某个雷雨夜，再写一些新的内容。',
      },
      series: {
        title: '日本全境漫游计划',
        description:
          '这本指南，写给第一次来日本、却不想走马观花的你，也写给那些去了很多次，却还想继续深入、继续发现的旅人。',
      },
      twitter: {
        title: 'Twitter',
        description: '记录日常生活与一些零碎想法。',
      },
      instagram: {
        title: 'Instagram',
        description: '发布我的摄影作品。',
      },
      telegram: {
        title: 'Telegram',
        description: '互联网 / 数字 / App / 相机',
      },
    },
  },
  ja: {
    langCode: 'ja',
    pageTitle: 'Simon | 写真 | 文章 | デジタルメディア技術',
    switchVideoLabel: '背景切替',
    mobileSwitchVideoLabel: '背景',
    mailLabel: 'DMください',
    mobileMailLabel: 'DMください',
    kicker: 'Simon Personal Homepage',
    titleLead: 'はじめまして。',
    titleAccent: '',
    titleAccentNeedsSpace: false,
    titleLine2: 'Simonです。',
    descriptionLine1: '個人ホームページへようこそ。',
    descriptionLine2: '写真、文章、デジタルメディア技術。',
    profilePills: ['写真', '文章', 'デジタルメディア技術'],
    primarySectionLabel: '主要リンク',
    socialSectionLabel: 'ソーシャル',
    links: {
      blog: {
        title: 'ブログ',
        description: '東京での暮らしを記録しています。',
      },
      newsletter: {
        title: 'ニュースレター',
        description: '雷鳴の夜に、また少し長い文章を書くかもしれません。',
      },
      series: {
        title: '日本全境漫遊計画',
        description:
          '初めて日本を訪れるけれど表面だけでは終わりたくない人へ。何度も通いながら、さらに深く見つけ続けたい旅人にも向けたガイドです。',
      },
      twitter: {
        title: 'Twitter',
        description: '日々のことや小さなメモを残しています。',
      },
      instagram: {
        title: 'Instagram',
        description: '写真作品を載せています。',
      },
      telegram: {
        title: 'Telegram',
        description: 'Internet / Digital / App / Camera',
      },
    },
  },
}

function LanguageSwitcher({ currentLanguage, onChange, className = '' }) {
  return (
    <div
      className={`liquid-glass inline-flex h-12 items-center gap-1 rounded-full p-1 ${className}`.trim()}
    >
      {languageOptions.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          className={`flex h-10 items-center justify-center rounded-full px-3 text-xs transition-transform duration-300 hover:scale-105 active:scale-95 sm:px-4 ${
            currentLanguage === key ? 'bg-white/15 text-white' : 'text-white/60'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

function MailButton({ label, className = '' }) {
  return (
    <a
      href={dmLink}
      target="_blank"
      rel="noreferrer"
      className={`liquid-glass grid h-12 grid-cols-[2rem_minmax(0,1fr)_2rem] items-center gap-3 rounded-full px-4 text-sm text-white transition-transform duration-300 hover:scale-105 active:scale-95 ${className}`.trim()}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
        <Send className="h-4 w-4" />
      </span>
      <span className="whitespace-nowrap text-center">{label}</span>
      <span aria-hidden="true" className="h-8 w-8" />
    </a>
  )
}

function MobileMailButton({ label, className = '' }) {
  return (
    <a
      href={dmLink}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`liquid-glass inline-flex h-11 items-center justify-center rounded-full px-2 text-xs text-white transition-transform duration-300 hover:scale-105 active:scale-95 ${className}`.trim()}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
        <Send className="h-3.5 w-3.5" />
      </span>
    </a>
  )
}

function MobileLanguageMenu({
  currentLanguage,
  onChange,
  isOpen,
  onToggle,
  menuRef,
  className = '',
}) {
  const currentOption = languageOptions.find(({ key }) => key === currentLanguage)

  return (
    <div ref={menuRef} className={`relative ${className}`.trim()}>
      <button
        type="button"
        onClick={onToggle}
        className="liquid-glass inline-flex h-11 w-full items-center justify-between gap-1.5 rounded-full px-2.5 text-xs text-white transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        <span className="text-center">{currentOption?.label ?? 'EN'}</span>
        <ChevronDown
          className={`h-4 w-4 text-white/70 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen ? (
        <div className="liquid-glass-strong absolute right-0 top-full z-20 mt-2 flex min-w-full flex-col gap-1 rounded-[1.25rem] p-1.5">
          {languageOptions.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => onChange(key)}
              className={`rounded-full px-3 py-2 text-sm text-center transition-transform duration-300 hover:scale-105 active:scale-95 ${
                currentLanguage === key ? 'bg-white/15 text-white' : 'text-white/60'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

function QuickLinkCard({
  title,
  description,
  href,
  icon: Icon,
  external,
  compact = false,
  hideArrow = false,
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`liquid-glass flex h-full flex-col rounded-[1.75rem] p-4 text-left transition-transform duration-300 hover:scale-105 active:scale-95 ${
        compact ? 'min-h-[8.5rem] justify-between' : 'min-h-[11.5rem]'
      }`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
        <Icon className="h-4 w-4" />
      </span>

      <div className={`mt-6 flex flex-1 flex-col ${compact ? 'justify-end' : ''}`}>
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[1.05rem] font-medium tracking-[-0.03em] text-white sm:text-[1.15rem]">
            {title}
          </h3>
          {!hideArrow ? (
            <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-white/50" />
          ) : null}
        </div>

        {!compact ? (
          <p className="mt-3 text-sm leading-6 text-white/60">
            {description}
          </p>
        ) : null}
      </div>
    </a>
  )
}

function App() {
  const [language, setLanguage] = useState('en')
  const [backgroundVideoIndex, setBackgroundVideoIndex] = useState(
    getInitialBackgroundVideoIndex,
  )
  const [isMobileLanguageMenuOpen, setIsMobileLanguageMenuOpen] = useState(false)
  const mobileLanguageMenuRef = useRef(null)
  const currentCopy = copy[language]
  const currentBackgroundVideo = backgroundVideos[backgroundVideoIndex]
  const quickLinks = linkMeta.map(({ id, ...meta }) => ({
    id,
    ...meta,
    ...currentCopy.links[id],
  }))
  const featuredLinks = quickLinks.filter(({ id }) =>
    ['blog', 'newsletter'].includes(id),
  )
  const seriesLink = quickLinks.find(({ id }) => id === 'series')
  const socialLinks = quickLinks.filter(({ id }) =>
    ['twitter', 'instagram', 'telegram'].includes(id),
  )

  useEffect(() => {
    document.documentElement.lang = currentCopy.langCode
    document.title = currentCopy.pageTitle
  }, [currentCopy])

  useEffect(() => {
    try {
      window.localStorage.setItem(
        backgroundVideoStorageKey,
        String(backgroundVideoIndex),
      )
    } catch {
      // Ignore storage failures so the page still works in restricted browsers.
    }
  }, [backgroundVideoIndex])

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (
        mobileLanguageMenuRef.current &&
        !mobileLanguageMenuRef.current.contains(event.target)
      ) {
        setIsMobileLanguageMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
    }
  }, [])

  const handleBackgroundSwitch = () => {
    setBackgroundVideoIndex((currentIndex) =>
      (currentIndex + 1) % backgroundVideos.length,
    )
  }

  const handleLanguageChange = (nextLanguage) => {
    setLanguage(nextLanguage)
    setIsMobileLanguageMenuOpen(false)
  }

  return (
    <main className="relative min-h-[100svh] overflow-x-hidden bg-[hsl(var(--background))] font-sans text-white">
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video
          key={currentBackgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        >
          <source
            src={currentBackgroundVideo}
            type="video/mp4"
          />
        </video>
      </div>

      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.55))]" />

      <div className="relative z-10 flex min-h-[100svh] flex-col lg:flex-row">
        <section className="relative flex min-h-[100svh] w-full p-4 sm:p-5 lg:w-[52%] lg:p-6">
          <div className="liquid-glass-strong pointer-events-none absolute inset-4 rounded-3xl sm:inset-5 lg:inset-6" />

          <div className="relative flex min-h-full w-full flex-col px-5 py-5 sm:px-7 sm:py-7 lg:px-10 lg:py-10">
            <nav className="flex items-center justify-end gap-4">
              <div className="flex items-center gap-2 lg:hidden">
                <button
                  type="button"
                  onClick={handleBackgroundSwitch}
                  className="liquid-glass inline-grid h-11 w-[8.4rem] grid-cols-[minmax(0,1fr)_1.75rem] items-center gap-2 rounded-full px-2.5 text-xs text-white transition-transform duration-300 hover:scale-105 active:scale-95"
                >
                  <span className="whitespace-nowrap text-left">
                    {currentCopy.switchVideoLabel}
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                    <Menu className="h-3.5 w-3.5" />
                  </span>
                </button>

                <MobileMailButton
                  label={currentCopy.mobileMailLabel}
                  className="w-[3.15rem]"
                />

                <MobileLanguageMenu
                  currentLanguage={language}
                  onChange={handleLanguageChange}
                  isOpen={isMobileLanguageMenuOpen}
                  onToggle={() =>
                    setIsMobileLanguageMenuOpen((currentState) => !currentState)
                  }
                  menuRef={mobileLanguageMenuRef}
                  className="w-[4.25rem]"
                />
              </div>

              <button
                type="button"
                onClick={handleBackgroundSwitch}
                className="liquid-glass hidden items-center gap-3 rounded-full px-4 py-2 text-sm text-white transition-transform duration-300 hover:scale-105 active:scale-95 lg:inline-flex"
              >
                <span>{currentCopy.switchVideoLabel}</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <Menu className="h-4 w-4" />
                </span>
              </button>
            </nav>

            <div className="flex flex-1 flex-col items-start justify-center">
              <img
                src="/logo.png"
                alt="Simon monogram"
                className="mb-8 h-20 w-20 object-cover"
              />

              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/50 sm:text-sm">
                {currentCopy.kicker}
              </p>

              <h1
                className={`flex flex-col gap-[5px] font-medium leading-none tracking-[-0.05em] text-white ${
                  language === 'en'
                    ? 'max-w-full text-[clamp(2.05rem,9.2vw,2.55rem)] sm:max-w-[10.5ch] sm:text-[clamp(2.85rem,6.2vw,5.25rem)] xl:max-w-[12ch] 2xl:max-w-[16ch]'
                    : 'max-w-[10.5ch] text-[clamp(2.85rem,6.2vw,5.25rem)] xl:max-w-[12ch] 2xl:max-w-[16ch]'
                }`}
              >
                <span
                  className={`block max-w-full ${
                    language === 'en'
                      ? 'whitespace-nowrap sm:text-balance 2xl:whitespace-nowrap'
                      : 'text-balance 2xl:whitespace-nowrap'
                  }`}
                >
                  {currentCopy.titleLead}
                  {currentCopy.titleAccent && currentCopy.titleAccentNeedsSpace
                    ? ' '
                    : ''}
                  {currentCopy.titleAccent ? (
                    <span className="font-serif italic text-white/80">
                      {currentCopy.titleAccent}
                    </span>
                  ) : null}
                </span>
                <span>{currentCopy.titleLine2}</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
                {currentCopy.descriptionLine1}
                <br className="block" />
                {currentCopy.descriptionLine2}
              </p>

              <div className="mt-6 grid w-full grid-cols-3 gap-3 sm:flex sm:w-auto sm:flex-wrap">
                {currentCopy.profilePills.map((pill) => (
                  <span
                    key={pill}
                    className="liquid-glass flex min-h-[4.1rem] items-center justify-center rounded-full px-2.5 py-3 text-center text-[0.78rem] leading-[1.15] text-white/80 transition-transform duration-300 hover:scale-105 active:scale-95 sm:min-h-0 sm:px-6 sm:py-3.5 sm:text-base sm:leading-normal"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <div className="mt-12 w-full space-y-8 lg:hidden">
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/50">
                    {currentCopy.primarySectionLabel}
                  </p>

                  <div className="space-y-3">
                    {featuredLinks.map((link) => (
                      <QuickLinkCard key={link.id} {...link} />
                    ))}

                    {seriesLink ? <QuickLinkCard {...seriesLink} /> : null}
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/50">
                    {currentCopy.socialSectionLabel}
                  </p>

                  <div className="grid auto-rows-[1fr] grid-cols-3 gap-3">
                    {socialLinks.map((link) => (
                      <QuickLinkCard key={link.id} {...link} compact hideArrow />
                    ))}
                  </div>
                </div>

                <p className="pt-2 text-center text-xs text-white/40">
                  Copyright © 2026 Simon. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </section>

        <aside className="hidden min-h-[100svh] w-[48%] p-6 lg:flex">
          <div className="flex min-h-full w-full flex-col rounded-[2.75rem] px-2 py-2">
            <div className="flex items-center justify-end gap-3">
              <MailButton
                label={currentCopy.mailLabel}
                className="w-[13rem]"
              />
              <LanguageSwitcher
                currentLanguage={language}
                onChange={setLanguage}
                className="w-[10.5rem] justify-between"
              />
            </div>

            <div className="mt-auto ml-auto w-full max-w-[35rem] space-y-5">
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/50">
                  {currentCopy.primarySectionLabel}
                </p>

                <div className="grid auto-rows-[1fr] grid-cols-2 gap-4">
                  {featuredLinks.map((link) => (
                    <QuickLinkCard key={link.id} {...link} />
                  ))}
                </div>

                {seriesLink ? (
                  <div className="mt-4">
                    <QuickLinkCard {...seriesLink} />
                  </div>
                ) : null}
              </div>

              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/50">
                  {currentCopy.socialSectionLabel}
                </p>

                <div className="grid auto-rows-[1fr] grid-cols-3 gap-4">
                  {socialLinks.map((link) => (
                    <QuickLinkCard key={link.id} {...link} compact />
                  ))}
                </div>
              </div>

              <p className="pt-1 text-right text-xs text-white/40">
                Copyright © 2026 Simon. All rights reserved.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default App
