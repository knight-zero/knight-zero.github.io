---
title: 有意思的算法
link: interstingAlgorithm
catalog: true
date: 2024-01-01 00:00:00
description: 记录一些遇到的有意思的算法和经典算法
tags:
  - 算法
categories:
  - 笔记
sticky: false
---


#### Shuffle 洗牌算法

1. Fisher-Yates Shuffle

```cpp
#define N 10
#define M 5
void fisher_yates_shuffle(vector<int>& arr, vector<int>& res)
{
  srand((unsigned)time(NULL));
  int k;
  for(int i = 0;i < M; ++i)
  {
    k = rand() % arr.size();
    res.push_back(arr[k]);
    arr.erase(arr.begin() + k);
  }
}
```

2. Knuth-Durstenfeld Shuffle
```cpp
void knuth_durstenfeld_shuffle(vector<int>& arr)
{
  // 直接在原数组上修改
  for(int i = 0;i < arr.size() - 1; ++i)
  {
    srand((unsigned)time(NULL));
    swap(arr[rand()%(i+1),arr[i]]);
  } 
}
```

3. Inside-Out Algorithm
```cpp
void inside_out_shuffle(const vector<int>& arr,vector<int>& res)
{
  res.assign(arr.size(),0);
  copy(arr.begin(),arr.end(),res.begin());
  int k;
  for(int i = 0;i < arr.size(); ++i)
  {
    srand((unsigned)time(NULL));
    k = rand()%(i+1);
    res[i] = res[k];
    res[k] = res[i];
  }
}
```

#### 扔杯子

#### HyperLogLog

#### Tomohiko Sakamoto 计算星期几的算法

#### 函数绘图算法

#### Bloom Filter

#### Word2Vec-Embedding

#### Carmark's Qrsqrt

#### 一致性哈希

#### 时间轮算法

