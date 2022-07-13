<<<<<<< HEAD
import Header from "./components/Header";
import SalesCard from "./components/SalesCard";
=======
import Header from "./components/Header"
import SalesCard from "./components/SalesCard"
import NotificationButton from "./components/NotificationButton"
>>>>>>> 86c48da7b6d78c48ca068979e758f870a7707641

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App;
