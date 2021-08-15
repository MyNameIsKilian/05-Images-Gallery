document.addEventListener("DOMContentLoaded", (e) => {
  const panels = document.querySelectorAll(".panel")

  const toggleOpen = (e) => {
    e.currentTarget.classList.toggle('open')
  }

  const toggleActive = (e) => {
    if(e.propertyName.includes('flex')) {
      e.currentTarget.classList.toggle('active')
    }
  }
  
  panels.forEach(panel => panel.addEventListener('click', toggleOpen))
  panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))
})