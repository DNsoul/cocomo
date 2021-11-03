import React, { useState } from 'react';
import SelectBlock from '../select-block/SelectBlock';
import {data} from './data';
import BoxData from '../box-data';

const CocomoInter = () => {
    const [slt, setSlt] = useState(0);
    const [size, setSize] = useState('');

	const [valueSelect, setSelect] = useState([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])

	const changeSelect = (idx, value) => {
		const newSelect = valueSelect.slice();
		newSelect[idx] = value;

		setSelect(newSelect);
	};

    const cof = [
		[3.2, 1.05, 2.5, 0.38],
		[3.0, 1.12, 2.5, 0.35],
		[2.8, 1.20, 2.5, 0.32],
    ];

    const eaf = valueSelect.reduce((prf, cur) => prf * cur);
    const pm = eaf * cof[slt][0] * size**cof[slt][1];
    const tm = cof[slt][2] * pm**cof[slt][3];

    return (
		<div className="card">
			<div className="card-header">
				COCOMO I - Продвинутый уровень
			</div>
			<div className="card-body" style={{padding: 20}}>
				<div className="d-flex"> 
					<div style={{display: 'flex', marginBottom: 20}}>
						<BoxData num={pm} desc={'Человеко-месяцев'} title={'Трудоёмкость'} />
						<BoxData num={tm} desc={'Месяцев'} title={'Срок разработки'} />
					</div>
					<div className="inputBlock" >
						<div className="input-group mb-3">
							<label className="input-group-text" htmlFor="selector">Тип проекта</label>
							<select className="form-select" id="selector" value={slt} onChange={(e) => setSlt(e.target.value)} >
								<option value={0}>Распространенный</option>
								<option value={1}>Полунезависимый</option>
								<option value={2}>Встроенный</option>
							</select>
						</div>
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
					</div>
				</div>
				<div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
					{data.map((d, idx) => 
						<SelectBlock 
							key={idx}
							data={d} 
							values={valueSelect} 
							onSelect={(id, value) => changeSelect(id, value)}
						/>)
					}
				</div>
			</div>
		</div>
    );
}

export default CocomoInter;