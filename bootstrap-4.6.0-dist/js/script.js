// untuk menghubungkan form contact dengan google spreadsheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbzTQOhLFSrefwecvYnY9v8cWd7_YuslwmBJ7CmwbH9OIcZtWpuQh9oyB1tgaq58-u274A/exec'
const form = document.forms['submit-to-google-sheet']
const loading = document.querySelector('.spinner-loading');
const btnSubmit = document.querySelector('.contact-kirim');
const alert = document.querySelector('.alert-contact');

  form.addEventListener('submit', e => {
    e.preventDefault()
    btnSubmit.classList.toggle('d-none');
    loading.classList.toggle('d-none');

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
            btnSubmit.classList.toggle('d-none');
            loading.classList.toggle('d-none');
            alert.classList.toggle('d-none');
            form.reset();

            console.log('Success!', response)
        })

      .catch(error => console.error('Error!', error.message))
  })


