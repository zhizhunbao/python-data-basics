export default {
  workflow: {
    title: 'Complete Data Analysis Workflow Practice',
    
    steps: {
      collection: {
        title: 'Data Collection',
        description: 'Acquire data and conduct initial exploration'
      },
      processing: {
        title: 'Data Processing',
        description: 'Clean and preprocess data'
      },
      analysis: {
        title: 'Data Analysis',
        description: 'Statistical analysis and modeling'
      },
      presentation: {
        title: 'Result Presentation',
        description: 'Visualization and reporting'
      }
    },
    
    collection: {
      title: 'Data Collection Phase',
      description: 'Data collection is the first step in data analysis, including data acquisition, initial exploration, and quality assessment.',
      
      keyTasks: {
        title: 'Core Tasks',
        task1: 'Acquire data from various data sources',
        task2: 'Conduct data overview and basic information statistics',
        task3: 'Check data quality and completeness',
        task4: 'Perform initial data exploration and visualization'
      },
      
      example: {
        title: 'Code Example'
      },
      
      tips: {
        title: 'Practice Tips',
        tip1: 'Use df.info() to quickly understand basic data information',
        tip2: 'Get statistical summary of numeric variables through df.describe()',
        tip3: 'Use visualization to quickly identify data distribution and outliers'
      }
    },
    
    processing: {
      title: 'Data Processing Phase',
      description: 'Data processing includes data cleaning, transformation, and feature engineering, preparing for subsequent analysis.',
      
      keyTasks: {
        title: 'Core Tasks',
        task1: 'Handle missing values and outliers',
        task2: 'Perform data type conversion and standardization',
        task3: 'Create new features and variables',
        task4: 'Data splitting and sampling'
      },
      
      example: {
        title: 'Code Example'
      },
      
      tips: {
        title: 'Practice Tips',
        tip1: 'Decide how to handle missing values based on business logic',
        tip2: 'Use quantile methods to identify and handle outliers',
        tip3: 'Feature engineering is key to improving model performance'
      }
    },
    
    analysis: {
      title: 'Data Analysis Phase',
      description: 'Data analysis includes statistical analysis, modeling, and result interpretation, which is the core part of the project.',
      
      keyTasks: {
        title: 'Core Tasks',
        task1: 'Conduct descriptive statistical analysis',
        task2: 'Explore relationships between variables',
        task3: 'Build predictive models',
        task4: 'Evaluate model performance'
      },
      
      example: {
        title: 'Code Example'
      },
      
      tips: {
        title: 'Practice Tips',
        tip1: 'Start with simple models and gradually increase complexity',
        tip2: 'Use cross-validation to evaluate model stability',
        tip3: 'Focus on business interpretability, not just technical metrics'
      }
    },
    
    presentation: {
      title: 'Result Presentation Phase',
      description: 'Result presentation includes data visualization, report writing, and result interpretation, ensuring analysis results can be effectively communicated.',
      
      keyTasks: {
        title: 'Core Tasks',
        task1: 'Create clear data visualizations',
        task2: 'Write analysis reports',
        task3: 'Interpret analysis results and business implications',
        task4: 'Propose action recommendations'
      },
      
      example: {
        title: 'Code Example'
      },
      
      tips: {
        title: 'Practice Tips',
        tip1: 'Choose appropriate chart types to display different information',
        tip2: 'Use concise and clear language to explain technical results',
        tip3: 'Combine analysis results with business objectives'
      }
    },
    
    // MDX Content Translations
    mdx: {
      title: 'Complete Data Analysis Workflow Practice',
      learningObjectives: {
        title: 'Learning Objectives',
        description: 'Through this module, you will be able to:',
        objectives: [
          'Master the complete data analysis workflow',
          'Learn methods for data collection and initial exploration',
          'Proficiently perform data cleaning and preprocessing',
          'Be able to conduct statistical analysis and result presentation'
        ]
      },
      interactiveDemo: {
        title: 'Complete Workflow Example',
        description: 'Demonstrate the complete data analysis workflow through actual projects'
      },
      practiceCase: {
        title: 'Practice Case',
        description: 'We will demonstrate through a complete e-commerce user behavior analysis case:',
        steps: [
          'Data Collection: Acquire user behavior data',
          'Data Processing: Clean and preprocess data',
          'Data Analysis: Build user behavior models',
          'Result Presentation: Generate analysis reports and visualizations'
        ]
      },
      dataPreview: {
        title: 'E-commerce User Behavior Data Example'
      }
    }
  }
}
