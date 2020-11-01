import React from 'react'
import './index.less'

class HeadBar extends React.Component {
  onBtnClick = (btnType: string) => (e: React.MouseEvent) => {
    console.log(`${btnType} btn was clicked`)
  }
  render() {
    return (
      <div className="head-bar">
        <div className="bar-wrapper">
          <div className="menu">
            <div className="menu-item" onClick={this.onBtnClick('import')}>
              <div className="item-text">Import</div>
            </div>
            <div className="menu-item" onClick={this.onBtnClick('export')}>
              <div className="item-text">Export</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeadBar
