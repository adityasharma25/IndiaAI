    const modal = document.getElementById('authModal');
    const closeModal = document.querySelector('.close-btn');
    const loginBtn = document.querySelector('.login-btn');
    const registerBtn = document.querySelector('.register-btn');
    const logoutBtn = document.querySelector('.logout-btn');
    const authForm = document.getElementById('authForm');
    const modalTitle = document.getElementById('modalTitle');
    const toggleForm = document.getElementById('toggleForm');
    const switchToRegister = document.getElementById('switchToRegister');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submitBtn');

    let isRegistering = false;


    
    if (localStorage.getItem("loggedInUser")) {
        showLogoutButton();
    }


    loginBtn.addEventListener("click", () => {
        isRegistering = false;
        modalTitle.textContent = "Login";
        submitBtn.textContent = "Login";
        toggleForm.textContent = "";
        modal.style.display = "block";
    });


    registerBtn.addEventListener("click", () => {
        isRegistering = true;
        modalTitle.textContent = "Register";
        submitBtn.textContent = "Register";
        toggleForm.textContent = "";
        modal.style.display = "block";
    });

    
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    
    authForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let users = JSON.parse(localStorage.getItem("users")) || {};

        if (isRegistering) {
            
            if (users[email]) {
                toggleForm.textContent = "Already registered.";
            } else {
                users[email] = password;
                localStorage.setItem("users", JSON.stringify(users));
                toggleForm.textContent = "Registration successful.";
            }
        } else {
            
            if (users[email] && users[email] === password) {
                localStorage.setItem("loggedInUser", email);
                modal.style.display = "none";
                showLogoutButton();
            } else {
                toggleForm.textContent = "Invalid email or password.";
            }
        }
    });


    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        hideLogoutButton();
    });

    
    function showLogoutButton() {
        loginBtn.style.display = "none";
        registerBtn.style.display = "none";
        logoutBtn.style.display = "inline-block";
    }


    function hideLogoutButton() {
        loginBtn.style.display = "inline-block";
        registerBtn.style.display = "inline-block";
        logoutBtn.style.display = "none";
    }


        document.getElementById('user-details-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('User details saved successfully!');
        });

        navLink.addEventListener('click', showLoginModal);
        checkLogin();
