import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from "@mui/icons-material/Forum";

export default function Header() {
    return (
        <div className="header">
            {/* Left Btn (Person) */}
            <IconButton className="header__icon" >
                <PersonIcon fontSize="large" />
            </IconButton>
            {/* Center Tinder logo */}
            <img
                src="https://filecache.mediaroom.com/mr5mr_tinder/178085/flame-gradient-RGB_tn1100-category.png"
                alt='' className="header__logo"
            />
            {/* Right Btn (Chat Button) */}
            <IconButton className="header__icon">
                <ForumIcon fontSize="large" />
            </IconButton>
        </div>
    )
}
