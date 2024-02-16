function setId(element, id, rowIndex) {
    if (rowIndex != undefined) {
        element.setAttribute("id", `${id}_${rowIndex}`);
    } else {
        element.setAttribute("id", id);
    }
}

function getText(textName, value, rowIndex) {
    let text = document.createElement("input")

    text.setAttribute("type", "text");
    setId(text, textName, rowIndex);
    if (value !== undefined && value != null) {
        text.setAttribute("value", value);
    }

    return text;
}

function getButton(buttonName, value, onclick, rowIndex) {
    let button = document.createElement("button");

    setId(button, buttonName, rowIndex);
    button.innerHTML = value;
    button.addEventListener("click", onclick);

    return button;
}