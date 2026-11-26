# Port4 — 家具产品设计作品集

一个静态单页作品集网站：Hero、作品系列、工艺、流程、关于与联系。

## 预览

直接用浏览器打开 `index.html`，或启动本地服务：

```bash
python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 部署到 Cloudflare Workers

线上地址：**https://port4.angelymha.workers.dev**

```bash
npm i -g wrangler     # 首次
wrangler login        # 首次，浏览器授权
node build.js         # 把站点文件收进 dist/
wrangler deploy       # 上传到 Cloudflare
```

`build.js` 只拷贝 `index.html`、`styles.css`、`app.js`、`assets/`，避免把 `.git`、`wrangler.toml` 之类一起传上去。
站点是纯静态资源，由 Workers 的 `[assets]` 直接托管，不需要 runtime 代码。

## 部署到 GitHub Pages

仓库 Settings → Pages → Source 选择 `main` 分支根目录（`/`），保存后访问：

```
https://guleekangel.github.io/port4/
```

## 结构

```
index.html      页面结构
styles.css      样式
app.js          滚动动效、导航、作品灯箱等交互
assets/images/  作品图片（10 张）
build.js        生成 dist/（Cloudflare 部署用）
wrangler.toml   Cloudflare Workers 静态资源配置
```

字体使用 Google Fonts（Inter + Noto Sans SC），需联网加载；断网时回退到系统字体。
