import React, { useMemo, useContext } from 'react'
import { DataContext } from '../../context/index';
import SortTable from '../SortTable'
import LoaderComponent from '../Loader/LoaderComponent'

import './TableComponent.css'


const TableComponent = () => { 
    const { data, search, loading, currentSort, currentPage, booksPerPage} = useContext(DataContext);

    const bookData = useMemo(() => {
        let computedBookData = data

        return computedBookData.slice(
            (currentPage - 1) * booksPerPage,
            (currentPage - 1) * booksPerPage + booksPerPage
        );
    }, [data,currentPage,booksPerPage])


    const filterbook = bookData.filter(books => books.name.toLowerCase().includes(search.toLowerCase()))

    const sortTypes = {
        
        down: {
            class: "sort-down",
            fn: (a, b) => { if (a.name.toLowerCase() > b.name.toLowerCase()) return -1; else { return 1} }
        },
        up: {
            class: "sort-up",
            fn: (a, b) => { if (a.name.toLowerCase() < b.name.toLowerCase()) return -1 ; else { return 1} }
        },
        default: {
            class: "sort",
            fn: (a, b) => 0
        }
    };

    function capitalize(string) {
        return string[0].toUpperCase() + string.slice(1)
    
    }

    const formatDate = (dateStr) => {

        const year = dateStr.slice(0, 4)
        const month = dateStr.slice(5, 7)
        const date = dateStr.slice(8, 10)
        // console.log(year + " " + month + "," + date)
        return dateStr =` ${year}-${month}-${date}`
    }
    return (
        <>
            {/* <div className="tableComponent"> */}
            <SortTable sortTypes={sortTypes} />
            
            
            {!loading ?
                <LoaderComponent />
                :
                <tbody>

                    {filterbook.sort(sortTypes[currentSort].fn).map(book => {
                        console.log(sortTypes[currentSort].fn)
                        const { name, isbn, authors, pages, country, released } = book
                        console.log(typeof(released))

                        return (<tr>
                            <td>{capitalize(name)}</td>
                            <td>{isbn}</td>
                            <td>{capitalize(authors.join(' , '))}</td>
                            <td>{pages}</td>
                            <td>{capitalize(country)}</td>
                            <td>{formatDate(released)}</td>
                        </tr>)
                    })}

                </tbody>
                }
            {/* </div> */}
        </>
        
    )
}

export default TableComponent