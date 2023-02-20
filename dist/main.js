!function(){"use strict";var e;function t(e,t){e=e.replace(/<%-sUrl%>/g,encodeURIComponent(t.sUrl)).replace(/<%-sTitle%>/g,encodeURIComponent(t.sTitle)).replace(/<%-sDesc%>/g,encodeURIComponent(t.sDesc)).replace(/<%-sPic%>/g,encodeURIComponent(t.sPic));window.open(e)}function o(){$(".wx-share-modal").removeClass("in ready"),$("#share-mask").hide()}function s(e,o){"weibo"===e?t("http://service.weibo.com/share/share.php?url=<%-sUrl%>&title=<%-sTitle%>&pic=<%-sPic%>",o):"qq"===e?t("http://connect.qq.com/widget/shareqq/index.html?url=<%-sUrl%>&title=<%-sTitle%>&source=<%-sDesc%>",o):"douban"===e?t("https://www.douban.com/share/service?image=<%-sPic%>&href=<%-sUrl%>&name=<%-sTitle%>&text=<%-sDesc%>",o):"qzone"===e?t("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=<%-sUrl%>&title=<%-sTitle%>&pics=<%-sPic%>&summary=<%-sDesc%>",o):"facebook"===e?t("https://www.facebook.com/sharer/sharer.php?u=<%-sUrl%>",o):"twitter"===e?t("https://twitter.com/intent/tweet?text=<%-sTitle%>&url=<%-sUrl%>",o):"google"===e?t("https://plus.google.com/share?url=<%-sUrl%>",o):"weixin"===e&&($(".wx-share-modal").addClass("in ready"),$("#share-mask").show())}!function(e){let t=e(".search-form-wrap"),o=!1;e(".nav-item-search").on("click",(()=>{var s;o||(o=!0,t.addClass("on"),s=function(){e(".local-search-input").focus()},setTimeout((function(){o=!1,s&&s()}),200))})),e(document).on("mouseup",(o=>{const s=e(".local-search");s.is(o.target)||0!==s.has(o.target).length||t.removeClass("on")})),e(".local-search").length&&e.getScript("/js/search.js",(function(){searchFunc("/search.xml","local-search-input","local-search-result")})),e(".share-outer").on("click",(()=>e(".share-wrap").fadeToggle())),e("img.lazy").lazyload({effect:"fadeIn"}),e("#gallery").justifiedGallery({rowHeight:200,margins:5}),e(document).ready((function(e){e(".anchor").on("click",(function(t){t.preventDefault(),e("main").animate({scrollTop:e(".cover").height()},"smooth")}))})),(()=>{const t=e("#totop");t.hide(),e(".content").on("scroll",(()=>{e(".content").scrollTop()>1e3?e(t).stop().fadeTo(200,.6):e(t).stop().fadeTo(200,0)})),e(t).on("click",(()=>(e(".content").animate({scrollTop:0},1e3),!1)))})(),e(".article-entry").each((function(t){e(this).find("img").each((function(){if(e(this).parent().is("a"))return;const{alt:t}=this;t&&e(this).after('<span class="caption">'+t+"</span>")}))}));const s=e(".content"),r=e(".sidebar");e(".navbar-toggle").on("click",(()=>{e(".content,.sidebar").addClass("anim"),s.toggleClass("on"),r.toggleClass("on")})),e("#reward-btn").on("click",(()=>{e("#reward").fadeIn(150),e("#mask").fadeIn(150)})),e("#reward .close, #mask").on("click",(()=>{e("#mask").fadeOut(100),e("#reward").fadeOut(100)})),1==sessionStorage.getItem("darkmode")?(e("body").addClass("darkmode"),e("#todark i").removeClass("ri-moon-line").addClass("ri-sun-line")):(e("body").removeClass("darkmode"),e("#todark i").removeClass("ri-sun-line").addClass("ri-moon-line")),e("#todark").on("click",(()=>{1==sessionStorage.getItem("darkmode")?(e("body").removeClass("darkmode"),e("#todark i").removeClass("ri-sun-line").addClass("ri-moon-line"),sessionStorage.removeItem("darkmode")):(e("body").addClass("darkmode"),e("#todark i").removeClass("ri-moon-line").addClass("ri-sun-line"),sessionStorage.setItem("darkmode",1))}));console.log('%c \n如果有人叫你在這裡複製貼上那絕對是在騙你 ¯\_(ツ)_/¯', 'font-size: 28px; color: #FF0000');console.log('%c \n如果你知道你在幹嘛, 歡迎加入我們 \\(.D˙)/', 'font-size: 23px');console.log('%c \nCopyright © 2022-2023 CHANG, YU-HSI. All rights reserved.', 'color: rgba(237, 237, 237, 0.5)');}(jQuery),e={id:"JGjrOr2rebvP6q2a",ck:"JGjrOr2rebvP6q2a"},function(t){var o=window,s=document,r=e,n="".concat("https:"===s.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),a=s.createElement("script"),c=s.getElementsByTagName("script")[0];a.type="text/javascript",a.setAttribute("charset","UTF-8"),a.async=!0,a.src=n,a.id="LA_COLLECT",r.d=a;var i=function(){o.LA.ids.push(r)};o.LA?o.LA.ids&&i():(o.LA=e,o.LA.ids=[],i()),c.parentNode.insertBefore(a,c)}();(()=>{let e=document.querySelectorAll(".share-sns");if(!e||0===e.length)return;let t=window.location.href,r=document.querySelector("title").innerHTML,n=document.querySelectorAll(".article-entry img").length?document.querySelector(".article-entry img").getAttribute("src"):"";""===n||/^(http:|https:)?\/\//.test(n)||(n=window.location.origin+n),e.forEach((e=>{e.onclick=o=>{s(e.getAttribute("data-type"),{sUrl:t,sPic:n,sTitle:r,sDesc:r})}})),document.querySelector("#mask").onclick=o,document.querySelector(".modal-close").onclick=o})()}();

var copy = false;

document.oncopy = () => {
	if (copy) {
		return true 
	}
	else {
		return false
	}
};

document.onpaste = () => {
    return false
};

document.oncut = () => {
    return false
};

document.oncontextmenu = () => {
    return false
};

document.addEventListener("DOMContentLoaded", () => {
	var request = new XMLHttpRequest();
	request.open('get', 'https://api.mcsrvstat.us/2/cocobeen.net', true);
	request.send();
	request.onload = reqOnload;
	request.onerror = reqError;
});

const item = document.querySelector('.notice');

function reqOnload() {
	const data = JSON.parse(this.responseText);
	try {
		var motd_html = data.motd.html.toString();
		var players = data.players.online;
		var max_players = data.players.max;
		var icon = data.icon;
	}
	catch (e) {
		reqError(e);
		return;
	}
	var div_img = document.createElement('img');
	div_img.id = 'img'
	div_img.src = icon;
	div_img.style = 'width: 64px';
	item.appendChild(div_img)

	var div_motd = document.createElement('div');
	div_motd.id = 'motd'
	div_motd.style = 'margin-left: 1rem; margin-right: auto; font-size: 1.9rem'
	div_motd.innerHTML = motd_html.replace(',','<br>');
	item.appendChild(div_motd)

	var div_online = document.createElement('div');
	div_online.id = 'online'
	div_online.style = 'display: flex; justify-content: right; align-items: center; flex-direction: row'
	item.appendChild(div_online)

	const online = document.querySelector('#online');
	var div_online = document.createElement('div');
	var div_img = document.createElement('img');
	div_online.innerHTML = `<span style="color:#AAAAAA;">${players}</span><span style="color:#555555;">/</span><span style="color:#AAAAAA;">${max_players}</span>` 
	div_online.style = 'width: auto; margin-left: 1rem; font-size: 1.9rem'
	div_img.id = 'online_img'
	div_img.src = '/images/online.png';
	div_img.style = 'width: 2.5rem; margin-left: 0.6rem';
	online.appendChild(div_online)
	online.appendChild(div_img)
}

function reqError(err) {
	var div_motd = document.createElement('p');
	div_motd.id = 'motd'
	div_motd.style = 'color: #FF5555; margin-left: 1rem; margin-right: auto; font-size: 1.9rem'
	div_motd.innerHTML = '網路發生錯誤，請稍後再試';
	item.appendChild(div_motd)
	var div_offline = document.createElement('div');
	div_offline.id = 'offline'
	div_offline.style = 'display: flex; justify-content: right; align-items: center; flex-direction: row'
	item.appendChild(div_offline)
	const offline = document.querySelector('#offline');
	var div_offline = document.createElement('div');
	var div_img = document.createElement('img');
	div_offline.innerHTML = `<span style="color:#AAAAAA;">0</span><span style="color:#555555;">/</span><span style="color:#AAAAAA;">0</span>` 
	div_offline.style = 'width: auto; margin-left: 1rem; font-size: 1.9rem'
	div_img.id = 'offline_img'
	div_img.src = '/images/offline.png';
	div_img.style = 'width: 2.5rem; margin-left: 0.6rem';
	offline.appendChild(div_offline)
	offline.appendChild(div_img)
}

function copy_ip() {
    var content = document.getElementById('copy');
    content.select();
    content.setSelectionRange(0, 99999);
	copy = true
    document.execCommand('copy');
	copy = false
    setTimeout(function() {
        alert("已成功複製到剪貼簿");
        }, 100
    );
}
