const container = document.querySelector('.container')
const seats = document.querySelectorAll('.theater .seat:not(.occupied)')
let movie = document.getElementById('movie')

let count = document.querySelector('.count')
let totalPrice = document.querySelector('.total')

populateUI()

function updateCount(){
    let selectedSeats = document.querySelectorAll('.theater .seat.selected:not(.occupied)')
    //local storage
    let seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat))
    localStorage.setItem('selectedSeatsIndex', JSON.stringify(seatsIndex))
    //update seats
    let moviePrice = +movie.value
    let numOfSelectedSeats = selectedSeats.length
    count.innerText = numOfSelectedSeats
    totalPrice.innerText = numOfSelectedSeats * moviePrice
}

container.addEventListener('click',(e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
        updateCount()
    }
})
movie.addEventListener('change',(e) => {
    movie = e.target
    localStorage.setItem('selectedMovieIndex',movie.selectedIndex)
    updateCount()
})

//get data from local storage
function populateUI(){
    //the selected seats
    let selectedSeats = JSON.parse(localStorage.getItem('selectedSeatsIndex'))
    if(selectedSeats && selectedSeats.length > 0){
        selectedSeats.forEach(idx => seats[idx].classList.add('selected'))
    }
    //the price and number of seats
    let selectedMovieIndex =localStorage.getItem('selectedMovieIndex')
    movie.selectedIndex = selectedMovieIndex
    updateCount()
}