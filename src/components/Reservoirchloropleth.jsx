
import statesData from '../data/us-states.json';

import Chloroplethreservoir from './Chloropleth';



const Chloropleth =()=>{
    return(
        <div style={{position:"relative",left:"400px",width:"700px"}}>
            <h1 className='chre'>Chloropleth Map for Resrvoir capacities</h1>
            <Chloroplethreservoir statesData={statesData} />
        </div>
    )
}
 export default Chloropleth;