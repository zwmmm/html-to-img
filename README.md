# html-to-img

![GitHub file size in bytes](https://img.shields.io/github/size/zwmmm/html2img/dist/html2img.esm.js)

![GitHub package.json version](https://img.shields.io/github/package-json/v/zwmmm/html2img)

## 使用

`npm i html-to-img -S`

```js
import html2img from 'html-to-img'

html2img(
    document.getElementById('demo'),
).then(
    src => console.log(src)
)
```

当然这样直接转换 img 不容易调试，所以需要使用第二个参数 options，options 包含如下的参数

|参数名称|用途|默认值|
|---|---|---|
|debug|用来调试，开启之后不会转成图片|false|
|scale|缩放比例，比例越高清晰度越高，当然图片也就越大|2|
|base64|将dom中的图片地址都转成base64|false|

为什么会有 base64 这个选项呢？

> 真机上显示的时候，有时会因为图片缓存以及跨域的问题，导致绘制图片失败，所以需要转成 base64

## tips

1. 不要使用背景图片，背景图片会很模糊，并且不会被转成 base64
2. dom 元素需要显示的设置宽高