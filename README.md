# OpenWRT-Packages

[![LICENSE](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square&label=LICENSE)](https://github.com/Aibx/OpenWRT-Packages/blob/master/LICENSE)
![GitHub Stars](https://img.shields.io/github/stars/Aibx/OpenWRT-Packages.svg?style=flat-square&label=Stars&logo=github)
![GitHub Forks](https://img.shields.io/github/forks/Aibx/OpenWRT-Packages.svg?style=flat-square&label=Forks&logo=github)

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
- 最新版本下载地址：https://github.com/Aibx/OpenWRT-Packages-Action/releases/latest
- 含仓库内大部分软件和主题，每日跟随仓库更新自动编译，如果最新版本不含bin后缀文件即编译失败，请去[Releases](https://github.com/Aibx/OpenWRT-R619AC/releases)或[Actions](https://github.com/Aibx/OpenWRT-R619AC/actions)寻找旧版下载
- Releases仅保留最新14份编译内容,actions则保留一月内全部的编译内容,Cowtransfer及WeTransfer下载链接有效时长为7天,建议按需选取

> 编译开始时间为0:30 UTC(北京时间8:30) And 12:30 UTC(北京时间20:30)


## 联动仓库
- [OpenWRT-R619AC](https://github.com/Aibx/OpenWRT-R619AC)：竞斗云2.0自动编译仓库,内含IPK及最新固件
- [Lean's OpenWrt](https://github.com/Aibx/Lean-OpenWrt)：Lean的OpenWRT源码仓库，每日自动合并上流推送
- [Lienol's OpenWrt](https://github.com/Aibx/Lienol-OpenWrt)：Lienol的OpenWRT源码仓库，每日自动合并上流推送
