var topVisibleElement;
if (typeof clipjsElement !== "string") { var clipjsElement = "document"; }

window.onscroll = function () {
	var scroll = jQuery(window).scrollTop();
    var elements = jQuery(clipjsElement).children();
    var el;
    for (var i=0; i<elements.length; i++) {
        el = jQuery(elements[i]);
        var elBottom = el.offset().top + el.height();
        if (elBottom >= scroll && el.is(':visible')){
            topVisibleElement = el;
            break;
        }
    }
};

window.addEventListener("orientationchange", function () {
	if (jQuery(window).scrollTop() >= jQuery(clipjsElement).offset().top) {
		window.scroll(0, topVisibleElement.offset().top);
	}
}, false);