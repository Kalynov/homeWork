function Card(options) {
    var parent = options.parent? options.parent :  document.body;
    var mainClass = options.class? options.class+" card":"card";
    var theme = options.theme? options.theme:"theme";
    var sourceText = options.sourceText? options.sourceText:"sourceText";
    var translateText = options.translate? options.translate:"Перевод";

    var elem;
    (function render(){
        var translate
        ///wrapper
        elem = document.createElement('div');
        elem.className = mainClass;

        //title
        var title = new Title({
            parent:elem,
            class:"cardTitle",
            content:theme,
        });
        //source
        var sourceContainer = document.createElement('div');
        elem.appendChild(sourceContainer);
        sourceContainer.className = "source";
        sourceContainer.textContent = sourceText;

        //translate
        elem.onmousedown = function(event){
            
            $(sourceContainer).animate({opacity:0},500,function(){
                toogleTraslate();
                $(sourceContainer).animate({opacity:1},500)
            })
        }

        function toogleTraslate(){
            translate = translate? false:true;
            if (translate){
                sourceContainer.textContent = translateText;
            }else{
                sourceContainer.textContent = sourceText;
            }
        }


        parent.appendChild(elem)
    })();
}  
