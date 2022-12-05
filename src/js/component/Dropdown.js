import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({name, uid, type}) => {
    return (
        <li className="dropdown-item">
      <Link  to={`/${type}/${uid}/detail`}>
        {name} 
      </Link>
    </li>
    )
}

export default Dropdown