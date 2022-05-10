class J {
  constructor() {
    this.c = '!?#@%[]()*-____';
    this.n = [[3,5,6,7,9,12,15],[2,4,6,7,9,10,12,14],[2,4,6,8,10,13,14,15],[1,3,4,6,7,8,9,12,15]];
  }

  i() {
    document.body.innerHTML = '<style>body{font-family:"Courier New";background:#111;color:#ddd;}#f{display:flex;align-items:center}#p{cursor:pointer;}.c{color:#555}</style>' + 'LB| J U S T P O T |BLB<DIf<D>|B|B|B|B|</D>g1<D>|B|B|B|B|</D>g2<D>|B|B:B|B|</D>g3<D>|B|B|B|B|</D>g4<D>|B|B|B|B|</D></D>LB|._____...____..|B||_____|.<NIp/PUSH\\</N>.|BL'.replace(/(g\d)/g, '<div id="$1" class="g"></div>').replace(/I(.)/g, ' id="$1">').replace(/L/g, '+---------------+').replace(/D/g, 'div').replace(/N/g, 'span').replace(/B/g, '<br>');
    document.getElementById('p').addEventListener('click', () => this.p(1));
    this.p();
  }
  
  p(s) {
    document.querySelectorAll('.g').forEach((e, i) => {
      let r = '';
      for (let j = 1; j < 16; j++) {
        r += `${(s == 20 && this.n[i].includes(j)) ? '&#9632;' : `<i class="c">${this.c[Math.floor(Math.random() * this.c.length)]}</i>`}${!(j % 3) ? '<br>' : ''}`;
      }
      e.innerHTML = r;
    });
    
    if (s < 20) setTimeout(() => this.p(++s), 99);
  }
}

new J().i();
