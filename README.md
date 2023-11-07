## 微警开放平台

### 测试环境地址

https://sit.weijing.gov.cn/fcfe_test/authenticateManagement/index.html

### 演示版本地址

http://14.215.30.26:18808/authenticateManagement/index.html#/

## 安装使用

```sh
# 安装依赖
npm i
# 运行
npm run dev
# 打包
npm run build
# 代码提交
git cz
```

## 项目结构

### /src

### /api 接口文件

### /assets 项目资源文件

### /components 通用组件

### /pages 项目页面

### /store mobx 状态管理

### /utils 工具函数

### App.tsx 根组件

### main.tsx 项目入口

***

## 项目模块

- Home 首页

- Login 登录

- Register 账号注册申请

  - Tour 查询注册进度

  - Result 注册结果

- AppLayout 布局

- MyAccount 账号信息

  - AccountInfo 账号信息

  - AccountSettings 修改密码

  - CompanyInfo 单位信息

  - CompanySettings 修改单位信息

- Main 首页

- AppServiceCenter 基础能力中心

  - Introduction 基础能力介绍页

- DevDocument 开发文档

  - SearchDocument 搜索文档

- MyApps 我的应用

  - AppForm 新增/编辑单位应用

  - AppInfo 应用接入基础能力详情

    - Access 新增/编辑接入基础能力表单信息

    - UploadForm 上传申请表/函

- MyApplications 我的申请

- MessageCenter 消息中心

  - MessageDetail 查看消息详情

