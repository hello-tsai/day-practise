### 1. 写出执行结果,并解释原因
```
var foo = {
        bar: function(){
            return this.baz;
        },
         baz:1
    }
console.log(typeof (f=foo.bar)());
``` 
答：undefined,理由是f=foo.bar执行，相当于f(),this指向window,所以this.bar是undefined，所以
typeof undefined 为undefined

### 2. 写出执行结果,并解释原因
```
function f(){
      return f;
 }
console.log(new f() instanceof f);
```
答：

### 3. 写出执行结果,并解释原因
```
var x=1;
if(function f(){}){
    x += typeof f;
}
console.log(x)
```

答: 1undefined,因为function f() {} 函数是true ，且 f没被定义，
所以是undefined，所以 x = 1 + undefined = 1undefined
