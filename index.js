function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function getChild(element) {
  let child = element.querySelector(':first-child');
  if (child != null)
    return getChild(child);
  return element;
}
function deepestChild() {
  let grandNode = document.querySelector('#grand-node');
  return getChild(grandNode);
}
