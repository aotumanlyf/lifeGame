let box = document.getElementById('box')
let row = []
let dom = []
let num = 10

// 表格
// 横
function createdRow(){
  for(let i = 0 ; i < num; i++){
    row[i] = document.createElement('div')
    row[i].className = 'row'
    box.appendChild(row[i])
    createdCol(row[i], i)
  }
}
// 纵
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


// 游戏规则

// 开始
function start(){
  setTimeout(() => {
    setInterval(() => {
      judge()
    }, 500);
  }, 5000);
}
// 判断状态
function judge(){
  let arr = JSON.parse(JSON.stringify(dom))
  // console.log(dom)
  for(let i in dom){
    i = i * 1
    let leftTop = survival(dom[i - num - 1])
    let top = survival(dom[i - num])
    let rightTop = survival(dom[i - num + 1])
    let left = survival(dom[i - 1])
    let right = survival(dom[i + 1])
    let leftBottom = survival(dom[i + num - 1])
    let bottom = survival(dom[i + num])
    let rightBottom = survival(dom[i + num + 1])
    // console.log(leftTop, top, rightTop, left, right, leftBottom, bottom, rightBottom)
    // console.log(dom[i - 1], i - 1)
    // console.log(dom[i + 1], i + 1)
    // console.log(dom[1].className + '')
    // console.log(dom[i + 1])
    // console.log(leftTop + top + rightTop + left + right + leftBottom + bottom + rightBottom)
    if(leftTop + top + rightTop + left + right + leftBottom + bottom + rightBottom == 3){
      arr[i].flag = 1
    }else if(leftTop + top + rightTop + left + right + leftBottom + bottom + rightBottom == 2){
      arr[i].flag = 2
    }else{
      arr[i].flag = 0
    }
  }
  for(let i in dom){
    if( arr[i].flag == 1 ){
      dom[i].className = 'col alive'
    } else if( arr[i].flag == 2 ) {
      // dom[i].className = 'col die'
    } else {
      dom[i].className = 'col die'
    }
  }
}

// 是否存活
function survival(dom){
  if(dom){
    return dom.className == 'col alive' ? 1 : 0
  }else{
    return 0
  }
}


// 表单
function createTable(){
  let tableBox = document.createElement('div')
  let table = document.createElement('div')
  let input = document.createElement('input')
  let startBtn = document.createElement('div')
  tableBox.className = 'tableBox'
  table.className = 'table'
  input.className = 'input'
  startBtn.className = 'startBtn'
  startBtn.innerHTML = '进入游戏'
  box.appendChild(tableBox)
  tableBox.appendChild(table)
  table.appendChild(input)
  table.appendChild(startBtn)
  startBtn.onclick = startClick()
}

function startClick(){
  console.log(1)
}

// 创建表格
createdRow()

// 创建表单
createTable()

start()
// judge()
