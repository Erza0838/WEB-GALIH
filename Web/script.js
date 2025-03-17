const ViewMoreArtwork1 = document.getElementById("ViewMoreArtwork1")
const ViewMoreArtwork2 = document.getElementById("ViewMoreArtwork2")
const ViewMoreArtwork3 = document.getElementById("ViewMoreArtwork3")
const ViewMoreArtwork4 = document.getElementById("ViewMoreArtwork4")

const ShowArtwork1 = document.getElementById("ArtCollectionContainer1")
const ShowArtwork2 = document.getElementById("ArtCollectionContainer2")
const ShowArtwork3 = document.getElementById("ArtCollectionContainer3")
const ShowArtwork4 = document.getElementById("ArtCollectionContainer4")

const ShowLessArtwork1 = document.getElementById("ViewLessArtwork1")  
const ShowLessArtwork2 = document.getElementById("ViewLessArtwork2")  
const ShowLessArtwork3 = document.getElementById("ViewLessArtwork3")  
const ShowLessArtwork4 = document.getElementById("ViewLessArtwork4")  

const HomePageUrl = document.getElementById("HomePageUrl")
const ProfilePageUrl = document.getElementById("ProfilePageUrl")
const currentPath = window.location.pathname
    
function SetDisplayInineBlock1() 
{
    ViewMoreArtwork1.addEventListener("click", () => 
    {
        ShowArtwork1.style.display = "inline-block"
        // ShowArtwork1.classList.add("show")
    })
}
SetDisplayInineBlock1() 

function SetDisplayNoneEsc1() 
{
    document.addEventListener("keydown", (event) => 
    {   
        if(event.key === "Escape" || event.key === "Esc")
        {
            ShowArtwork1.style.display = "none"
            // ShowArtwork1.classList.remove("show")
        }
    })
    ShowLessArtwork1.addEventListener("click", () =>
    {
        ShowArtwork1.style.display = "none"
        // ShowArtwork1.classList.remove("show")
    })
}
SetDisplayNoneEsc1()

function SetDisplayInineBlock2() 
{
    ViewMoreArtwork2.addEventListener("click", () => 
    {
        ShowArtwork2.style.display = "inline-block"
    })
}
SetDisplayInineBlock2() 

function SetDisplayInineBlockEsc2() 
{
    document.addEventListener("keydown", (event) => 
    {   
        if(event.key === "Escape" || event.key === "Esc")
        {
            ShowArtwork2.style.display = "none"
        }
    })
    ShowLessArtwork2.addEventListener("click", () =>
    {
        ShowArtwork2.style.display = "none"
    })
}
SetDisplayInineBlockEsc2()

function SetDisplayInineBlock3() 
{
    ViewMoreArtwork3.addEventListener("click", () => 
    {
        ShowArtwork3.style.display = "inline-block"
    })
}
SetDisplayInineBlock3() 

function SetDisplayInineBlockEsc3() 
{
    document.addEventListener("keydown", (event) => 
    {   
        if(event.key === "Escape" || event.key === "Esc")
        {
            ShowArtwork3.style.display = "none"
        }
    })
    ShowLessArtwork3.addEventListener("click", () =>
    {
        ShowArtwork3.style.display = "none"
    })
}
SetDisplayInineBlockEsc3()

function SetDisplayInineBlock4() 
{
    ViewMoreArtwork4.addEventListener("click", () => 
    {
        ShowArtwork4.style.display = "inline-block"
    })
}
SetDisplayInineBlock4() 

function SetDisplayInineBlockEsc4() 
{
    document.addEventListener("keydown", (event) => 
    {   
        if(event.key === "Escape" || event.key === "Esc")
        {
            ShowArtwork4.style.display = "none"
        }
    })
    ShowLessArtwork4.addEventListener("click", () =>
    {
        ShowArtwork4.style.display = "none"
    })
}
SetDisplayInineBlockEsc4()