/*
* File: style.css
* Author: Székely Balázs Csaba
* Copyright: 2023, Székely Balázs Csaba
* Group: SZOFT 1/I/E
* Date: 2023-03-09
* Github: https://github.com/BlaiseD91/
* Licenc: GNU GPL
*/

const dataTable = document.querySelector('#dataTable');

const bikes = [
    { name: "Cassis", col: 28, category: "offroad", price: 557900 },
    { name: "Albion 900", col: 28, category: "trekking", price: 519900 },
    { name: "Asgard", col: 29, category: "technikás utak", price: 519900 },
    { name: "Ruga", col: 29, category: "hegyi", price: 372900 },
    { name: "Reptila", col: 28, category: "városi", price: 308900 },
    { name: "Sirmium", col: 29, category: "hegyi", price: 264900 }
];


function loadBikes(){
    bikes.forEach((bike) => {
        let tr = document.createElement('tr');
        tr.className = 'hover';
        let tdName = document.createElement('td');
        let tdCol = document.createElement('td');
        let tdCategory = document.createElement('td');
        let tdPrice = document.createElement('td');

        tdName.textContent = bike.name;
        tdCol.textContent = bike.col;
        tdCategory.textContent = bike.category;
        tdPrice.textContent = bike.price;

        dataTable.append(tr);
        tr.append(tdName);
        tr.append(tdCol);
        tr.append(tdCategory);
        tr.append(tdPrice);
        
    });
}

loadBikes();