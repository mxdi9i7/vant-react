const loaderUtils = require('loader-utils');
const MarkdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownCheckbox = require('markdown-it-checkbox');
const frontMatter = require('front-matter');
const highlight = require('./highlight');
const cardWrapper = require('./card-wrapper');
const linkOpen = require('./link-open');
const { slugify } = require('transliteration');


function wrapper(content) {
  content = cardWrapper(content);
  content = escape(content);

  return `
  import * as React from 'react';

  function RawHtmlRenderer(props) {
    return <section dangerouslySetInnerHTML={{ __html: props.html }}></section>;
  }

  class ReactMarkdownComponent extends React.PureComponent {

    render() {
      return <RawHtmlRenderer html={unescape('${content}')} />
    }
  }

  export default ReactMarkdownComponent;
`;
}

const parser = new MarkdownIt({
  html: true,
  highlight,
}).use(markdownItAnchor, {
  level: 2,
  slugify,
}).use(markdownCheckbox, {
  divClass: 'van-doc-checkbox'
});

module.exports = function(source) {
  let options = loaderUtils.getOptions(this) || {};
  this.cacheable && this.cacheable();

  options = {
    wrapper,
    linkOpen: true,
    ...options,
  };

  let fm;

  if (options.enableMetaData) {
    fm = frontMatter(source);
    source = fm.body;
  }

  if (options.linkOpen) {
    linkOpen(parser);
  }

  return options.wrapper(parser.render(source), fm);
};

