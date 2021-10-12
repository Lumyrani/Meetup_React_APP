import React from "react";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import { MeetupList } from "../components/meetup/MeetupList";

export const Favorites = () => {
  const context = useContext(FavoritesContext);
  if (context.totalFavorites == 0) {
    return <p> No Favorite meetups</p>;
  } else {
    return (
      <div>
        <h1>Favorites </h1>
        <MeetupList meetuplist={context.favorites} />
      </div>
    );
  }
};
