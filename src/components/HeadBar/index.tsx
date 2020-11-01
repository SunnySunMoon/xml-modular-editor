import React from 'react'
import './index.less'

function HeadBar() {
  return (
    <div className="head-bar">
      <div className="bar-wrapper">
        <div className="menu">
          <div className="menu-item">
            <div className="item-text">Import</div>
          </div>
          <div className="menu-item">
            <div className="item-text">Export</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadBar
