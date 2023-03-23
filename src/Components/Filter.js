import React from 'react'

const Filter = (props) => {

  let filterData = props.filterData;

  return (
    <div className="flex flex-wrap justify-center w-11/12 py-4 mx-auto space-x-4 max-w-max gap-y-4">
      {
        filterData.map( (data) => (
          <button key={data.id}>{data.title}</button>
        ))
      }
    </div>
  )
}

export default Filter

