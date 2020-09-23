import { Button } from '@material-ui/core';
import React from 'react';
import SearchResult from '../searchResult/SearchResult';
import './SearchPage.css'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays · 26 August to 30 August · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">
                    Cancellation Flexibility
                </Button>
                <Button variant="outlined">
                    Type of place
                </Button>
                <Button variant="outlined">
                    Price
                </Button>
                <Button variant="outlined">
                    Rooms and beds
                </Button>
                <Button variant="outlined">
                    More filters
                </Button>

                <SearchResult
                    img="https://a0.muscache.com/im/pictures/a5030db0-da3e-4445-9324-27681675ec67.jpg?im_w=1200"
                    location="Toronto, Ontario, Canada"
                    title="Cozy Upper Beach Suite with Private Entrance"
                    description="2 guests · 1 bedroom · 1 bed · 1 bath"
                    star={4.87}
                    price="$80 / night"
                    total="$320 total"
                />
            </div>
        </div>
    )
}

export default SearchPage 
