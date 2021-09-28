import React from 'react'

const SelectBlock = ({data, onSelect, values, extraLow}) => {
    const options = [
        'Очень низкий',
        'Низкий',
        'Средний',
        'Высокий',
        'Очень высокий',
        'Критически высокий',
    ];

    if (extraLow) options.unshift('Критически низкий');

    return (
        <div className="card selector">
            <div className="card-header">
                {data.title}
            </div>
            <div className="card-body">
                {data.selects.map((select, idx) => (
                    <div key={idx} class="form-floating" style={{marginBottom: 10}}>
                        <select id={"form-floating-" + select.id} value={values[select.id]} onChange={(e) => onSelect(select.id, Number(e.target.value))} class="form-select" id="floatingSelect" aria-label="Floating label select example">
                            {select.options.map((opt, idx) => (!isNaN(opt) ? <option key={idx} value={opt}>{options[idx]}</option> : null))}
                        </select>
                        <label htmlFor={"form-floating-" + select.id}>{select.title}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SelectBlock;