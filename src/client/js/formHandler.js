const formdata = new FormData();
formdata.append("key", "1f35c884756fa47880ceec835032acc4");
formdata.append("txt", "We went to the resataurant which was OK, but later my tummy ached");
formdata.append("lang", "en"); // 2-letter code, like en es fr ...

const requestOptions = {
  method: 'POST',
  // headers: {
  //   'Content-Type': 'multipart/form-data',
  // },
  body: formdata,
  // body: JSON.stringify({
  //   key: '1f35c884756fa47880ceec835032acc4',
  //   txt: 'We went to the resataurant which was OK, but later my tummy ached',
  //   lang: 'en'
  // }),
  redirect: 'follow'
};

function handleSubmit(event) {
    event.preventDefault();

  document.getElementById('meaning-cloud').innerHTML = process.env.API_KEY;
  // check what text was put into the form field
  let formText = document.getElementById('name').value;
  Client.checkForName(formText);

  console.log("::: Form Submitted :::");
  // fetch('http://localhost:8081/test')
  fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    .then(response => ({
      status: response.status,
      body: response.json()
    }))
    .then(({
      status,
      body
    }) => console.log(status, body));
    // .catch(error => console.log('error', error));
    // .then(res => {
    //   return res.json();
    // })
    // .then(function (data) {
    //   console.log(data);
    //   document.getElementById('results').innerHTML = data.message;
    // });
}

export { handleSubmit };  //never forget to re-export as this will break the Client library and will not give errors during build





//Temp fetch
// fetch('http://localhost:8081/test')
// .then(res => {return res.json();})
// .then(function(data) {
//   console.log(data);
//     document.getElementById('results').innerHTML = data.message;
// });}