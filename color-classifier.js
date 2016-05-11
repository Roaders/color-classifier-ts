/*!
 * color-classifier
 * Classify the color along the reference color.
 *
 * @author tsuyoshiwada
 * @license MIT
 * @version 0.0.1
 */
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):e.ColorClassifier=r()}(this,function(){"use strict";function e(e,r){return r={exports:{}},e(r,r.exports),r.exports}function r(e,r){var n=[].concat(t.toConsumableArray(e));return n.sort(function(e,n){return e[r]<n[r]?-1:e[r]>n[r]?1:0}),n.shift()}function n(e){return e*Math.PI/180}var t={};t["typeof"]="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},t.classCallCheck=function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")},t.createClass=function(){function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}(),t.toConsumableArray=function(e){if(Array.isArray(e)){for(var r=0,n=Array(e.length);r<e.length;r++)n[r]=e[r];return n}return Array.from(e)};var a=e(function(e){e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}}),o=a&&"object"===("undefined"==typeof a?"undefined":t["typeof"](a))&&"default"in a?a["default"]:a,i=e(function(e){var r=o,n={};for(var t in r)r.hasOwnProperty(t)&&(n[r[t].join()]=t);var a=e.exports={rgb:{channels:3},hsl:{channels:3},hsv:{channels:3},hwb:{channels:3},cmyk:{channels:4},xyz:{channels:3},lab:{channels:3},lch:{channels:3},hex:{channels:1},keyword:{channels:1},ansi16:{channels:1},ansi256:{channels:1},hcg:{channels:3},apple:{channels:3}};for(var i in a)if(a.hasOwnProperty(i)){if(!("channels"in a[i]))throw new Error("missing channels property: "+i);var u=a[i].channels;delete a[i].channels,Object.defineProperty(a[i],"channels",{value:u})}a.rgb.hsl=function(e){var r,n,t,a=e[0]/255,o=e[1]/255,i=e[2]/255,u=Math.min(a,o,i),h=Math.max(a,o,i),s=h-u;return h===u?r=0:a===h?r=(o-i)/s:o===h?r=2+(i-a)/s:i===h&&(r=4+(a-o)/s),r=Math.min(60*r,360),0>r&&(r+=360),t=(u+h)/2,n=h===u?0:.5>=t?s/(h+u):s/(2-h-u),[r,100*n,100*t]},a.rgb.hsv=function(e){var r,n,t,a=e[0],o=e[1],i=e[2],u=Math.min(a,o,i),h=Math.max(a,o,i),s=h-u;return n=0===h?0:s/h*1e3/10,h===u?r=0:a===h?r=(o-i)/s:o===h?r=2+(i-a)/s:i===h&&(r=4+(a-o)/s),r=Math.min(60*r,360),0>r&&(r+=360),t=h/255*1e3/10,[r,n,t]},a.rgb.hwb=function(e){var r=e[0],n=e[1],t=e[2],o=a.rgb.hsl(e)[0],i=1/255*Math.min(r,Math.min(n,t));return t=1-1/255*Math.max(r,Math.max(n,t)),[o,100*i,100*t]},a.rgb.cmyk=function(e){var r,n,t,a,o=e[0]/255,i=e[1]/255,u=e[2]/255;return a=Math.min(1-o,1-i,1-u),r=(1-o-a)/(1-a)||0,n=(1-i-a)/(1-a)||0,t=(1-u-a)/(1-a)||0,[100*r,100*n,100*t,100*a]},a.rgb.keyword=function(e){return n[e.join()]},a.keyword.rgb=function(e){return r[e]},a.rgb.xyz=function(e){var r=e[0]/255,n=e[1]/255,t=e[2]/255;r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92;var a=.4124*r+.3576*n+.1805*t,o=.2126*r+.7152*n+.0722*t,i=.0193*r+.1192*n+.9505*t;return[100*a,100*o,100*i]},a.rgb.lab=function(e){var r,n,t,o=a.rgb.xyz(e),i=o[0],u=o[1],h=o[2];return i/=95.047,u/=100,h/=108.883,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,u=u>.008856?Math.pow(u,1/3):7.787*u+16/116,h=h>.008856?Math.pow(h,1/3):7.787*h+16/116,r=116*u-16,n=500*(i-u),t=200*(u-h),[r,n,t]},a.hsl.rgb=function(e){var r,n,t,a,o,i=e[0]/360,u=e[1]/100,h=e[2]/100;if(0===u)return o=255*h,[o,o,o];n=.5>h?h*(1+u):h+u-h*u,r=2*h-n,a=[0,0,0];for(var s=0;3>s;s++)t=i+1/3*-(s-1),0>t&&t++,t>1&&t--,o=1>6*t?r+6*(n-r)*t:1>2*t?n:2>3*t?r+(n-r)*(2/3-t)*6:r,a[s]=255*o;return a},a.hsl.hsv=function(e){var r,n,t=e[0],a=e[1]/100,o=e[2]/100;return 0===o?[0,0,0]:(o*=2,a*=1>=o?o:2-o,n=(o+a)/2,r=2*a/(o+a),[t,100*r,100*n])},a.hsv.rgb=function(e){var r=e[0]/60,n=e[1]/100,t=e[2]/100,a=Math.floor(r)%6,o=r-Math.floor(r),i=255*t*(1-n),u=255*t*(1-n*o),h=255*t*(1-n*(1-o));switch(t*=255,a){case 0:return[t,h,i];case 1:return[u,t,i];case 2:return[i,t,h];case 3:return[i,u,t];case 4:return[h,i,t];case 5:return[t,i,u]}},a.hsv.hsl=function(e){var r,n,t=e[0],a=e[1]/100,o=e[2]/100;return n=(2-a)*o,r=a*o,r/=1>=n?n:2-n,r=r||0,n/=2,[t,100*r,100*n]},a.hwb.rgb=function(e){var r,n,t,a,o=e[0]/360,i=e[1]/100,u=e[2]/100,h=i+u;h>1&&(i/=h,u/=h),r=Math.floor(6*o),n=1-u,t=6*o-r,0!==(1&r)&&(t=1-t),a=i+t*(n-i);var s,l,c;switch(r){default:case 6:case 0:s=n,l=a,c=i;break;case 1:s=a,l=n,c=i;break;case 2:s=i,l=n,c=a;break;case 3:s=i,l=a,c=n;break;case 4:s=a,l=i,c=n;break;case 5:s=n,l=i,c=a}return[255*s,255*l,255*c]},a.cmyk.rgb=function(e){var r,n,t,a=e[0]/100,o=e[1]/100,i=e[2]/100,u=e[3]/100;return r=1-Math.min(1,a*(1-u)+u),n=1-Math.min(1,o*(1-u)+u),t=1-Math.min(1,i*(1-u)+u),[255*r,255*n,255*t]},a.xyz.rgb=function(e){var r,n,t,a=e[0]/100,o=e[1]/100,i=e[2]/100;return r=3.2406*a+-1.5372*o+i*-.4986,n=a*-.9689+1.8758*o+.0415*i,t=.0557*a+o*-.204+1.057*i,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:r*=12.92,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:t*=12.92,r=Math.min(Math.max(0,r),1),n=Math.min(Math.max(0,n),1),t=Math.min(Math.max(0,t),1),[255*r,255*n,255*t]},a.xyz.lab=function(e){var r,n,t,a=e[0],o=e[1],i=e[2];return a/=95.047,o/=100,i/=108.883,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,r=116*o-16,n=500*(a-o),t=200*(o-i),[r,n,t]},a.lab.xyz=function(e){var r,n,t,a,o=e[0],i=e[1],u=e[2];return 8>=o?(n=100*o/903.3,a=7.787*(n/100)+16/116):(n=100*Math.pow((o+16)/116,3),a=Math.pow(n/100,1/3)),r=.008856>=r/95.047?r=95.047*(i/500+a-16/116)/7.787:95.047*Math.pow(i/500+a,3),t=.008859>=t/108.883?t=108.883*(a-u/200-16/116)/7.787:108.883*Math.pow(a-u/200,3),[r,n,t]},a.lab.lch=function(e){var r,n,t,a=e[0],o=e[1],i=e[2];return r=Math.atan2(i,o),n=360*r/2/Math.PI,0>n&&(n+=360),t=Math.sqrt(o*o+i*i),[a,t,n]},a.lch.lab=function(e){var r,n,t,a=e[0],o=e[1],i=e[2];return t=i/360*2*Math.PI,r=o*Math.cos(t),n=o*Math.sin(t),[a,r,n]},a.rgb.ansi16=function(e){var r=e[0],n=e[1],t=e[2],o=1 in arguments?arguments[1]:a.rgb.hsv(e)[2];if(o=Math.round(o/50),0===o)return 30;var i=30+(Math.round(t/255)<<2|Math.round(n/255)<<1|Math.round(r/255));return 2===o&&(i+=60),i},a.hsv.ansi16=function(e){return a.rgb.ansi16(a.hsv.rgb(e),e[2])},a.rgb.ansi256=function(e){var r=e[0],n=e[1],t=e[2];if(r===n&&n===t)return 8>r?16:r>248?231:Math.round((r-8)/247*24)+232;var a=16+36*Math.round(r/255*5)+6*Math.round(n/255*5)+Math.round(t/255*5);return a},a.ansi16.rgb=function(e){var r=e%10;if(0===r||7===r)return e>50&&(r+=3.5),r=r/10.5*255,[r,r,r];var n=.5*(~~(e>50)+1),t=(1&r)*n*255,a=(r>>1&1)*n*255,o=(r>>2&1)*n*255;return[t,a,o]},a.ansi256.rgb=function(e){if(e>=232){var r=10*(e-232)+8;return[r,r,r]}e-=16;var n,t=Math.floor(e/36)/5*255,a=Math.floor((n=e%36)/6)/5*255,o=n%6/5*255;return[t,a,o]},a.rgb.hex=function(e){var r=((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2])),n=r.toString(16).toUpperCase();return"000000".substring(n.length)+n},a.hex.rgb=function(e){var r=e.toString(16).match(/[a-f0-9]{6}/i);if(!r)return[0,0,0];var n=parseInt(r[0],16),t=n>>16&255,a=n>>8&255,o=255&n;return[t,a,o]},a.rgb.hcg=function(e){var r,n,t=e[0]/255,a=e[1]/255,o=e[2]/255,i=Math.max(Math.max(t,a),o),u=Math.min(Math.min(t,a),o),h=i-u;return r=1>h?u/(1-h):0,n=0>=h?0:i===t?(a-o)/h%6:i===a?2+(o-t)/h:4+(t-a)/h+4,n/=6,n%=1,[360*n,100*h,100*r]},a.hsl.hcg=function(e){var r=e[1]/100,n=e[2]/100,t=1,a=0;return t=.5>n?2*r*n:2*r*(1-n),1>t&&(a=(n-.5*t)/(1-t)),[e[0],100*t,100*a]},a.hsv.hcg=function(e){var r=e[1]/100,n=e[2]/100,t=r*n,a=0;return 1>t&&(a=(n-t)/(1-t)),[e[0],100*t,100*a]},a.hcg.rgb=function(e){var r=e[0]/360,n=e[1]/100,t=e[2]/100;if(0===n)return[255*t,255*t,255*t];var a=[0,0,0],o=r%1*6,i=o%1,u=1-i,h=0;switch(Math.floor(o)){case 0:a[0]=1,a[1]=i,a[2]=0;break;case 1:a[0]=u,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=i;break;case 3:a[0]=0,a[1]=u,a[2]=1;break;case 4:a[0]=i,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=u}return h=(1-n)*t,[255*(n*a[0]+h),255*(n*a[1]+h),255*(n*a[2]+h)]},a.hcg.hsv=function(e){var r=e[1]/100,n=e[2]/100,t=r+n*(1-r),a=0;return t>0&&(a=r/t),[e[0],100*a,100*t]},a.hcg.hsl=function(e){var r=e[1]/100,n=e[2]/100,t=n*(1-r)+.5*r,a=0;return t>0&&.5>t?a=r/(2*t):t>=.5&&1>t&&(a=r/(2*(1-t))),[e[0],100*a,100*t]},a.hcg.hwb=function(e){var r=e[1]/100,n=e[2]/100,t=r+n*(1-r);return[e[0],100*(t-r),100*(1-t)]},a.hwb.hcg=function(e){var r=e[1]/100,n=e[2]/100,t=1-n,a=t-r,o=0;return 1>a&&(o=(t-a)/(1-a)),[e[0],100*a,100*o]},a.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},a.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]}}),u=i&&"object"===("undefined"==typeof i?"undefined":t["typeof"](i))&&"default"in i?i["default"]:i,h=e(function(e){function r(){for(var e={},r=i.length,n=0;r>n;n++)e[i[n]]={distance:-1,parent:null};return e}function n(e){var n=r(),t=[e];for(n[e].distance=0;t.length;)for(var a=t.pop(),i=Object.keys(o[a]),u=i.length,h=0;u>h;h++){var s=i[h],l=n[s];-1===l.distance&&(l.distance=n[a].distance+1,l.parent=a,t.unshift(s))}return n}function t(e,r){return function(n){return r(e(n))}}function a(e,r){for(var n=[r[e].parent,e],a=o[r[e].parent][e],i=r[e].parent;r[i].parent;)n.unshift(r[i].parent),a=t(o[r[i].parent][i],a),i=r[i].parent;return a.conversion=n,a}var o=u,i=Object.keys(o);e.exports=function(e){for(var r=n(e),t={},o=Object.keys(r),i=o.length,u=0;i>u;u++){var h=o[u],s=r[h];null!==s.parent&&(t[h]=a(h,r))}return t}}),s=h&&"object"===("undefined"==typeof h?"undefined":t["typeof"](h))&&"default"in h?h["default"]:h,l=e(function(e){function r(e){var r=function(r){return void 0===r||null===r?r:(arguments.length>1&&(r=Array.prototype.slice.call(arguments)),e(r))};return"conversion"in e&&(r.conversion=e.conversion),r}function n(e){var r=function(r){if(void 0===r||null===r)return r;arguments.length>1&&(r=Array.prototype.slice.call(arguments));var n=e(r);if("object"===("undefined"==typeof n?"undefined":t["typeof"](n)))for(var a=n.length,o=0;a>o;o++)n[o]=Math.round(n[o]);return n};return"conversion"in e&&(r.conversion=e.conversion),r}var a=u,o=s,i={},h=Object.keys(a);h.forEach(function(e){i[e]={},Object.defineProperty(i[e],"channels",{value:a[e].channels});var t=o(e),u=Object.keys(t);u.forEach(function(a){var o=t[a];i[e][a]=n(o),i[e][a].raw=r(o)})}),e.exports=i}),c=l&&"object"===("undefined"==typeof l?"undefined":t["typeof"](l))&&"default"in l?l["default"]:l,f=/^#([a-fA-F0-9]{3})$/,d=/^#([a-fA-F0-9]{6})$/,v=Math.pow(25,7),p=n(6),g=n(25),b=n(30),y=n(60),M=n(63),m=n(275),k=1,w=1,x=1,C=function(){function e(r){t.classCallCheck(this,e),this.original=r,this.rgb=e.parseHex(r),this.hsv=e.rgbToHsv(this.rgb)}return t.createClass(e,null,[{key:"parseHex",value:function(e){var r={};if(f.test(e)){var n=e.slice(1,2),t=e.slice(2,3),a=e.slice(3,4);r.r=parseInt(n+n,16),r.g=parseInt(t+t,16),r.b=parseInt(a+a,16)}else{if(!d.test(e))return null;r.r=parseInt(e.slice(1,3),16),r.g=parseInt(e.slice(3,5),16),r.b=parseInt(e.slice(5,7),16)}return r}},{key:"rgbToHsv",value:function(e){var r=e.r,n=e.g,t=e.b,a={},o=Math.min(r,n,t),i=Math.max(r,n,t),u=i-o;return 0===i?a.s=0:a.s=Math.round(u/i*100),i===o?a.h=0:r===i?a.h=(n-t)/u:n===i?a.h=2+(t-r)/u:a.h=4+(r-n)/u,a.h=Math.min(Math.round(60*a.h),360),a.h<0&&(a.h+=360),a.v=Math.round(i/255*100),a}},{key:"hsvDistance",value:function(e,r){var n=0;return n=e.h>r.h?Math.min(e.h-r.h,r.h-e.h+360):Math.min(r.h-e.h,e.h-r.h+360),Math.sqrt(Math.pow(n,2)+Math.pow(e.s-r.s,2)+Math.pow(e.v-r.v,2))}},{key:"ciede2kDistance",value:function(r,n){return e._ciede2kDistance(r,n)/100}},{key:"_ciede2kDistance",value:function(r,n){var t=c.hex.lab(r),a=c.hex.lab(n),o=t[0],i=t[1],u=t[2],h=a[0],s=a[1],l=a[2];return e.__ciede2kDistance(o,i,u,h,s,l)}},{key:"__ciede2kDistance",value:function(e,r,n,t,a,o){var i=t-e,u=(e+t)/2,h=Math.hypot(r,n),s=Math.hypot(a,o),l=(h+s)/2,c=Math.pow(l,7),f=r+r/2*(1-Math.sqrt(c/(c+v))),d=a+a/2*(1-Math.sqrt(c/(c+v))),C=Math.hypot(f,n),j=Math.hypot(d,o),q=(C+j)/2,I=Math.pow(q,7),P=j-C,A=0===n&&0===f?0:Math.atan2(n,f);0>A&&(A+=2*Math.PI);var O=0===o&&0===d?0:Math.atan2(o,d);0>O&&(O+=2*Math.PI);var z=O-A;C*j===0?z=0:Math.abs(A-O)>Math.PI&&(A>=O?z+=2*Math.PI:z-=2*Math.PI);var D=2*Math.sqrt(C*j)*Math.sin(z/2),E=0;C*j!==0&&(E=Math.abs(A-O)>Math.PI?(A+O+2*Math.PI)/2:(A+O)/2);var S=1-.17*Math.cos(E-b)+.24*Math.cos(2*E)+.32*Math.cos(3*E+p)-.2*Math.cos(4*E-M),_=Math.pow(u-50,2),H=1+.0015*_/Math.sqrt(20+_),B=1+.045*q,F=1+.015*q*S,T=-2*Math.sqrt(I/(I+v))*Math.sin(y*Math.exp(-Math.pow((E-m)/g,2))),$=Math.pow(i/(k*H),2)+Math.pow(P/(w*B),2)+Math.pow(D/(x*F),2)+T*(P/(w*B))*(D/(x*F));return Math.sqrt($)}}]),e}(),j=["#000000","#808080","#c0c0c0","#ffffff","#0000ff","#000080","#008080","#008000","#00ff00","#00ffff","#ffff00","#ff0000","#ff00ff","#808000","#800080","#800000"],q=function(){function e(){var r=arguments.length<=0||void 0===arguments[0]?j:arguments[0];t.classCallCheck(this,e),this.setBaseColors(r)}return t.createClass(e,[{key:"setBaseColors",value:function(e){this.baseColors=e.map(function(e){return new C(e)})}},{key:"getBaseColors",value:function(){return this.baseColors}},{key:"classify",value:function(e){var n=this.baseColors,t=(new C(e).hsv,[]);return n.forEach(function(r){t.push({distance:C.ciede2kDistance(r.original,e),color:r.original})}),r(t,"distance").color}},{key:"classifyFromArray",value:function(e){var r=this,n={};return e.forEach(function(e){var t=r.classify(e);n.hasOwnProperty(t)||(n[t]=[]),n[t].push(e)}),n}}]),e}();return q.base16Colors=j,q});