    /*     7. Calcule el índice de masa muscular de una persona con la siguiente fórmula (IMC=peso/(altura x altura)), pidiendo como datos su altura y peso. imprima en pantalla lo siguiente: 
        a.  Si el IMC es por debajo de 18.5 : Bajo peso debe ir al nutricionista
        b. Si el IMC es 18.5—24.9 : Normal
        c. Si el IMC es 25.0—29.9 : Sobrepeso 
        d. Si el IMC es 30.0 o más : Obeso debe ir al nutricionista */

        let altura = parseFloat(prompt("Ingrese su altura"));
        let peso = parseFloat(prompt("Ingrese su peso"));

        const imc =(alt,pes)=>{
            return pes / (alt * alt)
        }

        const rank = (funcTrans) =>{
            if(funcTrans >= 30){
                return "Obeso. Debe ir al nutricionista"
            }else if(funcTrans >= 25){
                return "Sobrepeso"
            }else if(funcTrans){
                return "Normal"
            }else{
                return "Desnutrido"
            }
        }

        document.write(`Su indice de masa corporal es de: ${imc(altura,peso).toFixed(2)} <br> Por lo tanto su estado es: ${rank(imc(altura,peso))}`);