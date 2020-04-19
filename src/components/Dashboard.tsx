import React from "react";
import styled from "styled-components";
import {Membership} from "../models/membership";
import {Program} from "../models/program";

interface DashboardProps {
  memberships: Membership[];
  programs: Record<string, Program>;
}

const Wrapper = styled.div`
  margin-top: 60px;
`;

const MembershipCard = styled.div`
  background-color: white;
  border-radius: 4px;
  display: flex;
  height: 200px;
  margin-bottom: 25px;
  padding: 20px;
`;

const ProgramDetails = styled.div`
  align-items: center;
  border-right: 1px solid #e3e3e3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
`;

const ProgramLogo = styled.img`
  max-width: 100px;
`;

const ProgramName = styled.div`
  font-size: 30px;
  font-weight: 300;
`;

const ProgramTitle = styled.div`
  font-size: 16px;
`;

const ProgramText = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PointsDetails = styled.div`
  align-items: center;
  display: flex;
  font-size: 90px;
  justify-content: center;
  width: 400px;
`;

const Actions = styled.div`

`;

const Dashboard: React.FC<DashboardProps> = ({memberships, programs}) => {
  return (
    <Wrapper>
      {memberships.map((m: Membership) => {
        const p = programs[m.program];
        return (
          <MembershipCard>
            <ProgramDetails>
              <ProgramText>
                <ProgramName>{p.name}</ProgramName>
                <ProgramTitle>{p.title}</ProgramTitle>
              </ProgramText>
              <ProgramLogo src={`src/assets/programs/${p.logo}.png`} />
            </ProgramDetails>
            <PointsDetails>
              {}
            </PointsDetails>
            <Actions>

            </Actions>
          </MembershipCard>
        )
      }
        
      )}
    </Wrapper>
  );
};

export default Dashboard;
