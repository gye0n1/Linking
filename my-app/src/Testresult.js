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
        <div className="box1">
          <span className="com1-1">Co</span>
          <span className="com1-2">nnection</span>
          <span className="com2">Workin'</span>
          <span className="com3-1">Bh</span>
          <span className="com3-2">aap</span>
          <span className="com3-3">y</span>
        </div>
        <div className="box2">
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
        </div>
        <div className="box3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlWH7j0YCgLB3lRBZngvFmgpZITRCdnTti9A&usqp=CAU"
            alt="인프런"
            className="inflearn"></img>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoF6u12Xu9TCg7PTfuuRkhbckwWRDSrqIHw&usqp=CAU"
            alt="카테노이드"
            className="catenoid"></img>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZ2-BgPx6TqWX1YEDTF3E5wph9Qd9FjfEAg&usqp=CAU"
            alt="클래스101"
            className="class101"></img>
        </div>
        <div className="space1"></div>
        <div className="space2"></div>
        <div className="space3"></div>
        <span className="con1">관련회사</span>
        <span className="con2">공부과목</span>
        <span className="con3">교육프로그램</span>
      </div>
    </div>
  );
}
export default Testresult;
