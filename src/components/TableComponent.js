import React, { useMemo, useContext } from 'react'
import SortTable from './SortTable'
import LoaderComponent from './Loader/LoaderComponent'
import { DataContext } from '../context/index';


const TableComponent = () => { 
    const { data, search, loading, currentSort} = useContext(DataContext);

    const bookData = useMemo(() => {
        let computedBookData = data

        return computedBookData;
    }, [data])


    const filterbook = bookData.filter(books => books.name.toLowerCase().includes(search.toLowerCase()))

    const sortTypes = {
        
        down: {
            class: 'arrow-down',
            fn: (a, b) => { if (a.name.toLowerCase() > b.name.toLowerCase()) return -1; else { return 1} }
        },
        default: {
            class: 'sort',
            fn: (a, b) => 0
        },
        up: {
            class: 'arrow-up',
            fn: (a, b) => { if (a.name.toLowerCase() < b.name.toLowerCase()) return -1 ; else { return 1} }
        }
    };

    fetch("https://www.anapioficeandfire.com/api/characters")
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    return (
        <>
            <SortTable sortTypes={sortTypes} />
            
            
            {!loading ?
                <LoaderComponent />
                :
                <tbody>

                    {filterbook.sort(sortTypes[currentSort].fn).map(p => {
                        console.log(p)
                        console.log(sortTypes[currentSort].fn)
                        return (<tr>
                            <td>{p.name}</td>
                            <td>{p.isbn}</td>
                            <td>{p.authors.join(' , ')}</td>
                            <td>{p.numberOfPages}</td>
                            <td>{p.country}</td>
                            <td>{p.released}</td>
                        </tr>)
                    })}


                {/* {filterbook.map((book , index) => {
                    const { name, isbn, authors, numberOfPages, country, released } = book
                    
                    console.log(typeof date)
                            return (
                                <tr key={index}>
                                    <td>{ name}</td>
                                    <td>{isbn }</td>
                                    <td>{authors.join(' , ')}</td>
                                    <td>{numberOfPages}</td>
                                    <td>{country}</td>
                                    <td>{released}</td>
                                </tr>
                            )
                        })
                    } */}
                </tbody>
            }
        </>
        
    )
}

export default TableComponent