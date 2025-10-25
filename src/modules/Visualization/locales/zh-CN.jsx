export default {
  visualization: {
    title: '数据可视化工具学习',
    
    matplotlib: {
      title: 'Matplotlib 基础',
      description: 'Matplotlib 是 Python 最基础的可视化库，提供了丰富的绘图功能和灵活的定制选项。',
      
      features: {
        title: '核心特性',
        feature1: '支持多种图表类型（折线图、柱状图、散点图等）',
        feature2: '提供精细的图形定制选项',
        feature3: '支持子图和复杂布局',
        feature4: '与 NumPy 和 Pandas 完美集成'
      },
      
      example: {
        title: '代码示例'
      },
      
      tips: {
        title: '使用技巧',
        tip1: '使用 plt.style.use() 设置图形样式',
        tip2: '合理使用 subplot 创建多子图布局',
        tip3: '注意图形的分辨率和保存格式'
      }
    },
    
    seaborn: {
      title: 'Seaborn 高级统计图表',
      description: 'Seaborn 是基于 Matplotlib 的高级统计图表库，专门用于创建美观的统计可视化。',
      
      features: {
        title: '核心特性',
        feature1: '内置多种统计图表类型',
        feature2: '美观的默认样式和配色方案',
        feature3: '支持数据分组和分类可视化',
        feature4: '与 Pandas DataFrame 无缝集成'
      },
      
      example: {
        title: '代码示例'
      },
      
      tips: {
        title: '使用技巧',
        tip1: '使用 sns.set_style() 设置整体样式',
        tip2: '利用 hue 参数进行数据分组',
        tip3: '使用 sns.pairplot() 快速探索数据关系'
      }
    },
    
    plotly: {
      title: 'Plotly 交互式可视化',
      description: 'Plotly 是现代的可视化库，专注于创建交互式图表和仪表板。',
      
      features: {
        title: '核心特性',
        feature1: '创建交互式图表和仪表板',
        feature2: '支持 3D 图表和动画效果',
        feature3: '可以导出为 HTML 或嵌入网页',
        feature4: '提供丰富的图表类型和定制选项'
      },
      
      example: {
        title: '代码示例'
      },
      
      tips: {
        title: '使用技巧',
        tip1: '使用 fig.update_layout() 定制图表布局',
        tip2: '利用 hover_data 参数丰富悬停信息',
        tip3: '使用 fig.write_html() 保存交互式图表'
      }
    },
    
    comparison: {
      title: '工具对比分析',
      description: '通过多维度对比，帮助选择最适合的可视化工具。',
      
      criteria: {
        title: '对比维度',
        ease: '易用性',
        customization: '定制性',
        interactivity: '交互性',
        performance: '性能',
        integration: '集成度'
      },
      
      recommendations: {
        title: '使用建议',
        matplotlib: '适合需要精细控制的静态图表',
        seaborn: '适合快速创建统计图表',
        plotly: '适合需要交互性的现代应用'
      }
    },
    
    // MDX 内容翻译
    mdx: {
      title: '数据可视化工具学习',
      learningObjectives: {
        title: '学习目标',
        description: '通过本模块的学习，您将能够：',
        objectives: [
          '掌握 Matplotlib 基础绘图功能',
          '熟练使用 Seaborn 创建统计图表',
          '学会使用 Plotly 创建交互式可视化',
          '根据需求选择最适合的可视化工具'
        ]
      },
      practiceCase: {
        title: '实践案例',
        description: '我们将通过一个完整的销售数据分析案例，展示如何使用三种工具：',
        steps: [
          '数据准备：加载和清洗销售数据',
          'Matplotlib：创建基础统计图表',
          'Seaborn：绘制高级统计图表',
          'Plotly：构建交互式仪表板'
        ]
      }
    }
  }
}
