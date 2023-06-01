---
title: KNN算法
date: 2015-10-04
categories: 
- 算法
tags:
- 算法
---
KNN算法,K-Means

KNN算法,K-Means

<!-- more -->

### KNN算法

```wiki
KNN算法流程总结:
根据K个邻居判定你的类别
1.计算当前样本与所有样本距离
2.距离从小到大排序
3.取前K个邻居
4.K个邻居投票，统计投票结果
5.根据投票结果值出现频率高类别作为最终类别
```

Vue3版本代码实现

```vue
<template>
<div>
  <!--
      KNN算法流程总结:
      根据K个邻居判定你的类别
      1.计算当前样本与所有样本距离
      2.距离从小到大排序
      3.取前K个邻居
      4.K个邻居投票，统计投票结果
      5.根据投票结果值出现频率高类别作为最终类别
  -->
  <div>
    <input type="color" @change="changeColor" ref="clrDom" id="clrDom" value="#80ff00" />
    <el-input style="width: 60px;" type="number" v-model="KKKKK" id="KKKKK" placeholder="3" />
    <span id="point" :style="{color:point.color}">{{point.position}}</span>
  </div>
  <canvas @click="clickCanv" @mousemove="onMouseMove" @mouseout="onMouseOut" ref="canv" id="canv" style="border: 1px #ccc solid;"></canvas>

</div>
</template>
<script setup>
import {ref, reactive, onMounted, getCurrentInstance, nextTick} from "vue";

const {proxy} = getCurrentInstance();

/**
 *
 * @param current {Number}
 * @param points {Array}
 * @param labelX
 * @param labelY
 * @param k  {Number}
 * @param c  {Function}
 * @returns {{classify: *[], dists: *[]}}
 */
const getKnn = (current, points, labelX, labelY, k, c) => {
  var dists = [];//存放最接近的
  var classify = [];//分类标识
  points.map(function (item) {
    if (classify.indexOf(item[labelY]) < 0) classify.push(item[labelY]);
    var result = {};
    result.p = item;
    result.d = c(current, item[labelX]) ;
    dists.push(result);
  });
  dists.sort(function (a, b) {//排序
    return a.d - b.d;
  });
  return { dists: dists.slice(0, k), classify: classify };
}

/**
 *
 * @param current {Object} 输入值
 * @param points {Object} 训练样本集
 * @param labelX {Object}  用于分类的输入值
 * @param labelY {Object}  用于分类的输出值
 * @param k  {Number}  用于选择最近邻的数目
 * @param c  {Function}  自定义比较函数
 * @returns {{result, dists: *[]}}
 */
const classify0 = (current, points, labelX, labelY, k, c) => {
  var result = [];
  var knn = getKnn(current, points, labelX, labelY, k, c);
  var dists = knn.dists;
  for (var i of knn.classify) {
    result.push({
      label: i,
      value: 0
    });
  }
  dists.map(function (item) {
    for (var i of result) {
      if (i.label === item.p[labelY]) {
        i.value++;
        break;
      }
    }
  });
  result.sort(function (a, b) {
    return b.value - a.value;
  });
  return { result: result[0].label, dists: dists };
}

const dataSet = ref([]);
const drawMousePoint = ref(false);
const canv = ref();
const clrDom = ref();
const KKKKK = ref(3);

// 辅助
const canvas = ref();
const cxt = ref();
const color = ref("#ff6b81");
const point = reactive({
  position: [0,0],
  color:'#ff6b81'
});

const getEvPoint = (e) => {
  return { x: e.layerX, y: e.layerY };
}

const onMouseOut = (e) => {
  if (!drawMousePoint.value) { return; }
  drawMousePoint.value = false;
}

const onMouseMove = (e) => {
  drawMousePoint.value = true;
  clear();
  draw(e);
}

const clickCanv = (e) => {
  var p = getEvPoint(e);
  dataSet.value.push({
    point: p,
    color: color.value
  });
}

const changeColor = (e) => {
  color.value = e.srcElement.value; // 或者 e.target.value
}
const clear = () => {
  cxt.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
}
const draw = (e) => {
  var p = getEvPoint(e);
  var r = null;
  if (dataSet.value.length) {
    r = classify0(p, dataSet.value, 'point', 'color', parseInt(KKKKK.value) || 3,function(p1, p2){
      //根据欧几里得距离公式或勾股定理计算距离
      return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    })
  }
  if (e) {
    // 鼠标位置显示圆点
    cxt.value.beginPath()
    cxt.value.arc(p.x, p.y, 8, 0, 2 * Math.PI, false)
    cxt.value.fillStyle = r && r.result ? r.result : '#efefef';
    cxt.value.stroke();
    cxt.value.fill();
    point.position = [p.x, p.y];
    point.color = cxt.value.fillStyle
  }

  // 空白区域绘制坐标点
  for (const i of dataSet.value) {
    cxt.value.beginPath();
    cxt.value.lineWidth = 1;
    cxt.value.arc(i.point.x, i.point.y, 4, 0, 2 * Math.PI, false);
    cxt.value.fillStyle = i.color;
    cxt.value.stroke();
    cxt.value.fill();
  }

  if (r) {
    // 鼠标位置与附近点显示连线
    for (const i of r.dists) {
      cxt.value.beginPath();
      cxt.value.lineWidth = 1;
      cxt.value.moveTo(p.x, p.y);
      cxt.value.lineTo(i.p.point.x, i.p.point.y);
      cxt.value.stroke();
      cxt.value.fill();
    }
  }
}

nextTick(()=>{
  canvas.value = proxy.$refs.canv;
  const clrDom = proxy.$refs.clrDom;
  // const KKKKK = proxy.$refs.KKKKK;
  cxt.value =  proxy.$refs.canv.getContext("2d")


  proxy.$refs.canv.width = 600;
  proxy.$refs.canv.height = 300;


})

</script>

```

