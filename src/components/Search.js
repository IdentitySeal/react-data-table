import React,{ useContext,useEffect, useState} from 'react';
import { DataContext} from '../context/index'

const Search = () => {
    const getData = useContext(DataContext);
    const { search, setSearch, setCurrentPage, data, setData } = getData;

    // const [filteredbooks, setFilteredBooks] = useState([]);

    const onInputChange = (e) => {
        setSearch(e.target.value)
        setCurrentPage(1)
        // console.log(search) 
        const filterbooks = data.filter(books => {
            return books.name.toLowerCase().includes(search.toLowerCase())
        })

        // setFilteredBooks(filterbooks)
        // console.log(filteredbooks)


        setData(filterbooks)

    }
    
    // useEffect(() => {
    //     onInputChange()
    // },[])

    return (
        <input 
            type="text"
            className="form-control"
            placeholder="Search"
            style ={{width:'200px'}}
            onChange={onInputChange}
        />
    )
}
export default Search