// localStorage.setItem('userName', 'Gabi Valle');
// localStorage.setItem('userEmail', 'email@life.com');
// localStorage.setItem('userPhone', '5581996906155');
// localStorage.setItem('userDescription', 'Esta é uma descrição');
function jivo_onOpen(){ 
    console.log('teste'); 
    jivo_api.setContactInfo({
        name: localStorage.getItem('userName') ? localStorage.getItem('userName') : 'Usuário Padrão',
        email: localStorage.getItem('userEmail') ? localStorage.getItem('userEmail') : 'padrao@email.com',
        phone: localStorage.getItem('userPhone') ? localStorage.getItem('userPhone') : '+5581999999999',
        description: localStorage.getItem('userDescription') ? localStorage.getItem('userDescription') : 'Usuário Padrão description'
    });
};