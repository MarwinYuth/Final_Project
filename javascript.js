const task = document.querySelector('.to-do-list ul')
const pro = document.querySelector('.category ul')
const search = document.querySelector('#search')

let alltask = [
    {
        Task : "Movie Date",svg: '<i class="fa-solid fa-user"></i>', Category : "Personal" 
    },
    {
        Task :  "Playing Game",svg: '<i class="fa-solid fa-user"></i>', Category : "Personal"
    },  
    {
        Task : "Doing Code",svg: '<i class="fa-solid fa-school"></i>', Category : "School" 
    },
    {
        Task : "Doing quiz",svg: '<i class="fa-solid fa-school"></i>', Category : "School" 
    },
    {
        Task : "Doing Homework",svg: '<i class="fa-solid fa-school"></i>', Category : "School" 
    },
    {
        Task : "Gym",svg: '<i class="fa-solid fa-user"></i>', Category : "Personal" 
    },
    {
        Task : "Group Assignment",svg: '<i class="fa-solid fa-school"></i>', Category : "School"
    },
    {
        Task : "Washing Dishes",svg: '<i class="fa-solid fa-list-check"></i>', Category : "Home" 
    },
]

let profile = [
    {
        font : '<i class="fa-solid fa-list-check"></i>', text : 'All Task',active:1,
    },
    {
        font : '<i class="fa-solid fa-house"></i>', text : "Home",active:0,
    },
    {
        font : '<i class="fa-solid fa-user"></i>', text : 'Personal',active:0,
    },
    {
        font : '<i class="fa-solid fa-school"></i>', text : "School",active:0,
    },  
]

let svg = [
    {
        i : `Home`
    },
    // {
    //     i : `<i class="fa-solid fa-house"></i>`
    // },
    // {
    //     i : `<i class="fa-solid fa-list-check"></i>`
    // }
]


profile.forEach(prod => {
    
    let prolist = document.createElement('li')

    prolist.innerHTML = `<li>`+ prod.font + `<span>`+ prod.text + `</span></li>`

    if(prod.active==1)
    {
        prolist.classList.add("active")
    }
    else
    {
        prolist.classList.remove("active")
    }

    pro.appendChild(prolist)

})


alltask.forEach(tsk => {

    let list = document.createElement('li')
    
    list.innerHTML = `<div class="alltask">
    
        <div class="chkbox">
            <input type="checkbox"><span>` + tsk.Task +`</span><br>
            <label for="">`+ tsk.Category + `</label>
        </div>

        <div>
            <i class="fa-solid fa-pen  update"></i>
            <i class="fa-solid fa-trash delete"></i>
        </div>
    </div>`
    
    task.appendChild(list)

})

let i = document.createElement('select')

// add new task
var add = document.getElementById('add')

add.addEventListener('click',function() {
    var catelist = document.createElement('li')
    var cateinput = document.createElement('input')
    cateinput.classList.add('ipt')
    cateinput.setAttribute("type","text")
    catelist.appendChild(cateinput)
    pro.appendChild(catelist)
    cateinput.focus()

    cateinput.addEventListener('change', (e) => {
        var newitem = e.target.value;
        const drop = document.querySelector('.select-main .drop-down')
        
        const svglist = document.createElement('li')
        svglist.classList.add('hove')
        const svginput = document.createElement('input')
        svginput.classList.add('ipt-svg')
        svglist.appendChild(svginput)
        drop.appendChild(svglist)
        svginput.focus()

        var svgsymbol = document.getElementById('svg-show')
        svgsymbol.classList.remove('drop-hide')

        svginput.addEventListener('change',(e) => {
            svglist.classList.add('drop-hide')
           
            if(e.target.value == 'home' || e.target.value=='Home')
            {
                catelist.innerHTML = `<li>`+ `<i class="fa-solid fa-house"></i>` +`<span>`+ newitem +`</span></li>`
                svgsymbol.classList.add('drop-hide')
            }
            else if(e.target.value == 'Personal' || e.target.value == 'personal')
            {
                catelist.innerHTML = `<li>`+ `<i class="fa-solid fa-user"></i>` +`<span>`+ newitem +`</span></li>`
                svgsymbol.classList.add('drop-hide')
            }
            else if(e.target.value == 'school' || e.target.value == 'School')
            {
                catelist.innerHTML = `<li>`+ `<i class="fa-solid fa-school"></i>` +`<span>`+ newitem +`</span></li>`
                svgsymbol.classList.add('drop-hide')
            }
            else
            {
                catelist.innerHTML = `<li>`+ `<i class="fa-solid fa-list-check"></i>` +`<span>`+ newitem +`</span></li>`
                svgsymbol.classList.add('drop-hide')
            }
        })
    })
})
// add new task


