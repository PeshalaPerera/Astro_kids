// Navigating to various part of our site
function get_link(id,url) {
    document.getElementById(id).
    addEventListener("click", function() {
        document.location.href = url;
    });
}

get_link("shop_text","products.html");
get_link("pictionary_text","thumbnails.html");
get_link("quiz_text","quiz.html");
get_link("contact_us_text","contact_us.html");
