# python-data-basics - 系统架构文档

## 系统概述

本项目是一个**对比式 Python 数据处理教学平台**，旨在通过实际业务场景演示 Python 数据处理的核心流程。项目采用**渐进式学习**方式，从基础列表操作到高级数据分析，展示如何使用 List、NumPy、Pandas、Matplotlib 等基础库构建函数并完成完整的数据分析工作流。

### 项目恢复指导

### 恢复步骤

**1. 恢复配置文件**
```bash
# 需要重新创建以下配置文件：
- package.json          # 项目依赖配置
- vite.config.js         # Vite 构建配置
- tailwind.config.js     # Tailwind CSS 配置
- postcss.config.js      # PostCSS 配置
```

**2. 恢复应用入口文件**
```bash
# 需要重新创建以下入口文件：
- src/App.jsx           # 应用入口组件
- src/main.jsx          # 应用启动文件
- src/index.css         # 全局样式文件
```

**3. 恢复通用模块**
```bash
# 需要重新创建通用模块：
- src/common/i18n.js    # 国际化配置
- src/common/modules/   # 通用组件模块
  ├── Layout/           # 布局组件
  ├── Charts/           # 图表组件
  ├── DataTable/        # 数据表格
  ├── CodeEditor/       # 代码编辑器
  └── MDX/              # MDX 相关组件
```

**4. 恢复教学模块**
```bash
# 需要重新创建各教学模块的完整文件结构
# 每个模块需要包含：
- index.jsx              # 模块入口文件
- route.jsx             # 路由配置文件
- store.jsx              # 状态管理文件
- content.mdx           # 内容文件
- Overview.jsx          # 概览组件
- [其他功能组件].jsx    # 具体功能组件
- locales/              # 国际化文件目录
```

### 恢复优先级

**高优先级（必须）**：
1. `package.json` - 项目依赖管理
2. `vite.config.js` - 构建配置
3. `src/App.jsx` - 应用入口
4. `src/main.jsx` - 应用启动
5. `src/index.css` - 基础样式

**中优先级（重要）**：
1. `src/common/i18n.js` - 国际化配置
2. `src/common/modules/Layout/` - 布局组件
3. 各模块的 `route.jsx` - 路由配置

**低优先级（可选）**：
1. 各模块的具体功能组件
2. 国际化文件
3. 高级功能组件

### 技术栈依赖

