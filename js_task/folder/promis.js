// Resolved State
const url="https://apis.ccbp.in/random";
const resposePromise=fetch(url);
resposePromise.then((response)=>{
    console.log(response);// Response{ … }
})




// Rejected State
const url="https://apis.ccbp.in/random";
const resposePromise=fetch(url);
resposePromise.then((response)=>{
    console.log(response)
})
resposePromise.catch((err)=>{
    console.log(err)// TypeError{ "Failed to fetch" }
})

// Promise Chaining

const url="https://apis.ccbp.in/random";
const resposePromise=fetch(url);
resposePromise
.then((response)=>{
    console.log(response)
})
.catch((err)=>{
    console.log(err)
})


// Handle Promise Rejection


const url = "https://apis.ccbp.in/random";
let responsePromise = fetch(url);

responsePromise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data); // Object { value: "They call it the PS4 because there are only 4 games worth playing!"
  })
  .catch((error) => {
    console.log(error);
  });