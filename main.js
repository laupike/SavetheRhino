new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
      scrollHorizontally: true,
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['Home', 'About', 'Donations', 'Image Gallery','Contact'],
      showActiveTooltip: true,
      slidesNavigation: true,
      controlArrows:false,
      slidesNavPosition: 'bottom', 
  });
  lightGallery(document.getElementById("gallery-container"), {
    speed: 500,
    plugins: [lgZoom],
    hideBarsDelay: 2000,
  });
  $(document).ready(function(){
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
      mainClass: 'mfp-with-zoom', 
      gallery:{
                enabled:true
            },
    
      zoom: {
        enabled: true, 
    
        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function
    
        opener: function(openerElement) {
    
          return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
    
    });
    
    });  