

import { useState } from "react";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import chickenTikkaBites from "@/assets/menu/starters/Chicken_Tikka_Bites.png";
import crispyVegSpringRolls from "@/assets/menu/starters/Crispy_Veg_Spring_Rolls.png";
//import prawn65 from "@/assets/menu/starters/Prawn_65.png";
import chickenLollipop from "@/assets/menu/starters/Chicken_Lollipop.png";
import chickenMandi from "@/assets/menu/maindishes/Chicken_Mandi.png";
import butterChicken from "@/assets/menu/maindishes/Butter_Chicken.png";
import schezwanFriedRice from "@/assets/menu/maindishes/Schezwan_Fried_Rice.png";
import keralaParotta from "@/assets/menu/maindishes/Kerala_Parotta.png";
import Kunafa from "@/assets/menu/desserts/Kunafa.png";
import chocolateLavaCake from "@/assets/menu/desserts/Chocolate_Lava_Cake.png";
import fruitSalad from "@/assets/menu/desserts/Fruit_Salad.png";
import gulabJamun from "@/assets/menu/desserts/Gulab_Jamun.png";

const menuData = {
  Starters: [
    {
      id: "s1",
      name: "Chicken Tikka Bites",
      desc: "Juicy, flavorful chicken tikka bites infused with aromatic spices, coated in crisp breadcrumbs.",
      price: 8,
      image: chickenTikkaBites
    },
    {
      id: "s2",
      name: "Crispy Veg Spring Rolls",
      desc: "Crispy, golden spring rolls stuffed with a delicious mix of fresh vegetables and savory Asian flavors.",
      price: 6,
      image: crispyVegSpringRolls
    },
    // {
    //   id: "s3",
    //   name: "Prawn 65",
    //   desc: "Crispy, spicy prawn 65 tossed in a flavorful blend of South Indian spices and a hint of tangy heat.",
    //   price: 10,
    //   image: prawn65
    // },
    {
      id: "s4",
      name: "Chicken Lollipop",
      desc: "Crispy, spicy chicken lollipops marinated in bold flavors and served with a tangy dipping sauce.",
      price: 9,
      image: chickenLollipop
    }
  ],

  "Main Dish": [
    {
      id: "m1",
      name: "Chicken Mandi (Arabic Special)",
      desc: "Fragrant Arabic rice topped with tender, spiced chicken and served with aromatic mandi flavors.",
      price: 15,
      image: chickenMandi
    },
    {
      id: "m2",
      name: "Butter Chicken with Naan",
      desc: "Creamy butter chicken simmered in a velvety tomato sauce, served with soft, buttery naan.",
      price: 14,
      image: butterChicken
    },
    {
      id: "m3",
      name: "Schezwan Fried Rice with Chilli Chicken",
      desc: "Spicy Schezwan fried rice tossed with vegetables and served alongside flavorful, saucy chilli chicken.",
      price: 13,
      image: schezwanFriedRice
    },
    {
      id: "m4",
      name: "Kerala Parotta with Beef Curry",
      desc: "Flaky Kerala parotta served with rich, spicy beef curry bursting with authentic South Indian flavors.",
      price: 12,
      image: keralaParotta
    }
  ],

  Desserts: [
    {
      id: "d1",
      name: "Kunafa",
      desc: "Crispy, golden dessert made with shredded pastry, sweet cheese filling, and fragrant sugar syrup.",
      price: 7,
      image: Kunafa
    },
    {
      id: "d2",
      name: "Gulab Jamun",
      desc: "Soft, melt-in-your-mouth milk dumplings soaked in warm, fragrant sugar syrup.",
      price: 5,
      image: gulabJamun
    },
    {
      id: "d3",
      name: "Fruit Salad with Ice Cream",
      desc: "A refreshing mix of fresh fruits topped with creamy, chilled ice cream for a perfect sweet treat.",
      price: 6,
      image: fruitSalad
    },
    {
      id: "d4",
      name: "Chocolate Lava Cake",
      desc: "Warm, decadent chocolate cake with a rich, gooey molten center and irresistible flavor.",
      price: 8,
      image: chocolateLavaCake
    }
  ]
};

type Tab = keyof typeof menuData;

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Starters");
  const { addItem } = useCart();

  return (
    <section id="menu" className="py-24 lg:py-32 bg-surface/20 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
            Curated Selection
          </span>

          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">
            Our Menu
          </h2>

          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {(Object.keys(menuData) as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 font-sans text-sm tracking-widest uppercase rounded-full transition-all duration-300 ${activeTab === tab
                ? "bg-gold text-primary-foreground shadow-lg shadow-gold/20 border border-gold font-bold"
                : "btn-glass"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {menuData[activeTab].map((item) => (
            <div
              key={item.id}
              className="bg-surface-elevated border border-border rounded-lg overflow-hidden group hover:border-gold/40 transition-all duration-300 flex flex-col"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
              />

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-serif text-xl font-semibold text-foreground">
                    {item.name}
                  </h4>

                  <span className="text-gold font-semibold">
                    ${item.price}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>

                {/* ADD BUTTON */}
                <button
                  onClick={() =>
                    addItem({
                      id: item.id,
                      name: item.name,
                      price: item.price
                    })
                  }
                  className="mt-auto w-full py-2 btn-glass rounded-full flex items-center justify-center gap-2 text-xs"
                >
                  <Plus size={16} />
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MenuSection;
