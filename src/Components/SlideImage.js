import React, { useState, useEffect } from 'react'
import Imge1 from "./Image/bgimage2.jpg"
import { IoSearchSharp } from "react-icons/io5";
import CardContainer from './CardContainer'
import SearchFilter from 'react-filter-search'

const SlideImage = () => {
    const [srcInput, setSerInput] = useState('')
    const [proData, setProData] = useState([])
    const [load, setLoad] = useState(true)

    async function respnseData() {
        try {
            setLoad(false)
            const resp = await fetch('https://fakestoreapi.com/products')
                .then(resp => resp.json())
            setProData(await resp)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        respnseData()
    }, [])

    if (load) {
        return (<><h1>...Loading</h1></>)
    }
    return (
        <>
            <div className="img2 " style={{ backgroundImage: `url(${Imge1}) `, height: '500px', width: '100%', backgroundRepeat: "no-repeat", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-8 m-auto content">
                            <h1>Shopping E<span style={{ color: 'blue' }}>shop</span> </h1>
                            <p className="mt-3">The Best Ecommerce website for your Outfit and Take Best Deals. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempora animi sint! Facilis, aperiam. Perspiciatis?</p>
                            <input type="text" value={srcInput} onChange={(e) => setSerInput(e.target.value)} />
                            <i className="btn2"><IoSearchSharp /></i>
                        </div>
                    </div>
                </div>
            </div>
            <SearchFilter
                value={srcInput}
                data={proData}
                renderResults={results => (
                    <>
                        <div className="container mt-5">
                            <h1 className="text-center" style={{ color: 'rgb(34, 152, 156)' }}>Products</h1>
                            <div className="row gy-3 scroll" style={{ margin:'0 20px'}}>
                                {results.map((item, i) => (
                                    <CardContainer data={item} key={i} />
                                ))}
                            </div>
                        </div>
                    </>
                )} />

        </>
    )
}

export default SlideImage
