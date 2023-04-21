import {List} from 'antd'
import { useEffect } from 'react'


export default function TodoList ({loading,itemList,setItemList,setLoading}){

  useEffect(()=>{
    fetch('http://127.0.0.1:5002/items')
    .then(resp => resp.json())
    .then(setItemList)
    .catch(alert)
    .finally(()=>{
      setLoading(false)
    })
  },[])

  // const handleDone = (task) => {

  // }

  return(
    <section>
      <List
      bordered
      dataSource={itemList}
      loading = {loading}
      size = "large"
      renderItem = {(task)=> (
        <List.Item className = {(task.done) && 'done'}>
            {task.item}
        </List.Item>
  )}
        
      />
    </section>
  )
}