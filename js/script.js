$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing",{
        strings: [
            "Lets Change-the-World instead of letting others do it for us",
            "rise up",
            "You can do anything you set your mind to doing", 
            "Success and failure are only determined by how you choose to see the result", 
            "Go Ahead Put yourself out there, you won't know the result unless you try", 
            "you are What-ever you decide to be", 
            "RISE-UP", "Be the best version of you",
            ],
        typeSpeed: 50,
        backSpeed: 20,
        loop: true
    });

    var typed = new Typed(".typing-2",{
        strings: [ "Be your own best friend, never an enemy", 
        "rise up",
        "You can do anything you set your mind to doing", "Let yourself Succeed", 
        "Go Ahead Put yourself out there,", 
        "you are What-ever you think you are", 
        "RISE-UP", "Embrace the best version of you",
        "Lets Change-the-World instead of letting others do it for us"],
        typeSpeed: 50,
        backSpeed: 20,
        loop: true
    });
}) 
// https://api.publicapis.org/entries
// https://www.boredapi.com/api/activity