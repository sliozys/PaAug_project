 //produktu atvaizdavims
//  products.map((products)=> {
//   document.querySelector("#portfolioGrid").innerHTML += `
//     <div class="col-md-6 col-lg-4 mb-5">
//       <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal${products.id}">
//           <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
//               <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
//           </div>
//           <img class="img-fluid" src="${products.image}" alt="" />
//       </div>
//     </div>`;
//  });   

  // produktu popups and add to cart
  // issimta is products.title id="portfolioModal${products.id}Label"
  // products.map((products)=> {
  //   document.querySelector("#portfolioPopUp").innerHTML += `
    // <div class="portfolio-modal modal fade" id="portfolioModal${products.id}" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
    //   <div class="modal-dialog modal-xl" role="document">
    //       <div class="modal-content">
    //           <button class="close" type="button" data-dismiss="modal" aria-label="Close">
    //               <span aria-hidden="true"><i class="fas fa-times"></i></span>
    //           </button>
    //             <div class="modal-body text-center">
    //                 <div class="container">
    //                     <div class="row justify-content-center">
    //                         <div class="col-lg-8">
    //                             <!-- Portfolio Modal - Title-->
    //                             <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0 pavadinims" >${products.title}</h2>
    //                             <!-- Icon Divider-->
    //                             <div class="divider-custom">
    //                                 <div class="divider-custom-line"></div>
    //                                 <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
    //                                 <div class="divider-custom-line"></div>
    //                             </div>
    //                             <!-- Portfolio Modal - Image-->
    //                             <img  class="img-fluid rounded mb-5 nuotrauka" src="${products.image}" alt="" />
    //                             <!-- Portfolio Modal - Text-->
    //                             <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
    //                             <!-- <button class="btn btn-primary" data-dismiss="modal">
    //                                 <i class="fas fa-times fa-fw"></i>
    //                                 Close Window
    //                             </button> -->
    //                             <p class="h2 text-secondary kaina" >${products.price}<i class="fas fa-euro-sign"></i></p>
    //                             <button class="btn-lg btn-outline-info btn-block addToCardededed"> 
    //                                 <i class="h3">
    //                                     Add to Cart  
    //                                 </i>
    //                                   <i class="fa fa-shopping-basket fa-2x" aria-hidden="true">
    //                                 </i>
    //                             </button>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  //     `
  //  }); 



//    //DEDAM DIDIJI GRIDA I MAZAJI
//  products.map((products)=> {
//   document.querySelector("#portfolioGrid").innerHTML += `
//   <div class="col-4">
//   <div class="modal-body text-center">
//   <div class="container">
//       <div class="row justify-content-center">
//           <div class="col-lg-8">
//               <!-- Portfolio Modal - Title-->
//               <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0 pavadinims" >${products.title}</h2>
//               <!-- Icon Divider-->
//               <div class="divider-custom">
//                   <div class="divider-custom-line"></div>
//                   <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
//                   <div class="divider-custom-line"></div>
//               </div>
//               <!-- Portfolio Modal - Image-->
//               <img  class="img-fluid rounded mb-5 nuotrauka" src="${products.image}" alt="" />
//               <!-- Portfolio Modal - Text-->
//               <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
//               <p class="h2 text-secondary kaina" >${products.price}<i class="fas fa-euro-sign"></i></p>
//               <button class="btn-lg btn-outline-info btn-block addToCardededed"> 
//                   <i class="h3">
//                       Add to Cart  
//                   </i>
//                     <i class="fa fa-shopping-basket fa-2x" aria-hidden="true">
//                   </i>
//               </button>
//           </div>
//       </div>
//   </div>
// </div>
//   </div>
//   `;
//  });   

console.log('kazkas')




PRADINIS PRODUKTU GRIDS 
products.map((products)=> {
  document.querySelector("#portfolioGrid").innerHTML += `
     <div class="modal-content col-4">
           <div class="modal-body text-center">
               <div class="container">
                   <div class="row justify-content-center">
                       <div class="col-lg-12">
                           <!-- Portfolio Modal - Title-->
                           <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0 pavadinims" >${products.title}</h2>
                           <!-- Icon Divider-->
                           <div class="divider-custom">
                               <div class="divider-custom-line"></div>
                               <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                               <div class="divider-custom-line"></div>
                           </div>
                           <!-- Portfolio Modal - Image-->
                           <img  class="img-fluid rounded mb-5 nuotrauka" src="${products.image}" alt="" />
                           <!-- Portfolio Modal - Text-->
                           <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                           <!-- <button class="btn btn-primary" data-dismiss="modal">
                               <i class="fas fa-times fa-fw"></i>
                               Close Window
                           </button> -->
                           <p class="h2 text-secondary kaina" >${products.price}<i class="fas fa-euro-sign"></i></p>
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




// onchange=""