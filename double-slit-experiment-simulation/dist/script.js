const $canvas = document.getElementById('jsi-canvas');

setInterval(() => {
  const $targets = $canvas.querySelectorAll('li');

  const positiveRand = Math.random() * 1;
  const negativeRand = Math.random() * -1;

  const indexRand = (positiveRand + negativeRand) * 3;

  const targetIndex = parseInt(indexRand, 10) + 2;

  $targets[targetIndex].insertAdjacentHTML(
  'beforeend',
  `
      <div class="g_photon"
           style="
             top: ${Math.random() * 100}%;
             left: ${Math.random() * 100}%;
           ">
      </div>
    `);

}, 1);