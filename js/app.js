document.addEventListener("mousemove", (e) => {
  //определяем корневой элемент
  Object.assign(document.documentElement, {
    //определяем переменные со значением движения мыши
    style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;  
        --move-y:${(e.clientY - window.innerHeight / 2) * -0.01}deg;
        `,
  });
});
