import React from 'react';
const   Sujeetlist = (props) => {
    return (
        <div className= "Sujeetavatar ma4 bg-light-purple dib pa3 grow shadow-4 tc" >
           <img src={`https://joeschmoe.io/api/v1/male/random${props.name}`} alt="Sujeetavatar"/>
           <h1 className="">{props.name} </h1>
           <p>{props.work}</p>
           </div>
    )
}
export default Sujeetlist;