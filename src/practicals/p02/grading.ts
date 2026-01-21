const score = Number(process.argv[2]);
let grade:string="";
if(score<=80||score<=100){
    grade="A";
    console.log(`Grade is ${grade}`);
}else if(score>=70){
    grade="B";
    console.log(`Grade is ${grade}`);
}else if(score>=60){
    grade="C";
    console.log(`Grade is ${grade}`);
}else if(score>=50){
    grade="D";
    console.log(`Grade is ${grade}`);
}else if(score>=0){
    grade="F"
    console.log(`Grade is ${grade}`);
}else{
    console.log("Invalid input")
}