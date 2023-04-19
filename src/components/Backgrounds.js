import { Background } from "./Background"

export const Backgrounds = () => {

  return(
    <div className="outer-wrapper-backgrounds">
      <div className="background-top-left" >
        < Background />
      </div> 
      <div className="background-top-right" >
        < Background />
      </div> 
      <div className="background-bottom-right" >
        < Background />
      </div> 
      <div className="background-bottom-left" >
        <Background />
      </div> 
    </div>
  )
}