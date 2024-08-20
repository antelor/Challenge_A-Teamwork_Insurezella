# a-teamwork-challenge

Tecnologias utilizadas:
Javascript
React 18.3.1
Vite 5.4.1
CSS

Paso a paso:
Lo primero que hice fue crear un proyecto base con Vite. Decidi dividir el diseño en distintas secciones y trabajarlas por separado, cada una en su propio componente de React. Asi fui trabajando un primer boceto de todas las partes.

Decidi comenzar por la navbar. En este proyecto utilice un criterio mobile-first. Es decir, elegi primero hacer todo el CSS teniendo en cuenta la referencia del mobile, para luego hacer el desktop utilizando media queries. (Para referencia, intente seguir el diseño al maximo utilizando la vista de devtools correspondiente al iPhone 14 Pro Max, chequeando a su vez con otros dispositivos, pero entendiendo que no es posible que se vea igual a la referencia en todos.)

![Navbar](readme-imgs/navbar.png)

Mi idea en esta primera etapa no era hacer una implementacion pixel perfect, sino una aproximacion de todas las secciones para despues encarar los detalles mas finos.

![Find plans sections](readme-imgs/findPlans.png)

En el caso del footer, decidi para la vista mobile dividirlo en 2 secciones, por lo que cree un componente dedicado llamado FooterMobile.

![Alt text](readme-imgs/footermobile.png)