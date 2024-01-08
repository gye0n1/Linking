import "./Test.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Test() {
  const navigate = useNavigate();
  const [optionClicked, setOptionClicked] = useState({});

  const goToresult = () => {
    navigate("/Testresult");
  };

  const handleOptionClick = (questionId, optionId) => {
    setOptionClicked((prevState) => ({
      ...prevState,
      [questionId]: optionId,
    }));
  };

  return (
    <div>
      <span className="title">LiNking</span>
      <div className="bar">
        <div className="menu1"></div>
        <div className="menu2"></div>
        <div className="menu3"></div>
        <span className="채용공고">채용공고</span>
        <div className="line1"></div>
        <span className="직무적성테스트">직무적성테스트</span>
        <div className="line2"></div>
        <span className="직업찾기">직업찾기</span>
        <span className=""></span>
        <div className="line3"></div>
        <span className="채용설명회">채용설명회</span>
        <div className="line6"></div>
        <span className="center">고객센터</span>
      </div>

      <span className="testtitle">직무 적성 테스트</span>
      <div className="testbox">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="249"
          height="83"
          viewBox="0 0 249 83"
          fill="none"
          className="resultbut">
          <rect
            width="249"
            height="83"
            rx="10"
            fill="#427BE1"
            fillOpacity="0.92"
          />
        </svg>

        {/* Question 1 */}
        <div className="question-container">
          <span className="q1">
            1. 여가 시간에 어떤 종류의 활동을 가장 즐기시나요?
          </span>
          <span
            className={optionClicked["q1"] === "q1a1" ? "q1a1 clicked" : "q1a1"}
            onClick={() => handleOptionClick("q1", "q1a1")}>
            a) 데이터 분석과 문제 해결
          </span>
          <span
            className={optionClicked["q1"] === "q1a2" ? "q1a2 clicked" : "q1a2"}
            onClick={() => handleOptionClick("q1", "q1a2")}>
            b) 예술과 창작적인 활동
          </span>
          <span
            className={optionClicked["q1"] === "q1a3" ? "q1a3 clicked" : "q1a3"}
            onClick={() => handleOptionClick("q1", "q1a3")}>
            c) 사람들과 협력하는 것
          </span>
          <span
            className={optionClicked["q1"] === "q1a4" ? "q1a4 clicked" : "q1a4"}
            onClick={() => handleOptionClick("q1", "q1a4")}>
            d) 물건을 만드는 것
          </span>
        </div>

        {/* Question 2 */}
        <div className="question-container">
          <span className="q2">
            2. 학교에서 가장 흥미로웠거나 능력을 발휘했던 과목은 무엇인가요?
          </span>
          <span
            className={optionClicked["q2"] === "q2a1" ? "q2a1 clicked" : "q2a1"}
            onClick={() => handleOptionClick("q2", "q2a1")}>
            a) 수학, 과학, 컴퓨터 과학
          </span>
          <span
            className={optionClicked["q2"] === "q2a2" ? "q2a2 clicked" : "q2a2"}
            onClick={() => handleOptionClick("q2", "q2a2")}>
            b) 언어, 문학, 예술
          </span>
          <span
            className={optionClicked["q2"] === "q2a3" ? "q2a3 clicked" : "q2a3"}
            onClick={() => handleOptionClick("q2", "q2a3")}>
            c) 사회과학, 심리학, 사회복지
          </span>
          <span
            className={optionClicked["q2"] === "q2a4" ? "q2a4 clicked" : "q2a4"}
            onClick={() => handleOptionClick("q2", "q2a4")}>
            d) 공학, 건축, 공예
          </span>
        </div>

        {/* Question 3 */}
        <div className="question-container">
          <span className="q3">3. 어떤 작업 환경을 선호하시나요?</span>
          <span
            className={optionClicked["q3"] === "q3a1" ? "q3a1 clicked" : "q3a1"}
            onClick={() => handleOptionClick("q3", "q3a1")}>
            a) 고요한 사무실에서 개인적인 작업
          </span>
          <span
            className={optionClicked["q3"] === "q3a2" ? "q3a2 clicked" : "q3a2"}
            onClick={() => handleOptionClick("q3", "q3a2")}>
            b) 창의적인 분위기의 아트 스튜디오
          </span>
          <span
            className={optionClicked["q3"] === "q3a3" ? "q3a3 clicked" : "q3a3"}
            onClick={() => handleOptionClick("q3", "q3a3")}>
            c) 다양한 사람들과 함께하는 협업 공간
          </span>
          <span
            className={optionClicked["q3"] === "q3a4" ? "q3a4 clicked" : "q3a4"}
            onClick={() => handleOptionClick("q3", "q3a4")}>
            d) 실제 물건을 다루는 작업장
          </span>
        </div>

        {/* Question 4 */}
        <div className="question-container">
          <span className="q4">
            4. 팀 프로젝트에서 어떤 역할을 선호하시나요?
          </span>
          <span
            className={optionClicked["q4"] === "q4a1" ? "q4a1 clicked" : "q4a1"}
            onClick={() => handleOptionClick("q4", "q4a1")}>
            a) 전문적인 지식과 분석적 사고로 기여
          </span>
          <span
            className={optionClicked["q4"] === "q4a2" ? "q4a2 clicked" : "q4a2"}
            onClick={() => handleOptionClick("q4", "q4a2")}>
            b) 새로운 아이디어와 창의성으로 기여
          </span>
          <span
            className={optionClicked["q4"] === "q4a3" ? "q4a3 clicked" : "q4a3"}
            onClick={() => handleOptionClick("q4", "q4a3")}>
            c) 타인과의 조화로운 협력과 소통으로 기여
          </span>
          <span
            className={optionClicked["q4"] === "q4a4" ? "q4a4 clicked" : "q4a4"}
            onClick={() => handleOptionClick("q4", "q4a4")}>
            d) 실용적인 기술과 노력으로 기여
          </span>
        </div>

        <span className="butcon" onClick={goToresult}>
          테스트 결과보기
        </span>
      </div>
    </div>
  );
}

export default Test;
