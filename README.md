# OpenWRT-Packages
- 国内常用OpenWrt软件包合集，每日自动更新，建议使用Lean源码进行编译
- 更新开始时间为0:00 UTC(北京时间8时) And 12:00 UTC(北京时间20时)
---
## Lean源码食用指南（18.06）：
`建议按需取用，不然可能会遇到依赖问题`
### 本地编译教程

1. 先cd进package目录，然后执行
```bash
 git clone https://github.com/Aibx/OpenWRT-Packages
```
2. 添加以下代码到feeds.conf.default文件
```bash
 src-git Whitestorys https://github.com/Aibx/OpenWRT-Packages
```
3. 先cd进package目录，然后执行
```bash
 svn co https://github.com/Aibx/OpenWRT-Packages/branches/packages-18.06
```

### 云编译教程
- 打开diy-part1.sh文件，在最后一行加入如下代码
```bash
sed -i '$a src-git Whitestorys https://github.com/Aibx/OpenWRT-Packages' feeds.conf.default
```
---
# 竞斗云2.0成品固件
- https://github.com/Aibx/OpenWRT-Packages-Action/releases/latest
> 含仓库内大部分软件和主题，每日跟随仓库软件编译，如果最新版本不含bin等文件即编译失败，请去Releases内或Actions内寻找旧版下载

> 编译开始时间为0:30 UTC(北京时间8:30) And 12:30 UTC(北京时间20:30)

## 联动仓库
- [OpenWRT-Packages](https://github.com/Aibx/OpenWRT-Packages)：国内常用OpenWRT软件包集合
- [Lean's OpenWrt](https://github.com/Aibx/Lean-OpenWrt)：Lean的OpenWRT源码仓库，每日自动合并上流推送
- [Lienol's OpenWrt](https://github.com/Aibx/Lienol-OpenWrt)：Lienol的OpenWRT源码仓库，每日自动合并上流推送
