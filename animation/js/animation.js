function myMove() {
    var elem = $("div .myAnimation");
    var pos = 0;
    var position = 0
    var id = setInterval(frame, 5);
    var flag = true;

    function down() {
        pos++;
        position = position + 0.2;
        flag = pos < 350 ? true : false;
        elem.css({
            top: pos,
            left: position
        });
    }

    function up() {
        //var position = pos
        //pos--;
        pos--
        position = position + 0.2;
        flag = pos > 0 ? false : true;
        console.log("up")
        elem.css({
            top: pos,
            left: position
        });
    }


    function frame() {
        if (position > 350) {
            clearInterval(id);
        } else {
            if (pos < 350 && flag) {
                down()
            } else {
                up()
            }
        }
    }
}