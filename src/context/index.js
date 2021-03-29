import React, { useState, useEffect } from 'react';

const DataContext = React.createContext();



const DataProvider = ({ children }) => {
    
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch]= useState("")
    const booksPerPage = 10

    // let booksPerPage = 10

    

    useEffect(() => {
        const getData = () => {
            console.log("current page " + currentPage)
            console.log("books per page " + booksPerPage)
            fetch(`https://www.anapioficeandfire.com/api/books?page=${currentPage}&pageSize=${booksPerPage}`)
                .then((res) => res.json())
                .then((books) => {
                    setData(books)
                })
        }
        getData()
    }, [currentPage, totalPages])

    return (
        <DataContext.Provider value={{
            data,
            booksPerPage,
            currentPage,
            setCurrentPage,
            totalPages,
            setTotalPages,
            search,
            setSearch
        }}>
            {children}    
        </DataContext.Provider>
    );
}
export { DataContext, DataProvider}
