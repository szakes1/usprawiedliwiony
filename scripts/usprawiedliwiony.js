$(document).ready(function() {
    const img = $(".x-obecnosc img").attr("src")
    
    $(".x-nieobecnosc-nieuspr img").attr("src", img)
    $(".x-nieobecnosc-nieuspr").addClass("x-obecnosc")
    $(".x-nieobecnosc-nieuspr").removeClass("x-nieobecnosc-nieuspr")
})