import React from 'react'
import UserListItem from './UserListItem'

function UserItem({users,setIsUserItemClicked,setUserIdClicked,setSelectedUser}) {

	function handleItemClick(index,user){
		// e.preventDefault()
		console.log("item clicked")
		setIsUserItemClicked(true)
		setUserIdClicked(index)
		setSelectedUser(user)
		console.log(user)

	}
	return (
		<div style={{overflowY:'auto'}}>
			{users.map((user,index) =>(
				<div key={index} onClick={()=>handleItemClick(index,user)}>
				<UserListItem 
					user={user} />
				</div>
			))}
		</div>
	)
}

export default UserItem
