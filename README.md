# Tailwind CSS for WeChatApp
> 因为给原生小程序配置tailwind css实在是太麻烦了（还有很多问题，于是按照Tailwind默认配置复制成小程序能用的

## 介绍
Tailwind小程序提取代码来源于[TailwindCssForWechatMiniProgarm](https://github.com/pialin/TailwindCssForWechatMiniProgarm) 

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