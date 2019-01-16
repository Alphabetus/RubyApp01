
$(document).on("turbolinks:load", function(){

  // HOVER HANDLER
  $(".card").hover(function(){
    $(".card-title", this).css("opacity", 1);
  }, function(){
    $(".card-title", this).css("opacity", 0);
  });
  // END OF HOVER HANDLER

  // DEAL WITH PRODUCT ARRAY AND POPULATE PRODUCT IMAGES ASYNC.
  var productArray = $("#hidden_information_products_array").data("products-array");
  var canvasArray = $(".product_image");


  for (i = 0; i < canvasArray.length; i++){
    $(canvasArray[i]).removeClass("load_image");
    $(canvasArray[i]).addClass("card-img-top");
    canvasArray[i].src = $(canvasArray[i]).data("product-image");
    var ele = $(canvasArray[i]);

    // console.log(ele);
    ele.on("load", function (){
      // $(this).addClass("card-img-top");
      $(".loading_gif").fadeTo(700, 0, function(){});
      $(this).fadeTo(750, 1, function(){

      });


    })

  }

});
