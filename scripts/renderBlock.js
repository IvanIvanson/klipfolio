 const renderBlock = function (elementId, html) {
  const element = document.getElementById(elementId)
  element.innerHTML = html
    
}
export default renderBlock;