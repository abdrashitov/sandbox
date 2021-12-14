import React, {useState} from 'react';
import styles from './app.module.css';
import DatePicker from '@faktura/datepicker/src';

const App = () => {
    const [datepicker, setDatepicker] = useState(1);

    let today = new Date().toLocaleString('ru-RU', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });

    const switchDatepicker = status => {
        switch (status) {
            case 1:
                return <DatePicker value='' style={true} />;
            case 2:
                return <DatePicker value='11.12.2021' style={true} />;
            case 3:
                return <DatePicker value='' maxDate={today} style={true} />;
            default:
                return <DatePicker value='' minDate={today} style={true} />;
        }
    };

    return (
        <div className={styles.wrapper}>
            <div>
                <div className={styles.navy}>
                    <span onClick={() => setDatepicker(1)} data-active={datepicker === 1}>Null</span>
                    <span onClick={() => setDatepicker(2)} data-active={datepicker === 2}>Value</span>
                    <span onClick={() => setDatepicker(3)} data-active={datepicker === 3}>MaxDate</span>
                    <span onClick={() => setDatepicker(4)} data-active={datepicker === 4}>MinDate</span>
                </div>
                {switchDatepicker(datepicker)}
            </div>
        </div>
    );
};

export default App;
