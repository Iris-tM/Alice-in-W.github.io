// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, 300) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, 300);
}

document.onkeydown = function (e) {
    if (123 == e.keyCode || (e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode)) || (e.ctrlKey && 85 === e.keyCode)) return btf.snackbarShow("不能打开控制台哦!"), event.keyCode = 0, event.returnValue = !1, !1
};




