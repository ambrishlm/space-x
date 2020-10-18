import fetch from "isomorphic-fetch";

export const fetchPrograms = async (url="https://api.spacexdata.com/v3/launches?limit=8") => {
    return await fetch( url )
        .then( res => res.json( ) )
        .then( res => res );
}
