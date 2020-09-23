import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Search from '../search/Search';
import './Banner.css';

function Banner() {
    const history = useHistory();
    const [ShowSearch, setShowSearch] = useState(false);

    return (
        <div className="banner">
            <div className="banner__search">
                {ShowSearch && <Search />}
                <Button
                    onClick={() => setShowSearch(!ShowSearch)}
                    className="banner__searchButton"
                    variant="outlined"
                >
                    {!ShowSearch ? "Search Dates" : "Hide"}
                </Button>
            </div>
            <div className="banner__info">
                <h1>
                    Get out and stretch your imagination
                </h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <Button
                    variant='outlined'
                    onClick={() => history.push('/search')}
                >
                    Explore Nearby
                </Button>
            </div>
        </div>
    )
}

export default Banner