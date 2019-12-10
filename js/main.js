$(function() {
	$('.projects-carousel').owlCarousel({
			loop:true,
		    margin:0,
		    dots:true,
		    //startPosition:1,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
	});
	$('.menu-btn-mobile').on('click', function(e) {
  	e.preventDefault();
  	$('.menu-list').toggleClass('menu-list-active'); 	
	});

	let sub_li = document.querySelector('.list_item.sub-open'),
		sub_menu = document.querySelector('.submenu');
	sub_li.addEventListener('click',()=>{
		if(sub_menu.classList.contains('showSub')){
			sub_menu.style.display = "none";
			sub_menu.classList.remove('showSub');
		}
		else{
			sub_menu.style.display = "block";
			sub_menu.classList.add('showSub');
		}
	})
	
});
