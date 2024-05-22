
import { useDataContext } from "../Context/Context"
const Basket = () => {
    const { basket, decreaseItem, increaseItem, deleteBasketItem } = useDataContext()
    console.log(basket)
    return (
        <>
            <table className="table" style={{ marginTop: "100px" }} >
                <thead>
                    <tr>
                        <th scope="col">name</th>
                        <th scope="col">price</th>
                        <th scope="col">count</th>
                        <th scope="col">decrease</th>
                        <th scope="col">increse</th>
                        <th scope="col">totalPrice</th>
                        <th scope="col">delete</th>

                    </tr>
                </thead>
                <tbody>


                    {
                       basket && basket.map((item) => {
                            return (
                                <>
                                
                                <tr>
                                    <th scope="row">{item.product.title}</th>
                                    <td>{item.product.price}</td>
                                    <td>{item.count}</td>
                                    <td><button onClick={() => {
                                        decreaseItem(item)
                                    }}>decrease</button></td>
                                    <td><button onClick={() => {
                                        increaseItem(item)
                                    }
                                    }>increase</button></td>

                                    <td>{item.totalPrice}</td>

                                    <td><button onClick={() => {
                                        deleteBasketItem(item)
                                    }}>delete</button></td>

                                </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )

}
export default Basket
