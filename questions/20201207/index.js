//写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b 的时间，然后写一个 myClear，停止上面的 mySetInterVal

function mySetInterVal(fn,a, b){
  let n = 0
  const setNewInterVal = () => {
    setTimeout(()=>{
      fn()
      console.log(a + n * b);
      setNewInterVal()
    }, a + n*b )
    n++
  }
  setNewInterVal()
}
function aaa() {
  console.log('aaa')
}
mySetInterVal(aaa,1000,1000)
