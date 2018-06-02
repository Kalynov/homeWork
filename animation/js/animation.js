function myMove(){
    var elem = $("div .myAnimation");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame(){
        if (pos==350){
            clearInterval(id);
        }else{
            pos++;
            elem.css({
                top: pos+'px',
               // left: pos+'px'
            });
        }
    }
}