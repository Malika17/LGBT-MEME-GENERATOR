const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
memeTitle.style.color = "white";
const memeAuthor = document.querySelector(".meme-generator .meme-author");


let type = prompt('what kind of meme would you like');
let api_url = "https://meme-api.com/gimme/lgbtqmemes";
const updateDetails = (url, title, author) => {
  if (memeImage) {
    memeImage.setAttribute("src", url);
  }
  if (memeTitle) {
    memeTitle.innerHTML = title;
  }
  if (memeAuthor) {
    memeAuthor.innerHTML = author;
  }
};

const generateMeme = () => {
  fetch(api_url)
    .then(response => response.json())
    .then(data => {
      updateDetails(data.url, data.title, data.author);
    })
    .catch(error => {
      console.error("Error:", error);
    });
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();
