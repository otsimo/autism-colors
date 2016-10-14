  // we will be using hsv format to generate colors
  // HSV gives a better interface with its brightness/Value parameter.
  function hsvToRgb(h, s, v) {
  	var r, g, b;
  	var i;
  	var f, p, q, t;

  	// Make sure our arguments stay in-range
  	h = Math.max(0, Math.min(360, h));
  	s = Math.max(0, Math.min(100, s));
  	v = Math.max(0, Math.min(100, v));

  	// We accept saturation and value arguments from 0 to 100 because that's
  	// how Photoshop represents those values. Internally, however, the
  	// saturation and value are calculated from a range of 0 to 1. We make
  	// That conversion here.
  	s /= 100;
  	v /= 100;

  	if(s == 0) {
  		// Achromatic (grey)
  		r = g = b = v;
  		return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  	}

  	h /= 60; // sector 0 to 5
  	i = Math.floor(h);
  	f = h - i; // factorial part of h
  	p = v * (1 - s);
  	q = v * (1 - s * f);
  	t = v * (1 - s * (1 - f));

  	switch(i) {
  		case 0:
  			r = v;
  			g = t;
  			b = p;
  			break;

  		case 1:
  			r = q;
  			g = v;
  			b = p;
  			break;

  		case 2:
  			r = p;
  			g = v;
  			b = t;
  			break;

  		case 3:
  			r = p;
  			g = q;
  			b = v;
  			break;

  		case 4:
  			r = t;
  			g = p;
  			b = v;
  			break;

  		default: // case 5:
  			r = v;
  			g = p;
  			b = q;
  	}

  	return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 *
 * @param {boolean} bright - decides if the color will be dark or bright
 */
function generateColor(brightOrDark){
  var b; // need to be between 60 - 70 in order for it to be ASD Friendly
  // B stands for brightness(value) in HSB/HSV color notation.
  if(brightOrDark == true){
    b = randInt(66, 70); // Brigher
  }else{
    b = randInt(60, 64); // Darker
  }
  var s; // need to be between 20 - 10 in order for it to be ASD Friendly
  s = randInt(10, 20);
}
