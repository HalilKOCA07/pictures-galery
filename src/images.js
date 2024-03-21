import data from "./data"
import "./style.css"



const images = () => {
  return (
    <div className="container">
        {   
            data.map((picture) =>

          <div className="pictures">
          <div className="picture">
                <div className="imageContainer">
                    <img src={picture.src.large} alt="picture" />
                </div>
                <div className="info">
                    <p>{picture.photographer}</p>
                </div>
          </div> 
          </div>
        )    
        }
    </div>
  )
}
export default images

