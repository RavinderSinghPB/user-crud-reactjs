import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Form from './Form';
import { addToUserList, createUser, updateUserRedux } from './Redux/actionCreator';
import './user.css'
import UserItem from './UserItem';
function Users() {
	const [users,setUsers] = useState([])
	
	const [selectedUser,setSelectedUser] = useState({})
	const initialUserDetailsObject = {
		userName:'',
		age:'',
		phoneNumber:'',
		address:'',
		city:''
	};

	// redux
	const {userDetails} = useSelector(state=>state.userDetails)
	// console.log(userDetails)asfas
	const dispatch = useDispatch()
	const usersRedux = useSelector(state=>state.usersRedux)
	// console.log(usersRedux)
	const [isUserItemClicked,setIsUserItemClicked] = useState(false)
	const [userIdClicked,setUserIdClicked] = useState(null)
	const [userValues,setUserValues] = useState(initialUserDetailsObject)

	useEffect(() => {
		console.log(usersRedux)
		return () => {
			// cleanup
		}
	}, [usersRedux])
	const [showForm,setShowForm] = useState(false)

	function handleCreateUserClick(e){
		e.preventDefault()
		console.log("btn clicked")
		console.log(userValues)
		// dispatch(createUser(userValues))
		dispatch(addToUserList(userValues))
		console.log(usersRedux)
		setUsers([...users,userValues])
		// users.push(userValues)
		// console.log(users)
		setUserValues(initialUserDetailsObject)
	}

	// useEffect(() => {
	// 	console.log(users)
	// 	return () => {
	// 		// cleanup
	// 	}
	// }, [users])
	function handleInputChange(e){
		const {name,value} = e.target;
		setUserValues({...userValues,[name]:value})
	}

	function handleUpdateUserClick(e){
		e.preventDefault()
		console.log(userValues)
		console.log(userIdClicked)
		let updatedUsers = [...usersRedux]
		console.log("updatedUsers",updatedUsers)
		updatedUsers[userIdClicked] = {...updatedUsers[userIdClicked],...userValues}
		// console.log("updatedUsers[userIdClicked]",updatedUsers[userIdClicked])
		// setUsers(updatedUsers)
		dispatch(updateUserRedux(updatedUsers))
		setUserValues(initialUserDetailsObject)
		setUserIdClicked(null)
		setIsUserItemClicked(false)
		
	}
	useEffect(()=>{
		if(isUserItemClicked){
			setUserValues(selectedUser)
		}
	},[isUserItemClicked])

	return (
		<div className="main-container">
			<div className="left-user-list-container">
				<div className="user-list">
					<UserItem 
						users={usersRedux} 
						setIsUserItemClicked={setIsUserItemClicked} 
						setUserIdClicked={setUserIdClicked}
						setSelectedUser={setSelectedUser}
					/>
				</div>
				
					
				<div className="create-user-btn-div">
					{/* <button 
						className="create-user-btn"
						onClick={handleCreateUserClick}
					>Create New User</button> */}
				</div>
			</div>
			<div className="right-user-detail-container">
				<div className="new-user-form">

					{/* <Form 
						handleInputChange={handleInputChange} 
						userValues={userValues}
						handleCreateUserClick={handleCreateUserClick}
						isUserItemClicked={isUserItemClicked}
						usedIdClicked={usedIdClicked}
						
					/> */}
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
						{isUserItemClicked ?
							<button onClick={(e)=>handleUpdateUserClick(e)} type="submit">Update</button>
						
						:
						<button onClick={(e)=>handleCreateUserClick(e)} type="submit">Create</button>
						}
						
					</form>
				</div>
				
			</div>
		</div>
	)
}

export default Users
