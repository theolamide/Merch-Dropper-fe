import React from 'react';
import SideBar from './SideBar';
import Chart from './Chart';
import { StyledDiv, BigContainer } from './Styled';

const Dashboard = (props) => {
    return (
        <BigContainer className="dashboard-container">
            <div className="user-info">
                <h2 align="right">Welcome, username </h2>
            </div>
            <StyledDiv className='dashboard-components'>
                <SideBar />
                <Chart />
            </StyledDiv>
        </BigContainer>
    )
};

export default Dashboard;