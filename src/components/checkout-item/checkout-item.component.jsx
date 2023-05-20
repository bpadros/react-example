import './checkout-item.styles.css'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'


const CheckoutItem = ({cartItem}) => {

    const {name,imageUrl,price,quantity} = cartItem
    const {clearItemFromCart,addItemToCart,removeItemToCart} = useContext(CartContext)

    const clearItemHanlder = () => clearItemFromCart(cartItem)
    const addItemHanlder = () => addItemToCart(cartItem)
    const removeItemHanlder = () => removeItemToCart(cartItem)

    return (
        <div className='checkout-item-container'>
        <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
        <div className='arrow' onClick={removeItemHanlder}>
        &#10094;
        </div>
       <span className=''> {quantity}</span>
        <div className='arrow' onClick={addItemHanlder}>
        &#10095;
        </div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={clearItemHanlder}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem