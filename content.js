$(function() {
	var oldHTML = $('body').html();
	var newHTML = oldHTML.replace(/house/g,"<span style='color:blue;'>house</span>");
	newHTML = newHTML.replace(/House/g,"<span style='color:blue;'>House</span>");
	newHTML = newHTML.replace(/Minotaur/g, "<span style='color:red;'>Minotaur</span>");
	newHTML = newHTML.replace(/maison/g,"<span style='color:blue;'>maison</span>");
	newHTML = newHTML.replace(/Maison/g,"<span style='color:blue;'>Maison</span>");
	newHTML = newHTML.replace(/Haus/g,"<span style='color:blue;'>Haus</span>");
	$('body').html(newHTML);
});