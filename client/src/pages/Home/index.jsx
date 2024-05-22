import { useContext } from "react"
import "./home.scss"
import { useDataContext } from "../../Context/Context"
const Home = () => {
  const {data,setData}=useDataContext()
  return (
    <>
      <div className="section_first">
        <div className="first_main">
          <p>SPRING / SUMMER COLLECTION 2017</p>
          <h1>Get up to 30% Off <br />   New Arrivals</h1>
          <button>SHOP NOW</button>
        </div>
      </div>
      <div className="section_second">
        <div className="second_cards">
          <div className="card">
            <button>Men</button>
          </div>
          <div className="card">
            <button>Men</button>
          </div>
          <div className="card">
            <button>Men</button>
          </div>
        </div>

      </div>
      <div className="">
            {data && data.map((el)=>{
              
            })}
      </div>
    </>
  )
}

export default Home
