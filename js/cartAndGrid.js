//Product array list

let products = [
    {
      id: 1,
      title: "smyglius",
      image: "assets/img/callers/caller1.jpg",
      price: 16.91,
    },
    {
      id: 2,
      title: "orbita",
      image: "assets/img/callers/caller2.jpg",
      price: 19.99,
    },
    {
      id: 3,
      title: "mielynkis",
      image: "assets/img/callers/caller3.jpg",
      price: 250.69,
    },  
    {
      id: 4,
      title: "Grifų gniūžtis",
      image: "assets/img/callers/caller4.jpg",
      price: 69.42,
    },
    {
      id: 5,
      title: "Buks",
      image: "assets/img/callers/caller5.jpg",
      price: 33.33,
    },
    {
      id: 6,
      title: "Žalia",
      image: "assets/img/callers/caller6.jpg",
      price: 100.01,
    },   
    ];

    for(var i = 0; i<products.length; i++) {
        document.querySelector("#portfolioGrid").innerHTML += `
        <div class="modal-content col-4">
              <div class="modal-body text-center">
                  <div class="container">
                      <div class="row justify-content-center">
                          <div class="col-lg-12">
                              <!-- Portfolio Modal - Title-->
                              <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0 pavadinims" >${products[i].title}</h2>
                              <!-- Icon Divider-->
                              <div class="divider-custom">
                                  <div class="divider-custom-line"></div>
                                  <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                  <div class="divider-custom-line"></div>
                              </div>
                              <!-- Portfolio Modal - Image-->
                              <img  class="img-fluid rounded mb-5 nuotrauka" src="${products[i].image}" alt="" />
                              <!-- Portfolio Modal - Text-->
                              <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae?</p>
                              <p class="h2 text-secondary kaina" >${products[i].price}<i class="fas fa-euro-sign"></i></p>
                              <button class="btn-sm btn-outline-info btn-block" onclick="addToCardededed(${products[i].id})"> 
                                  <i class="h3">
                                      Add to Cart  
                                  </i>
                                    <i class="https://github.com/sliozys/PaAug_project.git" aria-hidden="true">
                                  </i>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
     `; 
    }


    // GHETO FILTER
    function filtras1() {
        console.log("1");
        let productsByPriceAsc = [
          {
            id: 1,
            title: "smyglius",
            image: "assets/img/callers/caller1.jpg",
            price: 16.91,
          },
          {
            id: 2,
            title: "orbita",
            image: "assets/img/callers/caller2.jpg",
            price: 19.99,
          },
          {
            id: 5,
            title: "Buks",
            image: "assets/img/callers/caller5.jpg",
            price: 33.33,
          },
          {
            id: 4,
            title: "Grifų gniūžtis",
            image: "assets/img/callers/caller4.jpg",
            price: 69.42,
          },
          {
            id: 6,
            title: "Žalia",
            image: "assets/img/callers/caller6.jpg",
            price: 100.01,
          }, 
          {
            id: 3,
            title: "mielynkis",
            image: "assets/img/callers/caller3.jpg",
            price: 250.69,
          },  
          ];
          document.querySelector("#portfolioGrid").innerHTML = ``;
          productsByPriceAsc.forEach(element => {
      
          document.querySelector("#portfolioGrid").innerHTML += `
          <div class="modal-content col-4">
                <div class="modal-body text-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-12">
                                <!-- Portfolio Modal - Title-->
                                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0 pavadinims" >${element.title}</h2>
                                <!-- Icon Divider-->
                                <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                    <div class="divider-custom-line"></div>
                                </div>
                                <!-- Portfolio Modal - Image-->
                                <img  class="img-fluid rounded mb-5 nuotrauka" src="${element.image}" alt="" />
                                <!-- Portfolio Modal - Text-->
                                <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                <!-- <button class="btn btn-primary" data-dismiss="modal">
                                    <i class="fas fa-times fa-fw"></i>
                                    Close Window
                                </button> -->
                                <p class="h2 text-secondary kaina" >${element.price}<i class="fas fa-euro-sign"></i></p>
                                <button class="btn-sm btn-outline-info btn-block addToCardededed"> 
                                    <i class="h3">
                                        Add to Cart  
                                    </i>
                                      <i class="https://github.com/sliozys/PaAug_project.git" aria-hidden="true">
                                    </i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       `;
        });
      }
      function filtras2() {
        console.log("2");
        let productsByPriceDesc = [
          {
            id: 3,
            title: "mielynkis",
            image: "assets/img/callers/caller3.jpg",
            price: 250.69,
          },
          {
            id: 6,
            title: "Žalia",
            image: "assets/img/callers/caller6.jpg",
            price: 100.01,
          }, 
          {
            id: 4,
            title: "Grifų gniūžtis",
            image: "assets/img/callers/caller4.jpg",
            price: 69.42,
          },
          {
            id: 5,
            title: "Buks",
            image: "assets/img/callers/caller5.jpg",
            price: 33.33,
          },
          {
            id: 2,
            title: "orbita",
            image: "assets/img/callers/caller2.jpg",
            price: 19.99,
          },
          {
            id: 1,
            title: "smyglius",
            image: "assets/img/callers/caller1.jpg",
            price: 16.91,
          },
          ];
          document.querySelector("#portfolioGrid").innerHTML = ``;
          productsByPriceDesc.forEach(element => {
        
          document.querySelector("#portfolioGrid").innerHTML += `
          <div class="modal-content col-4">
                <div class="modal-body text-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-12">
                                <!-- Portfolio Modal - Title-->
                                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0 pavadinims" >${element.title}</h2>
                                <!-- Icon Divider-->
                                <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                    <div class="divider-custom-line"></div>
                                </div>
                                <!-- Portfolio Modal - Image-->
                                <img  class="img-fluid rounded mb-5 nuotrauka" src="${element.image}" alt="" />
                                <!-- Portfolio Modal - Text-->
                                <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                <!-- <button class="btn btn-primary" data-dismiss="modal">
                                    <i class="fas fa-times fa-fw"></i>
                                    Close Window
                                </button> -->
                                <p class="h2 text-secondary kaina" >${element.price}<i class="fas fa-euro-sign"></i></p>
                                <button class="btn-sm btn-outline-info btn-block addToCardededed"> 
                                    <i class="h3">
                                        Add to Cart  
                                    </i>
                                      <i class="https://github.com/sliozys/PaAug_project.git" aria-hidden="true">
                                    </i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       `;
        });
      }
      function filtras3() {
        console.log("2");
        let productsByName = [
          {
            id: 5,
            title: "Buks",
            image: "assets/img/callers/caller5.jpg",
            price: 33.33,
          },
          {
            id: 4,
            title: "Grifų gniūžtis",
            image: "assets/img/callers/caller4.jpg",
            price: 69.42,
          },
          {
            id: 3,
            title: "mielynkis",
            image: "assets/img/callers/caller3.jpg",
            price: 250.69,
          },
          {
            id: 2,
            title: "orbita",
            image: "assets/img/callers/caller2.jpg",
            price: 19.99,
          },
          {
            id: 1,
            title: "smyglius",
            image: "assets/img/callers/caller1.jpg",
            price: 16.91,
          },
          {
            id: 6,
            title: "Žalia",
            image: "assets/img/callers/caller6.jpg",
            price: 100.01,
          }, 
      
          ];
      
          document.querySelector("#portfolioGrid").innerHTML = ``;
          productsByName.forEach(element => {
        
          document.querySelector("#portfolioGrid").innerHTML += `
          <div class="modal-content col-4">
                <div class="modal-body text-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-12">
                                <!-- Portfolio Modal - Title-->
                                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0 pavadinims" >${element.title}</h2>
                                <!-- Icon Divider-->
                                <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                    <div class="divider-custom-line"></div>
                                </div>
                                <!-- Portfolio Modal - Image-->
                                <img  class="img-fluid rounded mb-5 nuotrauka" src="${element.image}" alt="" />
                                <!-- Portfolio Modal - Text-->
                                <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                <!-- <button class="btn btn-primary" data-dismiss="modal">
                                    <i class="fas fa-times fa-fw"></i>
                                    Close Window
                                </button> -->
                                <p class="h2 text-secondary kaina" >${element.price}<i class="fas fa-euro-sign"></i></p>
                                <button class="btn-sm btn-outline-info btn-block addToCardededed"> 
                                    <i class="h3">
                                        Add to Cart  
                                    </i>
                                      <i class="https://github.com/sliozys/PaAug_project.git" aria-hidden="true">
                                    </i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       `;
        });
      }


