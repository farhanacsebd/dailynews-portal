// category section load data only
const loadAllCategory = async () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  const res = await fetch(url);
  const data = await res.json();
  displayAllCategory(data.data.news_category);
};

// category section display data only
const displayAllCategory = (datas) => {
  // console.log(datas);
  
  // display card id name
  const displayCategory = document.getElementById("displayCategory");

  // category section start
  datas.forEach((data) => {
    // console.log(data);
    const div = document.createElement("div");
    div.classList.add("nav");
    div.innerHTML = `
            <li class="nav-item">
            <button class="border-0 bg-light" onclick="loadAllNews('${data.category_id}')"> <a class="nav-link disabled" href="#">${data.category_name}</a></button>
            </li>
            `;
    displayCategory.appendChild(div);
  });
};

const loadAllNews = async (id) => {
  toggleSpinner(true)
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayAllNews(data.data);
};

const displayAllNews = (newsDatas) => {
  // console.log(newsDatas);
  const displayCards = document.getElementById("displayCards");
  displayCards.textContent = "";

  // <!-- total result count div -->
  const resultFound = document.getElementById("resultFound");
  resultFound.innerHTML = `${newsDatas.length} Items Found for Category`;
  if (newsDatas.length === 0) {
    resultFound.innerHTML = `<img class="w-100" src="https://bestmediainfo.com/uploads/2020/10/Not-a-big-deal_8.gif">`;
  }
  

// Our sorting function
  newsDatas.sort(
    (p1, p2) => 
    (p1.total_view < p2.total_view) ? 1 : (p1.total_view > p2.total_view) ? -1 : 0);
  
  
    newsDatas.forEach((newsData) => {
    // card section start
    const div = document.createElement("div");
    div.classList.add("card");
    div.classList.add("mb-5");
    div.classList.add("shadow");
    div.innerHTML = `
    <div class="row g-0">
      <div class="col-md-4">
        <img style="height: 400px; weight: 200px;" src="${newsData.image_url}"
        class="img-fluid rounded p-4" alt="...">
      </div>
      <div class="col-md-8 p-4">
        <div class="card-body">
          <h5 class="card-title">${newsData.title}</h5>
        <p class="card-text mb-5">${newsData.details.slice(0, 500)}...</p>
          <div class="d-flex mt-5"><img src="${newsData.author.img}" style="height:40px;" class="rounded-circle" alt="">
            <div class="ms-2">
              <h6 class="fw-bold">${newsData.author.name ? newsData.author.name : "Empty Name"}</h6>
            <p>${newsData.author.published_date}</p>
            </div>
            <div class="ms-3">
              <img src="/images/eye.png" alt=""><span class="fw-bold">${newsData.total_view ? newsData.total_view : "00"}</span>
            </div>
            <div class="ms-5 me-5">
              <img src="/images/review.png" alt="">
            </div>
            <div class="ms-5">
            <button onclick="detailsInfo('${
              newsData._id
            }')" type="button"  class="border border-0 bg-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src="/images/arrow.png" alt="">
</button>
            </div>
            </div>
        </div>
      </div>
    </div>
        `;
    displayCards.appendChild(div);
  });
  toggleSpinner(false)
};

// button details news secations
const detailsInfo = async (detailID) => {
  const url = `https://openapi.programming-hero.com/api/news/${detailID}`;
  const res = await fetch(url);
  const data = await res.json();
  displayDetailsInfo(data.data);
};

const displayDetailsInfo = (id) => {
  console.log(id);
  const detailInfo = document.getElementById("detailInfo");
  detailInfo.textContent = "";
  id.forEach((info) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.classList.add("border-0");
    div.innerHTML = `
  <img src="${info.image_url}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${info.title}</h5>
  <p class="card-text">${info.details.slice(0, 500)}</p>
</div>
  `;
    detailInfo.appendChild(div);
  });
};

// this is only data loading function.it all the time load the data if anyone no click anywhere then display this

const dataLoadAllTime = async() =>{
  toggleSpinner(true)
  const url = `https://openapi.programming-hero.com/api/news/category/05`;
  const res = await fetch(url);
  const data = await res.json();
  dataDisplayAllTime(data.data);
}

const dataDisplayAllTime = allDatas =>{
  // console.log(allDatas);
 
  const displayCards = document.getElementById("displayCards");
  displayCards.textContent = "";


  // <!-- total result count div -->
  const resultFound = document.getElementById("resultFound");
  resultFound.innerHTML = `${allDatas.length} Items Found for Category All News`;

  allDatas.forEach(allData => {
    
    console.log(allData);
    const div = document.createElement("div");
    div.classList.add("card");
    div.classList.add("mb-5");
    div.classList.add("shadow");
    div.innerHTML = `
    <div class="row g-0">
      <div class="col-md-4">
        <img style="height: 400px; weight: 200px;" src="${allData.image_url}"
        class="img-fluid rounded p-4" alt="...">
      </div>
      <div class="col-md-8 p-4">
        <div class="card-body">
          <h5 class="card-title">${allData.title}</h5>
        <p class="card-text mb-5">${allData.details.slice(0, 500)}</p>
          <div class="d-flex mt-5"><img src="${allData.author.img}" style="height:40px;" class="rounded-circle" alt="">
            <div class="ms-2">
              <h6 class="fw-bold">${allData.author.name?allData.author.name:'Empty Name'}</h6>
              <p>${allData.author.published_date}</p>
            </div>
            <div class="ms-3">
              <img src="/images/eye.png" alt=""><span class="fw-bold">${allData.total_view?allData.total_view:'00'}</span>
            </div>
            <div class="ms-5 me-5">
              <img src="/images/review.png" alt="">
            </div>
            <div class="ms-5">
            <button onclick="detailsInfo('${
              allData._id
            }')" type="button"  class="border border-0 bg-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src="/images/arrow.png" alt="">
</button>
            </div>
            </div>
        </div>
      </div>
    </div>
        `;
    displayCards.appendChild(div);
  });
  toggleSpinner(false)
}

const toggleSpinner = isLoading =>{
  const loadSection = document.getElementById('spinner');

  if(isLoading){
      loadSection.classList.remove('d-none')
  }
  else{
      loadSection.classList.add('d-none')
  }
}

dataLoadAllTime()
loadAllCategory();

/* ------------------------------------------------------------------- */
/* ------------------------loading js start-------------------------- */
/* -------------------------------------------------------------------- */



let loader = document.getElementById('preloader');
  window.addEventListener('load',function(){
    loader.style.display = "none";
  })




/* ------------------------------------------------------------------- */
/* ------------------------loading js End-------------------------- */
/* -------------------------------------------------------------------- */
