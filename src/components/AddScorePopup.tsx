import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addScore } from '../redux/leaderboardSlice';
import '../styles/AddScorePopup.css';
interface AddScorePopupProps {
    onClose: () => void;
}
const AddScorePopup: React.FC<AddScorePopupProps> = ({ onClose }) => {
    const [username, setUsername] = useState('');
    const [time, setTime] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const validateTime = (value: string) => {
        const timeRegex = /^\d{2}:\d{2}:\d{2}$/;
        return timeRegex.test(value);
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!username || !time) {
            setError('Username and Time are required.');
            return;
        }
        if (!validateTime(time)) {
            setError('Time must be in MM:SS:MS format.');
            return;
        }
        dispatch(addScore({ username, time, amount }));
        setUsername('');
        setTime('');
        setAmount('');
        setError('');
        onClose();
    };
    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        if (value.startsWith('Rs')) {
            value = value.slice(2); // Remove the 'Rs' prefix for processing
        }
        if (value) {
            setAmount(`Rs ${value}`);
        } else {
            setAmount('');
        }
    };
    return (
        <div className="popup-overlay">
            <div className="add-score-popup">
            <button className="close-button" onClick={onClose}> X </button> 
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label>
                        Time (MM:SS:MS):
                        <input type="text" value={time} onChange={(e) => setTime(e.target.value)} placeholder="MM:SS:MS" />
                    </label>
                    <label>
                        Amount:
                        <input type="text" value={amount} onChange={handleAmountChange} />
                    </label>
                    {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
                    <button type="submit">Add Score</button>
                </form>
            </div>
        </div>
    );
};
export default AddScorePopup;
