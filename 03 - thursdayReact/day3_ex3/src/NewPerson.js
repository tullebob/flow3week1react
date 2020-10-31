import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';

function NewPerson(props) {

    const [person, setPerson] = useState(props.nextPerson)

    const savePerson = event => {
        if (person.personTxt ==="") {
            return;
        }
        props.addPerson(person);
        event.preventDefault();
    };

    useEffect(() => setPerson({...props.nextPerson}), [props.nextPerson])

    const onChange = evt => {
        const val = evt.target.value;
        person.personTxt = val;
        setPerson({...person});
        console.log(person)
        
    };
    const name = person.name ==="" ? "Create new Person" : "Add/edit person"
    return (
        <div>
            <h4>{name}</h4>
            <form>
                <input value={person.personTxt} onChange={onChange}/>
                <br/>
                <button onClick={savePerson} className="btn btn-info">Save</button>
            </form>
        </div>
    )
}
export default NewPerson;

NewPerson.propTypes = {
    nextPerson: PropTypes.object,
    addPerson: PropTypes.func
}