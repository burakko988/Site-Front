import { useEffect, useState } from 'react'
import mockData from '../../mock/mockData'
import { useLocation } from 'react-router-dom'
import { EventCardProps } from '../Event/eventCard'

const EventDetailsComp = () => {

  const { state } = useLocation()
  const [event, setevent] = useState<EventCardProps>()

  useEffect(() => {
    getSingleEvent()
  }, [])


  const getSingleEvent = () => {
    const resp = mockData.find((q) => state === q.id)
    setevent(resp)
  }


  return (
    <>
      <div>
        <h1> {event?.etkinlikAdi}</h1>
        <h1> {event?.etkinlikTarihi}</h1>
        <h1> {event?.etkinlikUcreti}</h1>
        <h1> {event?.etkinlikAdi}</h1>
      </div>
      {/* <p>User ID: {id}</p> */}
    </>
  )
}

export default EventDetailsComp;