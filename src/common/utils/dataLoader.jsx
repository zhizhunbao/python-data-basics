/**
 * 数据加载工具函数
 * 用于从 public/data 目录加载示例数据
 */

/**
 * 加载加利福尼亚房产数据
 * @returns {Promise<Object>} 包含数据加载状态和数据的对象
 */
export const loadCaliforniaHousingData = async () => {
  try {
    const response = await fetch('/data/california_housing.csv');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const csvText = await response.text();
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',');
    
    // 解析CSV数据
    const data = lines.slice(1).map(line => {
      const values = line.split(',');
      const row = {};
      headers.forEach((header, index) => {
        let value = values[index];
        
        // 尝试转换为数字
        if (!isNaN(value) && value !== '') {
          value = parseFloat(value);
        }
        
        row[header] = value;
      });
      return row;
    });
    
    return {
      success: true,
      data: data,
      headers: headers,
      totalRows: data.length,
      error: null
    };
  } catch (error) {
    console.error('加载加利福尼亚房产数据失败:', error);
    return {
      success: false,
      data: [],
      headers: [],
      totalRows: 0,
      error: error.message
    };
  }
};

/**
 * 获取数据预览（前几行）
 * @param {number} rows - 预览行数，默认5行
 * @returns {Promise<Object>} 数据预览对象
 */
export const getDataPreview = async (rows = 5) => {
  const result = await loadCaliforniaHousingData();
  
  if (!result.success) {
    return result;
  }
  
  return {
    ...result,
    data: result.data.slice(0, rows),
    previewRows: rows
  };
};

/**
 * 获取数据统计信息
 * @returns {Promise<Object>} 数据统计对象
 */
export const getDataStats = async () => {
  const result = await loadCaliforniaHousingData();
  
  if (!result.success) {
    return result;
  }
  
  const stats = {
    totalRows: result.data.length,
    columns: result.headers.length,
    columnInfo: {}
  };
  
  // 计算每列的统计信息
  result.headers.forEach(header => {
    const values = result.data.map(row => row[header]).filter(val => val !== null && val !== undefined);
    
    if (values.length > 0 && typeof values[0] === 'number') {
      // 数值列统计
      const sorted = values.sort((a, b) => a - b);
      stats.columnInfo[header] = {
        type: 'numeric',
        count: values.length,
        min: sorted[0],
        max: sorted[sorted.length - 1],
        mean: values.reduce((sum, val) => sum + val, 0) / values.length,
        median: sorted[Math.floor(sorted.length / 2)]
      };
    } else {
      // 文本列统计
      const uniqueValues = [...new Set(values)];
      stats.columnInfo[header] = {
        type: 'categorical',
        count: values.length,
        uniqueCount: uniqueValues.length,
        uniqueValues: uniqueValues.slice(0, 10) // 只显示前10个唯一值
      };
    }
  });
  
  return {
    ...result,
    stats
  };
};

/**
 * 数据字段说明
 */
export const CALIFORNIA_HOUSING_FIELDS = {
  longitude: '经度',
  latitude: '纬度', 
  housing_median_age: '房屋中位年龄',
  total_rooms: '总房间数',
  total_bedrooms: '总卧室数',
  population: '人口数',
  households: '家庭数',
  median_income: '中位收入',
  median_house_value: '中位房价',
  ocean_proximity: '距离海洋远近'
};

/**
 * 获取字段中文名称
 * @param {string} fieldName - 英文字段名
 * @returns {string} 中文字段名
 */
export const getFieldChineseName = (fieldName) => {
  return CALIFORNIA_HOUSING_FIELDS[fieldName] || fieldName;
};
