import checkNumInputs from './checkNumInputs';
import closeModals from './closeModals';

const forms = (state) => {
  const form = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input');

  checkNumInputs('input[name="user_phone"]');
  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data
    });

    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
  };

  function formClose() {
    modal.style.display = "none";
    document.body.style.overflow = "";
    windows.forEach((item) => {
      item.style.display = "none";
    });
  }
  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);

      const formData = new FormData(item);
      if ((item.getAttribute('data-calc')) === "end") {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      postData('assets/server.php', formData)
        .then(res => {
          statusMessage.textContent = message.success;
          //console.log(res);
        })
        .catch(() => statusMessage.textContent = message.failure)
        .finally(() => {
          clearInputs();
          for (let prop in state) {
            delete state[prop];
          };
          setTimeout(() => {
            statusMessage.remove();
            closeModals('.popup_engineer');
            closeModals('.popup');
            closeModals('.popup_calc');
            closeModals('.popup_calc_profile');
            closeModals('.popup_calc_end');
          }, 2000);
        });
    });
  });
};

export default forms;
