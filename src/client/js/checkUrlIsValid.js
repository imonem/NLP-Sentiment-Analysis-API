const checkUrlIsValid = (url) => {
    try {
      new URL(url);
      console.log('Seems to be a valid URL');
    } catch (error) {
      console.error(error);
      document.getElementById('results').innerHTML = `<p>Not a valid URL, you entered ${url}</p>`;
      document.getElementById('model').innerHTML = ``;
      document.getElementById('score_tag').innerHTML = ``;
      document.getElementById('agreement').innerHTML = ``;
      document.getElementById('subjectivity').innerHTML = ``;
      document.getElementById('confidence').innerHTML = ``;
      document.getElementById('irony').innerHTML = ``;
      return(error);
    }
    return url;
  };

  export {
      checkUrlIsValid,
  };