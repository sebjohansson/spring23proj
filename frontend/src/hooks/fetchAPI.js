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
                <div>
                    <ul>
                    {data.map(item => 
                    <><h1>{item.QuestionDescription}</h1><h2>{item.QuestionExplanation}</h2></>
                    )}

                    </ul>
                </div>
            </div>
            
        );
}
