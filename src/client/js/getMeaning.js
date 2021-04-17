import { checkUrlIsValid } from "./checkUrlIsValid";
import{ domResults } from "./domResults";

//  Hero function to get data through Meaning Cloud API

const getMeaning = async (event) => {
  event.preventDefault();

  //Get url from client
  let formText = document.getElementById('meaning-cloud').value;

  // first check if the URL is a valid URL
  if (checkUrlIsValid(formText)) {

    //fetch request options from NODE
  await axios('http://localhost:8081/meaning', {
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
      domResults(data);
      return data;
    })
    .catch((error) => console.error(error));
  } else {
    document.getElementById('results').innerHTML = `Invalid URL, Do not forget the "https://" part`;
    document.getElementById('model').innerHTML = ` `;
    document.getElementById('score_tag').innerHTML = ` `;
    document.getElementById('agreement').innerHTML = ` `;
    document.getElementById('subjectivity').innerHTML = ` `;
    document.getElementById('confidence').innerHTML = ` `;
    document.getElementById('irony').innerHTML = ` `;
  }
};



export {
  getMeaning,
}; //never forget to re-export as this will break the Client library and will not give errors during build