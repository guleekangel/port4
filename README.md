# Port4 — 家具产品设计作品集

一个静态单页作品集网站：Hero、作品系列、工艺、流程、关于与联系。

## 预览

直接用浏览器打开 `index.html`，或启动本地服务：

```bash
python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 部署到 Cloudflare Pages（推荐，长期地址）

线上地址：**https://port4-site.pages.dev**

```bash
npm i -g wrangler     # 首次
wrangler login        # 首次，浏览器授权
node build.js         # 把站点文件收进 dist/
wrangler pages deploy # 读取 wrangler.toml 的 pages_build_output_dir
```

Pages 项目名固定为 `port4-site`，每次部署都会保留历史版本、可在控制台回滚，
不会像 Workers 那样整个脚本被清掉就没了。`<hash>.port4-site.pages.dev` 是每次部署的独立预览地址。

## 部署到 Cloudflare Workers（备选）

地址：`https://port4.angelymha.workers.dev` — 曾出现部署后被从账号里删除的情况，不作为主地址。

```bash
node build.js && npx wrangler deploy
```

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
build.js        生成 dist/（只拷站点需要的文件）
wrangler.toml   Cloudflare Pages 项目配置
```

字体使用 Google Fonts（Inter + Noto Sans SC），需联网加载；断网时回退到系统字体。
