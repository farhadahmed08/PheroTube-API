const handleTube = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json();
    const phTube = data.data;
    // console.log(phTube)
    const catagoryContainer = document.getElementById('catagory-container');
    phTube.forEach(catagory => {
        // console.log(catagory)
        const div = document.createElement('div')
        div.innerHTML = `<button onclick="handleLoadData('${catagory.category_id}')" class="btn btn-active">${catagory.category }</button>
        `
        // console.log(catagory)
        catagoryContainer.appendChild(div)
    });

    
}

const handleLoadData = async (categoryId) => {
    // console.log (categoryId);
    const res = await fetch (`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await res.json();
    const singleCard = data.data;
    console.log(singleCard)

   
    

    const cardContainer = document.getElementById('card-container')
     cardContainer.innerText = ''
    
     singleCard.forEach(element => {
        // console.log(element)
        const div = document.createElement('div')
        div.innerHTML =`
        <div class="card bg-base-100 shadow-xl">
        <figure class="relative">
          <img class="w-80 h-48 "
            src=${element?.thumbnail}
            alt="thumbnail"
          />
          <div class="absolute h-8 w-2/5  right-12 bottom-2 bg-black rounded-md"><p class="text-white text-center"><small>${element.others.posted_date}</small></p></div>
        </figure>
        <div class="card-body">
         
          <div class="card-footer flex justify-between mt-8">
            <div class="flex gap-2">
              <div>
                <div class="avatar online">
                  <div class="w-14 rounded-full ">
                    <img
                    src=${element?.authors[0].profile_picture}
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 class="card-title">${element.title} </h2>
                <div class="flex gap-2 items-center">
                    <h6>${element?.authors[0].profile_name} </h6>
                <p> ${element?.authors[0]?.verified ?'<img src="fi_10629607.svg" alt="" srcset="">' : "nai" } </p>
                </div>
                <small>${element.others.views} views</small>
              </div>
            </div>
             </div>
          </div>
        </div>
      </div>
        `
        
        cardContainer.appendChild(div)
       
    });
    
}

const handleBlog = ()=>{
    window.open('http://127.0.0.1:5500/blog.html')
}

handleTube();

handleLoadData('1000');

