var horizonSwiper;
//COMPACTAR EM https://developers.google.com/closure/compiler/
$(document).ready(function(){
  /*setTimeout(primeiraTroca,8000);*/

  //contagem regressiva para data do evento
  //setTimeout(contagemRegressiva,3000);
  //carrousel padrinhos
  setTimeout(initializeSwipe,2000);
  //mudança automática de padrinhos
  //setTimeout(configureChangeHorizon,10000);

  //impede que ao clicar va para o topo da tela
  $('#tracarRota').click(function(e){
    e.preventDefault();
    return false;
  });

  //lista de casamento
  $('#cota-viagem').click(function(e){
    e.preventDefault();
    window.open('http://www.cvc.com.br/travel/lista/comprar-cota.aspx?Evento=713882');
  });
  $('#para-lar').click(function(e){
    e.preventDefault();
    window.open('http://casamento.pontofrio.com.br/#/lista-presentes/593343');
    //window.open('https://listadecasamento.americanas.com.br/pages/GuestGiftListPage/bridalRegistryId/01-02-15306038/');
  });


  // if(!skel.vars.mobile){
  //   $('.nano').nanoScroller();
  // }
  //carrousel padrinhos
  //initializeSwipe();

  // new Photostack( document.getElementById( 'photostack-1' ), {
	// 			callback : function( item ) {
	// 				//console.log(item)
	// 			}
	// 		} );

});


$('a.facebook').click(function(e) {
    e.preventDefault();
    // window.open('https://www.facebook.com/igor.gabriel.792303');
    window.open('https://www.facebook.com/hashtag/casamentoigorerayane?ref=ts&fref=ts');
});
$('a.instagram').click(function(e) {
    e.preventDefault();
    // window.open('https://www.instagram.com/igrgabrl/');
    window.open('https://www.instagram.com/explore/tags/casamentoigorerayane/');
});
// $('a.horizon-link').click(function(e) {
//   e.preventDefault();
//   changeSwipe(event.target.id);
// });

function contagemRegressiva(){
    var id = 'contagem';
    var end = new Date('06/25/2017 00:00 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function remaining() {
        var now = new Date();
        var distance = end - now;

        // if(distance == 0){
        //   clearInterval(timer);
        //   document.getElementById(id).innerHTML = 'O grande dia é hoje!';
        //   return;
        // }

        if (distance < 0) {
            clearInterval(timer);
            var elm = document.getElementById(id);
            if(elm)
              elm.innerHTML = 'O grande dia já aconteceu';
            return;
        }

        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        var elm = document.getElementById(id);
        if(elm)
          elm.innerHTML = 'Faltam ' + days + ' dias para o grande dia!';
        // document.getElementById(id).innerHTML += hours + 'hrs ';
        // document.getElementById(id).innerHTML += minutes + 'mins ';
        // document.getElementById(id).innerHTML += seconds + 'secs';
    }

    timer = setInterval(remaining, 1000);
}

function initializeSwipe(){

  var showItems = 2;
  var oneDotTwoItems = true;
  // screen < 736px
  if (isSmallScreen()) {
    showItems = 1;
    oneDotTwoItems = false;
  }
  horizonSwiper =  $('.horizon-swiper').horizonSwiper({
    dots: true,
    arrows: true,
    animationSpeed: 700,
    showItems: showItems,
    oneDotTwoItems: oneDotTwoItems
  });

  var itemsDaminhas = isSmallScreen() ? showItems : 3
  $('#horizon-daminhas').horizonSwiper({
    dots: true,
    arrows: true,
    animationSpeed: 700,
    showItems: itemsDaminhas
  });

  $('#horizon-daminhas').addClass('horizon-swiper');
  // $('.horizon-swiper').fadeOut();
  // $('#horizon-padrinhos').fadeIn();
}

function changeSwipe(id){

  //quando esconde os outros swipes o plugin seta max-height = px
  //o que faz com que eles não apareçam
  var maxHeight = $('#horizon-padrinhos').children().css('max-height');
  $('#horizon-familia').children().css('max-height', maxHeight);
  $('#horizon-daminhas').children().css('max-height', maxHeight);

  if(!isSmallScreen()){
    $('.horizon-dots').hide();
  }

  if(!$('#'+id).hasClass('active')){
    $('.horizon-link').removeClass('active');
    $('#'+id).addClass('active');
    $('.horizon-swiper').fadeOut();
    setTimeout(function(){
      $('#horizon-'+id).fadeIn();
      if(id === 'padrinhos'){
        $('.horizon-dots').show();
      }
    },400);
  }
}

function isSmallScreen(){
  return $(window).width() < 736;
}

function showFormMural(e){
  e.preventDefault();
  $('#escrever-btn').fadeOut();
  $('#escrever-mural').fadeIn();
}
function cancelarMensagem(e){
  e.preventDefault();
  $('#escrever-mural').fadeOut();
  $('#escrever-btn').fadeIn();
}


function openAmigos(e){
  e.preventDefault();
  fechaTodos();
  $('#album-amigos').fadeIn();
}
function openFamilia(e){
  e.preventDefault();
  fechaTodos();
  $('#album-familia').fadeIn();
}
function openIer(e){
  e.preventDefault();
  fechaTodos();
  $('#album-ier').fadeIn();
}
function openPrewedding(e){
  e.preventDefault();
  fechaTodos();
  $('#album-prewedding').fadeIn();
}
function fechaTodos(){
  $('#album-amigos').hide();
  $('#album-familia').hide();
  $('#album-ier').hide();
  $('#album-prewedding').hide();
}

function configureChangeHorizon(){
  $('#horizon-padrinhos').find('.horizon-dots').attr('id', 'changePadrinhos')
  setTimeout(changeHorizonPadrinhos,1000);
}

function changeHorizonPadrinhos(){
  var isLast = $('#changePadrinhos').find('.active').is(':last-child');
  if(isLast){
    $('#changePadrinhos').find(':first-child').click();
  }else{
    $('#changePadrinhos').find('.active').next().click();
  }
  setTimeout(changeHorizonPadrinhos, 5000);
}

//8B2E5F
//BC2747
//http://tympanus.net/codrops/2012/01/02/fullscreen-background-image-slideshow-with-css3/
//http://fotorama.io/#birdwatcher__ac2c2fe6-30fe-4695-876b-ce185ed408cf
