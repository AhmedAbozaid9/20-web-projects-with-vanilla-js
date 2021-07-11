const curr1 = document.querySelector('.currency1')
const input1 = document.querySelector('.input1')
const curr2 = document.querySelector('.currency2')
const input2 = document.querySelector('.input2')

const swap = document.querySelector('.swap')
const rateEl = document.querySelector('.rate')

function calcRate() {
  fetch(`https://open.exchangerate-api.com/v6/latest/${curr1.value}`)
    .then((res) => res.json())
    .then((data) => {
      let rate = data.rates[curr2.value]
      rateEl.innerHTML = `1 ${curr1.value} = ${rate} ${curr2.value}`
      input2.value = (input1.value * rate).toFixed(2)
    })
}
calcRate()
//event listeners
input1.addEventListener('change', calcRate)
input1.addEventListener('input', calcRate)
curr1.addEventListener('change', calcRate)

swap.addEventListener('click', () => {
    let temp = curr1.value
    curr1.value = curr2.value
    curr2.value = temp
    calcRate()
})
