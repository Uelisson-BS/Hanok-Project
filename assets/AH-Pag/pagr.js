var randomarleth_number=6;var randomarleth_chars=0;var randomarleth_details="yes";var randomarleth_comments="Comment";var randomarleth_commentsd="no";var randomarleth_current=[];var total_randomarleth=0;var randomarleth_current=new Array(randomarleth_number);function randomarleth(a){total_randomarleth=a.feed.openSearch$totalResults.$t}document.write('<script type="text/javascript" src="/feeds/posts/default/-/Animes?alt=json-in-script&max-results=0&callback=randomarleth"><\/script>');function getvalue(){for(var e=0;e<randomarleth_number;e++){var g=false;var h=get_random();for(var f=0;f<randomarleth_current.length;f++){if(randomarleth_current[f]==h){g=true;break}}if(g){e--}else{randomarleth_current[e]=h}}}function get_random(){var b=1+Math.round(Math.random()*(total_randomarleth-1));return b};
function rdm_arleth(j){for(var p=0;p<randomarleth_number;p++){var n=j.feed.entry[p];var s=n.title.$t;if("content" in n){var m=n.content.$t}else{if("summary" in n){var m=n.summary.$t}else{var m=""}}for(var q=0;q<n.link.length;q++){if("thr$total" in n){var l=n.thr$total.$t+" "+randomarleth_comments}else{l=randomarleth_commentsd}if(n.link[q].rel=="alternate"){var o=n.link[q].href;if("media$thumbnail" in n){var r=n.media$thumbnail.url}else{r="https://2.bp.blogspot.com/-d1lPGC5wgGQ/WBePYBCYCmI/AAAAAAAAAr8/ji8u6T4oPSUHvTdAAeBE2Fc3AWrFCUBcwCLcB/s1600/no-image.png"}}}document.write("<li>");document.write('<a href="'+o+'" rel="nofollow"><img alt="'+s+'" src="'+r+'" width="'+145+'" height="'+185+'"/><h2>'+s+"</h2></a>");if(randomarleth_details=="yes"){document.write('<div  class="rdminc"> <p> '+l)+'</p></div><div style="clear:both"></div></li>'}}}getvalue();for(var i=0;i<randomarleth_number;i++){document.write('<script type="text/javascript" src="/feeds/posts/default/-/Animes?alt=json-in-script&start-index='+randomarleth_current[i]+'&max-results=1&callback=rdm_arleth"><\/script>')};