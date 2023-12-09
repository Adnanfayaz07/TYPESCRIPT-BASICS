const num1element = document.getElementById('num1') as HTMLInputElement;
const num2element = document.getElementById('num2') as HTMLInputElement;
const buttonelement = document.querySelector('button')!;

const numresults: Array<number>=[];
const textresults: string[]=[]

type numorstring= number | string;

type Result= {val: number;timestamp: Date}

interface Resultobj{
    val: number;
    timestamp: Date;  
}

function adds(num1:numorstring, num2: numorstring) {
    if(typeof num1==='number' && typeof num2==='number'){
    return num1 + num2;
}
else if(typeof num1==='string' && typeof num2==='string'){
return num1 + ' ' + num2    
}
return +num1 + +num2
}
function printresult(resultobj: Resultobj){
    console.log(resultobj.val)
}
buttonelement.addEventListener('click', () => {
    const num1 = num1element.value;
    const num2 = num2element.value;
    const result = adds(+num1, +num2);
    numresults.push(result as number)
    const stringresult=adds(num1,num2)
    textresults.push(stringresult as string)
    printresult({val: result as number,timestamp: new Date()})
    console.log(numresults,textresults)
    
    
});

const mypromise=new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
resolve('it worked')
    },1000)
});
mypromise.then((result)=>{
    console.log(result.split('w'))
})