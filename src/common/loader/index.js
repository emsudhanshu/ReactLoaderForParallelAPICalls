import { CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux'

function Loader() {
    const totalCalls = useSelector((state) => state.loader.totalCalls)
    const doneCalls = useSelector((state) => state.loader.doneCalls)
    return (
        <div>
            doneCalls {doneCalls}, totalCalls {totalCalls}
            {(doneCalls < totalCalls) && <CircularProgress />}
        </div>
    )
}

export default Loader