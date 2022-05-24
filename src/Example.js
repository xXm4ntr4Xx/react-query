import React from 'react'
import {useQuery} from 'react-query'


export const Example = () => {

  const fetchData = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json();
  }
  
  const {data,status} = useQuery('datakey',fetchData)
  
  
  console.log(data)
  if(status==='loading'){
    return <div>....data is loading</div>
  }
  
  if(status==='error'){
    return <div>Some error occur</div>
  }


  return (
    <div>
      {data.map(post =>{
        return <li>{post.title}</li>
      })}
    </div>
  )
}
