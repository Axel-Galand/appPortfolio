import React, { useEffect, useRef} from 'react';
import increaseHeight from '../style/increaseHeight';

const ArianneComponent = () => {
    let stroke = useRef(null);


    useEffect(() => {
        increaseHeight(stroke, 2, 3.5);
    }, []);

    return(
        <>
            <div className="spine" ref={element => stroke = element}/>
            <div className="spine-target">
                <div className="circle"></div>
                <div className="pulse"></div>
            </div>
        </>
    );
}

export default ArianneComponent;