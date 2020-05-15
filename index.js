function getFirstSelector(selector){
  return document.querySelector(selector)

}

function nestedTarget(){
  return document.querySelector('#nested .target')

}

function deepestChild(){
  var nodes = document.querySelector('#grand-node div')
  var k = nodes[nodes.length -1]
  return k

}

function increaseRankBy(n){
  
  
}
