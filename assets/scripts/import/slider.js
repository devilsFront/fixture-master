export function slider () {
  const slider = document.querySelector('[data-element="slider"]')

  if (slider) {setTimeout(initSlider, 0)}

  function initSlider() {
    const items = slider.getElementsByClassName('direction__item')
    const next = slider.querySelector('[data-element="next"]')
    const prev = slider.querySelector('[data-element="prev"]')
    next.addEventListener('click', nextSlide)
    prev.addEventListener('click', prevSlide)

    function nextSlide() {
      const activeItem = slider.getElementsByClassName('direction__item_active')[0]
      let nextActiveItem = activeItem.nextElementSibling
      if (!nextActiveItem) {
        nextActiveItem = items[0]
      }
      activeItem.classList.remove('direction__item_active')
      nextActiveItem.classList.add('direction__item_active')
      const currentSlide = slider.querySelector('[data-element="current-slide"]')
      const dataIndex =  nextActiveItem.getAttribute('data-index')
      currentSlide.textContent = dataIndex

    }

    function prevSlide() {
      const activeItem = slider.getElementsByClassName('direction__item_active')[0]
      let prevActiveItem = activeItem.previousElementSibling
      if (!prevActiveItem) {
        prevActiveItem = items[items.length - 1]
      }
      activeItem.classList.remove('direction__item_active')
      prevActiveItem.classList.add('direction__item_active')
      const currentSlide = slider.querySelector('[data-element="current-slide"]')
      const dataIndex =  prevActiveItem.getAttribute('data-index')
      currentSlide.textContent = dataIndex
    }
  }

}


