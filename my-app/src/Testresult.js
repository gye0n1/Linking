import "./Testresult.css";
import React from "react";
function Testresult() {
  return (
    <div>
      <span className="logo">LiNking</span>
      <div className="resultbox">
        <span className="is">회원님의 적성직무는</span>
        <span className="result">사업관리</span>
        {/* <img
          src="/Users/dgsw8th42/Desktop/React/Frontend/Linking/my-app/src/result.png"
          alt="이미지 없음"></img> */}
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
        <div className="space1"></div>
        <div className="space2"></div>
        <div className="space3"></div>
        <span className="con1">관련회사</span>
        <span className="con2">공부과목</span>
        <span className="con3">교육프로그램</span>
        <span className="edu">
          경영학
          <br />
          마케팅
          <br />
          재무관리
          <br />
          조직이론
          <br />
          전략경영
          <br />
          이슈매니지먼트
        </span>
        <span className="company">예시 1<br/><br/>예시2<br/><br/>예시3</span>
        <span className="edupro">예시 1<br/><br/>예시2<br/><br/>예시3</span>
      </div>
    </div>
  );
}
export default Testresult;
