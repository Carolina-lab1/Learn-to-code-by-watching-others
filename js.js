function validar() {
    //limpar mensagem de erro
    document.getElementById('errorFirstName').textContent = '';
    document.getElementById('errorLastName').textContent = '';
    document.getElementById('errorEmail').textContent = '';
    document.getElementById('errorPassword').textContent = '';

    //Limpar placeholders
    document.getElementById('firstName').placeholder = '';
    document.getElementById('firstName').classList.remove('input-error');
    document.getElementById('lastName').placeholder = '';
    document.getElementById('lastName').classList.remove('input-error');
    document.getElementById('email').placeholder = '';
    document.getElementById('email').classList.remove('input-error');
    document.getElementById('password').placeholder = '';
    document.getElementById('password').classList.remove('input-error')
    

    //Obter valores dos campos
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;

    // Verificar se os campos estão vazios e exibir mensagem de erro
    if (!firstName) {
        document.getElementById('errorFirstName').textContent = 'First Name cannot be empty';
        document.getElementById('firstName').placeholder = '';
        document.getElementById('firstName').classList.add('input-error');
        isValid = false;

    }

    if(!lastName) {
        document.getElementById('errorLastName').textContent = 'Last Name cannot be empty';
        document.getElementById('lastName').placeholder = '';
        document.getElementById('lastName').classList.add('input-error');
        isValid = false;
    }

    //Verificar formato do email 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('errorEmail').textContent = 'Email cannot be empty';
        document.getElementById('email').classList.add('input-error');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('errorEmail').textContent = 'Looks Like this is not a email';
        document.getElementById('email').placeholder = '';
        document.getElementById('email').classList.add('input-error');
        isValid = false;
    }

    if (!password) {
        document.getElementById('errorPassword').textContent = 'Password cannot be empty';
        document.getElementById('password').placeholder = '';
        document.getElementById('password').classList.add('input-error');
        isValid = false;
    }

    //Se tudo estiver válido, você pode enviar o formulário ou realizar ou opção
    if (isValid) {
        alert('Thank You');
    }


}