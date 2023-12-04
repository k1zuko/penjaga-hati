function Coy() {
  if (typeof window.AudioContext !== 'undefined' || typeof window.webkitAudioContext !== 'undefined') {
    var audioContext = new (window.AudioContext || window.webkitAudioContext)();
    var button = document.createElement('button');
    button.textContent = 'Aktifkan Suara';

    button.addEventListener('click', function() {
      var oscillator = audioContext.createOscillator();
      oscillator.connect(audioContext.destination);
      oscillator.start();
      setTimeout(function() {
        oscillator.stop();
      }, 1000);
    });

    document.body.appendChild(button);
  } else {
    console.error('AudioContext tidak didukung di browser ini');
  }
}

Coy();
