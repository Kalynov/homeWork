function Date(options) {
    var elem = options.elem;
    function render(){
        var textDate = Date.now();
        elem = document.createElement('div');
        elem.className = "date";
        var titleElem = document.createElement('span');
        elem.appendChild(titleElem);
        titleElem.className = "title";
        console.log(textDate)
        //titleElem.textContent = textDate
    }
    this.render = render;
}  
