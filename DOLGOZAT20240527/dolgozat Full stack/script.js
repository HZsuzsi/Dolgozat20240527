function fullStack(frontend, backend) {
    const frontendFejlesztok = frontend.split(';');
    const backendFejlesztok = backend.split(';');
    
    return frontendFejlesztok.filter(nev => backendFejlesztok.includes(nev));
}


console.log(fullStack('Zsiros B. Odon;Koaxk Abel;Heu Reka;Riz Otto', 'Riz Otto;Rabsz Olga;Trab Antal;Koaxk Abel;Winch Eszter'));
console.log(fullStack('Citad Ella;Techno Kolos', 'Git Aron;Teask Anna'));