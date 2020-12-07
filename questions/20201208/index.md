### 1.写出执行结果,并解释原因
````
const person = { name: "yideng" };

function sayHi(age) {
  return `${this.name} is ${age}`;
}
console.log(sayHi.call(person, 5));
console.log(sayHi.bind(person, 5));
````

答：call改变了函数的this指向，使他指向为第一个参数person，所以就返回 yidong is 5,而bind也是改变
了this的指向，但是bind他返回了一个函数并不会执行，所以如果要他返回和call一样的结果的话 还需要执行

### 2.写出执行结果,并解释原因
````
const num = {
  a: 10,
  add() {
    return this.a + 2;
  },
  reduce: () => this.a -2;
};
console.log(num.add());
console.log(num.reduce());
````
答：add()是一个普通函数this指向其所在的上下文，add的上下文有a：0，所以就是12，reduce是一个箭头函数，
箭头函数的this指向其调用地方的上下文，其上下文为window，window并没有 定义a 所以为NaN


### 3.下面代码输出什么？
````
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
````
答： 输出0，1，2,把let改成var的话就会输出三个三，使用let关键字声明变量i：使用let（和const）关键字声明的变量是具有块作用域的（块是{}之间的任何东西）。 
在每次迭代期间，i将被创建为一个新值，并且每个值都会存在于循环内的块级作用域。
