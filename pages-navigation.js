var urls = [
    {
        id: 'ritos',
        titulo: 'Ritos Javalis',
        tribo: 'javalis',
        url: "subpages/ritos.html",
        show: true
    },
    {
        id: 'gestao',
        titulo: 'Gestão À Vista - Javalis',
        tribo: 'javalis',
        url: "subpages/gestao-a-vista.html",
        show: true
    },
    {
        id: 'eventos',
        titulo: 'Eventos Javalis',
        tribo: 'javalis',
        url: "subpages/eventos.html",
        show: true
    },
    {
        id: 'aniversarios',
        titulo: 'Aniversários Javalis',
        tribo: 'javalis',
        url: "subpages/aniversarios.html",
        show: true
    },
];

var i = 0,
    currentTribo = "";

function redirect_url() {      
    var footers = document.getElementsByClassName("footer-section");
    for(footer of footers) {
        footer.classList.remove("active");
    }

    var footers = document.getElementsByClassName("footer-section fadeinRight");
    for(footer of footers) {
        footer.classList.remove("fadeinRight");
        footer.classList.add("fadeoutRight");
    }

    var footerSection = document.getElementById("footer-" + urls[i].id); 
        footerSection.classList.add("fadeinRight");
        footerSection.classList.add("active");

    if(urls[i].show) {
        var frameElement = document.getElementById("frame");
        frameElement.src = urls[i].url;
        frameElement.contentWindow.location.href = frameElement.src;
        setTimeout(function () {
            i = (i + 1) % urls.length;
            redirect_url();
        }, 30 * 1000);
    } 
    else {
        setTimeout(function () {
            i = (i + 1) % urls.length;
            redirect_url();
        }, 30 * 10);
    }
}