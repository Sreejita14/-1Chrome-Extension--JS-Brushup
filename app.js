let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

//delete button functionality
const deleteAllBtn = document.getElementById("deleteAll-btn");

//const deleteBtn = document.querySelector(".delete-btn");

//save tab button
const tabBtn = document.getElementById("tab-btn");

//localStorage.clear();
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
//console.log(leadsFromLocalStorage);
if(leadsFromLocalStorage)
{
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

// const tabs =[
//     {url:"https://www.javatpoint.com/java-tutorial"}
// ]

tabBtn.addEventListener('click',function(){

        chrome.tabs.query({active:true , currentWindow:true },function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads);
    });





//console.log(tabs[0].url);

});

function render(leads){
    let listItems = ""
    for(let i =0;i<leads.length;i++)
    {
    //listItems += "<li><a target='_blank' href='"+myLeads[i]+"'>"+myLeads[i]+"</a></li>";
    listItems += `
    <li>
    <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
    </a>
   
    </li>
   `;
     
    }
    
    ulEl.innerHTML = listItems;
}

/*<button class="delete-btn"  id='${leads[i]}' onclick="deleteItem(${i})">
   Delete <i style="color:rgb(189, 30, 19);" class="fas fa-trash"></i> 
</button>*/ 


inputBtn.addEventListener("click",function(){
    if(inputEl.value!="")
   { myLeads.push(inputEl.value);
    inputEl.value="";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);
    //console.log(localStorage.getItem("myLeads"));
   }
})

deleteAllBtn.addEventListener("click",function(){
//console.log("Double clicked");
localStorage.clear();
myLeads = [];
render(myLeads);
});
/*
for(let i =0;i<myLeads.length;i++)
    {
        const deleteBtn = document.getElementById(`${i}`);
        console.log(deleteBtn)
    }

function deleteItem(leadItem)
{

    

   /* console.log(leadItem);
    let item = JSON.parse(localStorage.getItem("myLeads"));
  //  let item = localStorage.getItem(item);
    console.log(item);
    //let delItem = item[leadItem];
    console.log("item[leadItem]: "+ item[leadItem]);
    let a = item.splice(item[leadItem],1);
    
    render(item);
    console.log(item);
    localStorage.setItem("item",JSON.stringify(item));
    
}

deleteBtn.addEventListener('click',)

*/






