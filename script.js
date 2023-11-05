var dateInput = document.querySelector('.date');
var monthInput = document.querySelector('.month');
var yearInput = document.querySelector('.year');
 
var btn=document.querySelector('button');
var agePerson =document.querySelector('.ageperson');

btn.addEventListener('click',()=>{
    var dateP,monthP,yearP;
    var datePerson = dateInput.value;
    var monthPerson = monthInput.value;
    var yearPerson = yearInput.value;

    var today = new Date();
    var presentDate=today.getDate();
    var presentMonth=1+today.getMonth();
    var presentYear=today.getFullYear();
    
    agePerson.classList.remove('hide');
    
    if(presentMonth>=monthPerson){
        yearP=presentYear-yearPerson;
        if(presentDate>=datePerson){
              dateP=presentDate-datePerson;
              monthP=presentMonth-monthPerson;
        }else{
            dateP=presentDate+30-datePerson;
            monthP=presentMonth-monthPerson-1;
        }  
    }
    else{
        yearP=presentYear-yearPerson-1;
        if(presentDate>=datePerson){
            dateP=presentDate-datePerson;
            monthP=12+monthPerson-presentMonth;
        }
        else{
            dateP= presentDate-datePerson+30; 
            monthP=11+monthPerson-presentMonth;
        }   
    }
    agePerson.innerHTML=`Your age is ${dateP} days ${monthP} months ${yearP} years`;

});

