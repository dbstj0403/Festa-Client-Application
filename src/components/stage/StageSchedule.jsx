import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// JSON 파일을 import
import scheduleData from '@/constants/stage/stageSchedule.json';

const StageSchedule = () => {
  const [selectedDay, setSelectedDay] = useState('Day1');
  const [data, setData] = useState(scheduleData); // JSON 데이터를 상태로 설정

  useEffect(() => {
    // 현재 날짜 가져오기
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    if (month === 9) {
      if (day === 25) {
        setSelectedDay('Day1');
      } else if (day === 26) {
        setSelectedDay('Day2');
      } else if (day === 27) {
        setSelectedDay('Day3');
      } else {
        setSelectedDay('Day1');
      }
    } else {
      setSelectedDay('Day1');
    }
  }, []);

  const renderStage = () => {
    if (!data || !data[selectedDay]) {
      return <div>Loading...</div>;
    }

    return data[selectedDay].map((event) => (
      <Stage key={event.id}>
        <StageBox>
          <StageName>{event.stageName}</StageName>
          <Duration>{event.totalDuration}</Duration>
        </StageBox>
        <ArtistList>
          {event.artists.map((artist, index) => (
            <ArtistItem key={index}>{artist}</ArtistItem>
          ))}
        </ArtistList>
      </Stage>
    ));
  };

  return (
    <Container>
      <DayContainer>
        <DayButton selected={selectedDay === 'Day1'} onClick={() => setSelectedDay('Day1')}>
          <span className="day">DAY 1</span>
          <span className="date">9.25 (수)</span>
        </DayButton>
        <DayButton selected={selectedDay === 'Day2'} onClick={() => setSelectedDay('Day2')}>
          <span className="day">DAY 2</span>
          <span className="date">9.26 (목)</span>
        </DayButton>
        <DayButton selected={selectedDay === 'Day3'} onClick={() => setSelectedDay('Day3')}>
          <span className="day">DAY 3</span>
          <span className="date">9.27 (금)</span>
        </DayButton>
      </DayContainer>
      <StageContainer>{renderStage()}</StageContainer>
    </Container>
  );
};

export default StageSchedule;

const Container = styled.div`
  width: 33.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
const DayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
`;
const StageContainer = styled.div`
  display: flex;
  padding: 0 1.4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1.6rem;
  background-color: ${(props) => props.theme.colors.white};
`;
const DayButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => (props.selected ? props.theme.colors.hongikBlue : props.theme.colors.gray50)};
  cursor: pointer;
  padding: 0;
  .day {
    display: block;
    ${(props) => props.theme.fontStyles.basic.body2Bold};
  }
  .date {
    display: block;
    ${(props) => props.theme.fontStyles.basic.subHeadBold};
  }
`;
const Stage = styled.div`
  width: 28.7rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray20};
  padding: 2rem 0;
`;
const StageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  width: 11.8rem;
`;
const StageName = styled.h2`
  ${(props) => props.theme.fontStyles.basic.subHeadBold};
  color: ${(props) => props.theme.colors.gray100};
`;
const Duration = styled.p`
  color: ${(props) => props.theme.colors.gray70};
  ${(props) => props.theme.fontStyles.basic.captionMed};
`;
const ArtistList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.8rem;
`;
const ArtistItem = styled.li`
  color: ${(props) => props.theme.colors.gray70};
  ${(props) => props.theme.fontStyles.basic.body2Med};
`;
