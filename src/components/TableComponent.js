import React, { useMemo, useContext, useEffect } from 'react'
import { DataContext } from '../context/index';


const TableComponent = () => { 
    const { data, search} = useContext(DataContext);

    const bookData = useMemo(() => {
        let computedBookData = data

        return computedBookData;
    }, [data])



    const filterbook = bookData.filter(books => {
        return books.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <>
                <tbody>
                {filterbook.map((book) => {
                            const { name, isbn, authors, numberOfPages,country,released} = book
                            return (
                                <tr key ={book.id}>
                                    <td>{ name}</td>
                                    <td>{isbn }</td>
                                    <td>{authors.join(' , ')}</td>
                                    <td>{numberOfPages }</td>
                                    <td>{ country}</td>
                                    <td>{released}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
        </>
        
    )
}

export default TableComponent