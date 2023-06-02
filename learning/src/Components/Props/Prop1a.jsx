import React from 'react'

const Prop1a = (props) => {
  return (
    <>
    <div className="cards">
        <div className="card">
            <img src={props.imgsrc} alt="" />
            <div className="card_info">
                <span className="card_category"></span>
                <h3>{props.title}</h3>
                <a href={props.link} target='_blank'>
                    <button>Watch now</button>
                </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Prop1a