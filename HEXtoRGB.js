function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
 
function hexToRgb(color) {
  //  Check for # in front of the value

  if(color.substring(0,1) == '#') {
     color = color.substring(1);
   }

  const rgbColor = {};

  /* Grab each pair of hex values and parse them to ints using hexadecimal decoding */
  rgbColor.r = parseInt(color.substring(0,2),16);
  rgbColor.g = parseInt(color.substring(2,4),16);
  rgbColor.b = parseInt(color.substring(4),16);

  return rgbColor;
 }

function convert(insert) {
	const isHex = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;
	const isRGB = /^rgba?((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?)(,\s*[01]?\.?\d*)?)$/;
	if (isHex.test(insert)){
		return hexToRgb(insert);
	}	
	else if(isRGB.test(insert)){
		return rgbToHex(insert);
	}
	else {
		return 'it isnt a color format';
	}
}