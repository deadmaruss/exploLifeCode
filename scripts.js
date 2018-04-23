//			Нет привязки к айди элемента, тобишь скрипт применяется ко всем элементам тэга Р(простой текст)
//			Для этого я добавил тексту на странице идентификатор, но пока не привязывал к нему саму функцию
//			В коде ниже будет закомментирован метод привязки к идентификатору вместо общего тэга

$(document).ready(function(){
//			$('#changetext').hover(function() {
//			Строчкой выше можно заменить строчку ниже, при этом функционал страницы в текущем виде не изменится, но в дальнейшем функция будет применяться только к той строчке
//			что у нас уже есть в документе
			$("p").hover(function() {
				$(this).text("Этот же скрипт можно анимировать и привязать к кнопке, убрав комментарии в коде и сделав привязку к идентификатору кнопки");
/*				$("button").animate({
            width: '200px'
	        })
	  		Эта часть функции отвечает за анимацию расширения элемента до 200 пикселей
	        */
			},
			function() {
				// assign it back here
				$(this).text("Вместо текста так же можно проделать эту операцию с изображением или любым другим элементом");
/*				$("button").animate({
	            width: '100px'
	        });
	        Точно так же, как и в функции сверху, этот код анимирует переход элемента до состояния в 100 пикселей. 
	        Так же можно, сохранив предварительно состояние перед исполнением функции в переменную, вернуть исходноя состояние из сохраненного в переменную
*/
			});
});

// Эта же функция привязана к айди новой кнопки с сохранением исходного текста в переменную

let oldText = $('#expand').text();
let oldWidth = $('#expand').css('width');

$(document).ready(function(){
			$('#expand').hover(function() {
				$(this).text("------ Узнать больше");
		//		$("#expand").animate({
        //    width: '300px'
	    //    })
			},
			function() {
				$(this).text(oldText);
		//		$("#expand").animate({
		//	width: oldWidth
	//		});
			});
});