![KNN](/img/interview/algorithm/knn/knn_01.png "KNN")

### K-Means 算法

```wiki
K-Means算法流程总结:
a) 从输入的数据点集合中随机选择一个点作为第一个聚类中心μ1
b) 对于数据集中的每一个点xi，计算它与已选择的聚类中心中最近聚类中心的距离
c) 选择一个新的数据点作为新的聚类中心，选择的原则是：D(x)较大的点，被选取作为聚类中心的概率较大
d) 重复b和c直到选择出k个聚类质心
e) 利用这k个质心来作为初始化质心去运行标准的K-Means算法
```

Vue3版本代码实现

```vue
<template>
  <!--
    K-Means算法流程总结:
    a) 从输入的数据点集合中随机选择一个点作为第一个聚类中心μ1
    b) 对于数据集中的每一个点xi，计算它与已选择的聚类中心中最近聚类中心的距离
    c) 选择一个新的数据点作为新的聚类中心，选择的原则是：D(x)较大的点，被选取作为聚类中心的概率较大
    d) 重复b和c直到选择出k个聚类质心
    e) 利用这k个质心来作为初始化质心去运行标准的K-Means算法
  -->
  <div class="fei-root aaaaaaaaaaa">
    <div style="position: absolute; top: 0; left: 38%;">
      <label style="width: 60px">
        请输入K值:<el-input type="number" v-model="k" style="width: 60px;" />
      </label>
      <el-button type="primary" @click="handleStartCalculate">开始计算</el-button>
      <el-button type="primary" @click="handleMoveKPoints">移动K点</el-button>
      <el-button type="primary" @click="handleReset">重置</el-button>
    </div>
    <div class="k-body">
      <!-- 质心点 -->
      <div
          v-for="k of kPoints"
          :key="k.id"
          :style="{ top: `${k.y}px`, left: `${k.x}px`, background: k.color }"
          class="k-point"
      />
      <!-- K个簇 -->
      <div
          v-for="point of dataSource"
          :key="point.id"
          :style="{ top: `${point.y}px`, left: `${point.x}px`, background: point.color }"
          class="point"
      />
    </div>

  </div>
</template>

<script setup>
import {ref, reactive, onMounted, getCurrentInstance, nextTick} from "vue";
const {proxy} = getCurrentInstance();

const COLORS = ['#297aff', '#ff9800', '#30af28', '#ffcc0d', '#00cccc', '#66ccff', '#01a5ed', '#009966', '#A0D911',]

const guid_1 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0
    let v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
/**
 * 随机数范围
 */
 function random(lower, upper) {
  if ( lower % 1 || upper % 1) {
    let rand = Math.random();
    return Math.min(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
  }

  return lower + Math.floor( Math.random() * (upper - lower + 1));
}
const showSize = reactive({width: 500, height: 500}) // 显示范围大小(对应k-body宽高)
const dataSource_pointNum = ref(600); // K个簇所有点数量
// const dataSource_pointNum = ref(10); // K个簇所有点数量(调试值)

const DEFAULT_COLOR = '#000000'
const dataSource = ref([]) // 样本
const kPoints = ref([]) // 质心
const k = ref(5) // 质心


const handleReset = () => {
  initialKPoints();
  resetDataSource();
}

const initialKPoints = () => {
  kPoints.value = []
  for (let i = 0; i < parseInt(k.value); i++) {
    kPoints.value.push({
      id: guid_1(),
      x: random(0, showSize.width - 50),
      y: random(0, showSize.height - 50),
      color: COLORS[i % COLORS.length],
    })

    // 测试值
    // kPoints.value.push({
    //   id: guid_1(),
    //   x: 10 * i,
    //   y:  10 * i,
    //   color: COLORS[i % COLORS.length],
    // })
  }

}

const resetDataSource = () => {
  dataSource.value=[]
  for (let i = 0; i < dataSource_pointNum.value; i++) {
    dataSource.value.push({
      id: guid_1(),
      x: random(0, showSize.width - 10),
      y: random(0, showSize.height - 10),
      color: DEFAULT_COLOR,
      parent: null,
    })
  }
}

// 计算样本最近的一个k点
const calculateNearestKPoint = (point) => {
  let minBy = kPoints.value.map(kPoint=>{
    const {x, y} = kPoint
    const xOffset = Math.abs(x - point.x)
    const yOffset = Math.abs(y - point.y)
    return {
      ...kPoint,
      // sortNum 为sort的排序准备
      sortNum: Math.sqrt(xOffset ** 2 + yOffset ** 2)
    }
  }).sort((a,b) => {
    // 距离从小到大排序
    return a.sortNum - b.sortNum
  });
  // console.log('我要计算出来了__',bbb);

  // 返回距离最小的一个
  return minBy[0]
}

// 计算样本离哪个K点最近并进行分类
const handleStartCalculate = () => {
  dataSource.value.forEach(point=>{
    const nearestKPoint = calculateNearestKPoint(point)
    // console.log(nearestKPoint);
    point.color = nearestKPoint.color
    point.parent = nearestKPoint.id
  })

  // 临时测试值
  // calculateNearestKPoint({
  //   id: guid_1(),
  //   x: 10,
  //   y: 10,
  // })
}

// 根据样本点计算质心
const handleMoveKPoints = () => {
  kPoints.value.forEach(kPoint => {
    // 找质点旁边的所有点集合
    const children = dataSource.value.filter(point => point.parent === kPoint.id)

    // 求和 / 长度
    // 对 children 中所有x点,求和, 然后除以数组长度(即平均值)
    try {
      // 数组为空的时候异常,返回距离为0
      const sumX = children.map(point => point.x).reduce(function (total, item) {
        return total + item;
      })
      kPoint.x = sumX / children.length;
    } catch (e) {
      kPoint.x = 0;
    }


    try {
      const sumY = children.map(point => point.y).reduce(function (total, item3) {
        return total + item3;
      })
      kPoint.y = sumY / children.length;
    } catch (e) {
      kPoint.y = 0;
    }
  })
}

onMounted(()=>{
  handleReset()
})

</script>

<style scoped>
.fei-root {
  width: 100%;
  height: 100%;
}
.k-body {
  margin: 30px auto;
  width: 500px;
  height: 500px;
  position: relative;
  border: 1px solid #ff6b81;
}
.point {
  width: 10px;
  height: 10px;
  border-radius: 10px;
  position: absolute;
  opacity: 0.5;
}
.k-point {
  width: 25px;
  height: 25px;
  border-radius: 25px;
  position: absolute;
}
</style>


```

