import { Backdrop, Badge, CircularProgress, LinearProgress } from '@mui/material'
import { useSelector } from 'react-redux'

export default function Loading() {
    const {loading}=useSelector((state)=>state.products)
  return (
<div>
<Backdrop open={loading}>
<CircularProgress color="inherit" />
</Backdrop>
</div>
  )
}






