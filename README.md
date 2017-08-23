## Autism Spectrum Disorder Friendly Color Generator
Kids with autism can have an especially hard time managing their concentration while interacting with their environment. Some colors and patterns might also give them anxiety.

This tool is intended to generate colors for your User Interfaces that will be used by kids with autism. However, the colors that this tool generates can be used in things like book covers, page and typography design or something as simple as what color to paint a room. 

### How does it work?
- Subdued and colours mixed with grey were favored by the children with autism
- A predominant preference for colours in the Blue/Green hue sectors was notable
- A balance between colourfulness and greyness is seen to be popular.

![How?](https://raw.githubusercontent.com/otsimo/autism-colors/master/how.png)

### How to use?
Install via npm or clone this repo;

~~~
npm install autism-colors
~~~

Then require the module to your file and use like below;

~~~JS
var autismColors = require("autism-colors");

// autismColors(brightOrDark, lessOrMoreVariety, hueValue);

// Return special colors
console.log(autismColors(true, true, 'rgb')); // SMTH: [164,158,176]

// Return all tones of ASD Friendly colors
console.log(autismColors(true, false, 'hex')) // SMTH: #93ada2

// Return ASD Friendly color with 180 degree hue value.
console.log(autismColors(false, false, 'hsb', 180)) // SMTH: [180, 11, 61]

~~~

