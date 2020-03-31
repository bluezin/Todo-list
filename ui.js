let $form = document.getElementById("form-todo");
$form.addEventListener("submit", function(event) {
  event.preventDefault();
  let task = $form.task.value;
  $form.task.value = "";

  let ul = document.getElementById("list");
  let li = document.createElement("li");
  let input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("class", "center")
  let contenido = document.createTextNode(task);

  li.appendChild(contenido);
  li.appendChild(input);
  ul.appendChild(li);
  console.log(ul);
  let borrar = document.getElementById("borrar");
  borrar.addEventListener("click", function() {
    ul.removeChild(ul.childNodes[0]);
  });
});

