function opener(){
    document.getElementsByClassName("nav-list")[0].style.display = "block" ;
}

function closer(){
    document.getElementsByClassName("nav-list")[0].style.display = "none" ;
}

window.addEventListener("resize",()=>{
    if(window.screen.width>970)
    {
        document.getElementsByClassName("nav-list")[0].style.display = "flex" ;
    }

    else
        {
            document.getElementsByClassName("nav-list")[0].style.display = "none" ;
        }
})

document.getElementsByClassName("icon-container")[0].addEventListener("mouseover",()=>{
    console.log("hovered");

    document.getElementsByClassName("long-arrow")[0].style.display = "inline-block";
    document.getElementsByClassName("shot-arrow")[0].style.display = "none";
});


document.getElementsByClassName("icon-container")[0].addEventListener("mouseout",()=>{
    console.log("out");

    document.getElementsByClassName("long-arrow")[0].style.display = "none";
    document.getElementsByClassName("shot-arrow")[0].style.display = "inline-block";
});

document.getElementsByClassName("icon-contain")[0].addEventListener("mouseover",()=>{
    console.log("hovered");

    document.getElementsByClassName("long-arrow-1")[0].style.display = "inline-block";
    document.getElementsByClassName("shot-arrow-1")[0].style.display = "none";
});


document.getElementsByClassName("icon-contain")[0].addEventListener("mouseout",()=>{
    console.log("out");

    document.getElementsByClassName("long-arrow-1")[0].style.display = "none";
    document.getElementsByClassName("shot-arrow-1")[0].style.display = "inline-block";
});
