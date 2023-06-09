var colorQue={
    colors:[
        {col:'black'},
        {col:'navyblue'},
        {col:'darkblue'},
        {col:'blue'},
        {col:'deepskyblue'},
        {col:'lightblue'}
    ],
    nextColor:function (){
        var lastColor=this.colors.pop();
        this.colors.unshift(lastColor);
    }
}
renderQue();
function renderQue(){
    $(`#container`).empty();
    for (let i = 0; i < colorQue.colors.length; i++) {
        if (i==0){
            $(`#up`).css("background-color", colorQue.colors[0].col)
        }
        else if (i==(colorQue.colors.length-1)){
            $(`#down`).css("background-color", colorQue.colors[colorQue.colors.length-1].col)
        }
        else {
            $(`#container`).append(`<div style="background-color: ${colorQue.colors[i].col}"></div>`)
        }
    }
    colorQue.nextColor();
}
setInterval(renderQue,100);