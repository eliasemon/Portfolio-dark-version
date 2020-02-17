$(document).ready(function(){
     $('#banner').ripples({
        dropRadius: 10,
        perturbance: 0.04
     });
     $('.toggle').click(function(){
     	$('.menu').toggle(1000)
     });
});
  