import Home from '../components/Home'
import {connect} from 'react-redux'
import {addToCart, removeFromCart} from '../services/actions/Action'

const mapStateToProps=state=>({
    data:state.cartItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeFromCartHandler: data => dispatch(removeFromCart())
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
