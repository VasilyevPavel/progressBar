const updateCheckListModal = document.getElementById('updateCheckListModal');
const bootstrapUpdateCheckListModal = new bootstrap.Modal(updateCheckListModal);
const updateCheckListForm = document.getElementById('updateCheckList');

listsCotainerElement?.addEventListener('click', (e) => {
  // e.preventDefault();
  if (e.target.id === 'updateCheckListButton') {
    const { checklistid, employname, mentorname } = e.target.dataset;
    const employNameInput = updateCheckListForm.employName;
    const mentorNameInput = updateCheckListForm.mentorName;

    updateCheckListForm.dataset.checklistid = checklistid;
    employNameInput.value = employname;
    mentorNameInput.value = mentorname;
    bootstrapUpdateCheckListModal.show();
  }
});

updateCheckListForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('SUBMIT');

  const listId = updateCheckListForm.dataset.checklistid;

  const checkListData = new FormData(updateCheckListForm);
  const { employName, mentorName } = Object.fromEntries(checkListData);

  const response = await fetch(`/api/admin/lists/${listId}`, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ employName, mentorName }),
  });

  const result = await response.json();
  if (response.status === 200) {
    const dataAttriburtes = document.querySelector(
      `[data-checklistid="${listId}"]`,
    );

      alert.innerHTML = 'Лист сохранен!'
      alert.classList.remove('alert-primary');
      alert.classList.remove('alert-danger');
      alert.classList.add('alert-success');
      alert.style.display = 'flex';
      setTimeout(() => {
        alert.style.display = 'none';
      }, 2000);

    const employNameElement = document.querySelector(
      `[data-checklistid="${listId}"]`,
    ).previousSibling;

    dataAttriburtes.dataset.employname = employName;
    dataAttriburtes.dataset.mentorname = mentorName;
    employNameElement.innerText = employName;

    bootstrapUpdateCheckListModal.hide();
  } else {
    console.log(response.status);
  }
});
