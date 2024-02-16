function getBodyLength(tableId) {
    let body = document.getElementById(tableId).getElementsByTagName("tbody")[0];

    return body.children.length;
}

function addBodyRow(tableId, rowElements = []) {
    let table = document.getElementById(tableId);
    let body = table.getElementsByTagName("tbody")[0];
    let rowIndex = getBodyLength(tableId);

    let row = document.createElement("tr");
    row.setAttribute("id", `${tableId}_tbody_tr_${rowIndex}`);

    rowElements.forEach(e => {
        addColumn(row, e)
    })
    
    body.appendChild(row);
}

function addColumn(row, element) {
    let column = document.createElement("td");
    column.setAttribute("id", `${row.id}_td_${row.children.length}`)

    if (typeof element === 'string') {
        column.innerHTML = element
    } else {
        column.appendChild(element)
    }

    row.appendChild(column);
}

function removeRow(e) {
    let srcElement = e.srcElement;
    let row = srcElement.parentElement.parentElement;
    let body = row.parentElement;

    body.removeChild(row);
}

function getBodyValues(tableId, ...fieldNames) {
    let table = document.getElementById(tableId);

    let body = table.getElementsByTagName("tbody")[0];

    let qtd = body.children.length

    let values = [];

    for (let i = 0; i < qtd; i++) {
        let obj = {};
        
        fieldNames.forEach(fieldName => obj[fieldName] = document.getElementById(`${fieldName}_${i}`).value)

        values.push(obj);
    }

    return values;
}

function clearBodyContent(tableId) {
    let table = document.getElementById(tableId);

    let body = table.getElementsByTagName("tbody")[0];

    body.innerHTML = '';
}

function clearBodyValues(tableId) {
    let table = document.getElementById(tableId);

    let body = table.getElementsByTagName("tbody")[0];

    let inputs = body.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        const element = inputs[i];
        element.value = '';
    }

    let pres = body.getElementsByTagName("pre");
    for (let i = 0; i < pres.length; i++) {
        const element = pres[i];
        element.innerHTML = '';
    }    
}