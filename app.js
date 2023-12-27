const pianoKeys = document.querySelectorAll('.key')

const sounds = {
  'KeyA': '24-piano-keys/key11.mp3',
  'KeyW': '24-piano-keys/key01.mp3',
  'KeyS': '24-piano-keys/key12.mp3',
  'KeyE': '24-piano-keys/key02.mp3',
  'KeyD': '24-piano-keys/key13.mp3',
  'KeyF': '24-piano-keys/key14.mp3',
  'KeyT': '24-piano-keys/key03.mp3',
  'KeyG': '24-piano-keys/key15.mp3',
  'KeyY': '24-piano-keys/key04.mp3',
  'KeyH': '24-piano-keys/key16.mp3',
  'KeyU': '24-piano-keys/key05.mp3',
  'KeyJ': '24-piano-keys/key17.mp3',
  'KeyK': '24-piano-keys/key18.mp3',
  'KeyO': '24-piano-keys/key06.mp3'
}

function playSound(newUrl) {
    console.log(newUrl)
    new Audio(newUrl).play()
}


pianoKeys.forEach((pianoKey, i) => {
    const number = i < 9 ? '0' + (i + 1) : (i + 1)
    const newUrl = '24-piano-keys/key' + number + '.mp3'
    pianoKey.addEventListener('click', () => playSound(newUrl))
    pianoKey.addEventListener("mousedown", function() {
      this.style.backgroundColor = "gold";
    });
    pianoKey.addEventListener("mouseup", function() {
      if (pianoKey.className == "key white-key") {
        this.style.backgroundColor = "white";
      } else {
        this.style.backgroundColor = "black";
      } 
    });
})

window.addEventListener('keypress', function(e) { 
  console.log(e.code)
  if (sounds[e.code]) {
    console.log("clicking",e.code)
    document.getElementById(e.code).click()
  }  
})