function readMoreToggler(options = {}) {
  var styleEle = document.createElement("style");
  styleEle.innerHTML = `.long-text {display: none; animation: fadein 0.5s;}
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  .show-more-button {color: blue; cursor: pointer;}`;
  document.head.appendChild(styleEle);

  var defaultOptions = {
    charLimit: 100,
    expandText: "Read more",
    collapseText: "Show less",
    ...options,
  };

  var ptextALL = document.querySelectorAll("p.read-more");
  for (let ptext of ptextALL) {
    // Long text
    var text = ptext.textContent;

    // Character limit after which "Read More" will be seen
    console.log(text.substr(0, defaultOptions.charLimit));
    ptext.innerHTML =
      '<span class="short-text">' +
      text.substr(0, defaultOptions.charLimit) +
      '</span><span class="long-text">' +
      text.substr(defaultOptions.charLimit) +
      '</span><span class="text-dots">...</span><span class="show-more-button" data-more="0">' +
      defaultOptions.expandText +
      "</span>";
  }
  for (let showMore of document.querySelectorAll(".show-more-button")) {
    showMore.addEventListener("click", function () {
      // If text is shown less, then show complete
      if (this.getAttribute("data-more") == 0) {
        this.setAttribute("data-more", 1);
        this.style.display = "block";
        this.innerHTML = defaultOptions.collapseText;

        this.previousElementSibling.style.display = "none";
        this.previousElementSibling.previousElementSibling.style.display =
          "inline";
      }
      // If text is shown complete, then show less
      else if (this.getAttribute("data-more") == 1) {
        this.setAttribute("data-more", 0);
        this.style.display = "inline";
        this.innerHTML = defaultOptions.expandText;

        this.previousElementSibling.style.display = "inline";
        this.previousElementSibling.previousElementSibling.style.display =
          "none";
      }
    });
  }
}

export { readMoreToggler };
