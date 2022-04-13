import React from 'react'

const Table = ({list}) => {

    const headerList=Object.keys(list.length>0?list[0]:{})
  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
     {headerList.map(header=> <th scope="col">{header}</th>)}
    </tr>
  </thead>
  <tbody>
      {list.map((ele,index)=> <tr>
      <th scope="row">{index}</th>
      {Object.values(ele).map(value=><td>{value}</td>)}
        
    </tr>)}
   
   
  </tbody>
</table>
  )
}

export default Table