#!/usr/bin/env node
/* Copies the site files into ./dist so Wrangler uploads only what ships. */
const fs = require("fs");
const path = require("path");

const root = __dirname;
const out = path.join(root, "dist");
const entries = ["index.html", "styles.css", "app.js", "assets"];

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

for (const name of entries) {
  const from = path.join(root, name);
  if (!fs.existsSync(from)) continue;
  fs.cpSync(from, path.join(out, name), { recursive: true });
}

console.log("dist/ built:", entries.join(", "));
