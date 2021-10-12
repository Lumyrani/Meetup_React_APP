import {createContext, useState} from 'react'

const FavoritesContext =createContext({

    favorites:[],
    totalFavorites:0,
    addFavorite:(favoritemeetup)=>{},
    removeFavorite:(meetupid)=>{},
    itemIsFavorite:(meetupid)=>{}

})
export function FavoritesContextProvider(props){
const addFavHandler=(favoritesmeetup)=>{
    // (userFavorites.concat(favoritesmeetup)
    setUserFavs((prevsfav)=>{
        return prevsfav.concat(favoritesmeetup)

    })

}

const removeFavHandler=()=>{
    setUserFavs((prevsfav)=>{
        return prevsfav.filter(meetup=>meetup.id != meetup.id)})
}

const itemIsFavHandler =(meetupid)=>{
    return userFavorites.some(meetup=>meetup.id==meetupid)
    
}

    const [userFavorites,setUserFavs]=useState([])
    const context={
        favorites:userFavorites,
        totalFavorites:userFavorites.length,
        addFavorite:addFavHandler,
        removeFavorite:removeFavHandler,
        itemIsFavorite:itemIsFavHandler
}


    return<FavoritesContext.Provider value={context}>
        {props.children}

    </FavoritesContext.Provider>
}
export default FavoritesContext