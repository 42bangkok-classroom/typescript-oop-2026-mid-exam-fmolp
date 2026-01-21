const comment = "TypeScript is a strongly typed programming language"

function shortenComment(comment: string):string {
  let check=comment.split(" ")
  let out="";
  check.forEach(element => {
    if(element.length>=5&&element.length<=10){
      out+=check[check.indexOf(element)]+" "
    }
  });console.log(out)
  }
shortenComment(comment)