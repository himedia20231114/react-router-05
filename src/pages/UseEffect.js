import React, { useState } from 'react';
import { useEffect } from 'react';

/* useEffect Hook :  의존성 배열[Dependency Arrays] 이 변경될때 함수가 작동이 됨 
    - useEffect (Function , [deps])

    작동 상태 : 3가지 
    1. deps 의 인자 값이 오지 않는 경우 : 컴포넌트가 생성(Mount) 될때 마다 호출 
        // 랜더링 될때 마다 작동됨
        // 호출할때(Mount), Update (수정) 될때마다   
        - useEffect (Function)

    2. deps 의 인자의 값이 [] 적용되었을 경우 : 컴포넌트가 처음 랜더링 시점에 한번만 작동이됨. 
        - useEffect (Function, [])
    
    3. deps 의 인자의 값이 [count, name] 인 경우 : count, name 의 값이 변경될때 function이 작동됨 
        - useEffect (Function , [count, name])

*/
function UseEffect(props) {

    //1. useEffect 선언 : 컴포넌트를 호출 할때 마다 매번 작동 (deps 옵션이 생략된 경우)
            // 
    useEffect(
        () => { console.log('컴포넌트 생성(Mount)시 작동됨 - 랜더링 될때 마다 작동됨  ') } 
    )

    //2. useEffect 선언 : 컴포넌트 호출 할때 처음 1번만 작동됨 (deps 옵션 :  [] 경우 )
    useEffect (
        () => { console.log('한번만 실행됨 !!!!')} 
        , []
    )

    //3. useEffect 선언 : deps 옵션에 [count, name] 값이 적용된경우 , count, name 변수의 값이 수정되면
            // Function 이 작동됨 , Update 
    const [count, setCount] = useState(0); 
    const [name , setName] = useState(""); 

    useEffect(
        () => {console.log('count , name의 상태가 변경되면 작동됨 !!! ')}
        , [count, name]
    )

    const countChange = () => {
        setCount (count + 1) ; 
    }
    const nameChange = () => {
        setName ("홍길동" + (count) ); 
    }

    return (
        <div>
            <h1> useEffect 예제 : 작동 방법 3가지 </h1>
            <hr /> 
            <br /> 
            <h1>  카운트 값 : {count}</h1>
            <h1> 이름 값 : {name} </h1>
            <hr /> 
            <button onClick = {countChange}> 카운트 값 수정 </button>
            <button onClick = {nameChange}> 이름 값 수정 </button>

            
        </div>
    );
}

export default UseEffect;