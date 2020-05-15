function getFirstSelector(selector){
  return document.querySelector(selector)

}

function nestedTarget(){
  return document.querySelector('#nested .target')

}

function deepestChild(){
  var nodes = document.querySelector('div#grand-node')
  return nodes[nodes.length -1]

}

function increaseRankBy(n){
  
  
}
