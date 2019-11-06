import React, {useEffect}     from 'react'
import PropTypes from 'prop-types';

let FComp = ( { counter, parentClick } ) => {
    
    const myF = () => {
        console.log(input.current.value);
        console.log(input);
    };
    
    const hClick = ()=>{
        console.log('click');
        
    };
    
    useEffect(()=>{
       document.addEventListener('click', hClick);
        return ()=>{
            document.removeEventListener('click', hClick)
        }
    });
    
    let input = React.createRef(); // create empty ref
    
    if(true){
        return <div>True</div>
    }
    
    return (
        <div>
            <input ref={input} /*bind ref*/ type="text"/>
            func comp { counter }
            <button onClick={ parentClick }>F click</button>
            <button onClick={ myF }>Take input</button>
        </div>
    )
};

FComp.propsType = {
    counter: PropTypes.number.isRequired,
    parentClick: PropTypes.func
};
FComp.defaultProps = {
    counter: 0,
    parentClick: () => {}
};

export default FComp;