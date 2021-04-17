      const domResults = (data) => {
          document.getElementById('results').innerHTML = `<p></p>`;
          document.getElementById('model').innerHTML = `<p>The model language is: "${data.data.model}"</p>`;
          document.getElementById('score_tag').innerHTML = `<p>The 'Score Tag' is: ${data.data.score_tag}</p>`;
          document.getElementById('agreement').innerHTML = `<p>This is a form of ${data.data.agreement}</p>`;
          document.getElementById('subjectivity').innerHTML = `<p>This article is ${data.data.subjectivity}</p>`;
          document.getElementById('confidence').innerHTML = `<p>Confidence: ${data.data.confidence}</p>`;
          document.getElementById('irony').innerHTML = `<p>The article is ${data.data.irony}</p>`;
      };

      module.exports= {
          domResults,
      };