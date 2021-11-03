import React, { useState } from 'react'
import BoxData from '../box-data';

const CocomoBasic = () => {
    const [selected, setSelect] = useState(0);
    const [size, setSize] = useState('');

    const cof = [
		[2.4, 1.05, 2.5, 0.38],
		[3.0, 1.12, 2.5, 0.35],
		[3.6, 1.20, 2.5, 0.32],
    ];

    const pm = cof[selected][0] * size**cof[selected][1];
    const tm = cof[selected][2] * pm**cof[selected][3];

    return (
		<div className="card">
			<div className="card-header">
				COCOMO I - Базовый уровень
			</div>
			<div className="card-body" style={{padding: 20}}>
				<div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 20}}>
					<BoxData num={pm} desc={'Человеко-месяцев'} title={'Трудоёмкость'} />
					<BoxData num={tm} desc={'Месяцев'} title={'Срок разработки'} />
				</div>
				<div className="input-group mb-3">
					<label className="input-group-text" htmlFor="selector">Тип проекта</label>
					<select className="form-select" id="selector" value={selected} onChange={(e) => setSelect(e.target.value)} >
						<option value={0}>Распространенный</option>
						<option value={1}>Полунезависимый</option>
						<option value={2}>Встроенный</option>
					</select>
				</div>
				<div className="input-group mb-3">
					<span className="input-group-text" id="size">Размер кода</span>
					<input 
						type="number" 
						value={size} 
						onChange={(e) => {
							if (e.target.value < 0) return;
							setSize(e.target.value)
						}}
						onKeyDown={(e) => {
							if (e.key === "-" || e.key === "+") {
								e.preventDefault()
							}
						}}
						className="form-control" 
						aria-label="Sizing example input" 
						aria-describedby="size"
						title
						min="0"
					/>
					<span className="input-group-text" id="size">тысяч строк кода</span>
				</div>
			</div>
		</div>
    );
}

export default CocomoBasic;