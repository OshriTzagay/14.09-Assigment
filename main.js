// The new loops assigment = forEach , forIn , forOf //


// נתון מערך של כתבות: כותרת, מחבר, תאריך
//  הדפס את כל הכתבות בעזרת forEach
//  הדפס את כל הכתבות בעזרת for-of
// נתון מערך של אובייקטים
//  הדפס את כל ה- key וה-value של כל האובייקטים- שילוב לולאה + forIN
// נתון מערך של 4 ספרים: שם, מחבר ומחיר:
//  הדפס את כל הספרים
// הדפס את כל המחברים של הספרים
// נתון מערך של מספרים-  הדפס את סכום המערך:
//  בעזרת forEach

// 1)



articles = [{title:"FOOTBALL" , author:"Messi", date:2020},
{title:"NEWS" , author:"GuyLerer", date:2021},
{title:"IDF" , author:"BennyGhantz", date:2020},
];

// 1A)

articles.forEach(article => {
    console.log(article);
});

// 1B)

// for (const article of articles) {
//     console.log(article);
// }

// 2) back here~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let products = [{name:"phone",price:5000},
{name:"airpods",price:600},
{name:"case",price:12}
];
for (let i = 0; i < products.length; i++) {
    
    for (const key in products[i]) {
        console.log(key +" " + products[i][key]);
    }
}

// 3)

let books = [{name:"A Tale of 5Ballon" , writer: "Miriam Roth", price: 100},
{name:"DaniDin & DinaDin" , writer: "Ploni", price: 80},
{name:"Rich Dad Poor Dad" , writer: "Author", price: 200},
{name:"The Mamba Mentality" , writer: "Kobi Bryant", price: 500}];

books.forEach(book => {
    console.log(book.name);
    console.log(book.writer);
});


// 4)w//ForEach

let numsArray = [1,2,3,4,5,6,7,8];
let sum = 0 ;
numsArray.forEach(num => {
    sum = num + sum
});
console.log(sum);


// 4w//ForOf
secSum = 0 ; 
for (const number of numsArray) {
    secSum = number+secSum
}
console.log(secSum);