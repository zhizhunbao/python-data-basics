export default {
  visualization: {
    title: 'Data Visualization Tools Learning',
    
    matplotlib: {
      title: 'Matplotlib Basics',
      description: 'Matplotlib is Python\'s most fundamental visualization library, providing rich plotting functions and flexible customization options.',
      
      features: {
        title: 'Core Features',
        feature1: 'Supports multiple chart types (line, bar, scatter plots, etc.)',
        feature2: 'Provides fine-grained graphic customization options',
        feature3: 'Supports subplots and complex layouts',
        feature4: 'Perfect integration with NumPy and Pandas'
      },
      
      example: {
        title: 'Code Example'
      },
      
      tips: {
        title: 'Usage Tips',
        tip1: 'Use plt.style.use() to set graphic styles',
        tip2: 'Properly use subplot to create multi-subplot layouts',
        tip3: 'Pay attention to graphic resolution and save format'
      }
    },
    
    seaborn: {
      title: 'Seaborn Advanced Statistical Charts',
      description: 'Seaborn is an advanced statistical charting library based on Matplotlib, specifically designed for creating beautiful statistical visualizations.',
      
      features: {
        title: 'Core Features',
        feature1: 'Built-in multiple statistical chart types',
        feature2: 'Beautiful default styles and color schemes',
        feature3: 'Supports data grouping and categorical visualization',
        feature4: 'Seamless integration with Pandas DataFrame'
      },
      
      example: {
        title: 'Code Example'
      },
      
      tips: {
        title: 'Usage Tips',
        tip1: 'Use sns.set_style() to set overall style',
        tip2: 'Use hue parameter for data grouping',
        tip3: 'Use sns.pairplot() to quickly explore data relationships'
      }
    },
    
    plotly: {
      title: 'Plotly Interactive Visualization',
      description: 'Plotly is a modern visualization library focused on creating interactive charts and dashboards.',
      
      features: {
        title: 'Core Features',
        feature1: 'Create interactive charts and dashboards',
        feature2: 'Supports 3D charts and animation effects',
        feature3: 'Can export to HTML or embed in web pages',
        feature4: 'Provides rich chart types and customization options'
      },
      
      example: {
        title: 'Code Example'
      },
      
      tips: {
        title: 'Usage Tips',
        tip1: 'Use fig.update_layout() to customize chart layout',
        tip2: 'Use hover_data parameter to enrich hover information',
        tip3: 'Use fig.write_html() to save interactive charts'
      }
    },
    
    comparison: {
      title: 'Tool Comparison Analysis',
      description: 'Through multi-dimensional comparison, help choose the most suitable visualization tool.',
      
      criteria: {
        title: 'Comparison Dimensions',
        ease: 'Ease of Use',
        customization: 'Customization',
        interactivity: 'Interactivity',
        performance: 'Performance',
        integration: 'Integration'
      },
      
      recommendations: {
        title: 'Usage Recommendations',
        matplotlib: 'Suitable for static charts requiring fine control',
        seaborn: 'Suitable for quickly creating statistical charts',
        plotly: 'Suitable for modern applications requiring interactivity'
      }
    },
    
    // MDX Content Translations
    mdx: {
      title: 'Data Visualization Tools Learning',
      learningObjectives: {
        title: 'Learning Objectives',
        description: 'Through this module, you will be able to:',
        objectives: [
          'Master Matplotlib basic plotting functions',
          'Proficiently use Seaborn to create statistical charts',
          'Learn to use Plotly to create interactive visualizations',
          'Choose the most suitable visualization tool based on needs'
        ]
      },
      practiceCase: {
        title: 'Practice Case',
        description: 'We will demonstrate how to use three tools through a complete sales data analysis case:',
        steps: [
          'Data Preparation: Load and clean sales data',
          'Matplotlib: Create basic statistical charts',
          'Seaborn: Draw advanced statistical charts',
          'Plotly: Build interactive dashboard'
        ]
      }
    }
  }
}
