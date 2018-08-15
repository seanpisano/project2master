$(function(){
//Variables
  
  var sourceDigg = 'https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json' 
  var sourceBrews = 'https://accesscontrolalloworiginall.herokuapp.com/https://api.punkapi.com/v2/beers'
  var sourceTapp = 'https://api.untappd.com/v4/brewery/info/3735?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777'

//Fuction Init
//
  function init(){
    window.onload = getDigg;
    $('#digg').on('click', getDigg)
    $('#brews').on('click', getBrews) 
    $('#tapp').on('click', getTapp)     

  }

  init();

//Digg
//
    function getDigg(){
    $.ajax({
      method: 'GET',
      url: sourceDigg,
      data: { format: 'json' },
      success: renderDigg,
    })
  }
    function renderDigg(data){
      console.log(data.data.feed[0])
    var $content = $('#main').empty();
    var data;
     data = data;
      for( var i=0; i< 50; i++){ 
       var itemDigg = $("#main").append('<article class="article"><section class="featuredImage"><img src="' + data.data.feed[i].content.media.images[4].original_url + '" alt="" /></section><section class="articleContent"><a href="#"><h3>' + data.data.feed[i].content.title_alt + '</h3></a><h6>' + data.data.feed[i].content.description + '</h6></section><section class="impressions">' + data.data.feed[i].diggs.count + '</section><div class="clearfix"></div></article><div id="popUp" class="loader hidden"><a href="#" class="closePopUp">X</a><div class="container"><h1>' + data.data.feed[i].content.title_alt + '</h1><p>' + data.data.feed[i].content.description + '</p><a href="' + data.data.feed[i].content.original_url + '" class="popUpAction" target="_blank">Read more from source</a></div></div>'
        );
       $content.append(itemDigg);
       $('.articleContent').on('click', popUp);
       $('.closePopUp').on('click', closePopUp); 
      function popUp(){
        $('#popUp').removeClass("hidden");
        setTimeout(
          function () {
            $('#popUp').removeClass('loader');
          }, 2000);
      };
        function closePopUp(){
        $('#popUp').addClass("hidden");
      };


     }//end for
  }
//Brew dogs
//
    function getBrews(){
    $.ajax({
      method: 'GET',
      url: sourceBrews,
      data: { format: 'json' },
      success: renderBrews,
    })
  }
    function renderBrews(data){
      console.log(data[0])
    var $content = $('#main').empty();
    var data;
     data = data;
      for( var i=0; i< 50; i++){ 
       var itemBrews = $("#main").append('<article class="article"><section class="featuredImage"><img src="' + data[i].image_url + '" alt="" /></section><section class="articleContent"><a href="#"><h3>' + data[i].name + '</h3></a><h6>' + data[i].description + '</h6></section><section class="impressions">' + data[i].id + '</section><div class="clearfix"></div></article><div id="popUp" class="loader hidden"><a href="#" class="closePopUp">X</a><div class="container"><h1>' + data[i].name + '</h1><p>' + data[i].description + '</p></div></div>'
        );
       $content.append(itemBrews);
       $('.articleContent').on('click', popUp);
       $('.closePopUp').on('click', closePopUp); 
      function popUp(){
        $('#popUp').removeClass("hidden");
        setTimeout(
          function () {
            $('#popUp').removeClass('loader');
          }, 2000);
      };
        function closePopUp(){
        $('#popUp').addClass("hidden");
      };


     }//end for
  }

  //untapped
//
    function getTapp(){
    $.ajax({
      method: 'GET',
      url: sourceTapp,
      data: { format: 'json' },
      success: renderTapp,
    })
  }
    function renderTapp(data){
      console.log(data.response.brewery.media.items[0])
    var $content = $('#main').empty();
    var data;
     data = data;
      for( var i=0; i< 50; i++){ 
       var itemTapp= $("#main").append('<article class="article"><section class="featuredImage"><img src="' + data.response.brewery.media.items[i].photo.photo_img_sm + '" alt="" /></section><section class="articleContent"><a href="#"><h3>' + data.response.brewery.media.items[i].beer.beer_name + '</h3></a><h6>' + data.response.brewery.media.items[i].beer.beer_style + '</h6></section><section class="impressions">' + data.response.brewery.media.items[i].beer.beer_abv + '</section><div class="clearfix"></div></article><div id="popUp" class="loader hidden"><a href="#" class="closePopUp">X</a><div class="container"><h1>' + data.response.brewery.media.items[i].beer.beer_name + '</h1><p>' + data.response.brewery.media.items[i].beer.beer_style + '</p><a href="' + data.response.brewery.media.items[i].brewery.contact.url + '" class="popUpAction" target="_blank">Read more from source</a></div></div>'
        );
       $content.append(itemTapp);
       $('.articleContent').on('click', popUp);
       $('.closePopUp').on('click', closePopUp); 
      function popUp(){
        $('#popUp').removeClass("hidden");
        setTimeout(
          function () {
            $('#popUp').removeClass('loader');
          }, 2000);
      };
        function closePopUp(){
        $('#popUp').addClass("hidden");
      };


     }//end for
  }

//Reddit

    function getReddit(){
    $.ajax({
      method: 'GET',
      url: sourceReddit,
      data: { format: 'json' },
      success: renderReddit,
    })
  }
    function renderReddit(data){
      onsole.log(data.data.children[0])
    var data;
    var $content = $('#main').empty();
     data = data;
      for(i=0; i< 50; i++){ 
       var itemReddit = $("#main").append('<article class="article"><section class="featuredImage"><img src="' + data.data.children[i].data.secure_media.oembed.thumbnail_url + '" alt="" /></section><section class="articleContent"><a href="#"><h3>' + data.data.children[i].data.title + '</h3></a><h6>' + data.data.children[i].data.secure_media.oembed.description + '</h6></section><section class="impressions">'  + data.data.children[i].data.secure_media.oembed.thumbnail_url + '</section><div class="clearfix"></div></article><div id="popUp" class="loader hidden"><a href="#" class="closePopUp">X</a><div class="container"><h1>' + data.data.feed[i].content.title_alt + '</h1><p>' + data.data.feed[i].content.description + '</p><a href="' + data.data.feed[i].content.original_url + '" class="popUpAction" target="_blank">Read more from source</a></div></div>'
        );
       $content.append(itemReddit); 
     }//end for
  }

//Masable
    function getMash(){
    $.ajax({
      method: 'GET',
      url: sourceMash,
      data: { format: 'json' },
      success: renderMash,
    })
  }

    function renderMash(json){ 
    var data;
    var $content = $('#main').empty();
     data = json;
      for (var i=0; i<50; i++) { 
      // var imgMash =  $('<img>').attr('src', data.new[i].responsive_images.url);
      var titleMash = $("<h3>" + json.new[i].title + "</h3>");
      // var contentMash = $("<h6>" + json.new[i].content.plain + "</h6>") 
      // var impMash = $("0"); 
      var $itemMash = $('<article />').addClass('article').appendTo($content)
      // $('<section />').addClass('featuredImage').attr(imgMash).appendTo($itemMash)
      $('<section />').addClass('articleContent').attr(titleMash).appendTo($itemMash)
      // $('<section />').addClass('impressions').attr(impMash).appendTo($itemMash)
      $('<div  />').addClass('clearfix').appendTo($itemMash)
    }

     }//end for     
  })




  //Brews

  //   function getBrews(){
  //   $.ajax({
  //     method: 'GET',
  //     url: sourceBrews,
  //     data: { format: 'json' },
  //     success: renderBrews,
  //   })
  // }
  //   function renderBrews(json){
  //   var data;
  //   var $content = $('#main').empty();
  //    data = json;
  //     for(i=0; i< 50; i++){ 
  //      var itemBrews = $("<li>").append(full);

  //      $content.append(itemBrews); 
  //    }//end for
  // })
