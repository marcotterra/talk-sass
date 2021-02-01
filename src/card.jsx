import React from 'react'
import './card.scss'

export const Card = ({children, className}) => {
  const classSelector = `card card--large ${className || ''}`;

  return (
    <>
      <div className={classSelector}>
        <div className="card__title">
          Title
        </div>

        <div className="subtitle">
          subtitle
        </div>

        <div className="card__body">
          {children || 'oie'}
        </div>
      </div>
    </>
  )
}

export default Card
