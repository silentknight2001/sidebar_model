import React, { useState, useContext } from "react";



const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    const openSidebar = () => {
        setSidebarOpen(true);
    }
    const closeSidebar = () => {
        setSidebarOpen(false);
    }
    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return <AppContext.Provider value={{ isModalOpen, isSidebarOpen, openModal, closeModal, openSidebar, closeSidebar }}>{children}</AppContext.Provider>
}

// lets see how to create custom hook....

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }