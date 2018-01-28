function getFirstSelector(selector){
  var list = document.querySelectorAll(selector);
  return list[0];
}

function nestedTarget(){
  var id=document.getElementById('nested').getElementsByClassName('target');
}

function increaseRankBy(n){
  var cl=document.getElementsByClassName('ranked-list').innerHTML;
  for(let i=0; i<cl.length; i++){
    cl[i]=parseInt(cl[i])+n;
    }
}

