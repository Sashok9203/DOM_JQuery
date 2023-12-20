//Task 1
function addBlock()
{
   let block = document.createElement('div');
   let color =  Math.floor(Math.random()*16777215).toString(16);
   $(block).addClass('color-block')
           .appendTo($('.bloks'))
           .click(removeBlock)
           .css("background-color",`#${color}`);
}

function removeBlock(event){event.target.remove();}
$('.add').click(addBlock);


//Task 2
let currentId = 1;
function next()
{
    let colors = ["red","yellow","green"];
    $(`#l${currentId}`).css("background-color","grey");
    currentId ++;
    if(currentId > 3)
         currentId = 1;
    $(`#l${currentId}`).css("background-color",`${colors[currentId-1]}`);
}

$('.change').click(next);
