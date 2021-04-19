# Tailwind CSS for WeChatApp
> 不会给原生小程序配置Tailwind，所以干脆自己提取一个（技术太菜了

## 介绍
Tailwind小程序提取代码来源于[TailwindCssForWechatMiniProgarm](https://github.com/pialin/TailwindCssForWechatMiniProgarm)，自己做一个精简  
感谢大佬的提取

## 精简
* `tailwind.css`中精简了小程序中用不到的样式，删去了注释，保留其他全部内容（方便自己定制）
* `tailwind.wxss`中精简了我个人使用中不常用的样式（渐变、带负数的样式），如需定制，可以在`tailwind.css`中修改
* `tailwind.min.wxss`则是压缩成一行后的代码（尽力精简到**110KB**左右了）

### 根据小程序的WXSS修改的TailwindCSS
1. 基于TailwindCSS 2.0.1版本
2. 去掉了所有Variants： 比如`focus：` `hover：`等（在小程序中可以使用组件的属性实现，比如button组件hover-class属性）
3. 删去了部分小程序中用不到的代码
4. 去掉了所有的media query: 比如`sm:` `md:`等（在小程序中可以使用MediaMatch组件代替）
5. 重命名了一些样式: 
   1. 小数点： 比如 `1.2 => 1dot2`
   2. 斜杆： 比如 `1/2=> 1on2;`

### 用法
1. 直接将`tailwind.min.wxss`引入到app.wxss便可生效
2. `tailwind.css`是比较完整的复制版，可以根据需要进行修改
3. `tailwind.wxss`是删减后的完整版，未压缩
4. 因为使用中有很多用不到的代码，可根据自身需要进行删减
5. 如果要新增样式，建议在app.wxss中进行修改