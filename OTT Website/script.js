window.addEventListener("scroll",function(){
    var header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY >10);
})

// function moneyheiest() {
//     document.getElementById("content").innerHTML='When the national mint and a touring school group are held hostage by robbers, police believe that the thieves have no way out. Little do they know that the thieves have a bigger plan in store.';
//     document.querySelector('#imgcontainer').style.background="url('') contain no-repeat";
//     document.querySelector('#moneyheistimg').style.border= "10px solid black";
//     let description="When the national mint and a touring school group are held hostage by robbers, police believe that the thieves have no way out. Little do they know that the thieves have a bigger plan in store.";


function moneyheiest() {
    document.getElementById("content").innerHTML='When the mint and a touring school group are held hostage by robbers, police believe that the thieves have no way out. Little do they know that the thieves have a bigger plan in store.';
    document.querySelector('#content').style.float="right";
    document.querySelector('#content').style.padding="20px";
    document.querySelector('#imgcontainer').style.background="url('https://wallpapercave.com/wp/wp8751913.jpg') center center / cover";
    document.querySelector('.moneyheistimg').style.border="2px solid black";
    document.querySelector('.moneyheistimg').style.transform="scale(1.5)";

}

function dunki() {
    document.getElementById("content").innerHTML='A group of friends set out on a perilous journey to emigrate to the United Kingdom via a clandestine route called donkey flight, risking their lives in the process.';
    document.querySelector('#content').style.float="right";
    document.querySelector('#content').style.padding="20px";
    document.querySelector('#imgcontainer').style.background="url('https://i.ytimg.com/vi/Xz8dqWohhrc/maxresdefault.jpg') center center / cover";
    document.querySelector('.moneyheistimg').style.border="2px solid black";
}

function Jawan() {
    document.getElementById("content").innerHTML='A man is driven by a personal vendetta to rectify the wrongs in society, while keeping a promise made years ago. He comes up against a monstrous outlaw with no fear, who has caused extreme suffering to many.';
    document.querySelector('#content').style.float="right";
    document.querySelector('#imgcontainer').style.background="url('images/Jawan_Background_image.jpg') center center / cover";
    document.querySelector('.moneyheistimg').style.border="2px solid black";
}

function StrangerThing() {
    document.getElementById("content").innerHTML='When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.';
    document.querySelector('#content').style.float="right";
    document.querySelector('#imgcontainer').style.background="url('images/stranger_things_Background_image.jpg') 100% 100% / 100%";
    document.querySelector('.moneyheistimg').style.border="2px solid black";
}

function GodzillaVSKong() {
    document.getElementById("content").innerHTML='King Kong is transported out of his containment zone after Godzilla resurfaces and creates mayhem. Humans need his help to reach Hollow Earth and find a way to subdue the king of the monsters.';
    document.querySelector('#content').style.float="right";
    document.querySelector('#imgcontainer').style.background="url('https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/f1c6ef16-40b2-4ef5-89ed-547decd9e620/5dea83be6452c285c4bcf58f0f1c951146040f2b.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom') center center / cover";
    document.querySelector('.moneyheistimg').style.border="2px solid black";
}

$(document).ready(function(){
    $("#watchTrailerBtn").click(function(){
        
        $(".TrailerContainer").toggle();

    });

    $(".TrailerContainerCloseBtn").click(function(){
        

        $(".TrailerContainer").toggle();
    });
});


