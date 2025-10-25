export default {
  workflow: {
    title: '完整数据分析流程实战',
    
    steps: {
      collection: {
        title: '数据收集',
        description: '获取数据并进行初步探索'
      },
      processing: {
        title: '数据处理',
        description: '清洗和预处理数据'
      },
      analysis: {
        title: '数据分析',
        description: '统计分析和建模'
      },
      presentation: {
        title: '结果展示',
        description: '可视化和报告'
      }
    },
    
    collection: {
      title: '数据收集阶段',
      description: '数据收集是数据分析的第一步，包括数据获取、初步探索和质量评估。',
      
      keyTasks: {
        title: '核心任务',
        task1: '从各种数据源获取数据',
        task2: '进行数据概览和基本信息统计',
        task3: '检查数据质量和完整性',
        task4: '进行初步的数据探索和可视化'
      },
      
      example: {
        title: '代码示例'
      },
      
      tips: {
        title: '实践技巧',
        tip1: '使用 df.info() 快速了解数据基本信息',
        tip2: '通过 df.describe() 获取数值型变量的统计摘要',
        tip3: '使用可视化快速识别数据分布和异常值'
      }
    },
    
    processing: {
      title: '数据处理阶段',
      description: '数据处理包括数据清洗、转换和特征工程，为后续分析做准备。',
      
      keyTasks: {
        title: '核心任务',
        task1: '处理缺失值和异常值',
        task2: '进行数据类型转换和标准化',
        task3: '创建新特征和变量',
        task4: '数据分割和采样'
      },
      
      example: {
        title: '代码示例'
      },
      
      tips: {
        title: '实践技巧',
        tip1: '根据业务逻辑决定缺失值的处理方式',
        tip2: '使用分位数方法识别和处理异常值',
        tip3: '特征工程是提升模型性能的关键'
      }
    },
    
    analysis: {
      title: '数据分析阶段',
      description: '数据分析包括统计分析、建模和结果解释，是项目的核心环节。',
      
      keyTasks: {
        title: '核心任务',
        task1: '进行描述性统计分析',
        task2: '探索变量间的关系',
        task3: '建立预测模型',
        task4: '评估模型性能'
      },
      
      example: {
        title: '代码示例'
      },
      
      tips: {
        title: '实践技巧',
        tip1: '从简单模型开始，逐步增加复杂度',
        tip2: '使用交叉验证评估模型稳定性',
        tip3: '关注业务解释性，不仅仅是技术指标'
      }
    },
    
    presentation: {
      title: '结果展示阶段',
      description: '结果展示包括数据可视化、报告撰写和结果解释，确保分析结果能够有效传达。',
      
      keyTasks: {
        title: '核心任务',
        task1: '创建清晰的数据可视化',
        task2: '撰写分析报告',
        task3: '解释分析结果和业务含义',
        task4: '提出行动建议'
      },
      
      example: {
        title: '代码示例'
      },
      
      tips: {
        title: '实践技巧',
        tip1: '选择适合的图表类型展示不同信息',
        tip2: '使用简洁明了的语言解释技术结果',
        tip3: '将分析结果与业务目标相结合'
      }
    },
    
    // MDX 内容翻译
    mdx: {
      title: '完整数据分析流程实战',
      learningObjectives: {
        title: '学习目标',
        description: '通过本模块的学习，您将能够：',
        objectives: [
          '掌握完整的数据分析工作流程',
          '学会数据收集和初步探索的方法',
          '熟练进行数据清洗和预处理',
          '能够进行统计分析和结果展示'
        ]
      },
      interactiveDemo: {
        title: '完整工作流示例',
        description: '通过实际项目演示数据分析的完整流程'
      },
      practiceCase: {
        title: '实践案例',
        description: '我们将通过一个完整的电商用户行为分析案例，展示：',
        steps: [
          '数据收集：获取用户行为数据',
          '数据处理：清洗和预处理数据',
          '数据分析：建立用户行为模型',
          '结果展示：生成分析报告和可视化'
        ]
      },
      dataPreview: {
        title: '电商用户行为数据示例'
      }
    }
  }
}
