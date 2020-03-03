const path = require('path');

module.exports = function (source) {
  const templatePath = path.resolve(this.context, 'index.html');
  this.addDependency(templatePath);
  return `import "${templatePath}";\n${source}`;
};
