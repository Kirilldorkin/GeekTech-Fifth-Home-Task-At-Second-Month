let items = [

    {
        image: "./images/image1.jpg",
        title: "Syltherine",
        subTitle: "Stylish cafe chair",
        actualPrice: "Rp 2.500.000",
        lastPrice: "Rp 3.500.000",
    },

    {
        image: "./images/image2.jpg",
        title: "Leviosa",
        subTitle: "Stylish cafe chair",
        actualPrice: "Rp 2.500.000",
        lastPrice: "",
    },

    {
        image: "./images/image3.jpg",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        actualPrice: "Rp 7.000.000",
        lastPrice: "Rp 14.000.000",
    },

    {
        image: "./images/image4.jpg",
        title: "Respira",
        subTitle: "Minimalist fan",
        actualPrice: "Rp 500.000",
        lastPrice: "",
    },

    {
        image: "./images/image6.jpg",
        title: "Grifo",
        subTitle: "Night lamp",
        actualPrice: "Rp 1.500.000",
        lastPrice: "",
    },

    {
        image: "./images/image3.jpg",
        title: "Muggo",
        subTitle: "Small mug",
        actualPrice: "Rp 150.000",
        lastPrice: "",
    },

    {
        image: "./images/image7.jpg",
        title: "Pingky",
        subTitle: "Cute bed set",
        actualPrice: "Rp 7.000.000",
        lastPrice: "Rp 14.000.000",
    },

    {
        image: "./images/image8.jpg",
        title: "Potty",
        subTitle: "Minimalist flower pot",
        actualPrice: "Rp 500.000",
        lastPrice: "",
    },

];


// ========================== HTML ========================== //


const body = document.querySelector("body");
const h1 = document.createElement("h1");
h1.innerHTML = "Our Products";
body.appendChild(h1);

let fragment = document.createDocumentFragment();
const moduleCards = document.createElement("div");
moduleCards.className = "module-cards";

for (let i = 0; i < items.length; i++) {
    var item = document.createElement("div");
    item.className = "item";
    item.dataset.index = i;
    item.innerHTML = `
            <img src="${items[i].image}" alt="photo">

            <div style="display: flex; justify-content: space-between; align-items: center; padding: 0 1rem;">
                <h2 style="font-weight: 600; font-size: 24px; color: #3A3A3A;">
                    ${items[i].title}
                </h2>

                <span style="font-weight: 400; font-size: 16px; color: #B0B0B0; align-text: right; cursor: pointer;" onclick="delNode(this)">
                    Delate
                </span>
            </div>
            
            <p style="font-weight: 500; font-size: 16px; color: #898989; padding-left: 1rem;">
                ${items[i].subTitle}
            </p>

            <span style="font-weight: 600; font-size: 20px; color: #3A3A3A; padding: 1rem;">
                ${items[i].actualPrice}
            </span>

            <span style="font-weight: 400; font-size: 16px; color: #B0B0B0; text-decoration-line: line-through;">
                ${items[i].lastPrice}
            </span>
        `
    item.style.cssText = "background-color: #F4F5F7; padding-bottom: 2rem;";
    moduleCards.appendChild(item);
}

fragment.appendChild(moduleCards);
document.body.appendChild(fragment);

function delNode(el){el.parentNode.parentNode.remove()}


// ========================== CSS ========================== //


body.style.cssText = `
    @import url('https://fonts.cdnfonts.com/css/gilroy-bold');
    padding: 0;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 2rem;
    right: 0;
    left: 0;
    top: 0;
    box-sizing: border-box;
    font-size: 1rem;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: #E5E5E5;
    
    font-family: 'Gilroy-Bold', sans-serif;
`;

h1.style.cssText = `
    font-weight: 700;
    font-size: 2.5rem;
    text-align: center;
    color: #3A3A3A;
`;

moduleCards.style.cssText = `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem 1rem;
`;