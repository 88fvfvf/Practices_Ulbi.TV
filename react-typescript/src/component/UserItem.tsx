import React, { FC } from "react";
import { IUser } from "./types/types";

interface UserItemProps {
    user: IUser
}

const UserItem: FC<UserItemProps> = ({ user }) => {
    return (
        <div style={{ padding: 15, border: '1px solid gray' }}>
            {user.id}. {user.name} email: {user.email} Город:{user.address.city} Улица:{user.address.street} zipcode:{user.address.zipcode}
        </div>
    )
}

export default UserItem