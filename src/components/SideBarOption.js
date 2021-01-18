import React from 'react'

const SideBarOption = ({ Icon, title }) => {
  return (
    <div className='sidebarOptions'>
      {Icon && <Icon className='sidebarOption__icon' />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3>
          <span className='sidebarOption__hash'># {title}</span>
        </h3>
      )}
    </div>
  )
}

export default SideBarOption
