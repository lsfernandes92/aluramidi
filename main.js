function playSound(idElement) {
  document.querySelector(idElement).play();
}

const keysList = document.querySelectorAll('.tecla');

for (let index = 0; index < keysList.length; index++) {
  const key = keysList[index];
  const keyClass = key.classList[1];
  const idAudioElement = `#som_${keyClass}`;

  key.onclick = function () {
    playSound(idAudioElement);
  };

  key.onkeydown = function (event) {
    if (event.code === 'Space' || event.code === 'Enter') {
      key.classList.add('ativa');
    }
  }

  key.onkeyup = function (event) {
    key.classList.remove('ativa');
  }
}