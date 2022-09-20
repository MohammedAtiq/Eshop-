import React, { useState } from 'react'

function LogIn() {

  const [data, setData] = useState({
    FullName: '',
    Phone: '',
    Email: '',
    Pass: '',
    msg: ''
  })

  const [valData, setValData] = useState([])

  const changeValu = (event) => {
    const { name, value } = event.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  const submitval = (e) => {
    e.preventDefault()
    if (data.FullName === '' || data.Phone === '') {
      alert('empty value')
    } else {
      setValData([...valData, data])
      setData({
        FullName: '',
        Phone: '',
        Email: '',
        Pass: '',
        msg: ''
      })
    }

  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 mt-5 mx-auto" style={{ height: '715px' }}>
            <form action="" onSubmit={submitval}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name='FullName' value={data.FullName} onChange={changeValu} placeholder="Full Name" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name='Phone' value={data.Phone} onChange={changeValu} placeholder="Mobile Number" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name='Email' value={data.Email} onChange={changeValu} placeholder="Email" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput1" name='Pass' value={data.Pass} onChange={changeValu} placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" name='msg' value={data.msg} onChange={changeValu} rows="3"></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign in</button>
              </div>
            </form>

            <div className="container-fluid mt-5">
              <div className="row ">
                {valData.length > 0 ?
                  valData.map((aryVal, indx) => {
                    return (
                      <div className="col-md-9 mx-auto border  pt-3 ps-3" key={indx}>
                        <p>{`hii, ${aryVal.FullName} your data is stored , Thank You`}</p>
                      </div>
                    )
                  })
                  :<div className="col-md-9 mx-auto border pt-3 ps-3"> <p>Fell the form</p> </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogIn
