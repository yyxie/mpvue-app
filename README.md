# 基于mpvue小程序



> A Mpvue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 用的技术和工具

``` bash

# commitlint

 npm install --save-dev @commitlint/{config-conventional,cli}
 在项目目录下配置.commitlintrc.js 用于相关的配置
 在package.json 中添加
 "husky": {
     "hooks": {
         "commit-msg": "commitlint -e $GIT_PARAMS"
      }
 }

# px2rpx

 在build文件夹下面的utils.js中添加
   px2rpxLoader 代码如下
   ......
   var px2rpxLoader = {
      loader: 'px2rpx-loader',
      options: {
        baseDpr: 1,
        rpxUnit: 0.5
      }
    }
    ......
 并在generateLoaders中添加 代码如下
   function generateLoaders (loader, loaderOptions) {
      var loaders = [cssLoader, px2rpxLoader, postcssLoader]
      ......
   }

# mpVue 详见mpvue 官网[http://mpvue.com/](http://mpvue.com/)

# 请求使用的是 flyio[flyio、axios、fentch对比](https://wendux.github.io/dist/#/doc/flyio/compare)

  具体使用见src/utils/http.js
  src/utils/api.js中将flyio挂到了vue上，这样需要使用的地方就不用再引入该http.js了，
  只需要这样调用
  this.$http.authorList().then(function (res) {//this代表 Vue
            console.log('请求')
            console.log(res)
   })

# 尝试使用webview内嵌h5页面

  [详见](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html?search-key=web-view)
  需要注意的是在微信开发者工具中想要看webview效果需要将详情中 "不校验安全域名、web-view 域名、TLS 版本以及 HTTPS 证书"勾选上
  否则就会出现内嵌页面展示不了
  
# 使用vuex

```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
