import React from 'react'
import './userListItem.css'
function UserListItem({user}) {
	return (
		<div className="user-list-item">
			<div className="username">Name : {user.userName}</div>
			<div className="userage">Age : {user.age}</div>

		</div>
	)
}

export default UserListItem
