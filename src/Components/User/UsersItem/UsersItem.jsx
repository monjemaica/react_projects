import React from 'react'

export const UsersItem = (props) => {
    return (
        <ul>
            {props.data.map((e) =>
                <li key={e.id}>
                    {e.un_fld} ( {e.age_fld} year old )
                </li>
            )}

        </ul>
    )
}
