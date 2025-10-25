export default {
  // Business模块 - 业务目标与数据理解
  business: {
    title: '业务目标与数据理解',
    description: '学习如何定义业务目标，理解数据特征，为数据分析项目奠定基础',

    // 业务目标组件
    goals: {
      title: '业务目标设定',
      subtitle: '将业务需求转化为数据问题',
      description: '在开始任何数据分析项目之前，明确业务目标是成功的关键。本节将学习如何识别和定义业务目标。',
      
      sections: {
        businessValue: {
          title: '业务价值识别',
          content: '数据分析的核心价值在于解决实际业务问题。我们需要：',
          points: [
            '识别业务痛点和机会',
            '量化业务影响',
            '确定数据驱动的解决方案',
            '建立ROI评估框架'
          ]
        },
        goalSetting: {
          title: '目标设定方法',
          content: 'SMART目标设定原则：',
          smart: {
            specific: '具体性 (Specific) - 目标要明确具体',
            measurable: '可衡量 (Measurable) - 能够量化评估',
            achievable: '可实现 (Achievable) - 在现有资源下可行',
            relevant: '相关性 (Relevant) - 与业务目标相关',
            timebound: '时限性 (Time-bound) - 有明确的时间框架'
          }
        },
        examples: {
          title: '实际案例',
          content: '以下是一些常见的业务目标设定案例：',
          cases: [
            {
              business: '电商平台',
              goal: '提高用户转化率',
              metric: '从3%提升到5%',
              timeframe: '3个月内'
            },
            {
              business: '金融公司',
              goal: '降低客户流失率',
              metric: '从15%降低到10%',
              timeframe: '6个月内'
            },
            {
              business: '制造企业',
              goal: '优化生产流程',
              metric: '减少20%的废品率',
              timeframe: '1年内'
            }
          ]
        }
      }
    },

    // 数据理解组件
    dataUnderstanding: {
      title: '数据理解',
      subtitle: '探索数据特征和价值',
      description: '理解数据是数据分析的基础。本节将学习如何系统性地探索和理解数据。',
      
      sections: {
        dataExploration: {
          title: '数据探索方法',
          content: '数据探索的四个维度：',
          dimensions: [
            {
              name: '数据质量',
              description: '检查数据的完整性、准确性和一致性',
              methods: ['缺失值分析', '异常值检测', '数据一致性验证']
            },
            {
              name: '数据分布',
              description: '了解数据的统计特征和分布规律',
              methods: ['描述性统计', '分布可视化', '相关性分析']
            },
            {
              name: '数据关系',
              description: '发现变量之间的关系和模式',
              methods: ['相关性矩阵', '散点图分析', '聚类分析']
            },
            {
              name: '业务含义',
              description: '将数据特征与业务场景关联',
              methods: ['业务规则验证', '领域知识应用', '专家访谈']
            }
          ]
        },
        dataTypes: {
          title: '数据类型识别',
          content: '正确识别数据类型是分析的基础：',
          types: [
            {
              type: '数值型数据',
              description: '可以进行数学运算的数据',
              examples: ['年龄', '收入', '销售额', '温度'],
              analysis: ['均值', '中位数', '标准差', '分布分析']
            },
            {
              type: '分类型数据',
              description: '表示类别或状态的数据',
              examples: ['性别', '产品类别', '地区', '客户等级'],
              analysis: ['频次统计', '比例分析', '交叉表']
            },
            {
              type: '时间序列数据',
              description: '按时间顺序排列的数据',
              examples: ['销售趋势', '股价变化', '用户活跃度'],
              analysis: ['趋势分析', '季节性分析', '周期性识别']
            },
            {
              type: '文本数据',
              description: '非结构化的文本信息',
              examples: ['客户反馈', '产品评论', '新闻文章'],
              analysis: ['词频分析', '情感分析', '主题建模']
            }
          ]
        },
        dataQuality: {
          title: '数据质量评估',
          content: '数据质量直接影响分析结果的可靠性：',
          criteria: [
            {
              criterion: '完整性',
              description: '数据是否完整，缺失值比例',
              impact: '影响样本代表性和统计推断'
            },
            {
              criterion: '准确性',
              description: '数据是否准确反映实际情况',
              impact: '影响分析结论的可信度'
            },
            {
              criterion: '一致性',
              description: '数据格式和标准是否统一',
              impact: '影响数据整合和分析效率'
            },
            {
              criterion: '时效性',
              description: '数据是否及时更新',
              impact: '影响分析结果的时效性'
            }
          ]
        }
      }
    },

    // 问题定义组件
    problemDefinition: {
      title: '问题定义',
      subtitle: '明确定义分析目标和成功标准',
      description: '清晰的问题定义是数据分析成功的关键。本节将学习如何将模糊的业务需求转化为明确的分析问题。',
      
      sections: {
        problemFraming: {
          title: '问题框架化',
          content: '将业务问题转化为分析问题的步骤：',
          steps: [
            {
              step: '1. 问题识别',
              description: '明确要解决的核心业务问题',
              questions: ['什么是最重要的业务挑战？', '哪些问题影响最大？', '问题的根本原因是什么？']
            },
            {
              step: '2. 问题分解',
              description: '将复杂问题分解为可分析的小问题',
              questions: ['问题可以分解为哪些子问题？', '哪些子问题最优先？', '子问题之间有什么关系？']
            },
            {
              step: '3. 假设形成',
              description: '基于经验和数据形成可验证的假设',
              questions: ['可能的解决方案是什么？', '哪些因素最可能影响结果？', '如何验证假设？']
            },
            {
              step: '4. 成功标准',
              description: '定义项目成功的衡量标准',
              questions: ['如何衡量成功？', '关键指标是什么？', '期望的改进幅度是多少？']
            }
          ]
        },
        analysisTypes: {
          title: '分析类型选择',
          content: '根据问题类型选择合适的分析方法：',
          types: [
            {
              type: '描述性分析',
              description: '回答"发生了什么"',
              purpose: '了解现状，发现模式',
              methods: ['数据汇总', '可视化', '统计描述'],
              example: '分析销售数据的月度趋势'
            },
            {
              type: '诊断性分析',
              description: '回答"为什么发生"',
              purpose: '找出原因，理解机制',
              methods: ['相关性分析', '回归分析', 'A/B测试'],
              example: '分析客户流失的原因'
            },
            {
              type: '预测性分析',
              description: '回答"将会发生什么"',
              purpose: '预测未来，提前准备',
              methods: ['时间序列', '机器学习', '统计模型'],
              example: '预测下季度销售额'
            },
            {
              type: '规范性分析',
              description: '回答"应该做什么"',
              purpose: '优化决策，指导行动',
              methods: ['优化算法', '决策树', '推荐系统'],
              example: '制定最优的营销策略'
            }
          ]
        },
        successMetrics: {
          title: '成功指标定义',
          content: '建立可量化的成功指标：',
          categories: [
            {
              category: '业务指标',
              description: '直接反映业务价值的指标',
              examples: ['收入增长', '成本降低', '客户满意度', '市场份额']
            },
            {
              category: '技术指标',
              description: '反映分析质量的指标',
              examples: ['模型准确率', '预测精度', '数据覆盖率', '处理速度']
            },
            {
              category: '过程指标',
              description: '反映分析过程的指标',
              examples: ['分析周期', '数据质量', '团队效率', '资源利用率']
            }
          ]
        }
      }
    },

    // MDX 内容翻译
    mdx: {
      title: '业务目标与数据理解',
      learningObjectives: {
        title: '学习目标',
        description: '通过本模块的学习，您将能够：',
        objectives: [
          '理解数据分析项目的业务价值',
          '掌握问题定义的方法和技巧',
          '学会从业务角度分析数据特征',
          '建立数据驱动的决策思维'
        ]
      },
      practiceCase: {
        title: '实践案例',
        description: '我们将通过一个完整的电商数据分析案例，展示如何：',
        steps: [
          '业务背景：某电商平台希望提升用户购买转化率',
          '目标设定：识别影响用户购买决策的关键因素',
          '数据理解：分析用户行为数据和商品特征数据',
          '问题定义：建立用户购买行为预测模型'
        ]
      }
    }
  }
};