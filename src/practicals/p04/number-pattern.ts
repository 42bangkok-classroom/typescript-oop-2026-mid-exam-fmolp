const numberPattern=Number(process.argv[2]);
let line="";
for(let i=1;i<=numberPattern;i++){
    line+=" ".repeat(numberPattern-i);
    if(i>=2){
        for(let j=numberPattern;j>=i;i--){
        line+=j
    }
    console.log(line);
}
}