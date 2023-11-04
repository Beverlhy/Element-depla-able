const placer = document.querySelector('.placer');
const listes = document.querySelectorAll('.liste');


listes.forEach(lis => {
    lis.addEventListener('dragstart', () =>{
        lis.classList.add('bouger');
    });
    lis.addEventListener('dragend', () =>{
        lis.classList.remove('bouger');
    })
});

const emplacer = (e) =>{
    e.preventDefault();
    const fin = placer.querySelector('.bouger');

   const  deplacer = [...placer.querySelectorAll('.liste:not(.bouger')];
    
   let prochain = deplacer.find(deb =>{
        return e.clientY <= deb.offsetTop + deb.offsetHeight / 1;
   });
        placer.insertBefore(fin,prochain);
}

placer.addEventListener('dragover', emplacer);
placer.addEventListener('dragenter', e => e.preventDefault());


