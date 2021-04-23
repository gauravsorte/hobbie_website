var upload_pic = document.getElementById('myfile');


var allowedFileExtensions = /(\.jpg|\.jpeg)$/i;

function checkInput() {
    var filepath1 = upload_pic.value;
    if(filepath1 =='') {
        // console.log(filepath1);
        setErrorFor(upload_pic, 'Please Select A Photo!!!');

        return false;
    } else {
        return true
    }
}

function fileValidation() {
    // console.log(upload_pic);
    var filepath = upload_pic.value;
    // console.log(filepath);
    if(!allowedFileExtensions.exec(filepath)) {
        // console.log(allowedFileExtensions.test(filepath));
        setErrorFor(upload_pic, 'Please select Only Photo')
        upload_pic.value = '';
        return false;
    } else {
        setSuccessFor(upload_pic);
        return true;
    }
}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    console.log(formControl);
    const small = formControl.querySelector('small');
    formControl.className = 'error';
    small.innerText = message;
  }
  
  function setSuccessFor(input) {
    const formControl = input.parentElement;
    console.log(formControl);
    const small = formControl.querySelector('small');
    formControl.className = 'success';
    small.innerText = '';
  }
