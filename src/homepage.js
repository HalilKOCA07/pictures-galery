import images from './images'

const Homepage = () => {
  return (
    <div className="App ">
        <h1>Image Galery</h1> 
        <div>
            {images()}
        </div>
    </div>
  )
}

export default Homepage

