## 组件文档如何编写

### 介绍

文档网站分为文档展示和demo展示，文档通过收集组件目录下的 `README.[locale].md`, ` locale ` 的值是国际化的标识，和 ` ./site/configs/nav.config.js ` 中的 ` key `保持一致。

### 使用

文档网站替换了storybook 自带的文档生成，在运行 ` yarn storybook ` 自动收集文档和demo的信息，生成对应的页面，并且自动在浏览器中打开页面，对于开发过程中的使用基本上没有太大的影响

### 添加文档配置

在` ./site/configs/nav.config.js ` 添加新的文档页面配置，包括标题和` path `，标题会在左侧导航展示，` path`用来生成页面路由.

### 添加文档文件

在组件目录中新增 `README.zh-CN.md`，用来展示组件文档，使用 ` markdown ` 文件语法。

### 添加文档 demo 文件

在组件目录中新增 ` demo/index.tsx ` 作为文档的页面，然后就可以愉快的编写 demo 了。
由于每次在运行` yarn storybook `时才会收集所有文档信息生成文档配置，所以每次新增的文档文件需要重新运行` yarn storybook `。

