function clicked(thi){
   temp=thi.children;
   localStorage.setItem('img',temp[0].getAttribute('src'));
   localStorage.setItem('name',String(temp[1].innerHTML))
   localStorage.setItem('prize',String(temp[2].innerHTML))
   localStorage.setItem('dis',String(temp[3].innerHTML));
   location.href='../personal/slots.html';
}
