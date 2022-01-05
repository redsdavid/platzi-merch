import React, {useContext} from 'react'
import AppContext from '../context/AppContext'
import Map from '../components/Map'
import usePositionStackAddress from '../hooks/usePositionStackAddress'
import '../styles/components/Success.css'

const Success = () => {
    const {state} = useContext(AppContext);
    const { buyer } = state;
    const location = usePositionStackAddress(buyer[0].address);

    return (
        <div className="Success">
            <div className="Success-content">
                <h2>{`${buyer[0].name}!!!  .... Gracias por tu compra !! :)` }</h2>
                <span>Tu pedido llegará en 3 dias a tu dirección</span>
                <div className="success-map">
                    <Map data={location}/>
                </div>
            </div>
        </div>
    )
}

export default Success
