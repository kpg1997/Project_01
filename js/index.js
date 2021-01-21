var slideIndex = 0; //slide index

    // HTML 로드가 끝난 후 동작
    window.onload = function () {
        showSlides(slideIndex);

        // Auto Move Slide
        var sec = 3000;
        setInterval(function () {
            slideIndex++;
            showSlides(slideIndex);

        }, sec);
    }


    // Next/previous controls
    function moveSlides(n) {
        console.log(n);
        slideIndex = slideIndex + n
        showSlides(slideIndex);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        console.log(n);
        slideIndex = n;
        
        showSlides(slideIndex);
    }

    function showSlides(n) {

        var slides = document.getElementsByClassName("index");
        var dots = document.getElementsByClassName("dot");
        var logo = document.getElementById("Indexlogo");
        console.log(dots.value);
        var size = slides.length;

        if ((n + 1) > size) {
            slideIndex = 0; n = 0;
        } else if (n < 0) {
            slideIndex = (size - 1);
            n = (size - 1);
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        logo.style.display="none"
        slides[n].style.display = "block";
        dots[n].className += " active";
    }