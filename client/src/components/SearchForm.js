import React from 'react';
import Button from '../elements/Button';
import Input from '../elements/Input';
import InputGroup from '../elements/InputGroup';

const SearchForm = ({onSubmit}) => {
  return (
    <form id="SearchForm" onSubmit={onSubmit}>
      <h1>Search for Books</h1>
      <InputGroup name="search">
        <Input className="search" name="search" />
      </InputGroup>
      <Button id="search-button" type="submit" color="primary" />
    </form>
  )
}

export default SearchForm;