const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./media/menu-images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.tundercats freegan. `,
  },
  {
    id: 2,
    title: "diner double",
    category: "diner",
    price: 13.99,
    img: "./media/menu-images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./media/menu-images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 4,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./media/menu-images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 5,
    title: "oreo dream",
    category: "Budget Meal",
    price: 18.99,
    img: "./media/menu-images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 6,
    title: "bacon overflow",
    category: "diner",
    price: 8.99,
    img: "./media/menu-images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 7,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./media/menu-images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 8,
    title: "quarantine buddy",
    category: "Budget Meal",
    price: 16.99,
    img: "./media/menu-images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const articleArea = document.querySelector(".menu-article-area");
function diplayMenuItems(menuVal) {
  let displayMenu;

  displayMenu = menuVal.map( (item) =>{
    // console.log(item);
    return `<article class="card-container">
    <div class="card">
      <figure class="figure">
          <img loading="lazy" src=${item.img} class="card-img" alt=${item.title}>
          <figcaption>
          <h4>${item.title}</h4>
          <h4 class="price">$${item.price}</h4>
          <p class="item-text">
          ${item.desc}
        </p>
          </figcaption>
      </figure>
    </div>
    </article>`;
  });

  displayMenu = displayMenu.join("");
  //console.log(displayMenu);
  articleArea.innerHTML = displayMenu;
}
window.addEventListener("DOMContentLoaded",  ()=> {
  diplayMenuItems(menu);
});
const menubtn = document.querySelector(".menu-item");
const menuItems = menubtn.querySelectorAll(".menu-item-list");

menuItems.forEach(Item =>{
  Item.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(Item);
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter( (menuitem)=> {
      // console.log(menuItem.category);
      if (menuitem.category.toLowerCase() === category.toLowerCase()) {
        return menuitem;
      }
    });
    if (category.toLowerCase() === "all menu") {
      diplayMenuItems(menu);
    } else {
      diplayMenuItems(menuCategory);
    }
  });
});
