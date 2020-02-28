import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchStoreName } from '../store/actions';
import { Input, Button } from 'reactstrap';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Search = (props) => {

    const history = useHistory();

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
        history.push('/products')
    };

    return (
        <Form className='search'>
            <Input 
                value={searchValue}
                onChange={handleSearchInput}
                type='text'
                placeholder='Store Name'
            />
            <Button onClick={callSearchFunction}>
                Search
            </Button>
        </Form>
    )
};

const Form = styled.form`
    display: flex;
`;

const mapStateToProps = (state) => {
    let search = state.SearchReducer
    // console.log(search)
    return {
        storeName: search.storeName,
        isFetching: search.isFetching,
        error: search.error
    };
};

export default connect(mapStateToProps, { searchStoreName })(Search);
