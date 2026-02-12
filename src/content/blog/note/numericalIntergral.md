---
title: 数值积分
link: numericalIntergral
catalog: true
date: 2024-01-01 00:00:00
description: 积分的数值计算方法
tags:
  - 入门
  - 工程数学
categories:
  - 笔记
sticky: false
---

## 一重积分

#### Newton-Cotes 积分公式

$$ I = \int f(x)dx \approx \int f_n(x)dx$$
其中$f_x(x)$具有如下形式：
$$ f_n(x) = a_0 + a_1x + ... + a_nx^n $$
本质是均匀采样求带权均值

1. 梯形积分
$$ I = (b - a)\frac{f(a) + f(b)}{2} $$
2. 辛普森1/3法则
$$ I = (b - a)\frac{f(x_0) + 4f(x_1) + x(x_2)}{6}, x_1 = \frac{a+b}{2} $$
3. 辛普森3/8法则
$$ I = (b - a)\frac{f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3)}{8} $$
4. 布尔法则
$$ I = (b - a)\frac{7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4)}{90} $$

[更高阶估计的系数和误差估计](https://www.tup.tsinghua.edu.cn/upload/books/yz/105253-01.pdf)

#### 复化梯形

将曲线划分为若干个小区间进行上述方法的积分再求和

#### 龙贝格积分

设 $T_0^{(0)}$ 表示将区间 $[a,b]$ 等分为 $2^k$ 份后的复化梯形值，即
$$ T_0^{(0)} = \frac{b - a}{2}[f(a) + f(b)] $$
$$ T_0^k = \frac{1}{2}T_0^{k-1} + \frac{b - a}{2^k}\sum^{2^{k-1}}_{i=1}f(a + (2i - 1)\frac{b - a}{2^k}), k = 1,2,...$$
外推加速，得到 $m$ 阶估计
$$ T_m^k = \frac{4^mT_{m-1}^{k+1} - T_{m-1}^{k}}{4^m - 1}$$

#### 自适应积分
将积分区间分为两个，只对较大误差的区间递归进行**划分再积分**

#### 高斯积分
高斯-勒让德公式

## 多重积分

