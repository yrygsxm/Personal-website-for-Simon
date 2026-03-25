# Simon Personal Homepage

Simon 的个人主页项目，基于 React + Vite 构建，采用液态玻璃风格、全屏视频背景与中 / 英 / 日三语切换设计。

线上地址：

- [https://www.fo.ink](https://www.fo.ink)

## 项目特点

- 全屏循环背景视频，支持手动切换
- 刷新页面后自动切换到下一条背景视频
- 中 / 英 / 日三语界面切换
- 桌面端与移动端分别做了独立排版优化
- 液态玻璃风格 UI
- 个人链接、专栏入口与社交媒体入口整合展示

## 技术栈

- React 19
- Vite 8
- Tailwind CSS 4
- Lucide React
- Vercel

## 本地运行

先安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm run dev
```

构建生产版本：

```bash
npm run build
```

本地预览生产版本：

```bash
npm run preview
```

## 项目结构

```text
.
├── public/
│   └── logo.png
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

## 主要文件说明

- `src/App.jsx`
  页面结构、三语文案、背景视频切换、移动端 / 桌面端布局逻辑
- `src/index.css`
  全局样式、字体、液态玻璃效果、自定义主题变量
- `public/logo.png`
  页面使用的 logo 资源
- `vercel.json`
  Vercel 构建与输出目录配置

## 部署到 Vercel

如果本地已经安装并登录 Vercel CLI，可以直接部署：

```bash
npx vercel deploy
```

部署到生产环境：

```bash
npx vercel deploy --prod
```

## 上传到 GitHub

如果这是一个新仓库，可以在项目目录运行：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-name>/<your-repo>.git
git push -u origin main
```

如果你使用 SSH：

```bash
git remote add origin git@github.com:<your-name>/<your-repo>.git
git push -u origin main
```

## 备注

- 当前项目目录中已经包含 `dist/` 与 `node_modules/`，正式上传到 GitHub 前，建议补充 `.gitignore`
- 如果你需要，我可以继续帮你补一个适合这个项目的 `.gitignore`
