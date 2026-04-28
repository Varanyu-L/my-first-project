function changeText() {
  const title = document.getElementById("title");

  if (title.innerText === "Hello World") {
    title.innerText = "You clicked!";
  } else {
    title.innerText = "Hello World";
  }
}
