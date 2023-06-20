import React from 'react'

const Sorting = (props) => {
    return (
        <div className="container m-2 d-flex justify-content-sm-center">
            <button id="bubSort" className="btn btn-primary m-2" onClick={props.BubbleSort}>Bubble Sort</button>
            <button id="MerSort" className="btn btn-primary m-2" onClick={props.MergeSort}>Merge Sort</button>
            <button id="QucSort" className="btn btn-primary m-2" onClick={props.QuickSort}>Quick Sort</button>
            <button id="HeapSort" className="btn btn-primary m-2" onClick={props.HeapSort}>Heap Sort</button>
        </div>
    );
}

export default Sorting
