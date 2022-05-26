let ship = document.getElementById('shipId');
let workBtn = document.getElementById('workBtnId');
let aboutBtn = document.getElementById('aboutBtnId');
let wipLogo = document.getElementById('wipLogoId');
let ekaLogo = document.getElementById('ekaLogoId');
let wip = document.getElementById('wip');
let eka = document.getElementById('eka');
let workInfoDiv = document.getElementById('workInfoId');
let aboutInfoDiv = document.getElementById('aboutInfoId');
let pageImg = document.getElementsByClassName('page');
console.log(pageImg);

function makeShipDisappear(isVisible) {
    if (isVisible)
        ship.style = 'display: block';
    else
        ship.style = 'display:none';
}

workBtn.addEventListener('click', function () {
    pageImg[0].style.backgroundImage = '';
    workBtn.disabled = true;
    aboutBtn.disabled = true;
    workInfoDiv.style = 'display: block';
    makeShipDisappear(true);
    let work = document.getElementsByClassName('commonProfile');
    work[0].style = 'display: block';
    work[1].style = 'display: block';
    work[2].style = 'display: block';
    setTimeout(() => {
        makeShipDisappear(false);
        workBtn.disabled = false;
        aboutBtn.disabled = false;
    }, 3000);
    wip.style = 'display: block';
    aboutInfoDiv.style = 'display: none';
})

aboutBtn.addEventListener('click', function () {
    workInfoDiv.style = 'display: none';
    aboutInfoDiv.style = 'display: block';
    workBtn.disabled = true;
    aboutBtn.disabled = true;
    makeShipDisappear(true);
    let about = document.getElementsByClassName('aboutCommonProfile');
    about[0].style = 'display: block';
    about[1].style = 'display: block';
    setTimeout(() => {
        makeShipDisappear(false);
        workBtn.disabled = false;
        aboutBtn.disabled = false;
    }, 3000);
})

wipLogo.addEventListener('click', function(){
    wip.style = 'display: block';
    eka.style = 'display: none';
})

ekaLogo.addEventListener('click', function(){
    wip.style = 'display: none';
    eka.style = 'display: block';
})



