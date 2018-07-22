# shop-go-admin
vue-element-admin

本项目是 shop-go 的后台界面，项目**正在开发中**

# 部署
## 开发
```bash
# 克隆项目
git clone https://github.com/foxiswho/shop-go-admin.git

# 安装依赖
npm install
   
# 建议不要用cnpm安装 会有各种诡异的bug 可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```
浏览器访问 http://localhost:9528

## 发布
```bash
# 构建测试环境
npm run build:sit

# 构建生产环境
npm run build:prod
```

## 其它
```bash
# --report to build with bundle size analytics
npm run build:prod --report

# --preview to start a server in local to preview
npm run build:prod --preview

# lint code
npm run lint

# auto fix
npm run lint -- --fix
```

更多信息请参考 [使用文档](https://panjiachen.github.io/vue-element-admin-site/zh/)

# 其他

本项目原始的源码地址：

源码地址：
https://github.com/PanJiaChen/vue-element-admin/

中文说明
https://github.com/PanJiaChen/vue-element-admin/blob/master/README.zh-CN.md

vue-element-admin 说明文档
https://panjiachen.github.io/vue-element-admin-site/zh/

element 说明文档
http://element-cn.eleme.io/#/zh-CN/component/installation