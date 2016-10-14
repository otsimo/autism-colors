var autismColors = require("./color.js");

// autismColors(brightOrDark, lessOrMoreVariety, hueValue)

// Return special colors
console.log(autismColors(true, true, 'rgb')); // SMTH: [164,158,176]

// Return all tones of ASD Friendly colors
console.log(autismColors(true, false, 'hex')) // SMTH: #93ada2

// Return ASD Friendly color with 180 degree hue value.
console.log(autismColors(false, false, 'hsb', 180)) // SMTH: [180, 11, 61]
