const loadText = document.querySelector('.loading-text')
const bt = document.querySelector('.bt')

let load = 0

let int = setInterval(bluring, 30)

function bluring() {
  load += 1;

  if (load > 99) {
    clearInterval(int)
  }
  //console.log(load)

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bt.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}