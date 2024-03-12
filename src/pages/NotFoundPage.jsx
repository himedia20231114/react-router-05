import { Link, useNavigate } from "react-router-dom";

const NotFoundPage = () => {

    // 이벤트, 함수작동후 이동할 페이지 처리 : location.href ="index.html" <== MPA 
    // 요청(/company) ==> 컴포넌트 작동 (Route path="/company" element={<Company />})
    const navigate = useNavigate(); 
    
    return <div> 

        <h1> 해당 페이지는 존재하지 않습니다. </h1>
        <h3>
            <Link to= "/"> 홈으로 이동</Link>
        </h3>
        <button onClick = {() => navigate('/company')}> 회사 페이지로 이동 </button>
    </div>; 
}

export default NotFoundPage; 