const btn = document.getElementById('btn')
const eBtn = document.getElementById('e_btn')
const textInput = document.getElementById('text')
const rangeInput = document.getElementById('range')
const span = document.querySelector('#range-span')
const square = document.getElementById('square')
const circle = document.getElementById('circle')


const colorize = function() {
  square.style.backgroundColor = textInput.value 
}

btn.addEventListener('click', colorize)

eBtn.style.display = 'none'

rangeInput.addEventListener('input', function() {

  circle.style.width = rangeInput.value + "%"
  circle.style.height = rangeInput.value + "%"
  span.textContent = rangeInput.value + '%'
})