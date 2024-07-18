import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { FaClock, FaTrophy } from 'react-icons/fa';
import '../styles/Leaderboard.css';

const Leaderboard: React.FC = () => {
    const scores = useSelector((state: RootState) => state.leaderboard.scores);
    return (
        <>
            <div className="leaderboard">
               <div className="fixed">
               <div className="navbar">
                    <div>
                        <div className='logo1'>GILLY'S</div>
                        <div className='logo2'>Koramangala</div>
                    </div>
                    <div>
                        <img src="data:image/jpeg;base64,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" alt="" />
                    </div>
                </div>
                <div className="header">
                    <div className="close1">
                        <div className='c1'></div>
                        <div className='c2'></div>
                        <div className='c3'></div>
                    </div>
                    <div>
                        <h2>FASTEST OF TODAY</h2>
                    </div>
                    <div className="close2">
                        <div className='c4'></div>
                        <div className='c5'></div>
                        <div className='c6'></div>
                    </div>
                </div>
                <ul>
                    <li id='nav'>
                        <span >
                            <span className='trophy'><FaTrophy /></span>
                            <span>NAME</span>
                        </span>
                        <span>
                            <span></span>
                            <span><FaClock /> TIME </span>
                        </span>
                    </li>
                </ul>
               </div>
                
                <ul>
                    {scores.map((score, index) => (
                        <li key={index} className={`rank-${index + 1} ${index >= 3 ? 'black-background' : ''}`}>
                            <span className='one'>
                                <div className={`medal medal-${index + 1} ${index < 3 ? "" : "more3"}`}> {index + 1} </div>
                                <span className="username"> {score.username} </span>
                            </span>
                            <span className='one'>
                                <span className="amount"> {score.amount} </span>
                                <span className="time"> {score.time} </span>
                            </span>
                        </li>
                    ))}
                </ul>
                {/* <div className="footer1">
                    <div id='entry'>
                        RECENT ENTRY
                    </div>
                    <li id='last'>
                        <span className="two">
                            <span className='number'> 23 </span>
                            <span className='username'> Sahil Arora </span>
                        </span>
                        <span className="two">
                            <span className='amount'> Rs 600 </span>
                            <span className='time'> 03:34:12</span>
                        </span>
                    </li>
                </div> */}
            </div>
        </>
    );
};
export default Leaderboard;
