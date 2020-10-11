console.log('Starting up');
'use strict';


var gProjs = [{
        id: '0',
        name: 'minesweeper',
        title: 'minesweeper game',
        desc: 'this is minesweeper game, 3 levels - on each level........',
        url: "img/portfolio/10-full.jpg",
        publishedAt: getTime(),
        labels: ['matrix', 'logic'],
        projGitHubLink: "https://yotam920.github.io/Mine-sweeper-/"
    },
    {
        id: '1',
        name: 'chess',
        title: 'chess game',
        desc: 'this is chess game for tow ',
        url: "img/portfolio/07-full.jpg",
        publishedAt: getTime(),
        labels: ['matrix', 'logic'],
        projGitHubLink: "https://yotam920.github.io/chess-game/"
    }, {
        id: '2',
        name: 'bookShop',
        title: 'book shop',
        desc: 'this is an online book-shop ',
        url: "img/portfolio/09-full.jpg",
        publishedAt: getTime(),
        labels: ['matrix', 'logic'],
        projGitHubLink: "https://yotam920.github.io/Mine-sweeper-/"
    }
];





function randerProjs() {
    var strHTML = gProjs.map(function(proj) {
        return `<div onclick="randerModal('${proj.id}')" class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
        <div class="portfolio-hover">
        <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
        </div>
        </div>
        <img class="img-fluid" src=${proj.url} >
        </a>
        <div class="portfolio-caption">
        <h4>${proj.name}</h4>
        <p class="text-muted">${proj.title}</p>
        </div>
       </div>
       `
    })
    document.querySelector('.projects-container').innerHTML = strHTML.join('');
}



function randerModal(projId) {
    //console.log('projID:', projId);
    var proj = gProjs[projId];
    console.log('obj:', proj);
    var strHTML =
        `<h2>${proj.name}</h2>
    <p class="item-intro text-muted">${proj.title}</p>
    <img class="img-fluid d-block mx-auto" src=${proj.url} alt="">
    <p>${proj.desc}</p>
    <ul class="list-inline">
        <li>Date: ${proj.publishedAt}</li>
        <li>Client: slef-learning</li>
        <li>Category: Illustration</li>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
    <i class="fa fa-times"></i>
    Close Project</button>
    <ul class="list-inline social-buttons">
    <li class="list-inline-item">
    <a href=${proj.projGitHubLink}>
        <i class="fa fa-github"></i>
    </a> </li> </ul>`;
    document.querySelector('.modal-container').innerHTML = strHTML;
}


function renderSendBtn() {
    var strHtml = `<button class="btn btn-sendMsg" onclick="onSendMsg()">Send</button></a>`;
    $('.send-btn').html(strHtml);
}

function onSendMsg() {
    var email = $('.email-adress').val();
    var subject = $('.subject-msg').val();
    var bodyMsg = $('.bodyMsg').val();
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=yotam.barakk@gmail.com&su=${subject}&body=${bodyMsg}from${email}`);
}