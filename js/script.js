$(function(){
	// console.log("event");
	$("#navbarToggle").blur(function (event){
		var screenWidth=window.innerWidth;
		if(screenWidth<768){
			$("#collapsable-nav").collapse('hide');
		}
	});
});

$("#navbarToggle").click(function (event) {
    $(event.target).focus();
    // console.log(event.target);
  });

// console.log("script");
(function(global){
var phys={};
var homeHtml="snippets/home-snippet.html";
var serviceHtml="snippets/service-snippet.html";

var insertHtml=function(selector, html) {
	var targetElem=document.querySelector(selector);
	targetElem.innerHTML=html;
	console.log("1");
};

var showLoading=function(selector){
	var html="<div class='text-center'>";
	html+="<img src='images/ajax-loader.gif'></div>";
	insertHtml(selector,html);
	console.log("2");
}

var switchServicesToActive = function () {
    // Remove 'active' from home button
    var classes = document.querySelector("#navHomeButton").className;
    classes = classes.replace(new RegExp("active", "g"), "");
    document.querySelector("#navHomeButton").className = classes;
    // console.log(classes);

    // Add 'active' to menu button if not already there
    classes = document.querySelector("#navServicesButton").className;
    if (classes.indexOf("active") == -1) {
      classes += " active";
      document.querySelector("#navServicesButton").className = classes;
    }
    console.log("service " +classes);
  };


document.addEventListener("DOMContentLoaded", function(event){
	showLoading("#main-content");
	$ajaxUtils.sendGetRequest(
		homeHtml,
		function(responseText){
			document.querySelector("#main-content")
			.innerHTML=responseText;
		},
		false);
	console.log("home");
});

// document.addEventListener("DOMContentLoaded", function(event){
phys.loadServices = function () {
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
    	serviceHtml, 
    	function(responseText){
    		switchServicesToActive();
			document.querySelector("#main-content")
			.innerHTML=responseText;
		},
		false);
    console.log("4");
  };

global.$phys=phys;

})(window);