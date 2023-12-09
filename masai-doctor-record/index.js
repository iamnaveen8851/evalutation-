"use strict";

// catch all elements first
let myForm = document.querySelector('form');
let name = document.getElementById('name')
let doctorId = document.getElementById('doctor_id')
let Specialization = document.getElementById('specialization')
let experience = document.getElementById('experience')
let email = document.getElementById('email')
let mobile = document.getElementById('mobile')





// constructor function creating the form 
function MasaiDoctors(name, doctorId, Specialization, experience, email, mobile){
 this.name= name;
 this.doctorId = doctorId
 this.Specialization = Specialization
 this.experience = experience
 this.email = email
 this.mobile = mobile
}




let arr = [];
let tbody = document.querySelector('tbody')
// add Event listeners on form 

myForm.addEventListener('submit', function(event){
    event.preventDefault();
    let formData  = new MasaiDoctors(name.value, doctorId.value, Specialization.value, experience.value, email.value, mobile.value)
    // tbody.innerHTML = null;
    arr.push(formData)

    displayData(arr)
   
   
})


function displayData(data) {
    tbody.innerHTML = null; // Clear the table body

    data.map((ele) => {
        // create tr and td
        let row = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');
        let td8 = document.createElement('td');

        // add the ele inside the td
        td1.innerText = ele.name;
        td2.innerText = ele.doctorId;
        td3.innerText = ele.Specialization;
        td4.innerText = ele.experience;
        td5.innerText = ele.email;
        td6.innerText = ele.mobile;

        // role
        if (td4.innerText > 5) {
            td7.innerText = 'Senior';
        } else if (td4.innerText >= 2 && td4.innerText <= 5) {
            td7.innerText = 'Junior';
        } else if (td4.innerText <= 1) {
            td7.innerText = 'Trainee';
        }

        // delete button
        let Delete = document.createElement('button');
        Delete.innerText = 'Delete';
        Delete.setAttribute('class', 'delete');
        Delete.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.remove();
        });

        td8.append(Delete);

        // append td inside the row
        row.append(td1, td2, td3, td4, td5, td6, td7, td8);

        tbody.append(row);
    });
}
// arr.map((ele) => {
//     // create tr and td
//     let row = document.createElement('tr')
//     let td1 = document.createElement('td')
//     let td2 = document.createElement('td')
//     let td3 = document.createElement('td')
//     let td4 = document.createElement('td')
//     let td5 = document.createElement('td')
//     let td6 = document.createElement('td')
//     let td7 = document.createElement('td')
//     let td8 = document.createElement('td')
// // console.log()

//     // add the ele inside the td
//     td1.innerText = ele.name
//     td2.innerText = ele.doctorId
//     td3.innerText = ele.Specialization
//     td4.innerText = ele.experience
//     td5.innerText = ele.email
//     td6.innerText = ele.mobile


//     // role
//     if(td4.innerText > 5)
//     {
//         td7.innerText = 'Senior'
//     }
//     else if(td4.innerText == 2 && td4.innerText <= 5)
//     {
//         td7.innerText = 'Junior'
//     }
//     else if(td4.innerText <= 1)
//     {
//         td7.innerText = 'Trainee'
//     }


//     // delet btn
//     let Delete = document.createElement('button')
//     Delete.innerText = 'Delete'
//     Delete.setAttribute('class', 'delete')
//     Delete.addEventListener('click', function(event){
//         event.target.parentNode.parentNode.remove()
//     })

//     td8.append(Delete)
    



// //    append td inside the row
// row.append(td1, td2, td3, td4, td5, td6, td7, td8)


// tbody.append(row)


// })


    
    
  

    // after submit the form the form should be ready to fill again 
    // name.value = ""
    // doctorId.value = ""
    // Specialization.value = ""
    // experience.value = ""
    // email.value = ""
    // mob.value = ""









// filter Select

// catch the select tag
let specialization = document.getElementById("filter")
specialization.addEventListener("change", (ele)=>{
    let filterData = arr.filter((element)=>{
        return ele.target.value == element.Specialization
    })
    displayData(filterData)
})
