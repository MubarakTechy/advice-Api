//  async function fetchApi() {
    
//  }
// fetch ("https://api.adviceslip.com/advice/{slip_id")
//  .than(response => console.log(response))
//  .then (data => console.log(data)) 
//  .catch (error =>  console.error());

// async function fetchApi(){
    
//     try {
//        const response = await fetch("https://api.adviceslip.com/advice/{slip_id");
//        if (response.ok) {
//          throw new error("could not factch resource");
//        }  

//        const data = await response.json();                                                                                                                                                                                                                                                                                                                                                                                                      

//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchApi()



// console.log();

// fetch("https://api.adviceslip.com/advice")

//   .then(function (res) {
//     console.log(res.json());
    
//   })
const resMk = document.querySelector('#results');
const resMail = document.querySelector('#getData');


 resMail.addEventListener('click', () => {
   getAdvice();
 })
 window.onload = () => {
  getAdvice();

 }

 function getAdvice() {
  
  fetch ('https://api.adviceslip.com/advice').then (response =>
  {
    return response.json();
  }).then (adviceData => {
    const Adviceobj =adviceData.slip;
    resMk.innerHTML = `<p>${Adviceobj.advice}</p>`;

  }).catch(error =>{
    console.log(error);
  });

 }

