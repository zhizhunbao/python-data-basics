# python-data-basics - 系统架构文档

## 系统概述

本项目是一个**对比式 Python 数据处理教学平台**，旨在通过实际业务场景演示 Python 数据处理的核心流程。项目采用**渐进式学习**方式，从基础列表操作到高级数据分析，展示如何使用 List、NumPy、Pandas、Matplotlib 等基础库构建函数并完成完整的数据分析工作流。

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
模块1: 业务目标
├── 1.1 加利福尼亚房产价格预测
├── 1.2 数据概览  
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

## 目录结构

### 前端目录结构
```
src/
├── common/                 # 通用配置
│   ├── i18n.jsx           # 国际化配置
│   ├── modules/           # 通用模块
│   │   ├── Layout/        # 布局组件
│   │   │   ├── index.jsx        # 导出文件
│   │   │   ├── route.jsx        # 布局组件路由配置
│   │   │   ├── store.jsx        # 状态管理
│   │   │   ├── Layout.jsx      # 主布局组件
│   │   │   ├── MainContainer.jsx # 主容器组件
│   │   │   ├── Header.jsx      # 头部导航
│   │   │   ├── Sidebar.jsx     # 侧边栏
│   │   │   ├── PageContent.jsx # 页面内容组件
│   │   │   └── locales/        # 布局组件国际化
│   │   │       ├── en-US.jsx   # 英文语言包
│   │   │       └── zh-CN.jsx   # 中文语言包
│   │   ├── PythonChart/       # Python图表组件
│   │   │   ├── index.jsx        # 导出文件
│   │   │   ├── route.jsx        # Python图表组件路由配置
│   │   │   ├── store.jsx        # 状态管理
│   │   │   ├── PythonChart.jsx # Python图表展示组件
│   │   │   ├── ChartCode.jsx   # 图表代码展示
│   │   │   ├── ChartOutput.jsx # 图表输出展示
│   │   │   └── locales/        # Python图表组件国际化
│   │   │       ├── en-US.jsx   # 英文语言包
│   │   │       └── zh-CN.jsx   # 中文语言包
│   │   ├── DataTable/         # 数据表格
│   │   │   ├── index.jsx        # 导出文件
│   │   │   ├── route.jsx        # 数据表格组件路由配置
│   │   │   ├── store.jsx        # 状态管理
│   │   │   ├── DataTable.jsx   # 表格组件
│   │   │   ├── Pagination.jsx  # 分页组件
│   │   │   └── locales/        # 数据表格国际化
│   │   │       ├── en-US.jsx   # 英文语言包
│   │   │       └── zh-CN.jsx   # 中文语言包
│   │   ├── CodeBlock/         # 代码块组件
│   │   │   ├── index.jsx        # 导出文件
│   │   │   ├── route.jsx        # 代码块组件路由配置
│   │   │   ├── store.jsx        # 状态管理
│   │   │   ├── CodeBlock.jsx   # 代码块组件
│   │   │   ├── CodeHighlight.jsx # 代码高亮组件
│   │   │   └── locales/        # 代码块组件国际化
│   │   │       ├── en-US.jsx   # 英文语言包
│   │   │       └── zh-CN.jsx   # 中文语言包
│   │   ├── MDX/              # MDX 相关组件
│   │   │   ├── index.jsx        # 导出文件
│   │   │   ├── route.jsx        # MDX 组件路由配置
│   │   │   ├── store.jsx        # 状态管理
│   │   │   ├── MDXPage.jsx     # MDX 页面组件
│   │   │   ├── MDXTableOfContents.jsx # MDX 目录组件
│   │   │   └── locales/        # MDX 组件国际化
│   │   │       ├── en-US.jsx   # 英文语言包
│   │   │       └── zh-CN.jsx   # 中文语言包
│   │   └── Elements/          # 通用元素组件（预留）
│   └── utils/             # 通用工具
│       └── dataLoader.jsx  # 数据加载工具
├── modules/               # 对比式教学模块
│   ├── Business/             # 模块1：业务目标与数据理解
│   │   ├── index.jsx           # 业务目标模块入口文件
│   │   ├── route.jsx           # 业务目标模块路由配置
│   │   ├── store.jsx           # 业务目标状态管理
│   │   ├── BusinessMDXPage.jsx # 业务目标MDX页面组件
│   │   ├── content-en.mdx     # 英文内容
│   │   ├── content-zh.mdx     # 中文内容
│   │   └── locales/          # 模块国际化
│   │       ├── en-US.jsx     # 英文语言包
│   │       └── zh-CN.jsx     # 中文语言包
│   ├── DataTools/             # 模块2：Python数据处理工具学习
│   │   ├── index.jsx           # 数据处理工具模块入口文件
│   │   ├── route.jsx           # 数据处理工具模块路由配置
│   │   ├── store.jsx           # 数据处理工具状态管理
│   │   ├── DataToolsMDXPage.jsx # 数据处理工具MDX页面组件
│   │   ├── content-en.mdx     # 英文内容
│   │   ├── content-zh.mdx     # 中文内容
│   │   └── locales/          # 模块国际化（待完善）
│   ├── Visualization/         # 模块3：数据可视化工具学习
│   │   ├── index.jsx           # 可视化工具模块入口文件
│   │   ├── route.jsx           # 可视化工具模块路由配置
│   │   ├── store.jsx           # 可视化工具状态管理
│   │   ├── VisualizationMDXPage.jsx # 可视化工具MDX页面组件
│   │   ├── content-en.mdx     # 英文内容
│   │   ├── content-zh.mdx     # 中文内容
│   │   └── locales/          # 模块国际化
│   │       ├── en-US.jsx     # 英文语言包
│   │       └── zh-CN.jsx     # 中文语言包
│   └── Workflow/              # 模块4：完整数据分析流程实战
│       ├── index.jsx           # 完整流程模块入口文件
│       ├── route.jsx           # 完整流程模块路由配置
│       ├── store.jsx           # 完整流程状态管理
│       ├── WorkflowMDXPage.jsx # 完整流程MDX页面组件
│       ├── content-en.mdx     # 英文内容
│       ├── content-zh.mdx     # 中文内容
│       └── locales/          # 模块国际化
│           ├── en-US.jsx     # 英文语言包
│           └── zh-CN.jsx     # 中文语言包
├── App.jsx                # 应用入口
├── main.jsx               # 应用启动
└── index.css              # Tailwind CSS 全局样式入口
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