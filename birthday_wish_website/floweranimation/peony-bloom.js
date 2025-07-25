window.startPeonyBloom = function () {
  document.querySelector('.stem')?.classList.add('grow-stem');

  document.querySelectorAll('.petal').forEach(petal => {
    petal.style.animation = ''; // reset if repeated
    void petal.offsetWidth;     // force reflow
    petal.classList.add('animate-bloom');
  });

  document.querySelectorAll('.leaf').forEach(leaf => {
    leaf.style.opacity = 1;
  });
};
