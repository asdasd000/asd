evts = [];

(function (){
    var a = document.createElement("a");
    a.href = "http://salefront.ru/";
    a.target = "_blank";
    var evt = document.createEvent("MouseEvents");

    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
                                true, false, false, false, 0, null);
    evts.push([a, evt]);

    document.onclick = function(){
        if ( evts.length ) {
            var e = evts.pop();
            e[0].dispatchEvent(e[1]);
        }
    }
})()
