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
    console.log(data);
} 
loadAllNews()
loadAllCategory()