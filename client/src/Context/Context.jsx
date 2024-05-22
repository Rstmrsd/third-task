import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const mainContext = createContext(null)

const DataContextProvider = ({children})=>{
    const [data, setData] = useState([]);
    const [search,setSearch]=useState([])
    console.log(data)
    const getAllData = async ()=>{

        axios.get("http://localhost:1212/api/product").then((res) => {
          setData(res.data);
          console.log(res.data);
          setSearch(res.data)
        });
    }
    const [basket, setBasket] = useState(
        localStorage.getItem("basket")
          ? JSON.parse(localStorage.getItem("basket"))
          : []
      );

      const addToBasket = (item) => {
        const target = basket.find((x) => x.product._id == item._id);
        if (target) {
          target.count += 1;
          target.totalPrice = target.count * target.product.price;
          setBasket([...basket]);
          localStorage.setItem("basket", JSON.stringify([...basket]));
        } else {
          const newItem = {
            _id: item._id,
            product: item,
            count: 1,
            totalPrice: item.price,
          };
          setBasket([...basket, newItem]);
          localStorage.setItem("basket", JSON.stringify([...basket, newItem]));
        }
      };
      const increaseItem = (item) => {
        const target = basket.find((x) => x.product._id == item._id);
        target.count += 1;
        target.totalPrice = target.count * target.product.price;
        setBasket([...basket]);
        localStorage.setItem("basket", JSON.stringify([...basket]));
      };
      const decreaseItem = (item) => {
        const target = basket.find((x) => x.product._id == item._id);
        if (target.count > 0) {
          target.count -= 1;
          target.totalPrice = target.count * target.product.price;
          setBasket([...basket]);
          localStorage.setItem("basket", JSON.stringify([...basket]));
        }
      };
      const deleteBasketItem = (item) => {
        const target = basket.find((x) => x.product._id == item._id);
        basket.splice(basket.indexOf(target), 1);
        setBasket([...basket]);
        localStorage.setItem("basket", JSON.stringify([...basket]));
      };

    
    const postData = async(payload)=>{
        await axios.post("http://localhost:1212/api/product",payload).then(()=>{
            setData([...data,payload])
        })
            
        
    }


    useEffect(() => {
        getAllData()
    }, []);

    const value = {
        data,
        setData,
        basket,
        setBasket,
        postData,
        deleteBasketItem,
        decreaseItem,
        increaseItem,
        addToBasket,
        search
    }
    return (
        <mainContext.Provider value={value}>
            {children}
        </mainContext.Provider>
    )
}


const useDataContext = ()=>useContext(mainContext)

export  {DataContextProvider , useDataContext}