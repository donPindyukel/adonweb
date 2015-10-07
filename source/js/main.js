$(document).ready(function(){
    
   $('#list1').click(function(){
      showSelect($('.input-list1')[0]);
    });
    $('#list2').click(function(){
    	showSelect($('.input-list2')[0]);
    });
    
    $('.checkbox').click(function(){
    	$('.inner-checkbox').toggle();
    });
  
  eventHover ($('.a-carousel-image-link'));

$(".b-carousel-button-right").click(function(){ // при клике на правую кнопку запускаем следующую функцию:
		$(".h-carousel-items").animate({left: "-222px"}, 200); // производим анимацию: блок с набором картинок уедет влево на 222 пикселя (это ширина одного прокручиваемого элемента) за 200 милисекунд.
		setTimeout(function () { // устанавливаем задержку времени перед выполнением следующих функций. Задержка нужна, т.к. эти ффункции должны запуститься только после завершения анимации.
			$(".h-carousel-items .b-carousel-block").eq(0).clone().appendTo(".h-carousel-items"); // выбираем первый элемент, создаём его копию и помещаем в конец карусели
            eventHover($(".h-carousel-items .b-carousel-block").eq(-1));	// вешаем отлов событий ховера на новый элемент
			$(".h-carousel-items .b-carousel-block").eq(0).remove(); // удаляем первый элемент карусели		
			$(".h-carousel-items").css({"left":"0px"}); // возвращаем исходное смещение набора набора элементов карусели
		}, 300);
	});
	
	$(".b-carousel-button-left").click(function(){ // при клике на левую кнопку выполняем следующую функцию:		
		$(".h-carousel-items .b-carousel-block").eq(-1).clone().prependTo(".h-carousel-items"); // выбираем последний элемент набора, создаём его копию и помещаем в начало набора
		eventHover($(".h-carousel-items .b-carousel-block").eq(0));	// вешаем отлов событий ховера на новый элемент
		$(".h-carousel-items").css({"left":"-222px"}); // устанавливаем смещение набора -222px		
		$(".h-carousel-items").animate({left: "0px"}, 200); // за 200 милисекунд набор элементов плавно переместится в исходную нулевую точку
		$(".h-carousel-items .b-carousel-block").eq(-1).remove(); // выбираем последний элемент карусели и удаляем его
	});


 $('#policy').click(function(e){
 	e.preventDefault();
 	$('.popup-wrap').show();
 });


 $('#popup-cls').click(function(){
 //	e.preventDefault();
  	$('.popup-wrap').hide();
 });

$('#popup-bgr').click(function(){
	$('.popup-wrap').hide();
});

});

function showSelect (element) {
	var event;

    event = document.createEvent('MouseEvents');
    event.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null);
    element.dispatchEvent(event);

   
}

function eventHover (elem) {
	elem.hover(
function(e){
  if(e.target.tagName == 'IMG'){
  	$(e.target.nextElementSibling).stop(true).show();
  }	
  else { $(e.target.children[1]).stop(true).show(); }
  //console.log($(e.target));
},
function(e){
 
  $('.hover-block').hide();
});
}