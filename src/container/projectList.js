import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Table from '../components/table'

export default () => {
    const store=useSelector(store=>store)
    const [list,setList]=useState([])
    useEffect(()=>{
        setList(store)
    },[store])
  return (
    <div>
        <Table list={list}/>
    </div>
  )
}
