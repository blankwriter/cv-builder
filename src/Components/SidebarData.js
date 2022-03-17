import React from 'react';

import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text'
  },

  {
    title: 'Profile',
    path: '/profile',
    icon: <AiIcons.AiFillProfile/>,
    cName: 'nav-text'
  },
  {
    title: 'Education',
    path: '/education',
    icon: <IoIcons.IoMdSchool/>,
    cName: 'nav-text'
  },

  {
    title: 'Experience',
    path: '/experience',
    icon: <MdIcons.MdWork/>,
    cName: 'nav-text'
  },
]