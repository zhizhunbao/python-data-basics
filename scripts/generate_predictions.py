"""
加利福尼亚房价预测脚本
按照数据分析工作流程，读取数据，训练模型，生成预测值并输出到新CSV文件
"""

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_squared_error, r2_score

# 步骤 1: 数据收集
print("步骤 1: 数据收集")
df = pd.read_csv('public/data/california_housing.csv')
print(f"数据形状: {df.shape}")
print(df.head())

# 步骤 2: 数据概览
print("\n步骤 2: 数据概览")
print(df.info())
print(df.describe())
print(df.isnull().sum())

# 步骤 3: 数据清洗
print("\n步骤 3: 数据清洗")
# 处理缺失值（删除或填充）
df = df.dropna()  # 删除包含缺失值的行
# 或使用: df.fillna(df.mean())  # 用均值填充

# 处理异常值（移除房价为负的记录）
df = df[df['median_house_value'] > 0]

# 删除重复值
df = df.drop_duplicates()

print(f"清洗后数据形状: {df.shape}")

# 步骤 4: 特征工程
print("\n步骤 4: 特征工程")
# 创建新特征
df['rooms_per_household'] = df['total_rooms'] / df['households']
df['bedrooms_per_room'] = df['total_bedrooms'] / df['total_rooms']
df['population_per_household'] = df['population'] / df['households']

# 保存原始特征值（用于后续输出）
df_original = df.copy()

# 数据标准化（仅用于模型训练）
numeric_features = ['median_income', 'housing_median_age', 'total_rooms']
scaler = StandardScaler()
df[numeric_features] = scaler.fit_transform(df[numeric_features])

print("特征工程完成")

# 步骤 5: 模型构建（跳过探索性分析，直接构建模型）
print("\n步骤 5: 模型构建")

# 准备特征和目标变量（按照文档示例）
feature_cols = ['median_income', 'housing_median_age', 'total_rooms']
X = df[feature_cols]
y = df['median_house_value']

# 分割数据
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 训练线性回归模型
model = LinearRegression()
model.fit(X_train, y_train)

# 预测测试集
y_pred = model.predict(X_test)

# 模型评估
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
r2 = r2_score(y_test, y_pred)

print(f"RMSE: {rmse:.2f}")
print(f"R² 得分: {r2:.4f}")

# 步骤 6: 生成所有数据的预测值并保存
print("\n步骤 6: 生成预测值并保存结果")

# 对所有数据进行预测（使用标准化后的特征）
all_predictions = model.predict(X)

# 使用原始数据框（包含原始特征值）
df_output = df_original.copy()
df_output['predicted_house_value'] = all_predictions

# 计算误差
df_output['prediction_error'] = df_output['predicted_house_value'] - df_output['median_house_value']
df_output['prediction_error_percent'] = (df_output['prediction_error'] / df_output['median_house_value'] * 100).round(2)

# 选择要输出的列（保留原始特征和预测结果）
output_columns = [
    'longitude', 'latitude', 'housing_median_age',
    'total_rooms', 'total_bedrooms', 'population',
    'households', 'median_income', 'ocean_proximity',
    'median_house_value', 'predicted_house_value',
    'prediction_error', 'prediction_error_percent'
]

# 只输出存在的列
available_columns = [col for col in output_columns if col in df_output.columns]
df_output = df_output[available_columns]

# 保存到CSV文件
output_file = 'public/data/california_housing_with_predictions.csv'
df_output.to_csv(output_file, index=False)

print(f"结果已保存到: {output_file}")
print(f"输出文件形状: {df_output.shape}")
print("\n输出文件前5行:")
print(df_output.head())

