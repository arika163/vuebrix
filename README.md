# Vuebrix
一个基于webpack4的vue2项目框架
> ps:需要使用node14版本

## 主要特性
- 子应用与基座分离，可以独立进行版本迭代
- 开发环境下基座与子应用可以一同调试
- 抽离子应用与基座的稳定公共依赖，进行缓存优化
- 大幅优化构建速度

## 基本命令
### 依赖安装
```bash
## 安装依赖
yarn
```

### 本地调试
```bash
## 启动基座开发服务
yarn dev
```

### 打包
```bash
## 打包某个子系统
yarn build --child [ChildName]
## 打包整个项目
yarn build
## 打包完看效果
yarn server
```

### 代码格式校验
```bash
## 格式检查
yarn lint
## 自动格式修复
yarn lint --fix
```