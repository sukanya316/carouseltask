import {useState, useEffect} from 'react'
import {
  BiPlayCircle,
  BiPauseCircle,
  BiLeftArrow,
  BiRightArrow,
} from 'react-icons/bi'
import './index.css'

const planetsList = [
  {
    id: 'c22777fe-f72e-11eb-9a03-0242ac130003',
    name: 'Mercury',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/planets-app/mercury-img.png',
    description:
      'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun planets.',
  },
  {
    id: 'c2277a74-f72e-11eb-9a03-0242ac130003',
    name: 'Venus',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/planets-app/venus-img.png',
    description:
      'Venus is the second planet from the Sun and is Earth’s closest planetary neighbor. It’s one of the four inner, terrestrial (or rocky) planets, and it’s often called Earth’s twin because it’s similar in size and density. These are not identical twins, however – there are radical differences between the two worlds.',
  },
  {
    id: 'c2277b64-f72e-11eb-9a03-0242ac130003',
    name: 'Earth',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/planets-app/earth-img.png',
    description:
      'Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. About 29.2% of Earth’s surface is land consisting of continents and islands.',
  },
  {
    id: 'c2277c2c-f72e-11eb-9a03-0242ac130003',
    name: 'Mars',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/planets-app/mars-img.png',
    description:
      'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury.',
  },
  {
    id: 'c2277cea-f72e-11eb-9a03-0242ac130003',
    name: 'Jupiter',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/planets-app/jupiter-img.png',
    description:
      'Jupiter has a long history of surprising scientists – all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe.',
  },
  {
    id: 'c2277d9e-f72e-11eb-9a03-0242ac130003',
    name: 'Saturn',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/planets-app/saturn-img.png',
    description:
      'Saturn is the sixth planet from the Sun and the second-largest planet in our solar system. Adorned with a dazzling system of icy rings, Saturn is unique among the planets. It is not the only planet to have rings, but none are as spectacular or as complex as Saturn’s.',
  },
  {
    id: 'c2277e52-f72e-11eb-9a03-0242ac130003',
    name: 'Uranus',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/planets-app/uranus-img.png',
    description:
      'Uranus is the seventh planet from the Sun and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star.',
  },
  {
    id: 'c2277f06-f72e-11eb-9a03-0242ac130003',
    name: 'Neptune',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/planets-app/neptune-img.png',
    description:
      'Dark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.',
  },
]

let timerId = null
const Carousel = () => {
  const [currIndex, setCurrIndex] = useState(0)
  const [currItem, setCurrItem] = useState(planetsList[currIndex])
  const [play, setPlay] = useState(false)

  const leftArrow = () => {
    if (currIndex === 0) {
      setCurrIndex(planetsList.length - 1)
      setCurrItem(planetsList[planetsList.length - 1])
    } else {
      setCurrIndex(currIndex - 1)
      setCurrItem(planetsList[currIndex - 1])
    }
  }

  const rightArrow = () => {
    if (currIndex === planetsList.length - 1) {
      setCurrIndex(0)
      setCurrItem(planetsList[0])
    } else {
      setCurrIndex(currIndex + 1)
      setCurrItem(planetsList[currIndex + 1])
    }
  }

  const changePlayStatus = () => {
    setPlay(!play)
  }

  useEffect(() => {
    if (!play) {
      timerId = setInterval(() => {
        rightArrow()
      }, 5000)
    } else {
      clearInterval(timerId)
    }
  }, [currIndex, play])

  return (
    <div className="main-container">
      <h1>Planets Carousel</h1>
      <div className="carousel-container">
        <button type="button" onClick={leftArrow}>
          <BiLeftArrow className="arrow-size" />
        </button>
        <div className="item-container">
          <img
            className="carousel-img"
            src={currItem.imageUrl}
            alt={currItem.name}
          />
          <h3>{currItem.name}</h3>
        </div>
        <button type="button" onClick={rightArrow}>
          <BiRightArrow className="arrow-size" />
        </button>
      </div>
      <button type="button" onClick={changePlayStatus}>
        {play ? (
          <BiPlayCircle className="play-btn" />
        ) : (
          <BiPauseCircle className="play-btn" />
        )}
      </button>
      <h1>Item Details</h1>
      <div className="item-details-container">
        <div>
          <img className="img" src={currItem.imageUrl} alt={currItem.name} />
        </div>
        <div style={{margin: '0px', padding: '0px'}}>
          <h4>Name: {currItem.name}</h4>
          <p>Description: {currItem.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Carousel
