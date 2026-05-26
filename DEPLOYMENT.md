# 内部试运行部署说明

本阶段目标：先用 Railway 部署一个稳定的内部试运行网址，暂不接入真实短信验证码和真实支付。

## 推荐平台

Railway Hobby。

原因：
- 不需要自己买服务器和配置系统环境。
- 可以直接从 GitHub 仓库部署。
- 可以配置持久化 Volume 保存 SQLite 数据库，适合短期内部试运行。
- 后续可以继续迁移到 PostgreSQL、正式域名和真实支付。

## 你需要做什么

1. 注册 GitHub 账号。
2. 注册 Railway 账号：https://railway.app
3. 在 Railway 绑定 GitHub。
4. 把本项目上传到一个 GitHub 私有仓库。
5. 在 Railway 新建 Project，选择 Deploy from GitHub repo。
6. 在 Railway 项目中添加 Volume：
   - Mount Path: `/data`
7. 在 Railway 项目中设置环境变量：
   - `NODE_ENV=production`
   - `JWT_SECRET=一段足够长的随机字符串`
   - `DB_PATH=/data/bio_booking.db`
8. Railway 部署完成后，打开自动生成的域名进行内部测试。

## 当前部署方式

项目会执行：

```bash
npm ci
npm run build
npm start
```

`npm run build` 会构建：
- `client`：React 前端
- `server`：Express 后端

`npm start` 会启动后端，并由后端托管 `client/dist` 前端页面。

## 内部试运行限制

这一阶段仍未接入：
- 真实支付宝/微信支付
- 真实短信验证码
- 正式域名和备案
- PostgreSQL/MySQL
- 自动备份和监控

这些会在内部流程测试稳定后逐步接入。