// category by task name
pro.addEventListener('click',(e) => {
    if(e.target.nodeName = 'li')
    {
        const logo = e.target.firstElementChild;
        const text = e.target.lastElementChild;
        const title = document.querySelector('.border-left .icon #title')
        title.innerHTML = `<span>`+ text.textContent + `</span>`

        task.innerHTML=""; 
        alltask.forEach(tsk => {
            if(tsk.Category.toLowerCase() == text.textContent.toLowerCase())
            {
                let list = document.createElement('li')
    
                list.innerHTML = `<div class="alltask">
                
                    <div class="chkbox">
                        <input type="checkbox"><span>` + tsk.Task +`</span><br>
                        <label for="">`+ tsk.Category + `</label>
                    </div>

                    <div>
                        <i class="fa-solid fa-pen-nib update"></i> 
                        <i class="fa-solid fa-dumpster delete"></i>
                    </div>
                </div>`
                task.appendChild(list)
            }
            else if(text.textContent.toLowerCase() == "all task")
            {
                let list = document.createElement('li')
    
                list.innerHTML = `<div class="alltask">
                
                    <div class="chkbox">
                        <input type="checkbox"><span>` + tsk.Task +`</span><br>
                        <label for="">`+ tsk.Category + `</label>
                    </div>

                    <div>
                        <i class="fa-solid fa-pen-nib update"></i> 
                        <i class="fa-solid fa-dumpster delete"></i>
                    </div>
                </div>`
                task.appendChild(list)
            }
        })
    }
})
// category by task name


// Delete Task && Edit Task
task.addEventListener('click',(e) => {
    let prenetEl;
    prenetEl = e.target.parentElement.parentElement;
    if(e.target.classList.contains("delete"))
    {
        const remove = e.target.parentElement.parentElement.parentElement;
        task.removeChild(remove)
    }

    // if(e.target.classList.contains("update"))
    // {
        
    //     const update = e.target.parentElement.parentElement;
    //     let taskupdate = update.querySelector('.chkbox')
    //     let taskspan = taskupdate.querySelector('span')
    //     const brEL = taskupdate.querySelector("br");
    //     taskupdate.removeChild(taskspan)

    //     let newtaskinput = document.createElement('input')
    //     newtaskinput.setAttribute('type','value')
    //     newtaskinput.classList.add('ipt')
    //     taskupdate.insertBefore(newtaskinput,brEL)
    //     taskupdate.focus()

    //     newtaskinput.addEventListener('blur',(e) => {
           
    //         let newtaskname = e.target.value;
    //         taskupdate.removeChild(e.target)
    //         let tasknameli = document.createElement('span')
    //         tasknameli.textContent = newtaskname;
    //         taskupdate.insertBefore(tasknameli,brEL);
    //     })
    // }
})
// Delete Task && Edit Task

search.addEventListener('keyup',(e) => {
    console.log(e.target.value)
})

// Add New task
const taskadd =document.getElementById('taskadd')

taskadd.addEventListener('click',() => {
    const tasklist = document.createElement('li')
    const taskinput = document.createElement('input')
    taskinput.setAttribute('type','text')
    taskinput.classList.add('ipt-task')
    tasklist.appendChild(taskinput)
    task.appendChild(tasklist)
    taskinput.focus()

    taskinput.addEventListener('change',function(e){
        let taskcatevalue = e.target.value
        const tasktexlist = document.createElement('input')
        tasktexlist.setAttribute('type','value')
        tasktexlist.classList.add('ipt-task')
          tasktexlist.focus()
        tasklist.appendChild(tasktexlist)

        tasktexlist.addEventListener('change',function(e) {
            let tasktext = e.target.value
            tasklist.innerHTML = `<div class="alltask">
    
                <div class="chkbox">
                    <input type="checkbox"><span>` + taskcatevalue +`</span><br>
                     <label for="">`+ tasktext + `</label>
                </div>
        
                 <div>
                    <i class="fa-solid fa-pen-nib update"></i> 
                     <i class="fa-solid fa-dumpster delete"></i>
                 </div>
             </div>`
        })
    })
})
// Add New task

const clk = document.querySelector('.click-to-drop')

clk.addEventListener('click',function(){
    
})