function changeText() {
  const title = document.getElementById("title");

  if (title.innerText === "Hello World") {
    title.innerText = "You clicked!";
  } else {
    title.innerText = "Hello World";
  }
}
function showName() {
  const name = document.getElementById("nameInput").value;
  document.getElementById("output").innerText = "Hello " + name;
}
