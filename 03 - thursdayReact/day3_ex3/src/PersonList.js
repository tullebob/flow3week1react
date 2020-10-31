import React from "react";
import PropTypes from 'prop-types';

const PersonList = ({persons}) => {
    function editPerson(){

    }

    function deletePerson(props) {
        
    }

    return (
        <div>
            <h2> All Persons</h2>
            <table>
                <thead>
                <tr>
                    <th>ID:</th>
                    <th>Name:</th>
                </tr>
                </thead>
                <tbody>
                    {persons.map(p => <tr key={p.id}><td>{p.id}</td><td>{p.personTxt}</td><td>
<a href="xx" onClick={(e)=>{e.preventDefault();editPerson(p)}}>edit</a> / <a href="xx" onClick={(e)=>{e.preventDefault();deletePerson(p.id)}}>delete</a>
</td>
</tr>)}
                </tbody>
            </table>
        </div>
    )
}
export default PersonList;
PersonList.propTypes = {
    persons: PropTypes.array
  }