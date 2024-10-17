let apiUrl = "https://catfact.ninja/fact";

async function fetchData() {
    // The await keywords wait for the response from the server as it is asynchronous so we have to wait for the response from the server befor using it
    let response = await fetch(apiUrl);  
    let validResponse = await response.json();
    console.log(response);
    console.log(validResponse);
    console.log("======================================================================");
    
    // sending anothe request to the server
    let response2 = await fetch(apiUrl);
    console.log(response2);
    
    let validResponse2 = await response2.json();
    console.log(validResponse2);
    // Accessing the data from the response
    console.log(validResponse2.fact);
    
    
    
    
    
};

fetchData()