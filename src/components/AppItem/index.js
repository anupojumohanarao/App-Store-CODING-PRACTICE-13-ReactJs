// Write your code here
import './index.css'

const AppItem = props => {
  const {mainProjectDetails} = props
  const {imageUrl, appName} = mainProjectDetails
  return (
    <li className="app-card-container">
      <img src={imageUrl} alt={appName} className="app-logo" />
      <p className="main-heading">{appName}</p>
    </li>
  )
}

export default AppItem
