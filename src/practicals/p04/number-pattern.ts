const numberPattern=Number(process.argv[2]);

for(let i=1;i<=numberPattern;i++){
    let line="";
    line+=" ".repeat(numberPattern-i)+i
    if(i>=2){
        for(let j=i-1;j>=1;j--){
            line+=j
        }
    }
    console.log(line);
}
