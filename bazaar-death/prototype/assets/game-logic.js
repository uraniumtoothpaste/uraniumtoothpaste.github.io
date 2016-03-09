var imgs = [
"assets/i/cafe-window-night.jpg",
"assets/i/city-sites-bus-street.jpg",
"assets/i/crowd-market.jpg",
"assets/i/dead-end.jpg",
"assets/i/eh-alone.png",
"assets/i/eh.png",
"assets/i/emergency-roadblock.jpg",
"assets/i/goat-shop-interior.jpg",
"assets/i/goat-vector-test.svg",
"assets/i/goat.png",
"assets/i/goat.svg",
"assets/i/open-storefront.jpg",
"assets/i/open-street-lost.jpg",
"assets/i/riverwalk-dark.jpg",
"assets/i/riverwalk.jpg",
"assets/i/sunset-market.jpg",
"assets/i/tour-dark-binocs.jpg",
"assets/i/wcon-over.jpg",
"assets/i/wcon-phone-off.jpg",
"assets/i/wcon-phone-on-bright.jpg",
"assets/i/wcon-phone-on-date.jpg",
"assets/i/wcon.jpg"
]

function preload(sources)
{
  jQuery.each(sources, function(i,source) { 
    jQuery.get(source);
    console.log("tried " + source);
   });
}

preload(imgs);