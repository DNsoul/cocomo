import React, { useState } from 'react'
import BoxData from '../box-data';
import SelectBlock from '../select-block';
import {sfData, emEarlyData, emLateData} from './data';

const CococmoII = () => {
    const [size, setSize] = useState('');

    const [typeDesign, setDesign] = useState(0);

    const [sf, setSF] = useState([3.72, 3.04, 4.24, 3.29, 4.68])
	const [emEarly, setEmEarly] = useState([1, 1, 1, 1, 1, 1, 1, 1])
	const [emLate, setEmLate] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])

	const sfSelect = (idx, value) => {
		const newSelect = sf.slice();
		newSelect[idx] = value;
		setSF(newSelect);
	};

    const emSelectEarly = (idx, value) => {
		const newSelect = emEarly.slice();
		newSelect[idx] = value;
		setEmEarly(newSelect);
	};

    const emSelectLate = (idx, value) => {
		const newSelect = emLate.slice();
		newSelect[idx] = value;
		setEmLate(newSelect);
	};

    const a = typeDesign ? 2.45 : 2.94;
    const b = 0.91;
    const c = 3.67;
    const d = 0.28;
    const em = typeDesign ? emLate : emEarly;
    const sff = sf.reduce((p, n) => p + n); 
    const e = b + 0.01 * sff; 
    const eaf = em.reduce((p, n) => p * n);
    const eafns = em.slice(0, -1).reduce((p, n) => p * n);
    const pm = eaf * a * (size)**e;
    const pmns = eafns * a * (size)**e;
    const tm = em[6] * c * pmns**(d + 0.2 * (e - b))

    return (
        <div className="card">
            <div className="card-header">
                COCOMO II
			</div>
            <div className="card-body" style={{padding: 20}}>
                <div className="d-flex"> 
                    <div style={{display: 'flex', marginBottom: 20}}>
                        <BoxData num={pm} desc={'Человеко-месяцев'} title={'Трудоёмкость'} />
                        <BoxData num={tm} desc={'Месяцев'} title={'Срок разработки'} />
                    </div>
                    <div className="inputBlock" >
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="size">Размер кода</span>
                            <input 
                                type="number" 
                                title 
                                value={size} 
                                onChange={(e) => {
                                    if (e.target.value < 0) return;
                                    setSize(e.target.value)
                                }} 
                                className="form-control" 
                                aria-label="Sizing example input" 
                                aria-describedby="size"
                                onKeyDown={(e) => {
                                    if (e.key === "-" || e.key === "+") {
                                        e.preventDefault()
                                    }
                                }}
                                />
                            <span className="input-group-text" id="size">тысяч строк кода</span>
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="selector">Стадия проекта</label>
                            <select className="form-select" id="selector" value={typeDesign} onChange={(e) => setDesign(Number(e.target.value))} >
                                <option key={0} value={0}>Предварительная оценка</option>
                                <option key={1} value={1}>Детальная оценка</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
                {
                    sfData.map((el, idx) => (
                        <SelectBlock 
                            key={idx}
                            data={el} 
                            values={sf} 
                            onSelect={(id, value) => sfSelect(id, value)}
                        />
                    ))
                }
                {
                    typeDesign ? emLateData.map((el, idx) => (
                        <SelectBlock 
                            key={idx}
                            data={el} 
                            values={emLate} 
                            onSelect={(id, value) => emSelectLate(id, value)}
                        />
                    )) : emEarlyData.map((el, idx) => (
                        <SelectBlock 
                            key={idx}
                            data={el} 
                            extraLow
                            values={emEarly} 
                            onSelect={(id, value) => emSelectEarly(id, value)}
                        />
                    ))
                }
                </div>
            </div>
        </div>
    );
}

export default CococmoII;