// 字符串出现的不重复最长长度



const aaa = 'acadsaaaaccccddddeeeeffff'

function bbb(string) {
  const temp = [...string]
  let Arr = []
  let n = 0
  if (!Arr.includes(temp[n])){
    Arr.push(temp[n])
  }else {
    n++
    Arr = []
  }
  console.log(Arr);
}

bbb(aaa)
