$(document).ready(function() {
    const img = $(".x-obecnosc img").attr("src")
    
    $(".x-nieobecnosc-nieuspr img").attr("src", img)
    $("div").removeClass("x-nieobecnosc-nieuspr")
})