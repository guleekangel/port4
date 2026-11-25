# Port4 — 家具产品设计作品集

一个静态单页作品集网站：Hero、作品系列、工艺、流程、关于与联系。

## 预览

直接用浏览器打开 `index.html`，或启动本地服务：

```bash
python3 -m http.server 8000
# 打开 http://localhost:8000
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
```

字体使用 Google Fonts（Inter + Noto Sans SC），需联网加载；断网时回退到系统字体。
