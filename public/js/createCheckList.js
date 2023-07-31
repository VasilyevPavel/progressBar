const addCheckListButton = document.getElementById('addCheckListButton');
const createCheckListModal = document.getElementById('createCheckListModal');
const bootstrapСreateCheckListModal = new bootstrap.Modal(createCheckListModal);
const createCheckListForm = document.getElementById('createCheckList');
const listsCotainerElement = document.getElementById('listsCotainer');
const alert = document.querySelector('#alertMessage');
const deleteCheckList = document.querySelector('#deleteCheckList');


addCheckListButton?.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('CLICK');
  bootstrapСreateCheckListModal.show();
});

createCheckListModal?.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('SUBMIT');

  const checkListData = new FormData(createCheckListForm);
  const { employName, mentorName } = Object.fromEntries(checkListData);
  const userId = e.target.dataset.userid;

  const response = await fetch(`/api/admin/lists/${userId}`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ employName, mentorName }),
  });

  const result = await response.json();
  if (response.status === 200) {
    const listElement = document.createElement('div');
    listElement.classList.add('card', 'user');
    listElement.innerHTML = `
        <a href="/lists/${result.sid}" class="card-link stretched-link">${employName}</a>
        <a href="#" class="card-edit-link position-relative" id="updateCheckListButton" data-checklistid=${result.id} data-employname=${employName} data-mentorname=${mentorName}>редактировать</a>
        <span>${result.progress}%</span>
    `;
    listsCotainerElement.append(listElement);
    bootstrapСreateCheckListModal.hide();
    createCheckListForm.reset();

    alert.innerHTML = 'Лист добавлен!'
    alert.classList.remove('alert-primary');
    alert.classList.remove('alert-danger');
    alert.classList.add('alert-success');
    alert.style.display = 'flex';
    setTimeout(() => {
      alert.style.display = 'none';
    }, 2000);
  } else {
    console.log(response.status);
    
  }
});

deleteCheckList.addEventListener('click', (e) => {
  alert.innerHTML = 'Лист удален!'
  alert.classList.remove('alert-primary');
  alert.classList.add('alert-danger');
  alert.classList.add('alert-success');
  alert.style.display = 'flex';
  setTimeout(() => {
    alert.style.display = 'none';
  }, 2000);
});