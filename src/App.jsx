import Card from "./components/Card.jsx"
import Hero from "./components/Hero.jsx"
import Navbar from "./components/Navbar.jsx"
import data from "./data.js"

function App() {
  console.log(data)

  const cards = data.map((card) => {
    return(
      <Card
      key={card.id}
      {...card}
      />
    )
  })

  return (
    <>
        <Navbar/>
        <Hero/>
        <section className="cards-list">
          {cards}
        </section>
    </>
  )
}

export default App
