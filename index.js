fetch('https://fakestoreapi.com/products')
    .then(function (data) {
        //console.log(data);
        return data.json();

    })
    .then(function (objectts) {
        console.log(objectts)
        let tableData = "";
        objectts.map((values) => {
            tableData += `<tr>
            <th scope="row">${values.title}</th>
            <td>${values.description}</td>
            <td>${values.price}</td>
            <td> <img src= "${values.image}"/></td>
        </tr>`;
        })
        document.getElementById("table_body").innerHTML = tableData;
    }
    ).catch((err) => {
        console.log(err);
    })

