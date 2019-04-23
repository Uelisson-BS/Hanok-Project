function Pager(tableName,itemsPerPage){this.tableName=tableName;this.itemsPerPage=itemsPerPage;this.currentPage=1;this.pages=0;this.inited=!1;this.showRecords=function(from,to){var rows=document.getElementById(tableName).rows;for(var i=1;i<rows.length;i++){if(i<from||i>to)
rows[i].style.display='none';else rows[i].style.display=''}}
this.showPage=function(pageNumber){if(!this.inited){alert("not inited");return}
var oldPageAnchor=document.getElementById('pg'+this.currentPage);oldPageAnchor.className='pg-normal';this.currentPage=pageNumber;var newPageAnchor=document.getElementById('pg'+this.currentPage);newPageAnchor.className='pg-selected';var from=(pageNumber-1)*itemsPerPage+1;var to=from+itemsPerPage-1;this.showRecords(from,to)}
this.prev=function(){if(this.currentPage>1)
this.showPage(this.currentPage-1)}
