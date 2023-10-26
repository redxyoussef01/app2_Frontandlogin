const $body = $("body");
const $header = $(".page-header");
const $navCollapse = $(".navbar-collapse");
const scrollClass = "scroll";

var users = [{ username:'redx', Firstname:"youssef" , Lastname:"rais", email:"yourais00@gmail.com" ,password:"azert123"}
]


var scrollToTopButton = document.getElementById("scroll-to-top");

        window.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopButton.style.display = "block";
            } else {
                scrollToTopButton.style.display = "none";
            }
        };

        scrollToTopButton.addEventListener("click", function() {
            document.body.scrollTop = 0; 
            document.documentElement.scrollTop = 0; 
        });

function SignUp(){
    var Firstname = document.getElementById("firstName").value;
    var Lastname = document.getElementById("lastName").value;
    var Email = document.getElementById("email").value;
    var Password = document.getElementById("password").value;
    var CPassword = document.getElementById("confirmPassword").value;
    console.log(Firstname);
    console.log(Lastname);
    console.log(Email);
    console.log(Password);
    console.log(CPassword);
   
   

      if(PassConfirm() === true){
        var users= [];
    var Gusername = "";
    for(var i=0 ; i<2 ;i++){
    Gusername +=  Firstname.charAt(i);
    }

    for(var i=0 ; i<2 ;i++){
    Gusername +=  Lastname.charAt(i);
    }
    console.log(Gusername);

    var user = {};

    user.Firstname  = Firstname ;
    user.Lastname  = Lastname;
    user.Email = Email ;
    user.Password = Password ; 
    user.Gusername = Gusername;

        users.push(user);

        console.log(users);
      }else{
  return false;
      }
    

  
}


function PassConfirm(){
    var Password = document.getElementById("password").value;
    var CPassword = document.getElementById("confirmPassword").value;

    if(Password == CPassword){
    return true;
    }else{
    document.getElementById("Confirm").innerHTML ="Password do not match";
    document.getElementById("password").value ="";
    document.getElementById("confirmPassword").value ="";
    }
}


        


              function showPass(){

                var passInput = document.getElementById('password');

                if(passInput.type == 'password'){
                    passInput.type = 'text'
                }else if(passInput.type == 'text'){
                    passInput.type = 'password'
                }
             }


            
            function login(){
                var userValue = document.getElementById('email').value;
                var passValue = document.getElementById('password').value;
               
              for(var i=0; i<users.length;i++){

                    if((userValue == users[i].username && passValue == users[i].password )||(userValue == users[i].email && passValue == users[i].password)){
                        return true;
                    }
                }
                document.getElementById('loginmsg').innerHTML = 'username and password do not match';
                document.getElementById('email').value="";
                document.getElementById('password').value = "";
                        return false;
             }
            