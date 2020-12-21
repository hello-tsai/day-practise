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


### 2. 写出执行结果,并解释原因
```
function f(){
      return f;
 }
console.log(new f() instanceof f);
```


### 3. 写出执行结果,并解释原因
```
var x=1;
if(function f(){}){
    x += typeof f;
}
console.log(x)
```