![K-Means](/img/interview/algorithm/knn/K-Means_01.png "K-Means")

### 最小二乘法

```wiki
最小二乘算法是一种用于拟合数据的方法，它通过最小化残差平方和来确定数据的最佳拟合线。最小二乘算法的基本思想是通过最小化残差平方和，使得数据点的线性组合的平方和最小化。

具体来说，最小二乘算法的步骤如下：
1)首先，选择一组数据点作为自变量，并计算它们的一组观测值（因变量）。
2)然后，计算每个数据点与其最佳拟合线之间的残差平方和。
3)接下来，找到残差平方和的最小值，这个最小值就是拟合线的方程。
4)最后，使用拟合线来拟合数据点，并重复步骤2和3，直到数据点的数量足够拟合所有数据点。


最小二乘算法通常用于拟合线性模型，例如回归分析。在回归分析中，最小二乘算法可以用来确定最佳线性模型的参数，例如斜率和截距。这些参数可以帮助我们预测自变量对因变量的影响。
```

`JavaScript`和`html`实现

#### 精简版

```html
<!--
http://www.ayqy.net/blog/js%E5%AE%9E%E7%8E%B0%E6%9B%B2%E7%BA%BF%E6%8B%9F%E5%90%88%EF%BC%88%E6%9C%80%E5%B0%8F%E4%BA%8C%E4%B9%98%E6%B3%95%EF%BC%89/

http://www.ayqy.net/blog/js%E5%AE%9E%E7%8E%B0%E6%9B%B2%E7%BA%BF%E6%8B%9F%E5%90%88%EF%BC%88%E6%9C%80%E5%B0%8F%E4%BA%8C%E4%B9%98%E6%B3%95%EF%BC%89/

-->
<script>
  function PolyFitForcast() {
    /**
     * <p>
     * 函数功能：最小二乘法曲线拟合
     * </p>
     * <p>
     * 方程:Y = a(0) + a(1) * (X - X1)+ a(2) * (X - X1)^2 + ..... .+ a(m) * (X -
     * X1)^m X1为X的平均数
     * </p>
     *
     * @param x
     *            实型一维数组,长度为 n. 存放给定 n 个数据点的 X 坐标
     * @param y
     *            实型一维数组,长度为 n.存放给定 n 个数据点的 Y 坐标
     * @param n
     *            变量。给定数据点的个数
     * @param a
     *            实型一维数组，长度为 m.返回 m-1 次拟合多项式的 m 个系数
     * @param m
     *            拟合多项式的项数，即拟合多项式的最高次数为 m-1. 要求 m<=n 且m<=20。若 m>n 或 m>20
     *            ，则本函数自动按 m=min{n,20} 处理.
     *            <p>
     *            Date:2007-12-25 16:21 PM
     *            </p>
     * @author qingbao-gao
     * @return 多项式系数存储数组
     */
    function PolyFit(x, y, n, a, m) {
      var i, j, k;
      var z, p, c, g, q = 0, d1, d2;
      var s = new Array(20);
      var t = new Array(20);
      var b = new Array(20);
      var dt = new Array(3);
      for (i = 0; i <= m - 1; i++) {
        a[i] = 0.0;
      }
      if (m > n) {
        m = n;
      }
      if (m > 20) {
        m = 20;
      }
      z = 0.0;
      for (i = 0; i <= n - 1; i++) {
        z = z + x[i] / (1.0 * n);
      }
      b[0] = 1.0;
      d1 = 1.0 * n;
      p = 0.0;
      c = 0.0;
      for (i = 0; i <= n - 1; i++) {
        p = p + (x[i] - z);
        c = c + y[i];
      }
      c = c / d1;
      p = p / d1;
      a[0] = c * b[0];
      if (m > 1) {
        t[1] = 1.0;
        t[0] = -p;
        d2 = 0.0;
        c = 0.0;
        g = 0.0;
        for (i = 0; i <= n - 1; i++) {
          q = x[i] - z - p;
          d2 = d2 + q * q;
          c = c + y[i] * q;
          g = g + (x[i] - z) * q * q;
        }
        c = c / d2;
        p = g / d2;
        q = d2 / d1;
        d1 = d2;
        a[1] = c * t[1];
        a[0] = c * t[0] + a[0];
      }
      for (j = 2; j <= m - 1; j++) {
        s[j] = t[j - 1];
        s[j - 1] = -p * t[j - 1] + t[j - 2];
        if (j >= 3)
          for (k = j - 2; k >= 1; k--) {
            s[k] = -p * t[k] + t[k - 1] - q * b[k];
          }
        s[0] = -p * t[0] - q * b[0];
        d2 = 0.0;
        c = 0.0;
        g = 0.0;
        for (i = 0; i <= n - 1; i++) {
          q = s[j];
          for (k = j - 1; k >= 0; k--) {
            q = q * (x[i] - z) + s[k];
          }
          d2 = d2 + q * q;
          c = c + y[i] * q;
          g = g + (x[i] - z) * q * q;
        }
        c = c / d2;
        p = g / d2;
        q = d2 / d1;
        d1 = d2;
        a[j] = c * s[j];
        t[j] = s[j];
        for (k = j - 1; k >= 0; k--) {
          a[k] = c * s[k] + a[k];
          b[k] = t[k];
          t[k] = s[k];
        }
      }
      dt[0] = 0.0;
      dt[1] = 0.0;
      dt[2] = 0.0;
      for (i = 0; i <= n - 1; i++) {
        q = a[m - 1];
        for (k = m - 2; k >= 0; k--) {
          q = a[k] + q * (x[i] - z);
        }
        p = q - y[i];
        if (Math.abs(p) > dt[2]) {
          dt[2] = Math.abs(p);
        }
        dt[0] = dt[0] + p * p;
        dt[1] = dt[1] + Math.abs(p);
      }
      return a;
    }// end

    /**
     * <p>
     * 对X轴数据节点球平均值
     * </p>
     *
     * @param x
     *            存储X轴节点的数组
     *            <p>
     *            Date:2007-12-25 20:21 PM
     *            </p>
     * @author qingbao-gao
     * @return 平均值
     */
    function average(x) {
      var ave = 0;
      var sum = 0;
      if (x !== null) {
        for (var i = 0; i < x.length; i++) {
          sum += x[i];
        }
        ave = sum / x.length;
      }
      return ave;
    }

    /**
     * <p>
     * 由X值获得Y值
     * </p>
     * @param x
     *            当前X轴输入值,即为预测的月份
     * @param xx
     *            当前X轴输入值的前X数据点
     * @param a
     *            存储多项式系数的数组
     * @param m
     *            存储多项式的最高次数的数组
     *            <p>
     *            Date:2007-12-25 PM 20:07
     *            </p>
     * @return 对应X轴节点值的Y轴值
     */
    function getY(x, xx, a, m) {
      var y = 0;
      var ave = average(xx);

      var l = 0;
      for (var i = 0; i < m; i++) {
        l = a[0];
        if (i > 0) {
          y += a[i] * Math.pow((x - ave), i);
        }
      }
      return (y + l);
    }

    /**
     * 返回拟合后的点坐标数组
     * @param  {Array} arr 点坐标数组
     * @return {Array}     拟合后的点坐标数组
     */
    this.get = function(arr) {
      var arrX = [], arrY = [];

      for (var i = 0; i < arr.length; i++) {
        arrX.push(arr[i].x);
        arrY.push(arr[i].y);
      }

      var len = arrY.length;
      var m = 3;
      var a = new Array(arrX.length);
      var aa = PolyFit(arrX, arrY, len, a, m);
      var arrRes = [];
      for(var i = 0; i < len; i++){
        arrRes.push({x: arrX[i], y: getY(arrX[i], arrX, aa, m)});
      }

      return arrRes;
    };
  }

  var arr = [{x: 10, y: 10},{x: 40, y: 90},{x: 70, y: 65},{x: 100, y: 15}];
  // 最小二乘法拟合
  var res = new PolyFitForcast().get(arr);
  var canvas = document.createElement('canvas');
  var ctx2d = canvas.getContext('2d');

  ctx2d.lineWidth = 1;

  ctx2d.strokeStyle = '#000';
  ctx2d.beginPath();
  ctx2d.moveTo(arr[0].x, arr[0].y);
  ctx2d.lineTo(arr[1].x, arr[1].y);
  ctx2d.lineTo(arr[2].x, arr[2].y);
  ctx2d.lineTo(arr[3].x, arr[3].y);
  ctx2d.stroke();

  ctx2d.strokeStyle = '#f00';
  ctx2d.beginPath();
  ctx2d.moveTo(res[0].x, res[0].y);
  ctx2d.lineTo(res[1].x, res[1].y);
  ctx2d.lineTo(res[2].x, res[2].y);
  ctx2d.lineTo(res[3].x, res[3].y);
  ctx2d.stroke();
  document.body.appendChild(canvas);
</script>
```



