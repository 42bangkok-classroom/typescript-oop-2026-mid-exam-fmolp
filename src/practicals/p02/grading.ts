const score = Number(process.argv[2]);
let grade:string="";
if(isNaN(score)){
    console.log("Invalid input");
}else if(score>=0&&score>=80&&score<=100){
    grade="A";
    console.log(`Grade is ${grade}`);
}else if(score>=70&&score<80){
    grade="B";
    console.log(`Grade is ${grade}`);
}else if(score>=60&&score<70){
    grade="C";
    console.log(`Grade is ${grade}`);
}else if(score>=50&&score<60){
    grade="D";
    console.log(`Grade is ${grade}`);
}else if(score>=0&&score<50){
    grade="F"
    console.log(`Grade is ${grade}`);
}else{
    console.log("Invalid input");
}