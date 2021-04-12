import { useContext } from 'react'
import { DataContext } from '../context/index';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faSortUp, faSortDown, faSort} from '@fortawesome/free-solid-svg-icons'




const SortTable = ({ sortTypes}) => {

    const { currentSort,setCurrentSort } = useContext(DataContext);


    const onSortChange = () => {
        // setCurrentSort(currentSort)
        
        let nextSort;
        
        if (currentSort === 'down') {
            nextSort = 'up'
        }
        else if (currentSort === "up") {
            nextSort = 'default';
        }
        else if (currentSort === 'default') {
            nextSort = 'down'
        }
        setCurrentSort(nextSort)
    }

    console.log(typeof(sortTypes[currentSort].class))
    
    // const dat = sortTypes[currentSort].class
    return (
        <thead>
            <tr>
                <th>Name
                    <button onClick={onSortChange}>
                        {/* <FontAwesomeIcon icon={console.log(sortTypes["down"].class)} /> */}
                        {/* <FontAwesomeIcon icon={faSortUp} /> */}

                        <i className={`fas fa-${sortTypes[currentSort].class}`} />


                    </button>
                </th>
                <th>ISBN</th>
                <th>Authors</th>
                <th>Pages</th>
                <th>Country</th>
                <th>Released</th>
            </tr>
        </thead>
    )
}


export default SortTable