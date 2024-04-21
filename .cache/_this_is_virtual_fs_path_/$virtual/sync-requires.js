
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/lynhtran/projects/LynhTran.github.io/src/pages/404.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/lynhtran/projects/LynhTran.github.io/src/pages/blog.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/lynhtran/projects/LynhTran.github.io/src/pages/index.js"))
}

