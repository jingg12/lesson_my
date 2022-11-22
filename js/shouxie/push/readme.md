##  JS  考试重点之手写代码

- push
    数组的功能？
    哪两种数据结构的什么操作？
    线性和非线性
    【】 或链表  队列FIFO / 栈FILO
    【{value：1，next：}，{value：2，next：} 】 不连续的
        
    【1，2，3】  初始地址，arr[0] arr[1] arr[2] 连续的，new Array(100000)
      浪费空间  内存溢出
    物理地址？
     arr[i] = &arr +(i-1)*2

-   js 和其他语言不同的地方
     原型的概念 prototype
     1. 声明数组 在js里有很多种方法
        [1,2,3] (实例)   Array(类)
     2. 数组对象实例添加一个公有方法
        js里面， Array 类 prototype 对象  添加一个自定义的push2
        Array.prototype.
     3. 在对象的方法中， this 关键字指向谁？
     4. arguments 代表 函数的参数对象 