import React, {useState, useEffect } from 'react'


export default function FetchAPI() {

    const [data, setData] = useState([]);

    const apiGet = () => {
        fetch('http://localhost:3000/questions')
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setData(json);
        });
    };
// 1 fetch displaying full JSON, other using data.mapping
// Require more cosmetic work
   useEffect(() => {
    apiGet(); 
    }, []);

        return (
            <div> 
                    My API <br />
                    <br />
                    <pre> {JSON.stringify(data,null, 2)} </pre>

                <div>
                    <ul>
                    {data.map(item => 
                    <li>{item.QuestionIndex}{item.QuestionDescription}</li>
                    )}

                    </ul>
                </div>
            </div>
            
        );
}
