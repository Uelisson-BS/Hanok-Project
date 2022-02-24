!function(e){function t(t,n){return parseInt(e.css(t[0],n))||0}e.fn.jCarouselLite=function(n){return n=e.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:!1,auto:null,speed:200,easing:null,vertical:!1,circular:!0,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null},n||{}),this.each((function(){var l=!1,r=n.vertical?"top":"left",i=n.vertical?"height":"width",s=e(this),c=e("ul:first",s),o=e(".car",c),a=o.size(),u=n.visible;n.circular&&(c.prepend(o.slice(a-u-1+1).clone()).append(o.slice(0,u).clone()),n.start+=u);var f=e(".car",c),d=f.size(),b=n.start;s.css("visibility","visible"),f.css({overflow:"hidden",float:n.vertical?"none":"left"}),c.css({padding:"0",position:"relative","list-style-type":"none","z-index":"1"}),s.css({overflow:"hidden","z-index":"2"});var v,h=n.vertical?(v=f)[0].offsetHeight+t(v,"marginTop")+t(v,"marginBottom"):function(e){return e[0].offsetWidth+t(e,"marginLeft")+t(e,"marginRight")}(f),p=h*d,x=h*u;function m(){return f.slice(b).slice(0,u)}function g(t){if(!l){if(n.beforeStart&&n.beforeStart.call(this,m()),n.circular)t<=n.start-u-1?(c.css(r,-(d-2*u)*h+"px"),b=t==n.start-u-1?d-2*u-1:d-2*u-n.scroll):t>=d-u+1?(c.css(r,-u*h+"px"),b=t==d-u+1?u+1:u+n.scroll):b=t;else{if(t<0||t>d-u)return;b=t}l=!0,c.animate("left"==r?{left:-b*h}:{top:-b*h},n.speed,n.easing,(function(){n.afterEnd&&n.afterEnd.call(this,m()),l=!1})),n.circular||(e(n.btnPrev+","+n.btnNext).removeClass("disabled"),e(b-n.scroll<0&&n.btnPrev||b+n.scroll>d-u&&n.btnNext||[]).addClass("disabled"))}return!1}f.css({width:f.width()}),c.css(i,p+"px").css(r,-b*h),s.css(i,x+"px"),n.btnPrev&&e(n.btnPrev).click((function(){return g(b-n.scroll)})),n.btnNext&&e(n.btnNext).click((function(){return g(b+n.scroll)})),n.btnGo&&e.each(n.btnGo,(function(t,l){e(l).click((function(){return g(n.circular?n.visible+t:t)}))})),n.mouseWheel&&s.mousewheel&&s.mousewheel((function(e,t){return g(t>0?b-n.scroll:b+n.scroll)})),n.auto&&setInterval((function(){g(b+n.scroll)}),n.auto+n.speed)}))}}(jQuery);

 imgr = new Array();
        imgr[0] = "";
        showRandomImg = true;
        aBold = true;
        summaryPost = 140;
        summaryTitle = 25;
        numposts1 = 10;
        label1 = "MARCADOR";
        function removeHtmlTag(strx,chop){
        var s = strx.split("<");
        for(var i=0;i<s.length;i++){
        if(s[i].indexOf(">")!=-1){
        s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
        }
        }
        s = s.join("");
        s = s.substring(0,chop-1);
        return s;
        }
        function showrecentposts(json) {
        j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
        img = new Array();
        document.write('<ul>');
        for (var i = 0; i < numposts1; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;
        var pcm;
        var posturl;
        if (i == json.feed.entry.length) break;
        for (var k = 0; k < entry.link.length; k++) {
        if (entry.link[k].rel == 'alternate') {
        posturl = entry.link[k].href;
        break;
        }
        }
        for (var k = 0; k < entry.link.length; k++) {
        if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        pcm = entry.link[k].title.split(" ")[0];
        break;
        }
        }
        if ("content" in entry) {
        var postcontent = entry.content.$t;}
        else
        if ("summary" in entry) {
        var postcontent = entry.summary.$t;}
        else var postcontent = "";
        postdate = entry.published.$t;
        if(j>imgr.length-1) j=0;
        img[i] = imgr[j];
        s = postcontent ; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);
        if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;
        //cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';
        var month = [1,2,3,4,5,6,7,8,9,10,11,12];
        var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        var day = postdate.split("-")[2].substring(0,2);
        var m = postdate.split("-")[1];
        var y = postdate.split("-")[0];
        for(var u2=0;u2<month.length;u2++){
        if(parseInt(m)==month[u2]) {
        m = month2[u2] ; break;
        }
        }
        var daystr = day+ ' ' + m + ' ' + y ;
        var trtd = '<li class="car"><div class="thumb"><a href="'+posturl+'"><img width="160" height="240" class="alignnone" src="'+img[i]+'"/></a></div><p><a class="slider_title" href="'+posturl+'">'+posttitle+'</a></p></li>';
        document.write(trtd);
        j++;
        }
        document.write('</ul>');
