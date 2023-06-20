import Header from './components/header';
import Array from './components/array';
import Sorting from './components/Sorting';
import React,{useState} from 'react';
import _ from 'lodash';

function App() {

	const [array,Setarray] = useState([]);

	function delay(time) {
		return new Promise(resolve => setTimeout(resolve, time));
	}

	const BubbleSort = async()=>{
		var temp = [...array]
		for(var i=0;i<temp.length;i++){
			for(var j =0;j<temp.length-1-i;j++){
				if(temp[j] - temp[j+1] > 0){
					var foo = temp[j]
					temp[j] = temp[j+1]
					temp[j+1] = foo
					//swap
				}
				Setarray([...temp])
				await delay(0.1);
			}
		}
		
    }

    const MergeSort = ()=>{
        console.log("sorting using MergeSort")
    }

    const QuickSort = ()=>{
        console.log("sorting using QuickSort")
    }

    const HeapSort = ()=>{
        console.log("sorting using HeapSort")
    }

	const createArray = (n)=>{

		const start = 1,end = ++n, step = 1;
		const arr = _.range(start, end, step);
  		arr.sort(() => Math.random() - 0.5); 
		Setarray(arr);
  		
	}

  return (
	<div className="bg-black text-light h-100">
		<Header createArray = {createArray} />
		<Array array = {array} />
		<Sorting BubbleSort={BubbleSort} MergeSort={MergeSort} QuickSort={QuickSort} HeapSort={HeapSort} />
		<br/>
	</div>
  );
}

export default App;
