const loadAllCategory = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayAllCategory(data.data.news_category);
}

const displayAllCategory = datas =>{
    console.log(datas);
    const displayCategory = document.getElementById('displayCategory')

    // category section start 
    datas.forEach(data => {
        console.log(data);
        const ul = document.createElement('ul');
        ul.classList.add('nav');
        ul.innerHTML = 
        `
            <li class="nav-item">
              <a class="nav-link disabled" href="#">${data.category_name}</a>
            </li>
        `;
        displayCategory.appendChild(ul);
    });
    
}

loadAllCategory()