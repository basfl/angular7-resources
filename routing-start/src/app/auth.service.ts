export class AuthService {
    logIn=false;
    isAuthanticated(){
        const promis=new Promise(
            (resolve,reject)=>{
                setTimeout(()=>{
                    resolve(this.logIn)
                },800)
            }
        );
        return promis;
    }
    login(){
        this.logIn=true;
        console.log(this.logIn);

    }
    logout(){
        this.logIn=false;
    }
}