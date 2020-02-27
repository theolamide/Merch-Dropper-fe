import React from 'react';
import SideBar from './SideBar';
import Chart from './Chart';

const Dashboard = (props) => {
    return (
        <div className="dashboard-container">
            <div className="user-info">
                <h2 align="right">Welcome, username </h2>
                <SideBar />
                <Chart />
            </div>
        </div>
    )
};

export default Dashboard;