var currentPage;
var dots = document.getElementsByClassName("dot");
var feedbacks = document.getElementsByClassName("feedback-item");
dots[1].onclick = function () {
    [...feedbacks].forEach(item => {
        item.className = "feedback-item from-1-to-2";
    });
    for (let i = 0; i <= 8; i++) {
        if (i == 4) {
            dots[i].className = "dot active";
        }
        else {
            dots[i].className = "dot"
        }
    }
    console.log(currentPage);
}
dots[2].onclick = function () {
    [...feedbacks].forEach(item => {
        item.className = "feedback-item from-1-to-3";
    });
    currentPage = 2;
    for (let i = 0; i <= 8; i++) {
        if (i == 8) {
            dots[i].className = "dot active";
        }
        else {
            dots[i].className = "dot"
        }
    }
}
dots[3].onclick = function () {
    [...feedbacks].forEach(item => {
        item.className = "feedback-item";
    });
    for (let i = 0; i <= 8; i++) {
        if (i == 0) {
            dots[i].className = "dot active";
        }
        else {
            dots[i].className = "dot"
        }
    }
}
dots[5].onclick = function () {
    [...feedbacks].forEach(item => {
        item.className = "feedback-item from-1-to-3";
    });
    for (let i = 0; i <= 8; i++) {
        if (i == 8) {
            dots[i].className = "dot active";
        }
        else {
            dots[i].className = "dot"
        }
    }
}
dots[6].onclick = function () {
    [...feedbacks].forEach(item => {
        item.className = "feedback-item";
    });
    for (let i = 0; i <= 8; i++) {
        if (i == 0) {
            dots[i].className = "dot active";
        }
        else {
            dots[i].className = "dot"
        }
    }
}
dots[7].onclick = function () {
    [...feedbacks].forEach(item => {
        item.className = "feedback-item from-1-to-2";
    });
    for (let i = 0; i <= 8; i++) {
        if (i == 4) {
            dots[i].className = "dot active";
        }
        else {
            dots[i].className = "dot"
        }
    }
}