**核心依赖**（需要重新安装）：
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "vite": "^5.1.4",
  "zustand": "^5.0.8",
  "react-router-dom": "^6.22.0",
  "tailwindcss": "^3.4.1",
  "@mdx-js/react": "^3.0.1"
}
```

**开发依赖**：
```json
{
  "@vitejs/plugin-react": "^4.2.1",
  "autoprefixer": "^10.4.16",
  "postcss": "^8.4.32"
}
```

### 恢复后的验证

**1. 基础功能验证**：
- [ ] 应用能够正常启动
- [ ] 路由系统正常工作
- [ ] 基础布局显示正常
- [ ] 样式系统正常工作

**2. 模块功能验证**：
- [ ] 各教学模块能够正常访问
- [ ] 模块间导航正常
- [ ] 内容显示正常
- [ ] 交互功能正常

**3. 高级功能验证**：
- [ ] 国际化切换正常
- [ ] 主题切换正常
- [ ] 响应式布局正常
- [ ] 代码编辑器功能正常

## 项目约束

**本项目不包含以下内容：**

- ❌ **测试代码**：不包含单元测试、集成测试、E2E测试等任何测试代码
- ❌ **代码检查工具**：不使用 pylint、flake8、ESLint 等代码检查工具
- ❌ **代码格式化工具**：不使用 black、prettier 等代码格式化工具
- ❌ **类型检查工具**：不使用 mypy、pyright 等类型检查工具
- ❌ **代码质量工具**：不使用 coverage、sonarqube 等代码质量分析工具
- ❌ **TypeScript**：前端项目不使用 TypeScript，使用纯 JavaScript 开发

**国际化管理规范**：

- 🌐 每个模块创建独立的 `locales/` 目录
- 🌐 包含 `zh-CN.json`（简体中文）和 `en.json`（英文）两个语言文件
- 🌐 每个模块管理自己的国际化资源，避免全局耦合

### 设计风格约束

**UI/UX 设计风格**：

- 🎨 **采用亚岗昆学院风格设计**
  - 专业、现代、教育导向的界面设计
  - 学院品牌色彩搭配（绿色#00A651、深绿色#006633、白色为主）
  - 简洁的几何设计，适度的阴影效果
  - 清晰的信息层次和导航结构
  - 响应式布局，适配多种设备
  - 支持深色/浅色主题切换
  - 体现教育机构的专业性和可信度

## 技术栈

### 前端技术栈

#### 核心依赖
- **React 18.3.1**：现代React框架，支持Hooks和并发特性
- **React DOM 18.3.1**：React DOM渲染器
- **Vite 5.1.4**：快速的前端构建工具，提供热重载和快速构建
- **Zustand 5.0.8**：轻量级状态管理库，用于管理应用状态
- **React Router DOM 6.22.0**：客户端路由管理

#### UI组件库
- **Headless UI React 1.7.18**：无样式UI组件库
- **Lucide React 0.344.0**：现代图标库
- **Tailwind CSS 3.4.1**：原子化CSS框架，快速构建现代UI

#### 文档和内容
- **MDX React 3.0.1**：Markdown + JSX，用于编写交互式文档
- **PrismJS 1.29.0**：代码语法高亮
- **Rehype Highlight 7.0.0**：MDX代码高亮插件
- **Remark GFM 4.0.0**：GitHub风格Markdown支持

#### 国际化
- **i18next 23.10.0**：国际化框架
- **React i18next 14.0.5**：React国际化集成

## 模块内容
```
模块1: 业务目标与数据理解
├── 1.1 业务目标: 加利福尼亚房产价格预测
├── 1.2 CSV数据概览  
└── 1.3 业务价值体现

模块2: Python数据处理工具学习
├── 2.1 三框架对比引入 (List vs NumPy vs Pandas)
├── 2.2 CSV处理核心技能
├── 2.3 List 深入详解
├── 2.4 NumPy 深入详解
└── 2.5 Pandas 深入详解

模块3: 数据可视化工具学习
├── 3.1 可视化库对比引入 (Matplotlib vs Seaborn)
├── 3.2 Matplotlib 深入详解
└── 3.3 Seaborn 深入详解

模块4: 完整数据分析流程实战
├── 4.1 流程步骤详解 (8步完整流程)
├── 4.2 工具整合应用
└── 4.3 结果展示分析
```

## 布局设计

### 响应式布局系统

#### 断点设计
```
移动端: < 768px (sm)
平板端: 768px - 1024px (md)
桌面端: ≥ 1024px (lg)
```

#### 全局间距系统
```
组件间距:
├── component-sm: 1rem (16px) - 小组件间距
├── component-md: 1.5rem (24px) - 中等组件间距
├── component-lg: 2rem (32px) - 大组件间距
└── component-xl: 3rem (48px) - 超大组件间距

内容间距:
├── content-sm: 0.5rem (8px) - 小内容间距
├── content-md: 1rem (16px) - 中等内容间距
├── content-lg: 1.5rem (24px) - 大内容间距
└── content-xl: 2rem (32px) - 超大内容间距
```

### 组件布局设计

#### Header组件
```
Header组件 (响应式)
├── 移动端: 100% × 60px
├── 桌面端: 100% × 60px
├── 内边距: px-4 py-2 (16px 8px)
├── 背景: bg-white
├── 边框: border-b border-gray-200
└── 子元素:
    ├── Logo: 32px × 32px
    ├── Title: "Python Data Basics" (20px)
    ├── Language Switch: 32px × 32px
    └── Theme Toggle: 32px × 32px
