import React, {useState} from 'react';

function Form() {

    const [geschwindkeit, setGeschwindkeit] = useState(0)
    const [zeit, setZeit] = useState(0)
    const [weg, setWeg] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault();
        setWeg(zeit * geschwindkeit);
    }

    return (<div style={{paddingLeft: "10px"}}>
            <div >
                <h2 st>Weg berechnen</h2>
                <img src={'kinematik.png'} alt={"Kein Bild"} height={'200px'}/></div>
            <form onSubmit={handleSubmit}>
                <label>
                    Geschwindikeit: <br/>
                    <input type="number" name="geschwindkeit" value={geschwindkeit}
                           onChange={event => setGeschwindkeit(event.target.value)}/>
                </label>
                <br/>
                <label>
                    Zeit: <br/>
                    <input type="number" name="zeit" value={zeit} onChange={event => setZeit(event.target.value)}/>
                </label>
                <br/>
                <label>
                    <input type="submit" name="submit" value={"calculate"}/><br/>
                </label>
                <label>
                    Weg: <br/>
                    <label style={{backgroundColor: "lightgray", width:"29px"}}>{weg}</label>
                </label>
                <br/>

            </form>
        </div>


    );
}

export default Form;
