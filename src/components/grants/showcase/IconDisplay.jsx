import React from 'react';
import FavoritesIconButton from "./FavoritesIconButton";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import DeleteIcon from "@material-ui/icons/Delete";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import {logger} from "../../../store/utils/logger";

function IconDisplay({favoriteGrants, existingFavorite, id}) {
    logger("Existing Favorite", existingFavorite)
    return (
        <>
            {favoriteGrants.length > 0 && existingFavorite.length ? (
                <>
                    <FavoritesIconButton
                        title='In Favorites'
                        label='added to favorites'
                        icon={BookmarkIcon}
                        button
                    />
                    <FavoritesIconButton
                        title="Delete Favorites"
                        label="DeleteIcon"
                        button
                        icon={DeleteIcon}
                        id={existingFavorite[0].favoriteID}
                        removeFavorite
                    />
                </>
            ) : (
                <FavoritesIconButton
                    title='Add to Favorites'
                    label='save'
                    icon={BookmarkBorderOutlinedIcon}
                    button
                    id={id}
                />
            )}
        </>
    )
}

export default IconDisplay;
