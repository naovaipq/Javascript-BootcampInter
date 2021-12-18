document.getElementById("btnAdiconar").addEventListener("click", function () {

    var lista = document.getElementById("listContainer");
    var text = document.getElementById("inputField");
   
    //li
    var li = document.createElement("li");
    lista.appendChild(li);
    
    //checkbox
    var checkBox = document.createElement("input");
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute("id", text.value);

    //label
    var label = document.createElement("label");
    label.setAttribute("id", text.value);
    label.setAttribute("for", text.value);
    label.textContent = text.value;

    li.appendChild(checkBox);
    li.appendChild(label);

});