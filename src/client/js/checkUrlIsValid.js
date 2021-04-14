const checkUrlIsValid = (url) => {
    try {
        new URL(url);
    } catch (error) {
        console.error(error);
        document.getElementById('results').innerHTML = `<p> Not a valid URL, please copy and paste the full URL including the https:// part. </p>`;
        document.getElementById('model').innerHTML = ``;
        document.getElementById('score_tag').innerHTML = ``;
        document.getElementById('agreement').innerHTML = ``;
        document.getElementById('subjectivity').innerHTML = ``;
        document.getElementById('confidence').innerHTML = ``;
        document.getElementById('irony').innerHTML = ``;
        return false;
    }
    return url;
};

export {
    checkUrlIsValid,
};