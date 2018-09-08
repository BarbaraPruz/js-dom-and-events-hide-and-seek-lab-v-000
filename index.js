function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

// function getChild(element) {
//   let child = element.querySelector(':first-child');
//   if (child != null)
//     return getChild(child);
//   return element;
// }
// function deepestChild() {
//   let grandNode = document.querySelector('#grand-node');
//   return getChild(grandNode);
// }
function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
function increaseRankBy(n) {
  // all li's in rankedList classes
  let rankedList = document.querySelectorAll('.ranked-list li');
  for (let i=0; i<rankedList.length; ++i) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML,10) + n;
  }
}
