import React, { useState, useEffect } from 'react';

const DataContext = React.createContext();




const DataProvider = ({ children }) => {
    
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)
    const [currentSort, setCurrentSort] = useState('default')

    const booksPerPage = 10

    // let booksPerPage = 10

    

    useEffect(() => {
        const getData = async () => {
            console.log("current page " + currentPage)
            console.log("books per page " + booksPerPage)
            // return await fetch(`https://www.anapioficeandfire.com/api/books?page=${currentPage}&pageSize=${booksPerPage}`)
            return await fetch(`http://localhost:8000/api/books`)
                .then((res) => res.json())
                .then((books) => {
                    setData(books)
                    setLoading(true)
                })
        }
        getData()
    }, [currentPage])

    

    return (
        <DataContext.Provider value={{
            data,
            setData,
            booksPerPage,
            currentPage,
            setCurrentPage,
            totalPages,
            setTotalPages,
            search,
            setSearch,
            loading,
            setLoading,
            currentSort,
            setCurrentSort
        }}>
            {children}    
        </DataContext.Provider>
    );
}
export { DataContext, DataProvider}
