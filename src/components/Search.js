import React,{ useContext} from 'react';
import { DataContext} from '../context/index'

const Search = () => {
    const getData = useContext(DataContext);
    const { search, setSearch, setCurrentPage, currentPage} = getData;


    const onInputChange = (e) => {
        setSearch(e.target.value)
        setCurrentPage(currentPage)

        console.log(search)

    }

    return (
        <input 
            type="text"
            className="form-control"
            placeholder="Search"
            style ={{width:'200px'}}
            onChange={onInputChange}
            value={search}
        />
    )
}
export default Search