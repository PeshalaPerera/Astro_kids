// Navigating to various part of our site
function get_link(id,url) {
	document.getElementById(id).
	addEventListener("click", function() {
		document.location.href = url;
	});
}

get_link("home","home.html");
get_link("shop","products.html");
get_link("thumbNail","thumbnails.html");
get_link("gallery","more_pictures.html");
get_link("quiz","quiz.html");
get_link("siteMap","site_map.html");
get_link("contact","contact_us.html");
get_link("about","about_us.html");