```wiki
借助 p5.js 实现画图
下载 https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.js
```

#### 直线版本

```html
 <script src="./libs/p5.js"></script>
<script>
  var data=[];//点坐标
  var a=1;//拟合直线的x系数
  var b=0;//拟合直线的常熟b
  /**
   * 初始函数
   */
  function setup() {//p5.js的初始方法
    createCanvas(400,400);
    background(0,3,3);
  }
  /**
   * 一次函数线性回归（系数项和常数项）
   */
  function linearRegression(){
    var xsum=0;//x的多项和
    var ysum=0;//y的多项和
    for(var i=0;i<data.length;i++){
      xsum+=data[i].x;
      ysum+=data[i].y;
    }
    var xmean=xsum/data.length;//x的平均数
    var ymean=ysum/data.length;//y的平均数
    var num=0;//多项式和【(x-x的均值)*(y-y的均值)】
    var den=0;//多项式和【(x-x的均值)*(x-x的均值)】
    for(var i=0;i<data.length;i++){
      var x=data[i].x;
      var y=data[i].y;
      num+=(x-xmean)*(y-ymean);
      den+=(x-xmean)*(x-xmean);
    }
    a=num/den;//y=ax+b 的 系数a
    b=ymean-a*xmean;//y=ax+b 的 系数b
  }
  /**
   * 鼠标点击
   */
  function mousePressed(){
    var x=map(mouseX,0,width,0,100);
    var y=map(mouseY,0,height,100,0);
    var point = createVector(x,y);
    data.push(point);
  }
  /**
   * 画直线
   */
  function drawLine(){
    var x1=0;//得到(x1,y1),(x2,y2)，即可画直线
    var x2=100;
    var y1=a*x1+b;
    var y2=a*x2+b;
    x1=map(x1,0,100,0,width);
    x2=map(x2,0,100,0,width);
    y1=map(y1,0,100,height,0);
    y2=map(y2,0,100,height,0);
    stroke(255);
    line(x1,y1,x2,y2);
  }
  /**
   * 绘画（点和线）
   */
  function draw() {
    background(50);
    for(var i=0;i<data.length;i++){
      var x=map(data[i].x,0,100,0,width);
      var y=map(data[i].y,0,100,height,0);
      fill(255,0,0);//设置填充颜色
      stroke(255);//设置边框颜色
      strokeWeight(2);//设置点的宽度
      ellipse(x,y,10,10);//椭圆
    }
    if(data.length>1){
      linearRegression();
      drawLine();
    }
  }

</script>
```

