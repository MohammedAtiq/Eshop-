import React from 'react'
import mens from './Image/mensPic1.jpg'
import womens from './Image/womens1.jpg'
import elect from './Image/elect5.jpg'
import jewe from './Image/jewellers.jpg'

const Product = () => {

    return (
        <>
            <div className="container mt-4">
                <h1 className="text-center" style={{color: 'rgb(34, 152, 156)' }}>Categories</h1>
                <div className="row gy-3 my-3">
                    <div className="col-md-3 col-6  ">
                        <div className="card1" >
                            <img  src={mens} className="img-fluid shedow" alt="..." style={{ height: '259px', width: '259px' }} />
                            <div className="card-body">
                                <h5 className="card-title text-center">Men's Cloths</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 ">
                        <div className="card1" >
                            <img  src={womens} className="img-fluid shedow" alt="..." style={{ height: '259px', width: '259px' }} />
                            <div className="card-body">
                                <h5 className="card-title text-center">WoMen's Cloths</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 ">
                        <div className="card1" >
                            <img  src={jewe} className="img-fluid shedow" alt="..." style={{ height: '259px', width: '259px' }} />
                            <div className="card-body">
                                <h5 className="card-title text-center">Jeweller</h5>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3 col-6 ">
                        <div className="card1" >
                            <img  src={elect} className="img-fluid shedow" alt="..." style={{ height: '259px', width: '259px' }} />
                            <div className="card-body">
                                <h5 className="card-title text-center">Electronic</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
           
        </>
    )
}

export default Product
