# Overview

This project is designed to export your course table into ICS calendar file which is widely used in calendar apps on all of platform.

此项目旨在快速导出课程表数据为ICS文件，以便在各大常用日历系统中快捷地导入。

## Update

The latest version is 0.4.1.
- Improve support of Safari and old browsers.
- Edit Markdown.
- Support unregular tasks.

## Supported browsers

We might use [FileSaver.js](https://github.com/eligrey/FileSaver.js) and [Blob.js](https://github.com/eligrey/Blob.js) to support more browsers.

项目使用了 [FileSaver.js](https://github.com/eligrey/FileSaver.js) 和 [Blob.js](https://github.com/eligrey/Blob.js) 以保证兼容性。

| Browser        | Constructs as | Support    | Dependencies |
| -------------- | ------------- | ------------ | ------------ |
| Firefox 20+    | Blob          | Yes          | [FileSaver.js](https://github.com/eligrey/FileSaver.js)         |
| Firefox < 20   | data: URI     | Yes (you should change the filename to *.ics)           | [FileSaver.js](https://github.com/eligrey/FileSaver.js) [Blob.js](https://github.com/eligrey/Blob.js) |
| Chrome         | Blob          | Yes          | [FileSaver.js](https://github.com/eligrey/FileSaver.js)         |
| Chrome for Android | Blob      | Yes          | [FileSaver.js](https://github.com/eligrey/FileSaver.js)         |
| Edge           | Blob          | Yes          | [FileSaver.js](https://github.com/eligrey/FileSaver.js)         |
| IE 10+         | Blob          | Yes          | [FileSaver.js](https://github.com/eligrey/FileSaver.js)         |
| Opera 15+      | Blob          | Yes          | [FileSaver.js](https://github.com/eligrey/FileSaver.js)         |
| Opera < 15     | data: URI     | Yes (you should change the filename to *.ics)           | [FileSaver.js](https://github.com/eligrey/FileSaver.js) [Blob.js](https://github.com/eligrey/Blob.js) |
| Safari 6.1+*   | Blob          | Yes (you should change the filename to *.ics)           | [FileSaver.js](https://github.com/eligrey/FileSaver.js)         |
| Safari < 6     | data: URI     | Yes (you should change the filename to *.ics)           | [FileSaver.js](https://github.com/eligrey/FileSaver.js) [Blob.js](https://github.com/eligrey/Blob.js) |
| Safari 10.1+   | Blob          | Yes          | [FileSaver.js](https://github.com/eligrey/FileSaver.js)         |

# How to use

## Install

Just drag this [INSTALL] button to your favorites of your browser.

非常简单，将下面的安装按钮拖到收藏夹就可以了。

[![Export Course Table](installbutton.png) Export Course Table](javascript:void(function(u,s){s=document.body.appendChild(document.createElement('script'));s.src=u+'?ts='+Date.now();s.charset='UTF-8'}('https://eastpiger.github.io/Course-Table-ICS-Formatter/dist.js')))

Or copy these code into your navigation panel. Remember add ```javascript:``` before the code after paste

或者将如下代码复制到地址栏运行。请注意复制后在代码开头重新添加 ```javascript:``` 。

``` javascript
javascript:void(function(u,s){s=document.body.appendChild(document.createElement('script'));s.src=u+'?ts='+Date.now();s.charset='UTF-8'}('https://eastpiger.github.io/Course-Table-ICS-Formatter/dist.js'))
```

## Usage

Make sure you can open this page.

1. Open [course table page on eams](http://ids.shanghaitech.edu.cn/authserver/login?service=http%3A%2F%2Feams.shanghaitech.edu.cn%2Feams%2FcourseTableForStd.action).
2. Click [Export Course Table] in your favorites. Or paste the running code into your navigation panel.
3. Select the first Monday in the semester and click [Download].

请先保证你可以通过某些方法打开现在这个页面。

1. 进入 [教学管理系统-我的课程表](http://ids.shanghaitech.edu.cn/authserver/login?service=http%3A%2F%2Feams.shanghaitech.edu.cn%2Feams%2FcourseTableForStd.action)。
2. 点击收藏夹中的 [Export Course Table]。或者将代码复制到地址栏运行。
3. 选择学期第一个周一，点击 [Download] 即可。

# Other

Tips: Send the ics file to your mailbox will have a better experience!

小贴士： 把ics文件发送到自己的邮箱会有意想不到的效果！

[求Star](https://github.com/eastpiger/Course-Table-ICS-Formatter)
