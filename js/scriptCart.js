// ---------------------------------------------------------------
// BOOKSTORE section
// ---------------------------------------------------------------

// ---------------------------------------------------------------
// Filter books in bookstore by region 
// ---------------------------------------------------------------

// (function () {

    var bookList = document.getElementsByClassName("card");

    var btnFilterAll = document.getElementById("filter-all");
    var btnFilterAsia = document.getElementById("filter-asia");
    var btnFilterAmerica = document.getElementById("filter-america");
    var btnFiltelEurope = document.getElementById("filter-europe");

    btnFilterAll.addEventListener("click", filterAll);
    btnFilterAsia.addEventListener("click", filterAsia);
    btnFilterAmerica.addEventListener("click", filterAmerica);
    btnFiltelEurope.addEventListener("click", filterEurope);

    function filterAll() {
        for (i = 0; i < bookList.length; i++) {
            bookList.item(i).classList.remove("d-none");
        }
    }

    function filterAsia() {
        filterAll();
        for (i = 0; i < bookList.length; i++) {
            if (!bookList.item(i).classList.contains("asia")) {
                bookList.item(i).classList.add("d-none");
            }
        }
    }

    function filterAmerica() {
        filterAll();
        for (i = 0; i < bookList.length; i++) {
            if (!bookList.item(i).classList.contains("america")) {
                bookList.item(i).classList.add("d-none");
            }
        }
    }

    function filterEurope() {
        filterAll();
        for (i = 0; i < bookList.length; i++) {
            if (!bookList.item(i).classList.contains("europe")) {
                bookList.item(i).classList.add("d-none");
            }
        }
    }

    // ---------------------------------------------------------------
    // Select Books and add to Cart
    // ---------------------------------------------------------------

    var cart = document.getElementById("cart");
    cart.addEventListener("click", drawCart);


// PAKOREGUOTA
    // Array for Books in Cart, stored in Local Storage
    var bookCart = initiateBookCart();

    function initiateBookCart() {
        if ("cart" in localStorage) {
            return bookCart = JSON.parse(localStorage.getItem("cart"));
        } else {
            return bookCart = [];
        }
    };

//PAKOREGUOTA -> addToCart KOREGUOT
    //  PAKEISTA PIRMOS EILUTĖS SELECTORIUS I PAAUG ADDTOCART MYGTUKO var btnAddToChartList = document.querySelectorAll(".card .btn-outline-info");
    // var btnAddToChartList = document.querySelectorAll(".addToCardededed");
    // btnAddToChartList.forEach(function (button) {
        
    //     button.addEventListener("click", function() {console.log('clicked')});
    //     // button.addEventListener("click", addToCart);
    // });

    var addinamToCartButton = document.getElementsByClassName('addToCardededed')
    for(var i = 0; i < addinamToCartButton.length; i++) {
      var button = addinamToCartButton[i]
      console.log('hytdj')
      button.addEventListener('click', function() {
        console.log('clicked')
      })
    }


// CIA TVARKOM
    // ADD TO CART
    // selectedBookName: active.parentElement.previousElementSibling.firstElementChild.textContent,
    // selectedBookImage: active.parentElement.previousElementSibling.previousElementSibling.getAttribute("src"),
    // selectedBookPrice: active.previousElementSibling.textContent.split(" ")[0]

    function addToCart() {
    
        var active = document.activeElement;
        var selectedBook = {
            selectedBookName: active.parentElement.firstChild.textContent,
            selectedBookImage: active.parentElement.childElementCount.getAttribute("src"),
            selectedBookPrice: active.querySelector(".kaina").textContent
        }
        bookCart.push(selectedBook);

        localStorage.setItem("cart", JSON.stringify(bookCart));
//KOREGUOT
        updateCartStatus();
//KOREGUOT
        showAddConfirmation();
    }



    function showAddConfirmation() {

        $("#snackbar").addClass("show");

        // After 2.5 seconds, remove the show class from DIV
        setTimeout(function () {
            $("#snackbar").removeClass("show");
        }, 2500);
    }

    function drawCart() {

        var cartIsEmptyMessage = document.querySelector("#cart-modal .modal-body p");
        $("#cart-table-body").empty();

        if ("cart" in localStorage) {
            if (JSON.parse(localStorage.getItem("cart")).length > 0) {
                cartIsEmptyMessage.classList.add("d-none"); // Hide message that cart is empty
                $("#btn-checkout").removeClass("disabled"); // Activate Checkout button
                $("#cart-table").removeClass("d-none"); // Show cart table

                // Iteration below draws all books from local storage into the table rows
                for (var i = 0; i < JSON.parse(localStorage.getItem("cart")).length; i++) {

                    var bookRow = $('<tr class="row"></tr>');
                    $("#cart-table-body").append(bookRow);

                    var bookImage = $('<td class="col"></td>');
                    var image = $("<img/>", {
                        "class": "w-75 my-auto",
                        src: (JSON.parse(localStorage.getItem("cart"))[i].selectedBookImage),
                        alt: "image-" + (JSON.parse(localStorage.getItem("cart"))[i].selectedBookName)
                    });
                    bookImage.append(image);

                    var bookName = $('<td class="col my-auto"></td>').text(JSON.parse(localStorage.getItem("cart"))[i].selectedBookName);
                    var bookPrice = $('<td class="col my-auto"></td>').text(JSON.parse(localStorage.getItem("cart"))[i].selectedBookPrice);
                    var bookRemove = $('<td class="col my-auto"><button class="btn btn-danger" name="remove-book">X</button></td>');

                    bookRow.append(bookImage, bookName, bookPrice, bookRemove);
                }

                // Creating EventListeners for remove buttons:
                var btnRemoveBookList = document.getElementsByName("remove-book");
                btnRemoveBookList.forEach(function (button) {
                    button.addEventListener("click", removeBook);
                });
            }
        } else {
            cartIsEmptyMessage.classList.remove("d-none"); // Show message that cart is empty if it is
            $("#cart-table").addClass("d-none"); // Do not show cart table if cart is empty
            $("#btn-checkout").addClass("disabled"); // Disabling to open Checkout if cart is empty
        }

        $("#btn-empty-cart").click(removeAllBooks);
    }

    // ---------------------------------------------------------------
    // Append Cart
    // ---------------------------------------------------------------

    function removeAllBooks() {
        localStorage.clear();
        bookCart = [];
        updateCartStatus();
    }

    function removeBook() {
        var removeBookNo = $(document.activeElement.parentElement.parentElement).prevAll().length;
        bookCart.splice(removeBookNo, 1); // Remove book from bookCart at specified index in the Array

        if (bookCart.length === 0) {
            removeAllBooks();
        } else {
            localStorage.setItem("cart", JSON.stringify(bookCart));
        }
        updateCartStatus();

        drawCart();
    }




    // ---------------------------------------------------------------
    // UPPER NAVIGATION section
    // ---------------------------------------------------------------

    // ---------------------------------------------------------------
    // Update number of books in cart
    // ---------------------------------------------------------------

    function updateCartStatus() {

        if ("cart" in localStorage) {
            if (JSON.parse(localStorage.getItem("cart")).length > 0) {
                cart.textContent = `Cart (${JSON.parse(localStorage.getItem("cart")).length})`;
                cart.classList.remove("btn-outline-info");
                cart.classList.add("btn-info")
            }
        } else {
            cart.textContent = "Cart";
            cart.classList.remove("btn-info");
            cart.classList.add("btn-outline-info")
        }
    }

    updateCartStatus();

// })();
