/* eslint-disable require-jsdoc */
/* eslint-disable class-methods-use-this */
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { parse } = require('node-html-parser');
const readFile = promisify(fs.readFile);

module.exports = class WebMaterialPlugin {
  constructor({ test }) {
    this._pattern = test;
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('WebMaterialPlugin', compilation => {
      HtmlWebpackPlugin
        .getHooks(compilation)
        .alterAssetTagGroups
        .tapAsync('WebMaterialPlugin', async (data, cb) => {
          const tags = await createTemplateTags(Array.from(compilation.fileDependencies), this._pattern);

          tags.forEach(({ innerHTML, name }) => {
            data.headTags.push({
              attributes: {
                id: `template-${name}`
              },
              innerHTML,
              tagName: 'template',
              voidTag: false
            });
          });

          cb(null, data);
        });
    });
  }
};

function checkCssHref(href) {
  let result = true;

  if (!href) {
    result = false;
  }

  let url;

  try {
    url = new URL(href);
  } catch (err) {
    return result;
  }

  if (url.protocol) {
    result = false;
  }

  return result;
}

async function createTemplateTags(files, pattern) {
  const targetFiles = files.filter(filePath => pattern.test(filePath));
  
  const allTemplates = await Promise.all(targetFiles.map(async filePath => {
    const { name } = path.parse(filePath);
    const folderPath = path.dirname(filePath);
    const templatePath = path.join(folderPath, 'index.html');
    let template;
    let innerHTML;

    try {
      template = await readFile(templatePath, { encoding: 'utf8' });
    } catch (err) {

    }

    if (template) {
      const dom = parse(template);
      const content = dom.querySelector('template');
      const links = Array.from(content.querySelectorAll('link'));

      links.forEach((link, index) => {
        const href = link.getAttribute('href');
  
        if (!checkCssHref(href)) {
          return;
        }
  
        let text;
  
        try {
          const cssPath = path.resolve(folderPath, href);
          text = fs.readFileSync(cssPath, { encoding: 'utf-8' });
        } catch (err) {
          console.error(err);
        }
  
        link.removeAttribute('href');

        if (!text) {
          return;
        }
  
        const styleId = `web-material-inline-style-${index}`;
        content.insertAdjacentHTML('afterbegin', `<style id="${styleId}"></style>`);
        const inlined = dom.querySelector(`#${styleId}`);
        inlined.set_content(text);
        inlined.removeAttribute('id');
      });
      
      if (content && content.innerHTML) {
        innerHTML = content.innerHTML;
      }
    }

    return {
      innerHTML,
      name
    };
  }));

  const templates = allTemplates.filter(({ innerHTML }) => !!innerHTML);
  return templates;
}
