export default {
  // Business module - Business Goals and Data Understanding
  business: {
    title: 'Business Goals and Data Understanding',
    description: 'Learn how to define business goals, understand data characteristics, and lay the foundation for data analysis projects',

    // Business Goals component
    goals: {
      title: 'Business Goal Setting',
      subtitle: 'Transform business requirements into data problems',
      description: 'Before starting any data analysis project, clarifying business goals is key to success. This section will learn how to identify and define business goals.',
      
      sections: {
        businessValue: {
          title: 'Business Value Identification',
          content: 'The core value of data analysis lies in solving real business problems. We need to:',
          points: [
            'Identify business pain points and opportunities',
            'Quantify business impact',
            'Determine data-driven solutions',
            'Establish ROI evaluation framework'
          ]
        },
        goalSetting: {
          title: 'Goal Setting Methods',
          content: 'SMART goal setting principles:',
          smart: {
            specific: 'Specific - Goals should be clear and specific',
            measurable: 'Measurable - Can be quantified and evaluated',
            achievable: 'Achievable - Feasible with existing resources',
            relevant: 'Relevant - Related to business objectives',
            timebound: 'Time-bound - Have clear time frames'
          }
        },
        examples: {
          title: 'Real-World Examples',
          content: 'Here are some common business goal setting examples:',
          cases: [
            {
              business: 'E-commerce Platform',
              goal: 'Increase user conversion rate',
              metric: 'From 3% to 5%',
              timeframe: 'Within 3 months'
            },
            {
              business: 'Financial Company',
              goal: 'Reduce customer churn rate',
              metric: 'From 15% to 10%',
              timeframe: 'Within 6 months'
            },
            {
              business: 'Manufacturing Enterprise',
              goal: 'Optimize production process',
              metric: 'Reduce 20% waste rate',
              timeframe: 'Within 1 year'
            }
          ]
        }
      }
    },

    // Data Understanding component
    dataUnderstanding: {
      title: 'Data Understanding',
      subtitle: 'Explore data characteristics and value',
      description: 'Understanding data is the foundation of data analysis. This section will learn how to systematically explore and understand data.',
      
      sections: {
        dataExploration: {
          title: 'Data Exploration Methods',
          content: 'Four dimensions of data exploration:',
          dimensions: [
            {
              name: 'Data Quality',
              description: 'Check data completeness, accuracy, and consistency',
              methods: ['Missing value analysis', 'Outlier detection', 'Data consistency validation']
            },
            {
              name: 'Data Distribution',
              description: 'Understand statistical characteristics and distribution patterns',
              methods: ['Descriptive statistics', 'Distribution visualization', 'Correlation analysis']
            },
            {
              name: 'Data Relationships',
              description: 'Discover relationships and patterns between variables',
              methods: ['Correlation matrix', 'Scatter plot analysis', 'Clustering analysis']
            },
            {
              name: 'Business Meaning',
              description: 'Connect data characteristics with business scenarios',
              methods: ['Business rule validation', 'Domain knowledge application', 'Expert interviews']
            }
          ]
        },
        dataTypes: {
          title: 'Data Type Identification',
          content: 'Correctly identifying data types is the foundation of analysis:',
          types: [
            {
              type: 'Numerical Data',
              description: 'Data that can be mathematically operated',
              examples: ['Age', 'Income', 'Sales', 'Temperature'],
              analysis: ['Mean', 'Median', 'Standard deviation', 'Distribution analysis']
            },
            {
              type: 'Categorical Data',
              description: 'Data representing categories or states',
              examples: ['Gender', 'Product category', 'Region', 'Customer level'],
              analysis: ['Frequency statistics', 'Proportion analysis', 'Cross-tabulation']
            },
            {
              type: 'Time Series Data',
              description: 'Data arranged in chronological order',
              examples: ['Sales trends', 'Stock price changes', 'User activity'],
              analysis: ['Trend analysis', 'Seasonal analysis', 'Cyclical identification']
            },
            {
              type: 'Text Data',
              description: 'Unstructured text information',
              examples: ['Customer feedback', 'Product reviews', 'News articles'],
              analysis: ['Word frequency analysis', 'Sentiment analysis', 'Topic modeling']
            }
          ]
        },
        dataQuality: {
          title: 'Data Quality Assessment',
          content: 'Data quality directly affects the reliability of analysis results:',
          criteria: [
            {
              criterion: 'Completeness',
              description: 'Whether data is complete, missing value ratio',
              impact: 'Affects sample representativeness and statistical inference'
            },
            {
              criterion: 'Accuracy',
              description: 'Whether data accurately reflects actual situation',
              impact: 'Affects credibility of analysis conclusions'
            },
            {
              criterion: 'Consistency',
              description: 'Whether data format and standards are unified',
              impact: 'Affects data integration and analysis efficiency'
            },
            {
              criterion: 'Timeliness',
              description: 'Whether data is updated timely',
              impact: 'Affects timeliness of analysis results'
            }
          ]
        }
      }
    },

    // Problem Definition component
    problemDefinition: {
      title: 'Problem Definition',
      subtitle: 'Clearly define analysis goals and success criteria',
      description: 'Clear problem definition is key to data analysis success. This section will learn how to transform vague business requirements into clear analysis problems.',
      
      sections: {
        problemFraming: {
          title: 'Problem Framing',
          content: 'Steps to transform business problems into analysis problems:',
          steps: [
            {
              step: '1. Problem Identification',
              description: 'Clarify the core business problem to be solved',
              questions: ['What is the most important business challenge?', 'Which problems have the greatest impact?', 'What is the root cause of the problem?']
            },
            {
              step: '2. Problem Decomposition',
              description: 'Break complex problems into analyzable sub-problems',
              questions: ['What sub-problems can the problem be decomposed into?', 'Which sub-problems are most prioritized?', 'What relationships exist between sub-problems?']
            },
            {
              step: '3. Hypothesis Formation',
              description: 'Form verifiable hypotheses based on experience and data',
              questions: ['What are possible solutions?', 'Which factors are most likely to affect results?', 'How to verify hypotheses?']
            },
            {
              step: '4. Success Criteria',
              description: 'Define measurement standards for project success',
              questions: ['How to measure success?', 'What are the key indicators?', 'What is the expected improvement magnitude?']
            }
          ]
        },
        analysisTypes: {
          title: 'Analysis Type Selection',
          content: 'Choose appropriate analysis methods based on problem type:',
          types: [
            {
              type: 'Descriptive Analysis',
              description: 'Answer "What happened"',
              purpose: 'Understand current state, discover patterns',
              methods: ['Data summarization', 'Visualization', 'Statistical description'],
              example: 'Analyze monthly sales data trends'
            },
            {
              type: 'Diagnostic Analysis',
              description: 'Answer "Why did it happen"',
              purpose: 'Find causes, understand mechanisms',
              methods: ['Correlation analysis', 'Regression analysis', 'A/B testing'],
              example: 'Analyze customer churn reasons'
            },
            {
              type: 'Predictive Analysis',
              description: 'Answer "What will happen"',
              purpose: 'Predict future, prepare in advance',
              methods: ['Time series', 'Machine learning', 'Statistical models'],
              example: 'Predict next quarter sales'
            },
            {
              type: 'Prescriptive Analysis',
              description: 'Answer "What should be done"',
              purpose: 'Optimize decisions, guide actions',
              methods: ['Optimization algorithms', 'Decision trees', 'Recommendation systems'],
              example: 'Develop optimal marketing strategy'
            }
          ]
        },
        successMetrics: {
          title: 'Success Metrics Definition',
          content: 'Establish quantifiable success indicators:',
          categories: [
            {
              category: 'Business Metrics',
              description: 'Metrics that directly reflect business value',
              examples: ['Revenue growth', 'Cost reduction', 'Customer satisfaction', 'Market share']
            },
            {
              category: 'Technical Metrics',
              description: 'Metrics that reflect analysis quality',
              examples: ['Model accuracy', 'Prediction precision', 'Data coverage', 'Processing speed']
            },
            {
              category: 'Process Metrics',
              description: 'Metrics that reflect analysis process',
              examples: ['Analysis cycle', 'Data quality', 'Team efficiency', 'Resource utilization']
            }
          ]
        }
      }
    },

    // MDX content translation
    mdx: {
      title: 'Business Goals and Data Understanding',
      learningObjectives: {
        title: 'Learning Objectives',
        description: 'Through this module, you will be able to:',
        objectives: [
          'Understand the business value of data analysis projects',
          'Master problem definition methods and techniques',
          'Learn to analyze data characteristics from a business perspective',
          'Establish data-driven decision thinking'
        ]
      },
      practiceCase: {
        title: 'Practice Case',
        description: 'We will demonstrate how to:',
        steps: [
          'Business Background: An e-commerce platform wants to improve user purchase conversion rate',
          'Goal Setting: Identify key factors affecting user purchase decisions',
          'Data Understanding: Analyze user behavior data and product feature data',
          'Problem Definition: Build a user purchase behavior prediction model'
        ]
      }
    }
  }
};
