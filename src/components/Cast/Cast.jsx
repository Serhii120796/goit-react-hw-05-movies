import { useState, useEffect } from "react";
import { fetchCast } from "tmdbAPI";
import { CastItem } from './Cast.styled';

export const Cast = ({ id }) => {
    const [cast, setCast] = useState([]);

    useEffect(() => {

        async function getCast() {
            try {
                const { cast } = await fetchCast(id);
                setCast(cast);
                console.log(cast);
            }
            catch (error) {
                console.log(error);
            }
        }
        getCast()
    }, [id])

    return <ul>
        {cast.map(({ cast_id, name, profile_path, character }) =>
            <CastItem key={cast_id}>
                <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt="" />
                <div>
                <p>{name}</p>
                <p>{`Character: ${character}`}</p>
                </div>
            </CastItem>)}
    </ul>
};
// консоль двоїться