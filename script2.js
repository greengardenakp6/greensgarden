<script>
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            sessionStorage.setItem('loggedInUser', document.getElementById('email').value);
            window.location.href = 'home2.html';
        });
    </script>