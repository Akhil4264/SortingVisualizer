import Header from "./components/header";
import Array from "./components/array";
import Sorting from "./components/Sorting";
import React, { useState } from "react";
import _ from "lodash";

function App() {
    const [array, Setarray] = useState([]);

    function delay(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    const BubbleSort = async () => {
        var temp = [...array];
        for (var i = 0; i < temp.length; i++) {
        for (var j = 0; j < temp.length - 1 - i; j++) {
            if (temp[j] - temp[j + 1] > 0) {
            var foo = temp[j];
            temp[j] = temp[j + 1];
            temp[j + 1] = foo;
            }
            Setarray([...temp]);
            await delay(1);
        }
        }
    };

    const Merge = async(leftArr,rightArr)=>{
        
        const result1 = await leftArr;
        const left = [...result1];

        const result2 = await rightArr;
        const right = [...result2];
        let i = 0
        let j = 0
        let k = 0

        var temp = []
        while(i<left.length && j<right.length){
            if(left[i] <= right[j]){
                temp[k] = left[i]
                k+=1
                i+=1
            }
            else{
                temp[k] = right[j]
                k+=1
                j+=1
            }
            
        }
        while(i<left.length){
            temp[k] = left[i]
            k+=1
            i+=1
        }
        while(j<right.length){
            temp[k] = right[j]
            k+=1
            j+=1

        }
        return temp

    }

    const MergeSort = async(first,last,list)=>{
        if(list.length <=1){
            return list
            // return ;
        }
        const mid = Math.floor((list.length)/2)
        const leftArr = list.slice(0,mid)
        const rightArr = list.slice(mid)
        const left = await MergeSort(first,first+mid-1,leftArr)
        const right = await MergeSort(first+mid,last,rightArr)
        const res = await Merge(left,right)

        Setarray(array.map((val,index)=>{
            if(index >= first && index <= last){
                return res[index-first]
            }
            else{
                return val
            }
        }))
        await delay(100)
        
        return res
    }

    const QuickSort = async (first, last, list) => {
        //Randomized Quicksort
        if (first >= last) {
        return;
        }
        var difference = last - first;
        var rand = Math.random();
        rand = Math.floor(rand * difference);
        rand = rand + first;
        var i = first;
        var j = first;
        var pivot = rand;
        while (i <= last) {
        if (list[i] >= list[pivot]) {
            i += 1;
        } else {
            var foo = list[i];
            list[i] = list[j];
            list[j] = foo;
            if (j === pivot) {
            pivot = i;
            }
            i += 1;
            j += 1;
        }
        Setarray([...list]);
        await delay(1);
        }

        var too = list[pivot];
        list[pivot] = list[j];
        list[j] = too;

        Setarray([...list]);
        await delay(1);

        await QuickSort(first, j - 1, list);
        await QuickSort(j + 1, last, list);
    };

    const swap = (arr,i,j)=>{
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    const maxHeapify = async(arr,arrLen) =>{
        let i = Math.floor(arrLen/2)-1;

        while(i>=0){
            let leftChild;
            let rightChild;
            if(2*i+1 < arrLen){
                leftChild = arr[(2*i)+1]
            }
            if(2*i+2 < arrLen){
                rightChild = arr[(2*i)+2]
            }
            let maxIndex;
            if(leftChild && rightChild){
                if(leftChild > rightChild){
                    maxIndex = 2*i+1
                }
                else{
                    maxIndex = 2*i+2
                }
            }
            else if(leftChild){
                maxIndex = 2*i+1
            }
            
            if(arr[maxIndex] > arr[i]){
                swap(arr,i,maxIndex)
                
            }

            Setarray([...arr])
            await delay(1) 
            i-=1            

        }
    }
  
    const HeapSort = async (list) => {
        let i= list.length
        while(i > 1){
            await maxHeapify(list,i)
            swap(list,0,i-1)
            Setarray([...list])
            await delay(1)

            i-=1
        }
    };

    const createArray = (n) => {
        const start = 1,
        end = ++n,
        step = 1;
        const arr = _.range(start, end, step);
        arr.sort(() => Math.random() - 0.5);
        Setarray(arr);
        console.log("arr : ",arr)
    };

  return (
    <div className="bg-black text-light h-100">
      <Header createArray={createArray} />
      <Array array={array} />
      <Sorting
        BubbleSort={BubbleSort}
        MergeSort={MergeSort}
        QuickSort={QuickSort}
        HeapSort={HeapSort}
        Array={array}
      />
      <br />
    </div>
  );
}

export default App;
