const loadAllCategory = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayAllCategory(data.data.news_category);
}

const displayAllCategory = datas =>{
    // console.log(datas);
    const displayCategory = document.getElementById('displayCategory')

    // category section start 
    datas.forEach(data => {
        // console.log(data);
        const div = document.createElement('div');
        div.classList.add('nav');
        div.innerHTML = 
        `
            <li class="nav-item">
             
            
            <button class="border-0 bg-light" onclick="loadAllNews('${data.category_id}')"> <a class="nav-link disabled" href="#">${data.category_name}</a></button>
            </li>
            `;
        displayCategory.appendChild(div);
    });
    
}

const loadAllNews = async id =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayAllNews(data.data);
} 


const displayAllNews = newsDatas =>{
    // console.log(newsDatas);
    const displayCards = document.getElementById('displayCards');
    displayCards.textContent = '';  

    const resultFound = document.getElementById('resultFound')
    resultFound.innerHTML =`${newsDatas.length} items found for category All News`
    newsDatas.forEach(newsData => {
        console.log(newsData);
        const div = document.createElement('div');
        div.classList.add('row');
        div.classList.add('mb-5');
        div.innerHTML = 
        `
        <div class="col-md-4">
              <img style="height: 400px; weight: 200px;" src="${newsData.image_url}" class="img-fluid  rounded-4" alt="...">
            </div>
            <div class="col-md-8 ps-4">
              <div class="card-body">
                <h5 class="card-title">${newsData.title}</h5>
                <p class="card-text mb-5">${newsData.details.slice(0,500)}</p>
                
                <div class="d-flex mt-5"><img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg" style="height:50px;" class="rounded-circle" alt="">
                <div class="ms-2">
                  <h6 class="fw-bold">${newsData.author.name}</h6>
                <p>${newsData.author.published_date.slice(0,10)}</p>
                </div>
                <div class="ms-3">
                  <img src="/images/eye.png" alt=""><span class="fw-bold">${newsData.total_view}</span>
                </div>
                <div class="ms-5 me-5">
                  <img src="/images/review.png" alt="">
                </div>
                <div class="ms-5">
                  <img src="/images/arrow.png" alt="">
                </div>
                </div>
              </div>
            </div>
        `;
        displayCards.appendChild(div)

    });
}



loadAllCategory()