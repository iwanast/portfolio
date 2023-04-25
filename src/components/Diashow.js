import { useState } from "react"

export const Diashow = ( { pictures } ) => {

  const [pictureNumber, setPictureNumber] = useState(0)
  const onClickNext = () => {
    pictureNumber === pictures.length - 1 ? setPictureNumber(0) : setPictureNumber((pictureNumber) => (++pictureNumber) )
  }
  const onClickPrev = () => {
    pictureNumber === 0 ? setPictureNumber(pictures.length - 1) : setPictureNumber((pictureNumber) => (--pictureNumber))
  }

  return(
    <>
      <img src={pictures[pictureNumber]} alt="Projects snapshot" />
      <button className="diashow-arrows-buttons button-previous-arrow" type="button" onClick={onClickPrev}>
        <div className="arrow-divs previous-arrow-div"></div>
        prev
      </button>
      <button className="diashow-arrows-buttons button-next-arrow" type="button" onClick={onClickNext}>
        next
        <div className="arrow-divs next-arrow-div"></div>
      </button>
      <div className="wrapper-circles-diashow">
        {pictures.map((_, i) => (<circle className={pictureNumber === i ? `circle-selected` : ""} name={`circle${i}`} ></circle>))}
      </div>
    </>
  )
}