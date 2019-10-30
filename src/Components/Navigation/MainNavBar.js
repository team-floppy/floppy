import React from 'react';
import Logo from '../../Reusables/Logo';
import colors from '../../Reusables/Colors';
import Avartar from '../Avatars/Avartar';
import FloppyInput from '../Input/FloppyInput';

function MainNavBar() {
    return (
        <>
        
       <div style={styles.body}>
          <div>{Logo}</div>
          <div>     <FloppyInput
                      type="text"
                      bgColor="light"
                      placeholder="Name"
                      success={true}
                      error={false}
                    />
                    </div>
           <div><Avartar/></div>
          </div>    
        </>

    )
}
  
const styles={
    body:{
        backgroundColor:colors.dark,
        height: "30%",
        width: "100%",
        display:"flex",
        marginRight:100,
        justifyContent:"center",
        justifyContent:"space-between",
    }
}
export default MainNavBar;