#### 曲线版本

```html
<script src="./libs/p5.js"></script>
<script>
  var data=[];//点坐标
  /**
   * 初始函数
   */
  function setup() {
    createCanvas(400,400);
    background(0,3,3);
  }
  var alpha0=0;
  var alpha1=0;
  var a0=0;
  var a1=0;
  var a2=0;
  var beta0=0;
  /**
   * 二次函数
   */
  function unLinearRegression(){
    var xsum=0;//x的和
    var ysum=0;//y的和

    for(var i=0;i<data.length;i++){
      xsum+=data[i].x;
      ysum+=data[i].y;
    }
    var length=data.length;//p0(x)=1,所以p0(x)的和就是数据长度
    alpha0=xsum/data.length;//α0
    var p1data=[];//p1(x)
    var p1p1sum=0;//p1*p1 多项式的和
    var xp1p1sum=0;//x*p1*p1 多项式的和
    for(var i=0;i<data.length;i++){
      var p1=data[i].x-alpha0;
      p1p1sum+=p1*p1;
      xp1p1sum+=data[i].x*p1*p1;
      p1data.push(p1);
    }
    alpha1=xp1p1sum/p1p1sum;//α1
    beta0=p1p1sum/length;//β0
    var p2data=[];//p2(x)
    var p2p2sum=0;//p2*p2 多项式的和
    var xp2p2sum=0;//x*p2*p2 多项式的和
    for(var i=0;i<data.length;i++){
      var p2=(data[i].x-alpha1)*p1data[i]-beta0;
      p2data.push(p2);
      p2p2sum+=p2*p2;
      xp2p2sum+=data[i].x*p2*p2;
    }
    //var alpha2=xp2p2sum/p2p2sum;
    var fp0=ysum;//y*p0 多项式的和
    var fp1=0;//y*p1 多项式的和
    var fp2=0;//y*p2 多项式的和
    for(var i=0;i<data.length;i++){
      fp1+=data[i].y*p1data[i];
      fp2+=data[i].y*p2data[i];
    }
    a0=fp0/length;//g(x)=a0*p0(x)+a1*p1(x)+a2*p2(x) 二次多项式拟合公式
    a1=fp1/p1p1sum;
    a2=fp2/p2p2sum;
  }
  /**
   * 画曲线
   */
  function drawCurve(){
    var newdata=[];//二次多项式 点数据
    for(var i=0;i<100;i++){//生成100个点画曲线
      var x=i*100;
      var pp1x=x-alpha0;
      var pp2x=(x-alpha1)*(x-alpha0)-beta0;
      var y=(a0+a1*pp1x+a2*pp2x);
      /*var y=x*x+90;*/
      var point=createVector(x,y);
      newdata.push(point);
    }
    //b=x*x;
    var i=0;
    noFill();
    //三个点即可形成一条曲线
    if(i<newdata.length){
      var p1x=newdata[i].x;
      var p1y=newdata[i].y;
      p1x=map(p1x,0,100,0,width);
      p1y=map(p1y,0,100,height,0);
      i++;
      var p2x=newdata[i].x;
      var p2y=newdata[i].y;
      p2x=map(p2x,0,100,0,width);
      p2y=map(p2y,0,100,height,0);
      i++;
      var p3x=newdata[i].x;
      var p3y=newdata[i].y;
      p3x=map(p3x,0,100,0,width);
      p3y=map(p3y,0,100,height,0);
      i++;
      /*      var p4x=newdata[i].x;
              var p4y=newdata[i].y;
              p4x=map(p4x,0,100,0,width);
              p4y=map(p4y,0,100,height,0);
              i++;*/
      var p1 = {x: p1x, y: p1y};
      var p2 = {x: p2x, y: p2y};
      var p3 = {x: p3x, y: p3y};
      //var p4 = {x: p4x, y: p4y};
      noFill();
      stroke(138, 43, 226);//曲线颜色 - 紫罗兰色
      strokeWeight(4);//曲线宽度
      curve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
    }
  }
  /**
   * 鼠标点击
   */
  function mousePressed(){
    var x=map(mouseX,0,width,0,100);
    var y=map(mouseY,0,height,100,0);
    var point = createVector(x,y);
    data.push(point);
  }
  /**
   * 绘画（点和线）
   */
  function draw() {
    background(50);
    for(var i=0;i<data.length;i++){
      var x=map(data[i].x,0,100,0,width);
      var y=map(data[i].y,0,100,height,0);
      fill(255,0,0);//设置填充颜色
      stroke(255);//设置边框颜色
      strokeWeight(2);//设置点的宽度
      ellipse(x,y,10,10);//椭圆
    }
    if(data.length>2){
      unLinearRegression();
      drawCurve();
    }
  }

</script>
```

![最小二乘法](/img/interview/algorithm/knn/K-min_01.png "最小二乘法")

### 底部

其他参考地址

[最小二乘法 javascript](https://blog.csdn.net/qq_26906345/article/details/78863602)

[最小二乘法的原理](https://www.cnblogs.com/pinard/p/5976811.html)

[精简版_最小二乘法](http://www.ayqy.net/blog/js%E5%AE%9E%E7%8E%B0%E6%9B%B2%E7%BA%BF%E6%8B%9F%E5%90%88%EF%BC%88%E6%9C%80%E5%B0%8F%E4%BA%8C%E4%B9%98%E6%B3%95%EF%BC%89/)

[KNN_01](https://it.cha138.com/nginx/show-219511.html#_5)

[KNN_02](https://www.cnblogs.com/pinard/p/6061661.html)

[样本数据](https://github.com/ljpzzz/machinelearning)



















