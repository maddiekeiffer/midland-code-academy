//import other libraries for user interface: 
//Semantic UI and Sencha

const searchTitle = document.getElementById("title");
const searchYear = document.getElementById("year");
const searchType = document.getElementById("type");
const search = document.getElementById("search");
const results = document.getElementById("results");
const extraInfo = document.getElementById("extraInfo");
const infoButton = document.getElementById("infoButton");

infoButton.classList.add("hidden");

infoButton.addEventListener("click", () => {
    extraInfo.classList.add("show");
    extraInfo.style.marginBottom = "50px";
    extraInfo.style.marginLeft = "20px";
    extraInfo.style.marginTop = "20px";
    infoButton.innerText = "Less Information";
});

infoButton.addEventListener("dblclick", () => {
    extraInfo.classList.remove("show");
    infoButton.innerText = "More Information";
});

function buildURL() {
    let base = `http://www.omdbapi.com/?apikey=3943dda0&t=${searchTitle.value}&type=${searchType.value}`;
    if(searchYear.value !== "") {
        base = base + `&y=${searchYear.value}`;
        return base;
    }
    return base;
}

function displayResults(res) {

    const title = document.createElement("h2");
    title.textContent = res.Title;
    const year = document.createElement("h4");
    year.textContent = "Year: " + res.Year;
    const type = document.createElement("h6");
    type.textContent = "Type: " + res.Type;
    const rated = document.createElement("h5");
    rated.textContent = "Rated: " + res.Rated;
    const runtime = document.createElement("h6");
    runtime.textContent = "Runtime: " + res.Runtime;
    const genre = document.createElement("h5");
    genre.textContent = "Genre: " + res.Genre;
    const actors = document.createElement("h5");
    actors.textContent = "Starring: " + res.Actors;
    const plot = document.createElement("p");
    plot.textContent =  res.Plot;

    results.appendChild(title);
    results.appendChild(year);
    results.appendChild(type);
    results.appendChild(rated);
    results.appendChild(runtime);
    results.appendChild(genre);
    results.appendChild(actors);
    results.appendChild(plot);

    //extraInfo items
    const released = document.createElement("h6");
    released.textContent = "Released: " + res.Released;
    const boxOffice = document.createElement("h6");
    boxOffice.textContent = "Box Office: " + res.BoxOffice;
    const director = document.createElement("h6");
    director.textContent = "Director: " + res.Director;
    const writer = document.createElement("h6");
    writer.textContent = "Writer(s): " + res.Writer;
    const awards = document.createElement("h6");
    awards.textContent = "Award(s): " + res.Awards;
    const dvd = document.createElement("h6");
    dvd.textContent = "DVD: " + res.DVD;
    const poster = document.createElement("h6");
    poster.textContent = "Poster: " + res.Poster;
    const language = document.createElement("h6");
    language.textContent = "Language(s): " + res.Language;
    const country = document.createElement("h6");
    country.textContent = "Country: " + res.Country;
    const metascore = document.createElement("h6");
    metascore.textContent = "Metascore: " + res.Metascore;
    const imdbRating = document.createElement("h6");
    imdbRating.textContent = "IMDB Rating: " + res.imdbRating;
    const imdbVotes = document.createElement("h6");
    imdbVotes.textContent = "IMDB Votes: " + res.imdbVotes;
    const imdbID = document.createElement("h6");
    imdbID.textContent = "IMDB ID: " + res.imdbID;

    const ratings = document.createElement("h6");
    ratings.innerText = "Ratings: ";
    res.Ratings.forEach(rating => {
        const source = rating.Source;  
        const value = rating.Value;

        ratings.textContent += `Value: ${value}, Source: ${source}. `;
    });

    extraInfo.appendChild(released);
    extraInfo.appendChild(boxOffice);
    extraInfo.appendChild(director);
    extraInfo.appendChild(writer);
    extraInfo.appendChild(awards);
    extraInfo.appendChild(dvd);
    extraInfo.appendChild(poster);
    extraInfo.appendChild(ratings);
    extraInfo.appendChild(language);
    extraInfo.appendChild(country);
    extraInfo.appendChild(metascore);
    extraInfo.appendChild(imdbRating);
    extraInfo.appendChild(imdbVotes);
    extraInfo.appendChild(imdbID);

}

//my api key=3943dda0

//Async/Await Pattern with Try/Catch 
search.addEventListener("click", async (e) => {
    e.preventDefault();
    if(searchTitle.value.length < 3) {
        alert("Please enter 3 or more characters.");
     } else {
            try {
                const response = await axios.get(buildURL());
                if (response.data.Response === "False") {
                    alert("Movie not found. Please check your spelling and try again.");
                } else {
                    displayResults(response.data);
                    infoButton.classList.remove("hidden");
                }
            } catch (error) {
                alert("An error occured. Please try again.");
                console.error(error);
            }  
     }
});

/* //Axios Library
search.addEventListener("click", (e) => {
    e.preventDefault();
    if(searchTitle.value.length < 3) {
        alert("Please enter 3 or more characters.");
     } else {
        axios.get(buildURL())
        
        .then ((response) => {
            if(!response.ok) {
                console.log(response.status);
            } 
            return response.data;
        })
        .then((res) => {
            if (res.Error || res.Response === "False") {
                alert("Error: " + res.Error);
            }
            else {
                displayResults(res);
                infoButton.classList.remove("hidden");
            }});
        
     }
});*/