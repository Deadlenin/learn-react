import React , {useEffect, useState}                                 from 'react';
import { connect, shallowEqual, useDispatch, useSelector } from "react-redux";
import { addValue, addValueAsync }                         from "../../store/home/actions";


const ClassComp = (props) => {
    
    
    const cClick = () => {
        props.addValue()
    };
    
    const hClick =()=>{
        console.log('clicked');
    };
    
    const dispatch = useDispatch();
    
    const dClick =()=>{
        dispatch(addValueAsync(5))
    };
    const st = useSelector(state => state.homeState, shallowEqual );
    
    console.log(st);
    
    let [some, setSome] = useState(5);
    
    
    useEffect(()=>{
        document.addEventListener('click', hClick);
        return ()=>{
            document.removeEventListener('click', hClick)
        }
    });
    
    return (
        <>
            <div>
                { props.homeSt }
                <br/>
                {st.value}
                <button onClick={ cClick }>click</button>
                <button onClick={ dClick }>click Me</button>
            </div>
            
            <br/>
        
        </>
    )
    
};

const mapStateToProps = ( state ) => {
    return {
        homeSt: state.homeState.value
    }
};

const mapDispatchToProps = {
    addValue
};


export default connect( mapStateToProps, mapDispatchToProps )( ClassComp )