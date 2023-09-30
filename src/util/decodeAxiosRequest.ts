export function decodeAxiosRequest(input:string,placeHolder:any):string{
    let output:string = input;
    let placeHolderArray:string[] = Object.keys(placeHolder);
    placeHolderArray.forEach((element:string) => {
        output = output.replace(`{${element}}`,placeHolder[element]);
    });
    return output;
}