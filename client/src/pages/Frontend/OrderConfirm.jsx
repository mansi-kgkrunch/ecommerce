/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useSelector } from 'react-redux'
import env from '../../env.json'

export default function OrderConfirm() {
    document.title = `Order | ${env.APP_NAME}`

    const order_id = useSelector((state) => state.product.orderId)
    return (
        <div className='row order-confirmed'>
            <div className="col-lg-6 col-md-3 col-custom">
                <div className="tab-content" id="myaccountContent">
                    <div className="tab-pane fade show active" id="dashboad" role="tabpanel">
                        <div className="myaccount-content">
                            <h3> Order Confirmation</h3>
                            <div className="welcome">
                                <p className="alert alert-success">You have successfully placed Kg Krunch Order #{order_id}.</p>
                            </div>
                            <p className="mb-0 order-confirmed">Please <a href="#" className='order-con'>Click here</a> to view the order in My Orders.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
