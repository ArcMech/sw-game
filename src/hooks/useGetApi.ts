import { useState, useEffect } from 'react'
import { api } from 'api'
import { EntityType } from 'types'

export const useGetApi = (type: EntityType) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = () =>
      api
        .get(`/${type}/`)
        .then((res) => setData(res.data))
        .catch((e) => console.error(e))
    fetchData()
  }, [type])

  return data
}
