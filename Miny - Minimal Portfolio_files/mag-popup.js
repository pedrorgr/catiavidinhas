$(function(){

  "use strict";
  
var galleryitem = $('.galleryItem');
var groups = {};
galleryitem.each(function() {
  var id = parseInt($(this).attr('data-group'), 10);
  
  if(!groups[id]) {
    groups[id] = [];
  } 
  
  groups[id].push( this );
});


$.each(groups, function() {
  
  $(this).magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      zoom:{enabled:true, duration:400},
      gallery: { enabled:true }
  })
  
});

});