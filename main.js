var currentPage = 1;
var dots = document.getElementsByClassName("dot");
var feedbacks = document.getElementsByClassName("feedback-item");
dots[1].onclick = function () {
    [...feedbacks].forEach(item => {
        item.className = "feedback-item from-1-to-2";
    });
    currentPage = 2;
}
dots[2].onclick = function () {
    [...feedbacks].forEach(item => {
        item.className = "feedback-item from-1-to-3";
    });
    currentPage = 3;
}
dots[3].onclick = function () {
    [...feedbacks].forEach(item => {
        item.className = "feedback-item";
    });
}
dots[5].onclick = function () {
    [...feedbacks].forEach(item => {
        item.className = "feedback-item from-1-to-3";
    });
}
dots[6].onclick = function () {
    [...feedbacks].forEach(item => {
        item.className = "feedback-item";
    });
}
dots[7].onclick = function () {
    [...feedbacks].forEach(item => {
        item.className = "feedback-item from-1-to-2";
    });
}