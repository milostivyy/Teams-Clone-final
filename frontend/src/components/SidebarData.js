import React from 'react';
//importing FaIcons from react icons library by doing yarn add react-icons in frontend folder of project.
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Activity',
    path: '/',//this  will give path to icons specified below here it is Home page  path specified with "/".
    icon: <AiIcons.AiFillHome />, //Here react.js will take AiFillHome icon from AiIcons library.
    cName: 'nav-text'
  },
  {
    title: 'VideoChat',
    path: '/VideoChat',//this  will give path to icons specified below here it is Home page  path specified with "/".
    icon: <IoIcons.IoIosCall />,//Here react.js will take IoIosCall icon from IoIcons library.
    cName: 'nav-text'
  },
  {
    title: 'Chat',
    path: '/Chat',//this  will give path to icons specified below here it is Home page  path specified with '/Chat'.
    icon: <FaIcons.FaCommentDots />,//Here react.js will take FaCommentDots icon from FaIcons library.
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/team',//this  will give path to icons specified below here it is Home page  path specified with '/team'.
    icon: <IoIcons.IoMdPeople />,//Here react.js will take IoMdPeople icon from IoIcons library.
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',//this  will give path to icons specified below here it is Home page  path specified with '/messages'.
    icon: <FaIcons.FaEnvelopeOpenText />,//Here react.js will take FaEnvelopeOpenText icon from FiIcons library.
    cName: 'nav-text'
  },
  {
    title: 'Help',
    path: '/support',//this  will give path to icons specified below here it is Home page  path specified with "/support".
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];