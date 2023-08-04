import { useEffect } from "react";
import { useState } from "react"
import { useQuery } from '@tanstack/react-query'

const useLoadTasks=()=>{
    // const [tasks, setTasks] = useState([]);
    // const [loading, setLoading] = useState(true)
    // useEffect(()=>{
    //     fetch('http://localhost:5000/all-tasks')
    //         .then(res=> res.json())
    //         .then(data => {
    //             setTasks(data)
    //             setLoading(false)
    //         })
    // },[])
    const { isLoading, data: tasks=[], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async()=>{
            const response = await fetch('http://localhost:5000/all-tasks')
            return response.json()
        },
      })


    return [tasks,isLoading, refetch]
}

export default useLoadTasks