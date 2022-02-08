# 前期准备工作，npm包和vscode配置 ！！！**很重要，关乎整个Vue3开发阶段的代码提示**
  1. Volar使用
  * 使用Vue3开发需要禁用**vscode插件Vetur**
  * 然后安装 **Volar(Vue Language Features)**，这样Vue3代码提示即使是使用js开发也非常友好
  * 如果volar没有任何反应，请一定要**更新vscode到最新版本**！！一定要更新vscode!! 出现报错就更新vscode!!

  2. stylelint
  * vscode 安装 **stylelint** 插件，用于规范css书写格式
  * vscode插件扩展中搜索stylelint,然后鼠标右键或者点击小齿轮，选择安装其他版本，需要安装**0.87.5**或**0.87.6**
  * package.json中这几个npm包安装一下版本安装即可！！！(package.json已经指定版本，直接安装即可)
    ```
      "devDependencies": {
        "stylelint": "^13.13.1",
        "stylelint-config-standard": "^22.0.0",
        "stylelint-scss": "^3.21.0",
        "stylelint-config-recess-order": "^2.6.0",
      }
    ```
  * 只有这样，Vue3中的stylelint才会起作用



# node版本
  * node > 16.0.0



# vue3语法糖使用介绍
  1. Vue3的单文件组件的特殊用法(**请看src/components/LookMe.vue**)
    * <script setup> 是一种编译时语法糖，能够极大改善在 SFC(单文件Vue组件) 中使用 Composition API 时的开发者体验。
      -- 对应的中文官方文档 https://v3.cn.vuejs.org/api/sfc-script-setup.html#%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95

    * <style> v-bind 用于在 SFC(单文件Vue组件) <style> 标签中启用组件状态驱动的动态 CSS 值
      -- 对应的中文官方文档 https://v3.cn.vuejs.org/api/sfc-style.html#state-driven-dynamic-css



# 开发环境
  * npm run dev

# 项目打包
  * npm run build

# 检查项目中 eslint 书写不符合规范的地方，并会列举出来
  * npm run eslint

# 检查项目中 eslint 书写不符合规范的地方，并且直接全部修复
  * npm run eslintfix

# 检查项目中 style 书写规范不符合规范的地方，并会列举出来
  * npm run stylelint

# 检查项目中 style 书写不符合规范的地方，并且直接全部修复
  * npm run stylelintfix



# 文件解析
  * .editorconfig     代码格式和规范要求设定
  * .eslintrc.js      ESlint代码规范和代码书写格式
  * .gitignore        配置那些文件不需要上传到git仓库
  * .npmrc            npm源配置，私服配置等，一般可以不管
  * .stylelintignore  stylelint忽略那些文件的检测
  * .stylelintrc.js   stylelint的配置规则
  * jsconfig.json     暂时用来配置点击别名路径import的时候，可以进行文件跳转
  * vite.config.js    vite配置
  * .env              相关文件变量会挂载在import.meta.env上面，除特定变量，其他变量需要以VITE_前缀开头才可
