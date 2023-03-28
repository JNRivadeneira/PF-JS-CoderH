let plan = 0;
let precioBase = 0;
let incrementoMensual = 0.05;
let cuotaPura = 0;
let gastosGestion = 10000;

function calculaCuotaPura(precioBase, plan) {
    cuotaPura = precioBase/plan;
}

function calculaIncremento(precioBase, incrementoMensual){
    let nuevoPrecioBase = precioBase * (1 + incrementoMensual);
    return nuevoPrecioBase;
}

let opcionAuto;
do {
    opcionAuto = parseInt(prompt('Elija vehículo:\n1) Toyota Etios\n2) Toyota Yaris\n3) Toyota Corolla\n4) SALIR'));
    if (opcionAuto == 4)
        break;
    else
        switch (opcionAuto){
            case 1:
                precioBase = 3775000;
                break;
            case 2: 
                precioBase = 4703000;
                break;
            case 3:
                precioBase = 5917000;
                break;
            default:
                alert('Opción incorrecta.');
        }
    console.log('Precio base = ', precioBase);
} while (precioBase == 0);

if (precioBase != 0){
    let opcionPlan;
    do {
        opcionPlan = parseInt(prompt('Elija Plan:\n1) 84 cuotas\n2) 120 cuotas\n3) SALIR'));
        if (opcionPlan == 3)
            break;
        else
            switch (opcionPlan){
                case 1:
                    plan = 84;
                    calculaCuotaPura(precioBase, plan);
                    break;
                case 2:
                    plan = 120; 
                    break;
                default:
                    alert('Opción incorrecta.');
            }
        console.log('Plan seleccionado: ', plan);
    } while (plan == 0);
}

if (precioBase && plan){
    for (i=0; i<plan; i++){
        calculaCuotaPura(precioBase, plan);
        console.log(`Cuota ${i+1}: ${cuotaPura.toFixed(2)}`);
        precioBase = precioBase * (1 + incrementoMensual);
    }
}
