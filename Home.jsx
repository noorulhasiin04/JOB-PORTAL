const dishes = [
  {
    name: "Garden flatbread",
    description: "Whipped ricotta, garden herbs, lemon oil",
    price: "$14",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Fresh flatbread with herbs and seasonal vegetables",
    tag: "A guest favorite",
  },
  {
    name: "Sunday tomato pasta",
    description: "Slow-roasted tomatoes, basil, parmesan",
    price: "$18",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
    imageAlt: "A bowl of pasta served with tomato sauce",
    tag: "Made from scratch",
  },
  {
    name: "Honey olive cake",
    description: "Citrus cream, local honey, toasted almond",
    price: "$9",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    imageAlt: "A freshly baked cake ready to share",
    tag: "Save room",
  },
];

function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow"><span /> YOUR NEW FAVORITE TABLE</p>
          <h1>Made for<br />the <em>love</em> of food.</h1>
          <p className="hero-copy">
            Seasonal plates, thoughtfully sourced ingredients, and a seat saved
            just for you.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#visit">Find your table <span>↗</span></a>
            <a className="text-link" href="#menu">Explore the menu <span>↓</span></a>
          </div>
          <div className="hero-caption"><span>01 / 03</span> GOOD THINGS ARE GROWING</div>
        </div>
        <div className="hero-image" role="img" aria-label="A warmly lit restaurant table set for dinner" />
        <div className="hero-stamp"><span>FRESH</span><span>LOCAL</span><span>ALWAYS</span></div>
      </section>

      <section className="intro section-wrap" id="story">
        <p className="eyebrow">A LITTLE MORE DELICIOUS</p>
        <h2>Come hungry.<br /><em>Leave happy.</em></h2>
        <p className="intro-copy">
          We believe the best meals are the ones you share. Pull up a chair for
          seasonal favorites, familiar comforts, and something unexpected.
        </p>
        <a className="underlined-link" href="#visit">Come visit us <span>↗</span></a>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FROM OUR KITCHEN</p>
              <h2>Worth <em>sharing.</em></h2>
            </div>
            <p className="section-description">
              A few things we love making right now. Our menu changes with the
              seasons, so there’s always something new to try.
            </p>
          </div>
          <div className="dish-grid">
            {dishes.map((dish, index) => (
              <article className="dish-card" key={dish.name}>
                <div className="dish-image-wrap">
                  <img src={dish.image} alt={dish.imageAlt} loading="lazy" />
                  <span className="dish-number">0{index + 1}</span>
                </div>
                <div className="dish-details">
                  <div>
                    <p className="dish-tag">{dish.tag}</p>
                    <h3>{dish.name}</h3>
                    <p className="dish-description">{dish.description}</p>
                  </div>
                  <span className="dish-price">{dish.price}</span>
                </div>
              </article>
            ))}
          </div>
          <p className="menu-note">Our menu is seasonal. Ask us what’s fresh today.</p>
        </div>
      </section>

      <section className="visit-banner" id="visit">
        <div className="visit-content">
          <p className="eyebrow">THE TABLE IS SET</p>
          <h2>Make tonight<br />a <em>little special.</em></h2>
          <p>Bring your favorite people. We’ll take care of the rest.</p>
          <a className="button button-dark" href="mailto:hello@saffronandstone.example">Plan your visit <span>↗</span></a>
          <div className="visit-details">
            <div><strong>FIND US</strong><span>Your street address, Your city</span></div>
            <div><strong>HOURS</strong><span>Tuesday – Sunday, 12 pm – 10 pm</span></div>
            <div><strong>SAY HELLO</strong><span>hello@saffronandstone.example</span></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
