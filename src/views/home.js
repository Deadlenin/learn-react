import React, { Fragment } from 'react'
import ClassComp           from "../components/simpleComponents/classComp";

const Home = ( props) => {
    console.log(props);
    console.log();
    return (
        <Fragment>
            
            <div>Home</div>
            <ClassComp />
        </Fragment>
    )
};

export default Home

