/**
 * Created by shanxiaoping on 17/1/7.
 */
function homePage() {
    selectMenu(0)
    $("#menu_content").attr("src","homepage/home_page.html");
}
function diary() {
    selectMenu(1)
    $("#menu_content").attr("src","diary/diary_list.html");
}
function shuoshuo() {
    selectMenu(2)
    $("#menu_content").attr("src","shuoshuo/shuoshuo.html");
}
function ablum() {
    selectMenu(3)
    $("#menu_content").attr("src","ablum/ablum.html");
}
function messageBoard() {
    selectMenu(4)
    $("#menu_content").attr("src","messageboard/message_board.html");
}

function selectMenu(index) {
    var menus = document.getElementsByClassName("menu_item");
    for (var i = 0; i < menus.length; i++) {
        var menuItem = menus[i];
        if (i == index) {
            menuItem.style.color = "#555555";
        } else {
            menuItem.style.color = "#c0c0c0";
        }
    }
}


