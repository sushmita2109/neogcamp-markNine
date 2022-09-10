import { useState } from "react";
import "./App.css";

const listoffoods = {
  indifoods: [
    {
      name: "mutter paneer",
      desc:
        "vegetarian North Indian dish consisting of peas and paneer in a tomato based sauce, spiced with garam masala",
      rating: "4.2/5"
    },
    {
      name: "chicken tikka massala",
      desc:
        "Chicken Tikka Masala is usually made with yogurt marinated chicken, skewered and chargrilled for incredible bbq flavours. ",
      rating: "4.5/5"
    },
    {
      name: "naan",
      desc: "Naan is a leavened, oven-baked flatbread native to India",
      rating: "3/5"
    }
  ],

  japfoods: [
    {
      name: "ramen",
      desc:
        "ramen is a Japanese noodle soup, with a combination of a rich flavoured broth, one of a variety of types of noodle and a selection of meats or vegetables, often topped with a boiled egg.",
      rating: "4/5"
    },
    {
      name: "sushi",
      desc:
        "sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavoured with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold.",
      rating: "4/5"
    },
    {
      name: "Tempura",
      desc:
        "In tempura, vegetables and fish such as pumpkin, sweet potato, seaweed, shrimp, and green beans are fried. ",
      rating: "4.2/5"
    }
  ],
  contfoods: [
    {
      name: "Crispy Calamari Rings",
      desc: "These are basically squid rings deep fried in tempura batter. ",
      rating: "3.9/5"
    },
    {
      name: "Grilled Chicken Breasts With Chillies & Lemongrass",
      desc:
        "The Chicken is Grilled and stirred with Chillies, LemonGrass, and some Red Wine Sauce on the top to make it completely stunning.",
      rating: "4/5"
    },
    {
      name: "Sausage Pepper Burger",
      desc:
        "The burger has Onion Stir Friend in Tangy and Sweet Sauce, which is stuffed between the burger buns. ",
      rating: "4.2/5"
    }
  ]
};

export default function App() {
  const [foods, setfoods] = useState("indifoods");
  const favFoods = Object.keys(listoffoods);

  function clickHandler(cuisine) {
    return setfoods(cuisine);
  }

  return (
    <div className="App">
      <nav className="navigation">
        <div>🧑‍🍳 Good Food</div>
      </nav>
      <main className="main-sec">
        <p>Checkout my favrouite food.Select a cuisine to get started</p>
        {favFoods.map((cusinie) => (
          <button key={cusinie} onClick={() => clickHandler(cusinie)}>
            {cusinie}
          </button>
        ))}
        <hr />
        {listoffoods[foods].map((food) => (
          <li className="list" key={food}>
            <div className="nonBullet">
              Food Name:<span>{food.name}</span>
            </div>
            <div>
              Food Desc:<span>{food.desc}</span>
            </div>
            <div>
              Food Ratting:<span>{food.rating}</span>
            </div>
          </li>
        ))}
      </main>
    </div>
  );
}
