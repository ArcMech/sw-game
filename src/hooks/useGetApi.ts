import { useState, useEffect } from 'react'
import { api } from 'api'
import { ResourceType } from 'types'
import { getRandomNumber } from 'utils'

export const useGetApi = (type: ResourceType) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const amountOfData = type === 'people' ? 82 : 36
    const random = getRandomNumber(amountOfData)
    const fetchData = () =>
      api
        .get(`/${type}/${random}`)
        .then((res) => setData(res.data))
        .catch((e) => console.error(e))
    fetchData()
  }, [type])

  return data
}
