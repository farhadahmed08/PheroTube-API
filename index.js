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
    console.log(singleCard)
    const cardContainer = document.getElementById('card-container')
     cardContainer.innerText = ''
    
     singleCard.forEach(element => {
        console.log(element)
        const div = document.createElement('div')
        div.innerHTML =`
        <div class="card bg-base-100 shadow-xl">
        <figure>
          <img
            src=${element.thumbnail}
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
         
          <div class="card-footer flex justify-between mt-8">
            <div class="flex gap-2">
              <div>
                <div class="avatar online">
                  <div class="w-14 rounded-full ">
                    <img
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 class="card-title">Biden Pledges Nearly $3 To Ukraine </h2>
                <div class="flex gap-2 items-center">
                    <h6>Jimmy Dane </h6>
                <p><img src="fi_10629607.svg" alt="" srcset=""></p>
                </div>
                <small>91K views</small>
              </div>
            </div>
            <div class="card-detaild-btn">
              
            </div>
          </div>
        </div>
      </div>
        `
        
        cardContainer.appendChild(div)
       
    });
    
}

handleTube()