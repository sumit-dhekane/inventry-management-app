import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../components/input';
import { addProduct } from '../store/actions/productActions';

const Addproduct = () => {
  const [product, setProduct] = useState({})
 const result= useSelector(globalStore=>globalStore)
 const dispatch=useDispatch()
 useEffect(()=>{
 console.warn(result);
 },[result])

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value })
    console.warn(event.target.name, product);
  }
const array=[
  {
  tagName:'Name',
  tagKey:'name',
  tagId:1,
  handleChange:handleChange,
  inputType:'text'
},
{
  tagName:'Expiry',
  tagKey:'expiry',
  tagId:2,
  handleChange:handleChange,
  inputType:'date'
},
{
  tagName:'Cost',
  tagKey:'cost',
  tagId:3,
  handleChange:handleChange,
  inputType:'number'
},
{
  tagName:'Description',
  tagKey:'description',
  tagId:4,
  handleChange:handleChange,
  inputType:'text'
}
]

const handleClick=()=>{
    dispatch({type:'ADD_PRODUCT',value:product})
}
  return (
      <div className='form-container'>
        <form>
        {array.map((element,index)=><Input key={index} {...element} />)}

        {/* <Input tagName={'Name'} tagKey={'name'} tagId={'productName'} handleChange={handleChange} inputType={'text'}  />
        <Input tagName={'Expiry'} tagKey={'expiry'} tagId={'productExpiry'} handleChange={handleChange} inputType={'date'}  />
        <Input tagName={'Cost'} tagKey={'cost'} tagId={'productCost'} handleChange={handleChange} inputType={'number'}  />
        <Input tagName={'Description'} tagKey={'description'} tagId={'productDescription'} handleChange={handleChange} inputType={'text'}  />
        <Input tagName={'Selling Price'} tagKey={'sellCost'} tagId={'productSellCost'} handleChange={handleChange} inputType={'number'}  />
        <Input tagName={'Discount'} tagKey={'discount'} tagId={'productDiscount'} handleChange={handleChange} inputType={'number'}  /> */}
        </form>
        <button type="button" className="btn btn-primary" onClick={handleClick}>Add Product</button>
     <nav>
         <Link to='/product/list'>Product List</Link>
     </nav>
      </div>
  )
}

export default Addproduct;