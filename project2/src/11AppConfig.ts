//  11. Реализуйте класс-синглтон AppConfig, который загружает конфигурацию приложения и
//  предоставляет к ней доступ через метод getConfig(). 

class AppConfig{
    
    private conf:string;
    
     private constructor(){
        //gjcj,bhfkb rjyabuehfwb. jndc.lf
        let confTxt = "бебебе";
        this.conf = confTxt;
     }
    public getConfig(): string{
        if(this.conf === null){
            new AppConfig();
            return this.conf;
        }
        else{
            return this.conf;
        }
    }

}