---
title: 渲染方程
link: renderEquation
catalog: true
date: 2024-01-01 00:00:00
description: kajiya
tags:
  - 入门
  - 图形学
categories:
  - 笔记
sticky: false
---

## 摘要

Kajiya 提出了一个概括了多数已知渲染算法的微分方程。在讨论该方程的蒙特卡洛解法中，还提出了一种新的方差缩减(variance reduction)形式，称为分层采样(hierachical sampling)，并给出了若干详细推导，证明它对于各类蒙特卡洛过程都可能是一种高效的新技术。由此得到的渲染算法拓展了能够被有效模拟的光学现象范围。

## 先验知识

#### 辐射度量学

#### 蒙特卡洛方法

#### 马尔科夫链


## 渲染方程 The Render Equation

$$ I(x,x') = g(x,x')[\epsilon(x,x') + \int_S \rho(x,x',x'')I(x',x'')dx'']$$

$$ L_0(p,x_0) = L_e(p,x_0) + \int_Sf_r(p,x_i\rArr x_0)L_i(p,x_i)\cos\theta dx_i$$

