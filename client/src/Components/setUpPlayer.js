import React, {useState} from 'react';
import DoubleSearchBar from './doubleSearchBar';


const SetUpPlayer = ({setFunction}) => {

	const [userAddress,setUserAddress] = useState(null);
	const [userLogin, setUserLogin] = useState(null);
	

	return (
		<div style = {{textAlign:'center', margin:"50px 0px 1000px 0px" }}>
			<div >
				<DoubleSearchBar
				title1 = "Enter an ETH address"
				title2 = "Enter POW login"
				state1 = {setUserAddress}
				state2 = {setUserLogin}
				holder1 = "Eth address : 0x123..."
				holder2 = "the great explorer.."
				functionToCall = {setFunction}
				textButton = "Set Player -Address"
				/>
			</div>
		</div>
	);


}

export default SetUpPlayer;