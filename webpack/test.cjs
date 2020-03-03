const { parse } = require('node-html-parser');

const dom = parse(`<template>
    test
</template>`);

const content = dom.querySelector('template');
content.insertAdjacentHTML('afterbegin', `<style id="x123"></style>`);
const x123 = dom.querySelector('#x123');
x123.set_content(`html {
    min-height: 100%;
}`);

console.log(x123.innerHTML);
