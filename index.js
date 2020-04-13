let box = document.getElementById('box')
let row = []
let dom = []
let num = 4
function createdRow(){
  for(let i = 0 ; i < num; i++){
    row[i] = document.createElement('div')
    row[i].className = 'row'
    box.appendChild(row[i])
    createdCol(row[i], i)
  }
}

function createdCol(row, index){
  let col = []
  for(let i = 0; i < num; i++){
    col[i] = document.createElement('div')
    col[i].className = 'col die'
    col[i].id = index * num + i 
    col[i].addEventListener('click', function(){
      col[i].className = 'col alive'
    }, false)
    // col[i].innerHTML = i + 1
    row.appendChild(col[i])
    dom[index * num + i] = col[i]
  }
}

function start(){
  setTimeout(() => {
    setInterval(() => {
      judge()
    }, 1000);
  }, 5000);
}

function judge(){
  // console.log(row)
  let arr = []
  console.log(dom)
  for(let i in dom){
    // row[i].childNodes.foreach((item,index) => {
    let leftTop = ly(dom[i - num - 1])
    let top = ly(dom[i - num])
    let rightTop = ly(dom[i - num + 1])
    let left = ly(dom[i - 1])
    let right = ly(dom[i + 1])
    let leftBottom = ly(dom[i + num - 1])
    let bottom = ly(dom[i + num])
    let rightBottom = ly(dom[i + num + 1])
    arr[i] = dom[i]
    console.log(dom[1])
    // console.log(dom[i + 1])
    // console.log(leftTop + top + rightTop + left + right + leftBottom + bottom + rightBottom)
    if(leftTop + top + rightTop + left + right + leftBottom + bottom + rightBottom == 3){
      arr[i].className = 'col alive'
    }else{
      arr[i].className = 'col die'
    }
  }
  // console.log(arr)
  dom = arr
}

function ly(dom){
  if(dom){
    return dom.className == 'col alive' ? 1 : 0
  }else{
    return 0
  }
}

createdRow()
start()
// judge()
