# Tailwind CSS for WeChatApp

> 不会给原生小程序配置 Tailwind，所以干脆自己提取一个（技术太菜了

## 介绍

TailwindCSS For WeChatApp 原本提取代码来源于[TailwindCssForWechatMiniProgarm](https://github.com/pialin/TailwindCssForWechatMiniProgarm)，现在自己通过 `tailwindcss` 的配置文件进行删减修改

还是感谢大佬之前的提取！！！！

## 使用

1. 直接将 `tailwind.min.wxss` 引入到 `app.wxss` 便可全局生效
2. `tailwind.wxss`是删减后的完整版，未压缩
3. 因为使用中有很多用不到的代码，可根据自身需要进行删减
4. 如果要新增样式，建议在`app.wxss`中进行修改
5. 注意：小程序不支持 `*` ，请删除，不然会报错！

## 精简

- `tailwind.css`中精简了小程序中用不到的样式，删去了注释，保留其他全部内容（方便自己定制）
- `tailwind.wxss`中精简了我个人使用中不常用的样式（渐变、带负数的样式），如需定制，可以在`tailwind.config.js` 或者 `tailwind.wxss` 中修改，或者在 `app.wxss` 中自行添加定制化
  - 带负数的样式
  - 带小数点的样式
  - grid, table (因为我自己不常用，如果需要可自己配置～)
  - 不常使用，定制化比较高的样式（比如 `transform`, `inset` 等）
- `tailwind.min.wxss`则是压缩成一行后的代码（尽力精简到**80KB**左右了）

### 根据小程序的 WXSS 修改的 TailwindCSS

1. 基于 `TailwindCSS 2.2.16` 版本
2. 去掉了所有 Variants： 比如`focus：` `hover：`等（在小程序中可以使用组件的属性实现，比如 button 组件 hover-class 属性）
3. 删去了部分小程序中用不到的代码
4. 去掉了所有的 media query: 比如`sm:` `md:`等（在小程序中可以使用 MediaMatch 组件代替）
5. 重命名了一些样式:
   1. 小数点： 比如 `1.5 => 1dot5`
   2. 斜杆： 比如 `1/2=> 1on2;`
6. 已经将 `rem` 转换为 `rpx`
   - `rem - px` 转换根据 `1rem = 16px` 进行换算
   - `px - rpx` 转换根据 `1px = 2rpx` 进行换算

## 用法

### Install ⛑️

```shell
npm install # or pnpm install
```

### Build 🔧

```shell
npm run build # or pnpm build
```

build 之后会在 `dist` 文件夹中得到一个根据 `tailwind.config.js` 文件生成的完整 css ，但里面还是会有不需要的内容，可自行根据需要增删改和配置 `tailwind.config.js` 文件

> 注意：里面会存在 \* 通配符，记得删掉，因为小程序不支持

[参考文档官方文档](https://tailwindcss.com/docs/configuration)

如果需要完整的配置文件自己增删改，请运行命令行，运行前请删除 `tailwind.config.js` 文件

```shell
npx tailwindcss init --full
```
