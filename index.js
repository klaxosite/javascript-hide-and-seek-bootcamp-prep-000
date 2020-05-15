function getFirstSelector(selector){
  return document.querySelector(selector)

}

function nestedTarget(){
  return document.querySelector('#nested .target')

}

function deepestChild(){
  return document.querySelector('#grand-node div div div div')


}

function increaseRankBy(n){
  var ranks = document.querySelectorAll('.ranked-list')
  for(var i = 0; i< ranks.length; i++){
    ranks[i] = (parseInt(ranks[i]) + n).toString()
  }
  
}
