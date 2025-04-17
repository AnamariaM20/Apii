import React from 'react'
import "./table.css"

const Table = () => {
    return (
        <div className='body'>
            <div className='table'>
                <div className='title'>
                    <div className='title-item'>Column 1</div>
                    <div className='title-item'>Column 2</div>
                    <div className='title-item'>Column 3</div>
                    <div className='title-item'>Column 4</div>
                    <div className='title-item'>Column 5</div>
                </div>
                <div className='content'>
                    <div className='col'>
                        <div className='col-item'>Cell 1</div>
                        <div className='col-item'>Cell 1</div>
                        <div className='col-item'>Cell 1</div>
                        <div className='col-item'>Cell 1</div>
                        <div className='col-item'>Cell 1</div>
                    </div>
                    <div className='col'>
                        <div className='col-item'>Cell 2</div>
                        <div className='col-item'>Cell 2</div>
                        <div className='col-item'>Cell 2</div>
                        <div className='col-item'>Cell 2</div>
                        <div className='col-item'>Cell 2</div>
                    </div>
                    <div className='col'>
                        <div className='col-item'>Cell 3</div>
                        <div className='col-item'>Cell 3</div>
                        <div className='col-item'>Cell 3</div>
                        <div className='col-item'>Cell 3</div>
                        <div className='col-item'>Cell 3</div>
                    </div>
                    <div className='col'>
                        <div className='col-item'>Cell 4</div>
                        <div className='col-item'>Cell 4</div>
                        <div className='col-item'>Cell 4</div>
                        <div className='col-item'>Cell 4</div>
                        <div className='col-item'>Cell 4</div>
                    </div>
                    <div className='col'>
                        <div className='col-item'>Cell 5</div>
                        <div className='col-item'>Cell 5</div>
                        <div className='col-item'>Cell 5</div>
                        <div className='col-item'>Cell 5</div>
                        <div className='col-item'>Cell 5</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Table