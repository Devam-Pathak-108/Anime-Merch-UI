function clicked(thi){
    temp=thi.children;
    temp_img=temp[0].getAttribute('src');
    temp_img2=temp_img.slice(2);
    localStorage.setItem('img','../personal'+temp_img2);
    console.log(localStorage.getItem('img'));
    localStorage.setItem('name',String(temp[1].innerHTML));
    localStorage.setItem('prize',String(temp[2].innerHTML));
    localStorage.setItem('dis',String(temp[3].innerHTML));
    location.href='../slots.html';
    
 }
 