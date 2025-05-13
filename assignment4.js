<script>
    document.getElementById('idForm').addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('cardName').textContent = document.getElementById('name').value;
      document.getElementById('cardCourse').textContent = document.getElementById('course').value;
      document.getElementById('cardSection').textContent = document.getElementById('section').value;
      document.getElementById('cardContact').textContent = document.getElementById('contact').value;
      document.getElementById('idCard').style.display = 'block';
    } );
  </script>