// KREPŠELIS
var krepselisAntkakliams = new Array();
localStorage.setItem("krepselisAntkakliams",JSON.stringify(krepselisAntkakliams));
console.log(localStorage.getItem("krepselisAntkakliams"));

function addToCardededed(id){
    var index = products.map( el => el.id ).indexOf(id);

    //add to krepselisAntkakliams
    var tempObject =      
    {
    id: products[index].id,
    title: products[index].title,
    image: products[index].image,
    price: products[index].price,
    };
    var temp = [];
    console.log(tempObject);
    temp = localStorage.getItem("krepselisAntkakliams");
    temp.push(tempObject);
    // localStorage.setItem('krepselisAntkakliams',JSON.stringify(tempObject));
    localStorage.setItem("krepselisAntkakliams",JSON.stringify(temp));
  console.log(localStorage.getItem("krepselisAntkakliams"));
  console.log(localStorage.getItem("krepselisAntkakliams").length);
    //UPDATE CART COUNT
    updateCartCounter();

}

    //UPDATE CART COUNT
   function updateCartCounter(){
    
      var cart =  document.getElementById("cart");
      if(true){
          cart.innerHTML = `Cart`;
      } else {
        cart.innerHTML = `Cart(` + localStorage.getItem(krepselisAntkakliams).length + `)`;
      }
   }