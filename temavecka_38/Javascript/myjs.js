var vintage = $('#vintagebtn');
var noise = $('#noisebtn');
var tiltshift = $('#tiltshiftbtn');

vintage.on('click', function(e) {
  Caman('#canvas', img, function() {
    this.vintage();
    this.render();
  });
});

noise.on('click', function(e) {
  Caman('#canvas', img, function() {
    this.noise(10);
    this.render();
  });
});

tiltshift.on('click', function(e) {
  Caman('#canvas', img, function() {
    this.tiltShift({
      angle: 90,
      focusWidth: 600
    }).render();
  });
});
