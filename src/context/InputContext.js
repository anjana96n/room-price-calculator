import { createContext, useState } from "react";

export const InputContext = createContext();

export default function InputContextProvider(props){
    // const [age, setAge] = useState()
    const [numberOfAdults, setNmberOfAdults] = useState()
    const [numberOfChildrenCat1, setNumberOfChildrenCat1] = useState(0)
    const [numberOfChildrenCat2, setNumberOfChildrenCat2] = useState(0)
    const [roomType, setRoomType] = useState('')

    return(
        <InputContext.Provider value={{numberOfAdults, numberOfChildrenCat1, numberOfChildrenCat2, roomType, setNmberOfAdults, setNumberOfChildrenCat1, setNumberOfChildrenCat2, setRoomType}}>
            {props.children}
        </InputContext.Provider>
    )
}
