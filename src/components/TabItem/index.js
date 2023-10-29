// Write your code here
import './index.css'

const TabItem = props => {
  const {mainTabDetails, isActive, updatedTabId} = props
  const {tabId, displayText} = mainTabDetails

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  const onClickAppButton = () => {
    updatedTabId(tabId)
  }

  return (
    <li className="main-tab-container">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickAppButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