```

#### Sidebar组件
```
Sidebar组件 (响应式)
├── 移动端: 0px (隐藏/抽屉模式)
├── 桌面端: 240px × calc(100vh-60px)
├── 内边距: p-6 (24px)
├── 背景: bg-gray-50
├── 边框: border-r border-gray-200
└── 模块导航按钮: 220px × 45px × 4个
    ├── 业务目标与数据理解
    ├── Python工具学习
    ├── 数据可视化工具
    └── 完整数据分析流程
```

#### PageContent组件
```
PageContent组件 (响应式)
├── 移动端: 100% × calc(100vh-60px)
├── 桌面端: calc(100% - 240px) × calc(100vh-60px)
├── 内边距: p-8 (32px)
├── 背景: bg-white
├── 最大宽度: 800px (文档标准宽度)
├── 居中布局: mx-auto
└── 内容组件:
    ├── DataTable (mb-component-lg)
    ├── PythonChart (mb-component-lg)
    └── CodeBlock (mb-component-lg)
```

### 布局结构设计

#### Layout组件 (整体容器)
```
Layout组件 (Flex布局)
├── 容器: flex h-screen
├── Header (固定顶部)
│   ├── 主题切换状态
│   ├── 语言切换状态
│   └── 响应式适配
├── MainContainer (主容器)
│   ├── 容器: flex flex-1
│   ├── Sidebar (固定左侧)
│   │   ├── 折叠状态管理
│   │   ├── 当前模块状态
│   │   └── 响应式显示/隐藏
│   └── PageContent (主内容区)
│       ├── 路由状态管理
│       ├── 内容状态管理
│       └── 响应式布局
└── 状态管理:
    ├── sidebarCollapsed: boolean
    ├── currentModule: string
    ├── theme: 'light' | 'dark'
    └── language: 'zh' | 'en'
```

### 响应式行为

#### 移动端 (< 768px)
```
布局结构:
├── Header: 100% × 60px (固定顶部)
├── Sidebar: 0px (隐藏，使用抽屉模式)
└── PageContent: 100% × calc(100vh-60px)

交互行为:
├── Sidebar: 点击菜单按钮显示抽屉
├── Header: 显示菜单按钮
└── PageContent: 全宽显示
```

#### 桌面端 (≥ 768px)
```
布局结构:
├── Header: 100% × 60px (固定顶部)
├── Sidebar: 240px × calc(100vh-60px) (固定左侧)
└── PageContent: calc(100% - 240px) × calc(100vh-60px)

交互行为:
├── Sidebar: 始终显示，可折叠
├── Header: 隐藏菜单按钮
└── PageContent: 自适应宽度
```

## 目录结构

### 前端目录结构
```
src/
├── common/                 # 通用配置
│   ├── i18n.js            # 国际化配置
│   └── modules/           # 通用模块
│       ├── Layout/        # 布局组件
│       │   ├── index.jsx        # 导出文件
│       │   ├── route.jsx        # 布局组件路由配置
│       │   ├── store.jsx        # 状态管理
│       │   ├── Layout.jsx      # 主布局组件
│       │   ├── MainContainer.jsx # 主容器组件
│       │   ├── Header.jsx      # 头部导航
│       │   ├── Sidebar.jsx     # 侧边栏
│       │   ├── PageContent.jsx # 页面内容组件
│       │   └── locales/        # 布局组件国际化
│       ├── PythonChart/       # Python图表组件
│       │   ├── index.jsx        # 导出文件
│       │   ├── route.jsx        # Python图表组件路由配置
│       │   ├── store.jsx        # 状态管理
│       │   ├── PythonChart.jsx # Python图表展示组件
│       │   ├── ChartCode.jsx   # 图表代码展示
│       │   ├── ChartOutput.jsx # 图表输出展示
│       │   └── locales/        # Python图表组件国际化
│       ├── DataTable/         # 数据表格
│       │   ├── index.jsx        # 导出文件
│       │   ├── route.jsx        # 数据表格组件路由配置
│       │   ├── store.jsx        # 状态管理
│       │   ├── DataTable.jsx   # 表格组件
│       │   ├── Pagination.jsx  # 分页组件
│       │   └── locales/        # 数据表格国际化
│       ├── CodeBlock/         # 代码块组件
│       │   ├── index.jsx        # 导出文件
│       │   ├── route.jsx        # 代码块组件路由配置
│       │   ├── store.jsx        # 状态管理
│       │   ├── CodeBlock.jsx   # 代码块组件
│       │   ├── CodeHighlight.jsx # 代码高亮组件
│       │   └── locales/        # 代码块组件国际化
│       ├── MDX/              # MDX 相关组件
│       │   ├── index.jsx        # 导出文件
│       │   ├── route.jsx        # MDX 组件路由配置
│       │   ├── store.jsx        # 状态管理
│       │   ├── MDXProvider.jsx      # MDX 提供者
│       │   ├── MDXRenderer.jsx      # MDX 渲染器
│       │   ├── InteractiveDemo.jsx  # 交互式演示
│       │   ├── DataPreview.jsx      # 数据预览组件
│       │   ├── PythonChartEmbed.jsx # Python图表嵌入组件
│       │   └── locales/             # MDX 组件国际化
├── modules/               # 对比式教学模块
│   ├── Business/             # 模块1：业务目标与数据理解
│   │   ├── index.jsx           # 业务目标模块入口文件
│   │   ├── route.jsx           # 业务目标模块路由配置
│   │   ├── store.jsx           # 业务目标状态管理
│   │   ├── content.mdx        # 业务目标内容
│   │   ├── Overview.jsx       # 概览组件
│   │   ├── Goals.jsx          # 业务目标组件
│   │   ├── DataUnderstanding.jsx # 数据理解组件
│   │   ├── ProblemDefinition.jsx # 问题定义组件
│   │   └── locales/          # 模块国际化
│   ├── DataTools/             # 模块2：Python数据处理工具学习
│   │   ├── index.jsx           # 数据处理工具模块入口文件
│   │   ├── route.jsx           # 数据处理工具模块路由配置
│   │   ├── store.jsx           # 数据处理工具状态管理
│   │   ├── content.mdx        # 数据处理工具内容
│   │   ├── Overview.jsx       # 概览组件
│   │   ├── FrameworkComparison.jsx # 框架对比组件
│   │   ├── CSVProcessing.jsx   # CSV处理组件
│   │   ├── ListDeepDive.jsx   # List深入详解组件
│   │   ├── NumPyDeepDive.jsx  # NumPy深入详解组件
│   │   ├── PandasDeepDive.jsx # Pandas深入详解组件
│   │   └── locales/          # 模块国际化
│   ├── Visualization/         # 模块3：数据可视化工具学习
│   │   ├── index.jsx           # 可视化工具模块入口文件
│   │   ├── route.jsx           # 可视化工具模块路由配置
│   │   ├── store.jsx           # 可视化工具状态管理
│   │   ├── content.mdx        # 可视化工具内容
│   │   ├── Overview.jsx       # 概览组件
│   │   ├── LibraryComparison.jsx # 可视化库对比组件
│   │   ├── MatplotlibDeepDive.jsx # Matplotlib深入详解组件
│   │   ├── SeabornDeepDive.jsx # Seaborn深入详解组件
│   │   └── locales/          # 模块国际化
│   └── Workflow/              # 模块4：完整数据分析流程实战
│       ├── index.jsx           # 完整流程模块入口文件
│       ├── route.jsx           # 完整流程模块路由配置
│       ├── store.jsx           # 完整流程状态管理
│       ├── content.mdx        # 完整流程内容
│       ├── Overview.jsx       # 概览组件
│       ├── ProcessSteps.jsx   # 流程步骤详解组件
│       ├── ToolIntegration.jsx # 工具整合应用组件
│       ├── ResultAnalysis.jsx # 结果展示分析组件
│       └── locales/          # 模块国际化
├── App.jsx                # 应用入口
├── main.jsx               # 应用启动
└── index.css              # Tailwind CSS 全局样式入口
```

## 配置文件

### package.json
```json
{
  "name": "python-data-basics",
  "version": "1.0.0",
  "description": "对比式 Python 数据处理教学平台",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.22.0",
    "zustand": "^5.0.8",
    "@mdx-js/react": "^3.0.1",
    "@mdx-js/mdx": "^3.0.1",
    "prismjs": "^1.29.0",
    "react-syntax-highlighter": "^15.5.0",
    "lucide-react": "^0.400.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.1.4",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.1",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "tailwindcss": "^3.4.1",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32"
  },
  "keywords": [
    "python",
    "data-analysis",
    "education",
    "react",
    "vite"
  ],
  "author": "Python Data Basics Team",
  "license": "MIT"
}
```

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // 支持 MDX
      babel: {
        plugins: [
          ['@babel/plugin-syntax-jsx', { pragma: 'React.createElement' }]
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@common': resolve(__dirname, 'src/common'),
      '@modules': resolve(__dirname, 'src/modules'),
      '@assets': resolve(__dirname, 'src/assets')
    }
  },
  server: {
    port: 3000,
    open: true,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          state: ['zustand'],
          mdx: ['@mdx-js/react', '@mdx-js/mdx']
        }
      }
    }
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'zustand',
      '@mdx-js/react',
      'prismjs',
      'lucide-react'
    ]
  }
})
```

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      spacing: {
        'component-sm': '1rem',
        'component-md': '1.5rem',
        'component-lg': '2rem',
        'component-xl': '3rem',
        'content-sm': '0.5rem',
        'content-md': '1rem',
        'content-lg': '1.5rem',
        'content-xl': '2rem',
      },
      maxWidth: {
        'content': '800px',
        'sidebar': '240px',
      },
      height: {
        'header': '60px',
        'content': 'calc(100vh - 60px)',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
```

#### postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```


## 前端命名规范（React/JavaScript）

### 文件和目录命名

- **目录名**：大驼峰命名（`PascalCase`）
- **特殊目录**：`public/`, `assets/`（全小写）
- **React 组件文件名**：大驼峰命名（`PascalCase`）
- **页面组件**：`index.jsxx`（模块入口）
- **路由配置文件**：`route.jsx`（模块路由配置）
- **JavaScript 工具文件名**：小驼峰命名（`camelCase`）
- **配置文件名**：小驼峰或短横线命名
- **样式文件名**：小写或与组件同名

### 组件命名

- **React 组件**：大驼峰命名（`PascalCase`），多单词组合
- **组件前缀规范**：
  - 布局组件：`Layout` 后缀
  - 基础组件：无前缀
  - 业务组件：功能描述
  - HOC 组件：`with` 前缀

### 函数和变量命名

- **函数名**：小驼峰命名（`camelCase`）
- **事件处理函数**：`handle` 前缀
- **变量名**：小驼峰命名（`camelCase`）
- **常量名**：全大写，多个单词用下划线分隔（`UPPER_SNAKE_CASE`）
- **布尔变量**：使用 `is`、`has`、`should` 前缀

### React Hooks 命名

- **自定义 Hook**：使用 `use` 前缀，小驼峰命名
- **useState 变量**：小驼峰命名，配对命名
- **useRef 变量**：小驼峰命名，通常使用 `Ref` 后缀
- **useContext**：大驼峰命名，通常使用 `Context` 后缀

### MDX 文件命名

- **MDX 内容文件**：`content.mdx`（模块主内容）
- **MDX 组件导出**：大驼峰命名
- **代码示例文件**：小驼峰命名，描述性名称

### Zustand Store 命名

- **Store 文件名**：`use{Name}store.jsx`
- **Store 变量名**：小驼峰命名
- **Action 函数名**：小驼峰命名，动词开头

### 路由配置命名

- **路由配置文件**：`route.jsx`（固定命名）
- **路由导出变量**：`{moduleName}Routes`（如 `businessRoutes`）
- **路由路径**：短横线命名（如 `/data-tools`）
- **子路由路径**：短横线命名（如 `/framework-comparison`）
- **路由元信息**：小驼峰命名（如 `meta.title`）