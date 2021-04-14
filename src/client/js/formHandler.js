import { checkUrlIsValid } from "./checkUrlIsValid";

//  Hero function to get data through Meaning Cloud API

const getMeaning = async (event) => {
  event.preventDefault();

  //Get url from client
  let formText = document.getElementById('meaning-cloud').value;
  console.log(`Got this from user : ${formText}`);

  if (checkUrlIsValid(formText)) {
      //fetch request options from NODE
  let response = await axios('http://localhost:8081/meaning', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
      },
      data: {
        input: formText
      }
    })
    .then((data) => {
      console.log(data);
      document.getElementById('model').innerHTML = `<p>The model language is: "${data.data.model}"</p>`;
      document.getElementById('score_tag').innerHTML = `<p>The 'Score Tag' is: ${data.data.score_tag}</p>`;
      document.getElementById('agreement').innerHTML = `<p>This is a form of ${data.data.agreement}</p>`;
      document.getElementById('subjectivity').innerHTML = `<p>This article is ${data.data.subjectivity}</p>`;
      document.getElementById('confidence').innerHTML = `<p>Confidence: ${data.data.confidence}</p>`;
      document.getElementById('irony').innerHTML = `<p>The article is ${data.data.irony}</p>`;
      return data;
    })
    .catch((error) => console.error(error));
  } else {
    document.getElementById('results').innerHTML = `<p>Not a valid a URL</p>`;
    document.getElementById('model').innerHTML = ``;
    document.getElementById('score_tag').innerHTML = ``;
    document.getElementById('agreement').innerHTML = ``;
    document.getElementById('subjectivity').innerHTML = ``;
    document.getElementById('confidence').innerHTML = ``;
    document.getElementById('irony').innerHTML = ``;
  }


};



export {
  // handleSubmit,
  getMeaning
}; //never forget to re-export as this will break the Client library and will not give errors during build