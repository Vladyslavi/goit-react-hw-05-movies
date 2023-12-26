import { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import EditorList from 'pages/EditorList/EditorList';
import Form from 'components/Form/Form';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchByKeyword } from 'services/TmbdApi';

const Movies = () => {
    const [searchFilms, setSearchFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [noMoviesText, setNoMoviesText] = useState(false);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const fetchData = async () => {
            const storedQuery = searchParams.get('query');
            if (storedQuery) {
                try {
                    setLoading(true);
                    const searchResults = await fetchSearchByKeyword(storedQuery);
                    setSearchFilms(searchResults);
                    setNoMoviesText(searchResults.length === 0);
                } catch (error) {
                    console.log(error);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchData();
        return () => {
        };
    }, [searchParams]);

    const searchMovies = queryMovie => {
        setLoading(true);

        fetchSearchByKeyword(queryMovie)
            .then(searchResults => {
                setSearchFilms(searchResults);
                setNoMoviesText(searchResults.length === 0);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <main>
            <Form searchMovies={searchMovies} />
            {loading && <Loader />}
            {noMoviesText && (
                <p>There is no movie with this request. Please try again.</p>
            )}
            {searchFilms && <EditorList films={searchFilms} />}
        </main>
    );
};

export default Movies;