// The code below will change the image
document.getElementById('changeimage').addEventListener('click', image)
function image () {
  document.getElementById('tanjiro').src = 'images/zenitsu.png'
}
// The code below will change the text
document.getElementById('changetext').addEventListener('click', text)
function text () {
  document.getElementById('myparagraph').innerHTML = 'Zenitsu Agatsuma'
}
// The code below will hide the text
document.getElementById('hide').addEventListener('click', hide)
function hide () {
  document.getElementById('myparagraph').style.display = 'none'
}
// The code below will show the image
document.getElementById('show').addEventListener('click', show)
function show () {
  document.getElementById('myparagraph').style.display = 'block'
}
// The code below will change the background
document.getElementById('changebackground').addEventListener('click', background)
function background () {
  document.body.style.backgroundColor = '#a9bcd0'
}
// The code below will revert changes
document.getElementById('revert').addEventListener('click', revert)
function revert () {
  location.href = 'https://ics2o-unit5-04-html.matthewespayos.repl.co/'
}
