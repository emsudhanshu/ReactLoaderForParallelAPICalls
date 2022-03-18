import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getFeature1Data } from './feature1Slice'

const Feature1 = function() {
  const feature1Data = useSelector((state) => state.feature1.value)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getFeature1Data())
  },[])

  return (
    <div>
      Data - {feature1Data?.firstName}
      <button onClick={()=>{dispatch(getFeature1Data())}}>Fetch</button>
    </div>
  )
}

export default Feature1;