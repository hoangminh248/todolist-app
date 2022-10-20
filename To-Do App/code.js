let $task= $('.task');
let $list= $('.list');
let $del_btn = $('span.delete_btn')

/*Prevent the enter key to submit the input*/
$task.on('keypress',function(event){
    if(event.key=="Enter")
    {
        event.preventDefault();
    }
})

$('.add_btn').on('click',function(event){
    let task_to_do=document.querySelector(".task").value;
    if(task_to_do!=""){
    let $element = $("<li></li>").text(task_to_do).attr({
        'class':"to_do_task non_select"
    });
    $element.on("click",function(event){
        if($element.hasClass("done")){
            $element.removeClass("done")
        }else{
            $element.addClass("done")
        }
    })
    let $delete_btn= $("<span>delete</span>").attr({
        'class':"material-symbols-outlined delete_btn"
    });
    $delete_btn.on('click', function(event){
        console.log($del_btn)
        this.parentElement.style.display="none";
    })
    $element = $element.append($delete_btn);
    
    $list.append($element);
    document.querySelector(".task").value="";
    console.log($del_btn)
    }
    else{
        alert("Type something");
    }
})


