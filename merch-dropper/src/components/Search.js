import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchStoreName } from '../store/actions';

const Search = (props) => {
    console.log(props.storeName)

    const [searchValue, setSearchValue] = useState("");

    const handleSearchInput = e => {
        setSearchValue(e.target.value);
    };

    const resetInputField = e => {
        setSearchValue('');
    };

    const callSearchFunction = e => {
        e.preventDefault();
        props.searchStoreName(searchValue);
        resetInputField();
    };

    return (
        <form className='search'>
            <input 
                value={searchValue}
                onChange={handleSearchInput}
                type='text'
                placeholder='Store Name'
            />
            <input onClick={callSearchFunction} type='submit' value='SEARCH' />
        </form>
    )
};

const mapStateToProps = (state) => {
    let search = state.SearchReducer
    console.log(search)
    return {
        storeName: search.storeName,
        isFetching: search.isFetching,
        error: search.error
    };
};

export default connect(mapStateToProps, { searchStoreName })(Search);
