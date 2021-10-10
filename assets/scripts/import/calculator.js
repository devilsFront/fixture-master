export function calculator () {
  const calculator = document.querySelector('[data-element="calculator"]')

  if (calculator) {setTimeout(initCalculator, 0)}

  function initCalculator() {
    const calculatorItems = calculator.querySelectorAll('[data-element="calculator-item"]')
    const calculatorValue = calculator.querySelector('[data-element="calculator-value"]')

    calculatorInit()

    function formatNumber(number) {
      const newNumber = number.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
      return newNumber
    }

    function calculatorInit() {
      let summary = 1
      for (let i = 0; i < calculatorItems.length; i++) {
        summary = summary * calculatorItems[i].querySelector('[data-element="calculator-input"]').value
      }
      calculatorValue.textContent = formatNumber(summary)
    }

    calculatorItems.forEach(item => {
      const calculatorPoint = item.querySelector('[data-element="calculator-point"]')
      const calculatorInput = item.querySelector('[data-element="calculator-input"]')
      const calculatorLineFill = item.querySelector('[data-element="calculator-line-fill"]')
      calculatorInput.addEventListener('input', inputChange)
      const max = calculatorInput.getAttribute('max')
      const min = calculatorInput.getAttribute('min')
      const width = calculatorInput.clientWidth - 12
      function inputChange() {
        calculatorPoint.style.left = (((this.value - min) * width) / (max - min)) + 'px'
        const coord = calculatorPoint.style.left.substring(0, calculatorPoint.style.left.length - 2)
        calculatorLineFill.style.right = width - coord + 7 + 'px'
        let summary = 1
        for (let i = 0; i < calculatorItems.length; i++) {
          const calculatorInput = calculatorItems[i].querySelector('[data-element="calculator-input"]')
          summary = summary * calculatorInput.value
        }
        calculatorValue.textContent = formatNumber(summary)
      }
    })
  }
}
