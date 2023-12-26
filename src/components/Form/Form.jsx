import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SearchForm, Input, Button } from './Form.styled';
import { useSearchParams } from 'react-router-dom';

const Form = ({ searchMovies }) => {
    const [query, setQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const queryFromParams = searchParams.get('query');
        if (queryFromParams && query !== queryFromParams) {
            setQuery(queryFromParams);
        }
    }, [searchParams, query, setQuery]);

    const handleInputChange = event => {
        setQuery(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        setSearchParams({ query: query.toLowerCase() });
        searchMovies(query.toLowerCase());
    };

    return (
        <SearchForm onSubmit={handleSubmit}>
            <Input
                type="text"
                name="query"
                autoFocus
                value={query}
                onChange={handleInputChange}
            />
            <Button type="submit">Search</Button>
        </SearchForm>
    );
};

Form.propTypes = {
    searchMovies: PropTypes.func.isRequired,
};

export default Form;