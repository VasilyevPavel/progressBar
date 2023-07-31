const inputs = document.querySelectorAll('#chek');
const three = document.querySelector('#three');
const checkThree = document.querySelector('#checkthree');
const progressBar = document.querySelector('#progressBar');
const progressValue = progressBar.dataset.progress;
const qwestionAllLength = 12;

let countCheckBox = Number(progressValue);
let progressPercent = progressBar.style.width.slice(0, -1);

// console.log(three.value);

inputs.forEach((element) => {
  element.addEventListener('click', async (e) => {
    if (e.target.checked === true) {
      countCheckBox += 1;
    } else {
      if (countCheckBox > 0) {
        countCheckBox -= 1;
      }
    }

    progressPercent = Number(
      ((countCheckBox / qwestionAllLength) * 100).toFixed(0),
    );

    // TODO PB DOM COLORS
    console.log('progressBar ===> ', progressBar);
    if (progressPercent <= 50) {
      progressBar.classList.add('bg-danger');
      progressBar.classList.remove('bg-warning');
    } else if (progressPercent > 50 && progressPercent < 75) {
      progressBar.classList.remove('bg-danger');
      progressBar.classList.add('bg-warning');
    } else if (progressPercent > 75) {
      progressBar.classList.remove('bg-warning');
      progressBar.classList.add('bg-success');
    }

    const data = {
      [e.target.name]: e.target.checked,
      progress: countCheckBox,
    };
    const { sid } = e.target.dataset;

    progressBar.style.width = `${progressPercent}%`;
    progressBar.innerText = `${progressPercent}%`;
    try {
      const response = await fetch(`http://localhost:3000/api/lists/${sid}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.log(err);
    }
  });
});

let inputValue;
let isCounted = false;
three.addEventListener('keyup', async (e) => {
  const inputLength = e.target.value.length;
  inputValue = '';
  if (inputLength >= 4) {
    if (!isCounted) {
      countCheckBox += 1;
    }
    checkThree.checked = true;
    isCounted = true;

    console.log(countCheckBox);

    progressPercent = Number(
      ((countCheckBox / qwestionAllLength) * 100).toFixed(0),
    );

    // TODO PB DOM COLORS
    console.log('progressBar ===> ', progressBar);
    if (progressPercent <= 50) {
      progressBar.classList.add('bg-danger');
      progressBar.classList.remove('bg-warning');
    } else if (progressPercent > 50 && progressPercent < 75) {
      progressBar.classList.remove('bg-danger');
      progressBar.classList.add('bg-warning');
    } else if (progressPercent > 75) {
      progressBar.classList.remove('bg-warning');
      progressBar.classList.add('bg-success');
    }

    progressBar.style.width = `${progressPercent}%`;
    progressBar.innerText = `${progressPercent}%`;

    const { sid } = e.target.dataset;
    inputValue += e.target.value;
    const data = {
      q8: checkThree.value,
      questionInputValue: inputValue,
      progress: countCheckBox,
    };
    try {
      const response = await fetch(`http://localhost:3000/api/lists/${sid}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.log(err);
    }

    // inputValue += e.target.value;
    // // progressPercent = +((countCheckBox / qwestionAllLength) * 100).toFixed(0);
    // // TODO PB DOM COLORS
    // console.log('progressBar ===> ', progressBar);
    // if (progressPercent <= 50) {
    //   progressBar.classList.add('bg-danger');
    //   progressBar.classList.remove('bg-warning');
    // } else if (progressPercent > 50 && progressPercent < 75) {
    //   progressBar.classList.remove('bg-danger');
    //   progressBar.classList.add('bg-warning');
    // } else if (progressPercent > 75) {
    //   progressBar.classList.remove('bg-warning');
    //   progressBar.classList.add('bg-success');
    // }
    // progressBar.style.width = `${progressPercent}%`;
    // progressBar.innerText = `${progressPercent}%`;
    // const { sid } = e.target.dataset;
    // const data = {
    //   q8: checkThree.value,
    //   questionInputValue: inputValue,
    //   progress: progressPercent,
    // };
    // try {
    //   const response = await fetch(`http://localhost:3000/api/lists/${sid}`, {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data),
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
  } else {
    console.log('inputLength < 4 !!!!!');

    // console.log(countCheckBox);
    // checkThree.checked = false;

    // const { sid } = e.target.dataset;
    // const data = {
    //   q8: checkThree.value,
    //   questionInputValue: inputValue,
    //   progress: countCheckBox,
    // };
    // try {
    //   const response = await fetch(`http://localhost:3000/api/lists/${sid}`, {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data),
    //   });
    // } catch (err) {
    //   console.log(err);
    // }

    const neiborghCheckBoxInput = e.target.previousSibling.previousSibling;
    // console.log(e.target.previousSibling.previousSibling);
    const { sid } = e.target.dataset;
    checkThree.setAttribute('disabled', 'disabled');
    checkThree.checked = false;
    if (inputLength === 0) {
      // if (isCounted && countCheckBox > 0) {
      if (countCheckBox > 0) {
        countCheckBox -= 1;

        // if (countCheckBox > 0) {
        // countCheckBox -= 1;
        // progressPercent = +((countCheckBox / qwestionAllLength) * 100).toFixed(
        //   0,
        // );

        progressPercent = Number(
          ((countCheckBox / qwestionAllLength) * 100).toFixed(0),
        );

        // TODO PB DOM COLORS
        console.log('progressBar ===> ', progressBar);
        if (progressPercent <= 50) {
          progressBar.classList.add('bg-danger');
          progressBar.classList.remove('bg-warning');
        } else if (progressPercent > 50 && progressPercent < 75) {
          progressBar.classList.remove('bg-danger');
          progressBar.classList.add('bg-warning');
        } else if (progressPercent > 75) {
          progressBar.classList.remove('bg-warning');
          progressBar.classList.add('bg-success');
        }

        progressBar.style.width = `${progressPercent}%`;
        progressBar.innerText = `${progressPercent}%`;

        progressBar.style.width = `${progressPercent}%`;
        progressBar.innerText = `${progressPercent}%`;
        // checkThree.setAttribute('disabled', 'disabled');
        const data = {
          q8: !neiborghCheckBoxInput.value,
          questionInputValue: inputValue,
          progress: countCheckBox,
        };
        try {
          const response = await fetch(
            `http://localhost:3000/api/lists/${sid}`,
            {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
            },
          );
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
});
