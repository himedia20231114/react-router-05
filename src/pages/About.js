import React from 'react';

// http://localhost:3010/about  : "/about" 요청에 대해서 출력 하는 페이지 
function About(props) {
    return (
        <div>
            <h1> 어바웃 페이지 입니다. ("/about") </h1>
            <p> 오신것을 환영 합니다. </p>
        </div>
    );
}

export default About;