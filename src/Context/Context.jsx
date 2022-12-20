import React, {createContext, useState} from 'react'

export const EventContext = createContext()
const ContextProvider = ({children}) => {
    const [eventsData, setEventsData] = useState()
    const [userData, setUserData] = useState({isLogged:false})
  return (
    <EventContext.Provider value={{eventsData, setEventsData, userData, setUserData}} >
        {children}
    </EventContext.Provider>
  )
}

export default ContextProvider