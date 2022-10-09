(function(){const BASE_URL='https://uelisson-bs.github.io'
const INDEX_URL=BASE_URL+'/Hanok-Project/assets/AH-List/db-list.json'
const INDEX_URL2=BASE_URL+'/Hanok-Project/assets/AH-List/Post-id/'
const POSTER_URL=''
const data=[]
const searchBtn=document.getElementById('submit-search')
const searchInput=document.getElementById('search')
const pagination=document.getElementById('pagination')
const ITEM_PER_PAGE=12
const listModel=document.getElementById("btn-listModel")
const cardModel=document.getElementById("btn-cardModel")
let isListModel=false
let page=1
const dataPanel=document.getElementById('data-panel')
axios.get(INDEX_URL).then((response)=>{data.push(...response.data.results)
console.log(data)
getTotalPages(data)
getPageData(1,data)}).catch((err)=>console.log(err))
function displayDataList(data){let htmlContent=''
if(isListModel===!1){data.forEach(function(item,index){htmlContent+=`
<div class="col-sm-3"><div class="card mb-2 size"><img class="card-img-top" src="${POSTER_URL}${item.imagem}" alt="Card image cap"><img class="lith" src="${POSTER_URL}${item.imagem2}"><div class="card-body movie-item-body "><h6 class="card-title">${item.titulo}</h5></div><div class="card-footer"><button class="btn btn-info btn-show-movie" data-toggle="modal" data-target="#show-movie-modal" data-id="${item.id}">Mais Informações</button></div></div></div>`})}else if(isListModel===!0){data.forEach(function(item,index){htmlContent+=`<div class="container"><div class="row size"><div class="col-9"><h5>${item.titulo}</h5></div><div class="col-3 card-footer"><button class="btn btn-info btn-show-movie" data-toggle="modal" data-target="#show-movie-modal" data-id="${item.id}">Mais Informação</button></div></div></div>`})}
dataPanel.innerHTML=htmlContent}
function showMovie(id){const modalTitle=document.getElementById('show-movie-title')
const modalImagem=document.getElementById('show-movie-image')
const modalDate=document.getElementById('show-movie-date')
const modalCategory=document.getElementById('show-movie-category')
const modalGenero=document.getElementById('show-movie-genero')
const modalPage=document.getElementById('show-movie-page')
const modalDescription=document.getElementById('show-movie-description')
const url=INDEX_URL2+id+'.json'
console.log(url)
axios.get(url).then(response=>{var arr=['a','b','c'];arr.push('d');console.log(arr);console.log(arr.pop());console.log(arr);const data=response.data.results
console.log(data)
modalTitle.textContent=data.titulo
modalImagem.innerHTML=`<img src="${POSTER_URL}${data.imagem}" class="img-fluid" alt="Responsive image">`
modalDate.textContent=`${data.ano}`
modalCategory.textContent=`${data.category}`
modalGenero.textContent=`${data.genero}`
modalPage.innerHTML=`${data.page}`
modalDescription.textContent=`${data.sinopse}`})}
function getTotalPages(data){let totalPages=Math.ceil(data.length/ITEM_PER_PAGE)||1
let pageItemContent=''
for(let i=0;i<totalPages;i++){pageItemContent+=`
<li class="page-item"><a class="page-link" href="javascript:;" data-page="${i + 1}">${i + 1}</a></li>`}
pagination.innerHTML=pageItemContent}
let paginationData=[]
function getPageData(pageNum,data){paginationData=data||paginationData
let offset=(pageNum-1)*ITEM_PER_PAGE
let pageData=paginationData.slice(offset,offset+ITEM_PER_PAGE)
console.log(pageData)
displayDataList(pageData)}
function addFavoriteItem(id){const list=JSON.parse(localStorage.getItem("favoriteMovies"))||[];const movie=data.find(item=>item.id===Number(id));if(list.some(item=>item.id===Number(id))){alert(`${movie.title} is already in your favorite list.`)}else{list.push(movie);alert(`Added ${movie.title} to your favorite list!`)}
localStorage.setItem("favoriteMovies",JSON.stringify(list))}
dataPanel.addEventListener('click',(event)=>{if(event.target.matches('.btn-show-movie')){showMovie(event.target.dataset.id)}else if(event.target.matches('.btn-add-favorite')){addFavoriteItem(event.target.dataset.id)}})
searchBtn.addEventListener('click',event=>{let results=[]
event.preventDefault()
const regex=new RegExp(searchInput.value,'i')
results=data.filter(movie=>movie.titulo.match(regex))
console.log(results)
getTotalPages(results)
getPageData(1,results)})
cardModel.addEventListener("click",event=>{if(event.target.matches("#btn-cardModel")){listModel.classList.remove('hover-color-change')
cardModel.classList.add('hover-color-change')
isListModel=!1
getPageData(page)}})
listModel.addEventListener("click",event=>{if(event.target.matches("#btn-listModel")){cardModel.classList.remove('hover-color-change')
listModel.classList.add('hover-color-change')
isListModel=!0
getPageData(page)}})
pagination.addEventListener('click',event=>{console.log(event.target.dataset.page)
page=event.target.dataset.page
if(event.target.tagName==='A'){getPageData(event.target.dataset.page)}})})()
