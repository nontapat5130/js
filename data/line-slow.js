;(function($,window,undefined) {

	var Page = {

		$window: $(window),

		/* ===============================================
		 * ใใผใธ่ชญใฟ่พผใฟๅพใ€Commonใใไธ€ๅบฆใ ใ‘ๅ‘ผใณๅบใ•ใใพใ
		 * =============================================== */
		setupOnce: function(){
			Common.trace("Page -> setupOnce");

			/* ===============================================
			 * jsใฏใ“ใ“ใซ่จ่ผใ’ใ้กใใ—ใพใใ€๏ผใ“ใ“ใใ๏ผ
			 * =============================================== */

			Page.MenuEvent.init();


			/* ===============================================
			 * jsใฏใ“ใ“ใซ่จ่ผใ’ใ้กใใ—ใพใใ€๏ผใ“ใ“ใพใง๏ผ
			 * =============================================== */
			
		},
		/* -----------------------------------------------
		 * ใใฆในใคใใณใ้–ข้€ฃใฎๅฆ็
		 * ----------------------------------------------- */
		MenuEvent: {
			init: function(){
				Common.trace("Page -> MenuEvent ->init()");
				$("#j-movieThumb a").on("click", this.changeMovie);
			},
			changeMovie: function(e){
				e.preventDefault();
				var _id = $(this).attr('data-id');
				// var _id = e.currentTarget.attributes[1].nodeValue;
				Common.trace("Page -> id : " + _id);

				// ้ธๆใ—ใๅ•็”ปใซๅทฎใ—ๆฟใ
				var _src = '<iframe width="820" height="460" src="https://tv.line.me/embed/' + _id + '?rel=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>';
				$('#j-player').html('').html(_src);

				// ในใฏใญใผใซใ’ใใผใธไธ้จใซๆปใ
				Common.ancorScroll('html', 0, 1200, "easeInOutQuart");

				// ใตใ ใใคใซใฎใซใฌใณใ่กจ็คบๅคๆด
				$(".movie_thumb li").removeClass('current');
				$(this).parent().addClass('current');
				return false;
			}
		}
	};

	Common.Page = Page;

})(jQuery,window);
