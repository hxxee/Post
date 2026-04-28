import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 393px;
  height: 100vh;
  background: linear-gradient(180deg, #ffb33a 0%, #ffe4b8 100%);
`;

export const Header = styled.div`
  margin-top: 24px;
  gap: 9px;
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 87px;
    height: 7px;
    aspect-ratio: 87/7;
  }

  hr {
    width: 260px;
    height: 1px;
    background: #fff;
  }
`;

export const Body = styled.div`
  margin-top: 25px;
  width: 331px;
  height: 670px;
  border-radius: 27px;
  background: #fff;
  box-shadow: 0 -1px 14px 0 rgba(34, 19, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Emo = styled.div`
  width: 19px;
  height: 24px;
  margin-top: 30px;
`;

export const Title = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: row;
  margin-top: 20px;
  align-items: center;

  img {
    width: 23.438px;
    height: 23.438px;
    aspect-ratio: 1/1;
  }

  #title {
    color: #ff9d00;
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 35px; /* 194.444% */
  }
`;

export const LetterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin-top: 25px;

  flex: 1;
  min-height: 0;
  width: 100%;

  overflow-y: auto;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Letter = styled.div`
  color: #ff9d00;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
  width: 254px;
  height: 74px;
  border-radius: 15px;
  border: 2px solid #ff9d00;
  display: flex;
  background: rgba(255, 242, 242, 0.2);
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
`;

export const Post = styled.div`
  width: 331px;
  height: 212px;
  border-radius: 106px 106px 27px 27px;
  background: #ff2f00;
  box-shadow: 0 -1px 14px 0 rgba(34, 19, 0, 0.25);
  position: absolute;
  bottom: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PTitle = styled.div`
  margin-top: 34px;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px; /* 116.667% */
`;

export const Bar = styled.div`
  margin-top: 8px;
  width: 180px;
  height: 18px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.2);
`;

export const Send = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  border: 2px solid #fff;
  background: rgba(255, 255, 255, 0.2);
  width: 180px;
  height: 77px;
  cursor: pointer;

  img {
    margin-top: 17px;
    width: 20px;
    height: 18.35px;
  }

  #detail {
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 35px; /* 233.333% */
  }
`;
