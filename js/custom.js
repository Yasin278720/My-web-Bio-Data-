function opennav(){
	document.getElementById('side-body').style.width = "24%";
	document.getElementById('main-body').style.marginLeft = "24%";
	document.getElementById('main-body').style.backgroundColor = "rgba(23,32,42,0.9)";
	document.getElementById('landing-txt').style.marginRight = "24%";
	document.getElementById('spy-menu-id').style.marginLeft = "24%";
}

function closenav(){
	document.getElementById('side-body').style.width = "0";
	document.getElementById('main-body').style.marginLeft = "0";
	document.getElementById('main-body').style.backgroundColor = "rgba(23,32,42,0.7)"
	document.getElementById('landing-txt').style.marginRight = "0";
	document.getElementById('spy-menu-id').style.marginLeft = "0";
}

$(document).ready(function(){
	
	/*Menu Tap to Div Scroll*/
	var scrollLink = $('.scroll');
	scrollLink.click(function(e){
		e.preventDefault();
		$('body, html').animate({
			scrollTop: $(this.hash).offset().top}, 1500);
	});

	/*Top button click to scroll top*/
	var top = $('.scroll-to-top');
    top.click(function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop:0}, 2000);
        return false;
    });

	/*Scroll Event Start*/
	$(window).scroll(function(){

		/*Scroll Spy*/
		var ScrollLocation = $(this).scrollTop();
		scrollLink.each(function(){
			var sectionLocation = $(this.hash).offset().top-50;
			if(sectionLocation <= ScrollLocation)
			{
				$(this).addClass('spy');
				$(this).siblings().removeClass('spy');
			}
		});

		/*Skill Bar Animation*/
		var SkillLocation = $("#edu-skill").offset().top-100;
		var SkillBar = $('.skill-body');
		var SkillValue = $('.skill-value');
		var a = 0;
		if(a == 0 && ScrollLocation >= SkillLocation)
		{
			SkillBar.each(function(){
				$(this).find('.inner-skill-bar').animate({width: $(this).attr('data-percent')}, 2000);
			});

			SkillValue.each(function(){
				var $this = $(this);
				CountValue = $this.attr('value');
				$({CountNum:$this.text()}).animate({CountNum:CountValue},{
					duration: 2000,
					easing:'swing',
					step: function(){
						$this.text(Math.floor(this.CountNum));
					},
					complete: function(){
						$this.text(this.CountNum);
					}
				});
			});
			a = 1;
		}

		/*Auto Hide and show Scroll Top Button*/
		var ScrollDiv = $('.scroll-top');
		var ScrollPosition = $(this).scrollTop();
		if(ScrollPosition > 200){
			ScrollDiv.fadeIn();
		}
		else{
			ScrollDiv.fadeOut();
		}

	});
});