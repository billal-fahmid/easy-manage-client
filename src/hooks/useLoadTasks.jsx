import { useEffect } from "react";
import { useState } from "react"
import { useQuery } from '@tanstack/react-query'

const useLoadTasks=()=>{
   
    const { isLoading, data: tasks=[], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async()=>{
            const response = await fetch('https://tasks-manage-server.vercel.app/all-tasks')
            return response.json()
        },
      })


    return [tasks,isLoading, refetch]
}

export default useLoadTasks