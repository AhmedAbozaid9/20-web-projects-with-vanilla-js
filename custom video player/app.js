const video = document.querySelector('.screen')
const playVideo = document.querySelector('#play')
const stopVideo = document.querySelector('#stop')
const timestamp = document.querySelector('.timestamp')
const progress = document.querySelector('.progress')

//fucntions
function changeIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
  } else play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
}
function toggleVideoStatus() {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
  changeIcon()
}

function reset() {
  video.currentTime = 0
  video.pause()
  changeIcon()
}
function changeBar(){
    video.currentTime = (+progress.value * video.duration) / 100
}

//event listeners

video.addEventListener('click', toggleVideoStatus)
video.addEventListener('timeupdate', () => {
  progress.value = (video.currentTime / video.duration) * 100
  //change the timestamp
  let min = Math.floor(+video.currentTime / 60)
  min = min < 10 ? `0${min}` : String(min)
  let sec = Math.floor(+video.currentTime % 60)
  sec = sec < 10 ? `0${sec}` : String(sec)
  timestamp.innerHTML = min + ':' + sec
})

playVideo.addEventListener('click', toggleVideoStatus)
stopVideo.addEventListener('click', reset)
