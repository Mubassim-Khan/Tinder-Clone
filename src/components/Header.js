import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from "@mui/icons-material/Forum";

export default function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>

            <img
                src="https://filecache.mediaroom.com/mr5mr_tinder/178085/flame-gradient-RGB_tn1100-category.png"
                alt='' className="header__logo"
            />

            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    )
}
