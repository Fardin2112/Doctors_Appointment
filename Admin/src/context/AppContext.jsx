import { createContext } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const calculateAge = (dob) => {
        const today = new Date()
        const birthDate = new Date(dob)
        console.log(today,birthDate)

        let age = today.getFullYear() - birthDate.getFullYear()
        return age
    }
    // logic to change - date to in month
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

    const slotDateFormate = (slotDate) => {
      const dateArray = slotDate.split('_')
      return dateArray[0]+ " "+ months[Number(dateArray[1])-1] + " "+ dateArray[2]
    }
    const value = {
        calculateAge,
        slotDateFormate
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider 