const deleteCheckListButton = document.getElementById('deleteCheckList');

// console.log(deleteCheckListButton);

deleteCheckListButton?.addEventListener('click', async (e) => {
  e.preventDefault();
  console.log('DELETE');
  const listId = document.getElementById('updateCheckList').dataset.checklistid;

  const response = await fetch(`/api/admin/lists/${listId}`, {
    method: 'DELETE',
  });

  if (response.status === 200) {
    const deleteElement = document.querySelector(
      `[data-checklistid="${listId}"]`,
    ).parentNode;
    deleteElement.remove();
    bootstrapUpdateCheckListModal.hide();
  } else {
    console.log(response.status);
  }
});
