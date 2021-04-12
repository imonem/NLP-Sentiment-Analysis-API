
function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById('name').value;
  Client.checkForName(formText);

  console.log("::: Form Submitted :::");
  fetch('http://localhost:8081/test')
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      document.getElementById('results').innerHTML = data.message;
    });
}

//  Hero function to get data through Meaning Cloud API

const getMeaning = async (event) => {
  event.preventDefault();

  //  Testing dotenv API_KEY
  document.getElementById('meaning-cloud-feedback').innerHTML = process.env.API_KEY;

  //Get article from client
  let formText = document.getElementById('meaning-cloud').value;
  console.log(`Got this from user : ${formText}`);

  //fetch request options from NODE
  let response = await axios('http://localhost:8081/meaning', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
      },
      data: {
        input: formText
      }
    });
    try {
      let newAnalysis = response;
      console.log(newAnalysis);
    } catch (error) {
      console.error(error);
    }
}; //remove this end and uncomment the below to get functionality back (client side)




export {
  handleSubmit,
  getMeaning
}; //never forget to re-export as this will break the Client library and will not give errors during build
