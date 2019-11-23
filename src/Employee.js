import React from 'react'

function Employee(props){
    return(
        <div>
            <div style={{border: '1px solid black', margin:'1px 20px 0px 20px', padding:'5px', borderRadius:'5px', backgroundColor:'lightYellow'}}>
                <div>
                <p>{props.data.isActive ? <label style={{marginRight:'10px'}}>props.data.name</label> :  <label style={{marginRight:'10px', color:'red'}}>{props.data.name}</label>}
                <label>{props.data.age}</label>
               </p>
                </div>
            </div>
            <br />
        </div>
    )
}
export default Employee