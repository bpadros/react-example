import './directory-item.styles.css'
import { Link } from 'react-router-dom'

const DirectoryItem = ({category}) => {

    const {imageUrl, title} = category

   return (
    <div className="directory-item-container">
    <div className="background-image" style={{
      backgroundImage: `url(${imageUrl})`
    }}  />

    {/*<div className="body">
      <h2>{title}</h2>
      <p>Shop now</p>
  </div> */}

    <Link className="body" to={`/shop/${title}`}>
    <h2>{title}</h2>
    <p>Shop now</p>
  </Link>



  </div>
   )
}

export default DirectoryItem
