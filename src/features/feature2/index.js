import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getFeature2Data } from './feature2Slice'

const Feature2 = function() {
  const feature2Data = useSelector((state) => state.feature2.value)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getFeature2Data())
  },[])

  return (
    <div>
      Data - {feature2Data?.[0]?.title}
      <button onClick={()=>{dispatch(getFeature2Data())}}>Fetch</button>
    </div>
  ) 
}

export default Feature2