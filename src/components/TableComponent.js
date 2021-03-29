import React, { useMemo, useContext } from 'react'
import { DataContext } from '../context/index';





const TableComponent = () => {
    const mainData = useContext(DataContext);

    const bookData = useMemo(() => {
        let computedBookData = mainData

        return computedBookData;
    }, [mainData])


    // console.log(mainData)
    return (
        <>
                <tbody>
                    {bookData.data.map((book) => {
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