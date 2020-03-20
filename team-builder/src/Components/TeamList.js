import React from 'react';

const TeamList = props => {
    console.log(props);

    return (
        <div>
            <h1>Team-mates List</h1>
            <div className='cardContainer'>
                {/* {props.teamList.map(person => (
                    <div key={person.id} className='matesCard'>
                        <p>Name: {person.name}</p>
                        <p>Email: {person.email}</p>
                        <p>Role: {person.role}</p>
                    </div>
                    // could make shorter by destructuring
                ))} */}
            </div>
        </div>
    )
}


export default TeamList;