---
sidebar_position: 8
---

# Presupuesto y Viabilidad del Proyecto

## **OPEX \- Gastos operativos mensuales**

| Concepto | Detalle | Coste Mensual Estimado |
| :---- | :---- | :---- |
| Azure | Sin contar los créditos de estudiantes | 247,43 € |
| Publicidad | Campañas de captación local (Ads)  | 60 € |
| GitHub Enterprise | 17,58 x numSoporte \*Esto incluye 50GB de almacenamiento y 50.000 min de CI/CD | 298,91€ |
| Bienes inmuebles | Local, luz \+ agua \+ wifi | 1947€ \+ 0,17€ · (\#soporte) \+ 20€ \+ 141,16€ |
| Comisiones Stripe | Comisiones de pasarela de pago (ej. Stripe/Redsys)  | 0.25 · venta \+ 1.5 · €venta |
| Soporte | Por cada 200 comercios con plan básico \=\> 1 ingeniero Por cada 150 comercios premium \=\> 1 ingeniero \*Hasta llegar a 15 que es el max de personas que queremos en el equipo de soporte | comerciosFree/200· 40 · 19,8 € comerciosPremium/150 · 40 · 19,8 € |
| **Total Gastos Operativos** | Gastos fijos y variables mensuales proyectados |  |

### **Azure:**   
Partiendo de la calculadora de Azure ([https://azure.microsoft.com/es-es/pricing/calculator/](https://azure.microsoft.com/es-es/pricing/calculator/)) y seleccionando su App service, incluyendo 1 dominion, con la versión basic \= producción

### **GitHub Enterprise:**  
[https://docs.github.com/es/enterprise-cloud@latest/billing/concepts/enterprise-billing/billing-for-enterprises](https://docs.github.com/es/enterprise-cloud@latest/billing/concepts/enterprise-billing/billing-for-enterprises)  
[https://docs.github.com/es/billing/concepts/product-billing/github-actions](https://docs.github.com/es/billing/concepts/product-billing/github-actions)  
[https://github.com/pricing/calculator](https://github.com/pricing/calculator)

### **Bienes inmuebles:**

- 1947€ / mes ([https://www.idealista.com/inmueble/110483114/](https://www.idealista.com/inmueble/110483114/))  
- Promedio de consumo energético: 100kWh/año ([https://www.repsol.es/autonomos-y-empresas/asesoramiento/gasto-luz-oficina/](https://www.repsol.es/autonomos-y-empresas/asesoramiento/gasto-luz-oficina/))  
- Precio kWh en Sevilla a día de redacción ([https://www.menosdeluz.com/precio-luz-sevilla](https://www.menosdeluz.com/precio-luz-sevilla)): 0,154€  
- 100 kWh/año \* 0,154€/kWh \* 110m^2 / 12 \= 141,16€/mes  
- Entre 1,5 y 2 litros de agua al día ([https://www.companeo.es/fuentes-de-agua-para-empresas/FAQ/que-capacidad-de-fuente-de-agua-necesito-segun-el-numero-de-empleados\#:\~:text=Recomendaciones%20generales%20\*%20Oficinas%20peque%C3%B1as%20(hasta%2010,de%20gran%20capacidad%20conectada%20a%20la%20red](https://www.companeo.es/fuentes-de-agua-para-empresas/FAQ/que-capacidad-de-fuente-de-agua-necesito-segun-el-numero-de-empleados#:~:text=Recomendaciones%20generales%20*%20Oficinas%20peque%C3%B1as%20\(hasta%2010,de%20gran%20capacidad%20conectada%20a%20la%20red))  
  - Promedio de 1,75L/día/persona  
  - 0,003€/litro([https://www.emasesa.com/usuarios/tu-factura/tarifas/\#:\~:text=Precio%20por%20litro%20y%20por%20metro%20c%C3%BAbico,2025.%20;%20m3%20persona/mes%2C%202%2C33%2C%205%2C%2010](https://www.emasesa.com/usuarios/tu-factura/tarifas/#:~:text=Precio%20por%20litro%20y%20por%20metro%20c%C3%BAbico,2025.%20;%20m3%20persona/mes%2C%202%2C33%2C%205%2C%2010))  
  - 1,75 \* x \* 30 \* 0,003  
  - 2,95€ / mes con IVA  
- Fibra 1Gbps DIGI ([https://www.digimobil.es/fibra-optica/fibra-o-fibra-smart](https://www.digimobil.es/fibra-optica/fibra-o-fibra-smart)) \-\> 20€/mes

### **Comisiones Stripe**  
[https://stripe.com/es/pricing](https://stripe.com/es/pricing)
![Comisiones Stripe](/img/s2-comisiones-stripe.png)

### **Desglose:**

- Fijo: 247,43€ \+ 298,91€ \+ 60€ \= 606,34€  
- \#soporte \= (comerciosFree / 200\) \+ (comerciosPremium / 150\)

### **Incógnitas:**

- Nº de comercios (básicos / premium)  
- Nº de transacciones por usuario (promedio)  
- Suma de cada transacción (promedio**)**

### **Cálculo del capital social**  
A pesar de que el capital social puede comenzar con 1€, esto provocaría que el 20% de los beneficios fueran destinados a impuestos. Para evitarlo, decidimos invertir 3000 en capital social (clau \= que es lo mínimo para que no te cobren tantos impuestos) .

- Mínimo 3000€

### **Costes sociales**  
\+ 23,6% contingencias comunes  
\+ 1,5% contingencias profesionales (accidentes/enfermedades de trabajo)  
\+ 5,5% desempleo  
\+ 0,6% formación  
\+ 0,2% FOGASA (Fondo de Garantía Salarial)  
\+ 0,67% MEI (Mecanismo Equidad Intergeneracional)

- **Ing. Software:** 15€/h \=\> 19,80 tras costes sociales  
- **Team Leader:** 17€/h \=\> 22,55 tras costes sociales

### **Cotización:** 
[https://www.seg-social.es/wps/wcm/connect/wss/21d47883-cb4d-45d9-9805-9332c3d61aad/BNR+13\_2025.pdf?MOD=AJPERES](https://www.seg-social.es/wps/wcm/connect/wss/21d47883-cb4d-45d9-9805-9332c3d61aad/BNR+13_2025.pdf?MOD=AJPERES)

### **GitHub Actions:**   

![GitHub Actions](/img/s2-github-actions.png)

**Febrero:** 877 minutos \= 31,76€  
**Marzo:** 2427 minutos \= 87,92€  
**Abril:** 2427 minutos \= 87,92€  
**Mayo:** 2427 minutos \= 87,92€

La cuota de minutos de GitHub Actions es de 50.0000 min. No nos acercamos a esa cuota por lo que no nos tendríamos que preocupar por gastos por exceso.

Suponemos que a partir del mes de mayo los gastos de GitHub Actions se reducen en gran medida ya que solo tendría que apoyar el trabajo del equipo de soporte. Por tanto, seguiriamos dentro del plan de GitHub Enterprise, sin acercarnos ni de lejos a la cuota máxima.

### **Estimaciones del OpEx:**  
Para distintos casos de uso en fucnión de los datos variables. Los costes fijos de opex no se desglosan con detalle pues ya están previamente definidos en el documento.

#### **Mes 9:**  
**Bienes inmuebles:** En mes 9, el gasto en inmuebles será de 2108€ siguiendo el desglos en la sección Bienes Inmuebles del OpEx  
**Comisiones stripe:** hay que tener en cuenta que suponemos un valor por venta de 30€. En el mes 9 tenemos 122 comercios básicos y 61 premium, Los primeros suponemos que realizarán unas 40 ventas al mes y los segundos unas 53 ventas al mes. Teniendo todo esto en cuenta y sabiendo que las comisiones de stripe se calculan tal que numVentas x **(1,5 x valorVenta \+ 0.25) \=** .  
**Costes de contratación de soporte** (40h x numPersonas x 19,8€ \- incluidos costes de contratación). En el mes 9 solo hay una persona contratada para el mantenimiento siguiendo la regla de que el equipo de mantenimiento se incrementa tal que:   
\- Por cada 200 comercios con plan básico \=\> 1 ingeniero  
\- Por cada 150 comercios premium \=\> 1 ingeniero  
Por tanto serán, 1584€  
**Opex Mes 9: 9,696€**   ¡INCLUYENDO EL OPEX FIJO\!

#### **Mes 14:**   
**Bienes inmuebles**: 2109€  
**Comisiones stripe:** 

- Num comercios básicos: 606  
- Num comercios premium: 303  
- Media ventas por comercio básicos: 40  
- Media ventas comercios premium: 53  
- Media valor de la venta: 30€  
  Fórmula: numVentas x **(1,5 x valorVenta \+ 0.25)**.  
  **Costes de contratación de soporte:** 7920 €  
  **Opex Mes 14: 38,634€**  ¡INCLUYENDO EL OPEX FIJO\!

## **CAPEX \- Inversión inicial** (En bruto sin tener en cuenta IRPF ni CS)

| Partida | Cálculo | Importe |
| :---- | :---- | :---- |
| Registro de marca |  | 287€ |
| Renovación hardware |  | 2.800€ |
| Ing.Software |  (13 personas · 140h · 19,8 €/h) \+ (4 personas· 140h · 19,8€/h · 0.2) | 38.253€ |
| Team Leader  | (4 personas ·140h · 22,5€/h · 0,8) | 10.080€ |
| GitHub Actions | 17 · 17,58€ | 1195€ |
| **Total CapEx** |  | 52.615€ |

**Capex actual: 31569€**

**Registro de marca**: clase 9, clase 35 y clase 42 \= 125 \+ 81 \+ 81 \= 287€

**Presupuesto de renovación hardware**: suponiendo portátiles de 5 años de antigüedad (No se incluye en el CAPEX ya que la amortización de los dispositivos informáticos según la agencia tributaria en España suele ser de 3-4 años por lo que al 5 año su valor es 0 €) se puede considerar renovar el 20% de los ordenadores a 700 euros cada uno.

**Impuesto de Sociedades:** durante los años 4 y 5, un 15% se lo queda hacienda; a partir de entonces, se queda el 25%, pero no hay que pagarlo hasta que no reportemos beneficios.

**TCO (Total Cost of Ownership)**  
Calculado en el Excel incluyendo una contingencia del 10%   
Somos rentables a partir del mes 16\.  
Link al excel: [https://docs.google.com/spreadsheets/d/1UxTqO9XCu9ChmOrox5ee](https://docs.google.com/spreadsheets/d/1UxTqO9XCu9ChmOrox5ee9s0YhAakt7SkVIf2buT2jz8/edit?gid=0#gid=0)  
[9s0YhAakt7SkVIf2buT2jz8/edit?gid=0\#gid=0](https://docs.google.com/spreadsheets/d/1UxTqO9XCu9ChmOrox5ee9s0YhAakt7SkVIf2buT2jz8/edit?gid=0#gid=0)