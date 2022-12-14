function validateform(a){  
    var name1=a.value.trim();
       
    a.value=name1
    if (name1==""){  
      a.placeholder='This field can\'t be blank'
      a.focus(); 
      var button = document.getElementById('sendbtn');

      button.setAttribute('disabled', '');
    }
    else{
      button.removeAttribute('disabled', '');
    }
    }