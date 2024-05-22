
import Detail from "./pages/Detail"
import Add from "./pages/Add"
import Home from "./pages/Home"
import Basket from "./pages/Basket"
import MainRoot from "./pages/MainRoot"

export const ROOTES =[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"basket",
                element:<Basket/>
            },
            {
                path:"id",
                element:<Detail/>
            },
            {
                path:"add",
                element:<Add/>
            }

        ]
    }
]
