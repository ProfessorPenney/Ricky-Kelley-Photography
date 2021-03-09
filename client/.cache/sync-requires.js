
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-jsx": preferDefault(require("C:\\Users\\Kevin\\Web projects\\ricky-portfolio\\client\\src\\pages\\404.jsx")),
  "component---src-pages-about-jsx": preferDefault(require("C:\\Users\\Kevin\\Web projects\\ricky-portfolio\\client\\src\\pages\\about.jsx")),
  "component---src-pages-contact-jsx": preferDefault(require("C:\\Users\\Kevin\\Web projects\\ricky-portfolio\\client\\src\\pages\\contact.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("C:\\Users\\Kevin\\Web projects\\ricky-portfolio\\client\\src\\pages\\index.jsx")),
  "component---src-pages-portfolio-jsx": preferDefault(require("C:\\Users\\Kevin\\Web projects\\ricky-portfolio\\client\\src\\pages\\portfolio.jsx"))
}

