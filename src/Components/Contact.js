import React from 'react'
import Web from './Image/img4.jpg'

const Contact = () => {
  return (
    <div className="container-fluid home">
    <div className="row">
      <div className="col-md-10 mx-auto">
        <div className="row ">
          <div className="col-md-6 my-5 box1">
            <h1>Front end developer <strong>Mohammed Atiq</strong></h1>
            <p>A Front end developer able to build Responsive websites , layout and programming I love to create beautiful and performant websites with delightful user experiences With graphic designer skills Fast learner, and always try to learn new things and build my logical power.</p>
          </div>
          <div className="col-md-5 " >
            <img src={Web} alt="" className="img-fluid animated conImg"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact
