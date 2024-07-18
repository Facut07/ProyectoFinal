import React, { Component } from "react";

function Persona(props) {
    return (
        <figure>
            <figcaption>{props.name} ({props.age} Años)</figcaption>
        </figure>
    );
}

class Apis extends Component {
    state = {
        persona: []
    };

    Fetch = async () => {
        try {
            let url = 'https://api.agify.io/?name=Facundo Jose Tapia'; 
            let response = await fetch(url);
            let data = await response.json();
            let persona = {
                id: data.count || Math.random().toString(36).substring(6), 
                name: data.name,
                age: data.age
            };
        
            this.setState({ persona: [persona] });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    componentDidMount() {
        this.Fetch();
    }

    render() {
        return (
            <>
                <h2>Fetch</h2>
                {this.state.persona.map((el) => (
                    <Persona key={el.id} name={el.name} age={el.age} />
                ))}
            </>
        );
    }
}

export default Apis;