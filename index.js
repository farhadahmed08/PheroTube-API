const handleTube = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json();
    const phTube = data.data;
    // console.log(phTube)
    const catagoryContainer = document.getElementById('catagory-container');
    phTube.forEach(catagory => {
        // console.log(catagory)
        const div = document.createElement('div')
        div.innerHTML = `<button onclick="handleLoadData('${catagory.category_id}')" class="btn btn-active">${catagory.category}</button>
        `
        catagoryContainer.appendChild(div)
    });

    
}

const handleLoadData = async (categoryId) => {
    // console.log (categoryId);
    const res = await fetch (`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await res.json();
    const singleCard = data.data;
    // console.log(singleCard)
    const cardContainer = document.getElementById('card-container')
     cardContainer.innerText = ''
    
     singleCard.forEach(element => {
        console.log(element)
        const div = document.createElement('div')
        div.innerHTML =`
        <div class="card bg-base-100 shadow-xl">
        <figure>
          <img
            src=${element?.thumbnail}
            alt="thumbnail"
          />
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
                <p><img src="fi_10629607.svg" alt="" srcset=""></p>
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

handleTube();

handleLoadData('1000');