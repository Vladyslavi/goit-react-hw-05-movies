import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams, useLocation } from 'react-router-dom';
import { SearchForm, Input, Button } from './Form.styled';

const Form = ({ searchMovies }) => {
    const [query, setQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    useEffect(() => {
        const queryParam = new URLSearchParams(location.search).get('query');
        if (queryParam) {
            setQuery(queryParam.toLowerCase());
        }
    }, [location.search]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        searchParams.set('query', query.toLowerCase());
        setSearchParams(searchParams);

        const newUrl = `${location.pathname}?query=${query.toLowerCase()}`;
        window.history.pushState({}, '', newUrl);

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