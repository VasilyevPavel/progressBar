const { updateUserForm, loginForm, createUserForm } = document.forms;
const alert = document.querySelector('#alertMessage');
const mainContainer = document.querySelector('.container');

const userDelBtn = document.querySelector('.btn-danger');

if (updateUserForm) {
  updateUserForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userId = e.target.querySelector('input[name="userId"]').value;

    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
          isAdmin: e.target.isAdmin.value,
        }),
      });

      if (response.ok) {
        alert.innerHTML = 'Пользователь обновлен успешно!';

        alert.classList.add('alert-success');
        alert.style.display = 'flex';
        setTimeout(() => {
          window.location.href = '/admin/users';
        }, 1500);
      } else {
        throw new Error('Ошибка при обновлении пользователя.');
      }
    } catch (error) {
      console.error(error);
    }
  });
}

if (userDelBtn) {
  userDelBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const userId = document.querySelector('input[name="userId"]').value;

    if (userId === '1') {
      alert.innerHTML =
        'Невозможно удалить данного пользователя, обратитесь к системному администратору!';
      alert.classList.remove('alert-primary');
      alert.classList.add('alert-danger');
      alert.style.display = 'flex';
      setTimeout(() => {
        alert.style.display = 'none';
      }, 3000);
    } else {
      const confirmDelete = document.createElement('div');
      confirmDelete.innerHTML = `
        <div class="modal" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Удаление пользователя</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p>Вы уверены, что хотите удалить пользователя?</p>
              </div>
              <div class="modal-footer">
                <button id="nope" type="button" class="btn btn-danger btn-red" data-bs-dismiss="modal">Отменить</button>
                <button id="del" type="button" class="btn btn-primary btn-green">Подтвердить</button>
              </div>
            </div>
          </div>
        </div>`;
      mainContainer.appendChild(confirmDelete);
      const bootstrapModal = new bootstrap.Modal(
        confirmDelete.querySelector('.modal'),
      );
      bootstrapModal.show();

      confirmDelete
        .querySelector('#del')
        .addEventListener('click', async () => {
          try {
            const response = await fetch(`/api/users/${userId}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
            });

            if (response.ok) {
              console.log('Пользователь успешно удален');
              window.location.href = '/admin/users';
            } else {
              throw new Error('Ошибка при удалении пользователя.');
            }
          } catch (error) {
            console.log(error);
          }
        });
    }
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const info = document.createElement('span');
    const infoContainer = document.querySelector('.login-form-wrapper');
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
        }),
      });
      const responseJson = await response.json();
      if (response.ok) {
        alert.innerHTML = responseJson.message;
        alert.classList.remove('alert-primary');
        alert.classList.remove('alert-danger');
        alert.classList.add('alert-success');
        alert.style.display = 'flex';
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      } else {
        alert.innerHTML = responseJson.error;
        alert.classList.remove('alert-primary');
        alert.classList.add('alert-danger');
        alert.style.display = 'flex';
      }
    } catch (error) {
      console.error(error);
    }
  });
}

if (createUserForm) {
  createUserForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const isAdmin = e.target.isAdmin.value;
    console.log(isAdmin);
    try {
      console.log(isAdmin);
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
          isAdmin,
        }),
      });

      const responseData = await response.json();
      if (response.ok) {
        alert.innerHTML = responseData.message;
        alert.classList.remove('alert-primary');
        alert.classList.remove('alert-danger');
        alert.classList.add('alert-success');
        alert.style.display = 'flex';
        setTimeout(() => {
          window.location.href = '/admin/users';
        }, 2000);
      } else {
        alert.innerHTML = responseData.error;
        alert.classList.remove('alert-primary');
        alert.classList.add('alert-danger');
        alert.style.display = 'flex';
        setTimeout(() => {
          alert.style.display = 'none';
        }, 1500);
      }
    } catch (error) {
      console.error(error);
    }
  });
}
