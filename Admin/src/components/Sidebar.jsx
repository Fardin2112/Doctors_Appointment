import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AdminContext } from '../context/AdminContext'

function Sidebar() {

    const {aToken} = useContext(AdminContext)

  return (
    <div>
        {
            aToken && <ul>
                <NavLink>

                </NavLink>
            </ul>
        }
    </div>
  )
}

export default Sidebar