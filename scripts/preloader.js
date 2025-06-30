document.addEventListener('DOMContentLoaded', () => {
  const counter = document.querySelector('.counter');
  const cyberText = document.querySelector('.cyber-text');
  const preloader = document.querySelector('.preloader');

  let progress = 0;
  const interval = 40;
  const totalSteps = 100;

  // Функция для скрытия прелоадера
  const hidePreloader = () => {
    counter.style.opacity = 0;
    counter.style.transform = 'translateY(-20px)';

    setTimeout(() => {
      cyberText.style.opacity = 1;
      cyberText.style.transform = 'translateY(0)';

      setTimeout(() => {
        preloader.style.opacity = 0;
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 1000);
      }, 2000);
    }, 500);
  };

  // Ожидание полной загрузки страницы
  const waitForPageLoad = () => {
    return new Promise((resolve) => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        window.addEventListener('load', resolve);
      }
    });
  };

  // Ожидание загрузки видео
  const waitForVideos = () => {
    const videos = document.querySelectorAll('video');
    if (videos.length === 0) return Promise.resolve();

    return Promise.all(Array.from(videos).map(video => {
      return new Promise((resolve) => {
        if (video.readyState >= 3) { // HAVE_FUTURE_DATA
          resolve();
        } else {
          video.addEventListener('canplaythrough', resolve, {once: true});
        }
      });
    }),)
  };

  // Основная функция инициализации
  const init = async () => {
    // Запускаем анимацию прогресса
    const counterInterval = setInterval(() => {
      counter.textContent = `${progress}%`;
      progress++;

      if (progress > 100) {
        clearInterval(counterInterval);
      }
    }, interval);

    try {
      // Ожидаем полной загрузки страницы и видео
      await Promise.all([
        waitForPageLoad(),
        waitForVideos(),
        new Promise(resolve => setTimeout(resolve, 3000)) // Минимальное время показа
      ]);
    } catch (e) {
      console.error('Ошибка загрузки:', e);
    }

    // Если прогресс еще не достиг 100%, ждем
    if (progress < 100) {
      await new Promise(resolve => {
        const checkProgress = setInterval(() => {
          if (progress >= 100) {
            clearInterval(checkProgress);
            resolve();
          }
        }, 50);
      });
    }

    hidePreloader();
  };

  init();
});
