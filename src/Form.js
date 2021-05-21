import React from 'react'
import './form.css'
function Form({
	handleInputChange,userValues,
	handleCreateUserClick,usedIdClicked,
	isUserItemClicked}) {
	return (
		<>
			<form className="form">
						<input 
							type="text"
							name="userName"
							required
							placeholder="name"
							value={userValues.userName}
							onChange={(e)=>handleInputChange(e)}
						/>
						<input 
							type="text"
							name="age"
							required
							placeholder="age"
							value={userValues.age}
							onChange={(e)=>handleInputChange(e)}
						/>
						<input 
							type="text"
							name="phoneNumber"
							required
							placeholder="phoneNumber"
							value={userValues.phoneNumber}
							onChange={(e)=>handleInputChange(e)}
						/>
						<input 
							type="textarea"
							name="address"
							required
							placeholder="address"
							value={userValues.address}
							onChange={(e)=>handleInputChange(e)}
						/>
						<input 
							type="text"
							name="city"
							required
							placeholder="city"
							value={userValues.city}
							onChange={(e)=>handleInputChange(e)}
						/>
						<button onClick={(e)=>handleCreateUserClick(e)} type="submit">Create</button>
					</form>
		</>
	)
}

export default Form
