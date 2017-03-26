$('#refresh').click(function () { 
	var name = $('#name').val();
	var second_name = $('#second-name').val();
	var email = $('#mail').val();
	var gender = $('#gender').val();
	var password = $('#password').val();
	var agree = $('#agree').val();
	if(name && second_name && email && gender && password && agree){
		window.location.href = "page1.html" 
	}
});

$(document).ready(function(){ 
	$.getJSON("https://codeit.pro/frontTestTask/company/getList", function(json) { // стягиваем компании с сайта
		if(json['list']){  // получаем массив с компаниями
			var companyCount = json['list'].length; // получаем количество компаний, которое равно количеству элементов массива
			var elemCompany = ''; // здесь будет каждый елемент массива с компанией
			var companyList = '<ul>'; // создем переменную, где будет храниться вся верстка с компаниями которую я создал в HTML
			for(var inc = 0; inc < companyCount; inc++){ // перебираем каждый элемент массива с каждой компанией
				elemCompany = json['list'][inc]; // вытягиваем каждую компанию в нашу переменную
				companyList += '<a onclick="get_partner('+inc+')" href="#"><li class="nameofcompany">'+elemCompany['name']+'</li></a>'; // формируем переменную, куда записываются все компании с версткой
			
				 // console.log(elemCompany);
				
			}
			companyList += '</ul>';
			$('#companyList').html(companyList); // записываем список компаний в блок с id="companyList"
			$('#totalComp').text(companyCount); // записываем количество компаний в блок с id="totalComp"
			$('#list-company').text(companyCount); // записываем количество компаний в блок с id="totalComp"
		}; 
	}); 
});

	$.getJSON("http://codeit.pro/frontTestTask/company/getList", function(json){
		var output = '';
		//console.log(json);
		var inc = 0;
		$.each(json['list'], function(key, company){
			output += '<ul class="single_part" id="part_'+inc+'" >';
			$.each(company['partners'], function(key2, partner){
				output += '<li>';
				output += '<a href="#">'+ partner['name'] + '</a>';
				output += '</li>';
			});
			output += '</ul>';
			inc++;
		});
		
		$('#list-partners').html(output);
		 
});

function get_partner(inc){

	$('.partners').css('display','block');
	// console.log(inc);
	
	$('.single_part').css('display', 'none');
	$('#part_'+inc).css('display', 'block');
}

// $(document).ready(function(){ 
// 	$.getJSON("http://codeit.pro/frontTestTask/news/getList", function(json) { // стягиваем компании с урлы сайта
// 		if(json['list']){  // получаем массив с компаниями
// 			var companyNews = json['list'].length; // получаем количество компаний, которое равно количеству элементов массива
// 			var companyListNews = ''; // создем переменную, где будет храниться вся верстка с компаниями
// 			var elemCompanyNews = null; // здесь будет каждый елемент массива с компанией
	

			

// 			for(var inc = 0; inc<json['list'].length; inc++){ // перебираем каждый элемент массива с каждой компанией
// 				elemCompanyNews = json['list'][inc]; // вытягиваем каждую компанию в нашу переменную
// 				// формируем переменную, куда записываются все компании с версткой
// 				companyListNews += '<div class="title-bl"><p class="title-cont">'+elemCompanyNews['author']+'</p></div>'; // формируем переменную, куда записываются все компании с версткой
				
// 				 console.log(elemCompanyNews);
// 				  // на случай, если захочешь посмотреть какие ещё есть поля кроме "name"
// 			}
// 			$('#title-bl').html(companyListNews); // записываем список компаний в блок с id="#slide-part"
// 			// $('#totalComp').text(elemCompanyNews); // записываем количество компаний в блок с id="totalComp"
// 			// $('#list-company').text(elemCompanyNews); // записываем количество компаний в блок с id="totalComp"

// 		}; 
// 	}); 
// });
$(document).ready(function(){ 
	$.getJSON("http://codeit.pro/frontTestTask/news/getList", function(json) { // стягиваем компании с урлы сайта
		if(json['list']){  // получаем массив с компаниями
			var listAuthors = json['list'];
			var lengthofAuthors = listAuthors.length; // получаем количество компаний, которое равно количеству элементов массива
			var numberOfAuthorsNews = ''; // создем переменную, где будет храниться вся верстка с компаниями
			var elemNumberOfAuthors = null; // здесь будет каждый елемент массива с компанией

	     	// var slides = $('.slider-in');
            var authorimg = $('.authorimg');//jquery функция //inc указатель массива, массивы !
  		    for(var inc = 0; inc<lengthofAuthors; inc++) {
	  	       // elemNumberOfAuthors = json['list'][inc]; //
	  	       // $(slides[inc]).html(author[inc]);
	  	       // console.log('something');
	  	       var picture = listAuthors[inc].img;
	  	        console.log(listAuthors);
	  	       // var authorname = listAuthors[inc].author;
	  	       $(authorimg[inc]).attr( "src" , picture );


	  	      
	        }

	         var author = $('.authorname');
  		    for(var inc = 0; inc<lengthofAuthors; inc++) {
	  	       // elemNumberOfAuthors = json['list'][inc]; //
	  	       // $(slides[inc]).html(author[inc]);
	  	       // console.log('something');
	  	       var authorblock = listAuthors[inc].author;
	  	         // console.log(listAuthors[inc].author);
	  	      $(author[inc]).html(  authorblock  );
    		   
	  	      
	        }

	         var title = $('.title-cont');
  		    for(var inc = 0; inc<lengthofAuthors; inc++) {
	  	       // elemNumberOfAuthors = json['list'][inc]; //
	  	       // $(slides[inc]).html(author[inc]);
	  	       // console.log('something');
	  	       var titleblock = listAuthors[inc].description;
	  	         // console.log(listAuthors[inc].description);
	  	      $(title[inc]).html( titleblock );
    		   
	  	      
	        }

	           var public = $('.public');
  		    for(var inc = 0; inc<lengthofAuthors; inc++) {
	  	       // elemNumberOfAuthors = json['list'][inc]; //
	  	       // $(slides[inc]).html(author[inc]);
	  	       // console.log('something');
	  	       var publicblock = listAuthors[inc].date;
	  	         // console.log(listAuthors[inc].date);
	  	      $(public[inc]).html( publicblock );
    		   
	  	      
	        }
		
	  
			// console.log(listAuthors);
			// $('.slider-side').html(companyListNews); // записываем список компаний в блок с id="#slide-part"
	

		}; 
	}); 
});


$('.slider-side').slick({
	dots:true,
	arrows:false,
	autoplay:true,
	speed:3000,
});