const Page2 = () => {
    
    document.getElementById("wordToSearch").addEventListener("click", function(event) {
            event.preventDefault();
            const value = document.getElementById("wordToCheck").value;
            if (value === "") {
            return;
        }
        console.log(value);
        const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + value;
        fetch(url)
          .then(function(response) {
            return response.json();
          }).then(function(json) {
        console.log(json[0]["meanings"]);
        let results = "";
        results += '<h2>' + value + '</h2>';
        for (let i = 0; i < json[0]["meanings"].length; ++i) {
            console.log(i);
            let defNum = i + 1;
            results += '<h4>Definition ' + defNum + ': </h4><p>' + json[0]["meanings"][i]["definitions"][0]["definition"] + '</p>';
            results += '<h4>Synonyms:</h4>';
            if (json[0]["meanings"][i]["synonyms"].length === 0) {
                results += "<p>None found</p>"
            }
            for (let j = 0; j < json[0]["meanings"][i]["synonyms"].length; j++) {
                results += '<p>' + json[0]["meanings"][i]["synonyms"][j] + '</p>';
            }
        }
        document.getElementById("wordSearchResults").innerHTML = results;

        })

        })
    
  return (
<body>
    <div class="menu">
        <h4 id="name">Christensen</h4>
    </div>
    
    <form>
        <h3>Word Search</h3>
        <input id="wordToCheck" type="text"></input>
        <input id="wordToSearch" type="submit" value="Submit"></input>
    </form>
    
    <div id="wordSearchResults"></div>
    <footer class="footer">
        <p class="footer-info">BYU FALL 2022</p>
        <a href="https://github.com/brayway05/CS260-files/tree/main/creative-project-2">Github repository</a>
    </footer>
</body>
);

}
export default Page2;