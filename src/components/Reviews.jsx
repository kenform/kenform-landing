import React, { useEffect, useMemo, useState } from 'react';
import { projects } from '../data/constants';
import './Reviews.css';

const content = {
  ru: {
    title: 'Отзывы',
    subtitle: 'Анонимизированный feedback по сайтам, интерфейсам и проектам, которые я делал.',
    eyebrow: 'Feedback',
    avg: 'Средняя оценка',
    total: 'отзывов',
    formTitle: 'Оставить отзыв',
    formText: 'Поделитесь впечатлением о сайте, проекте или интерфейсе.',
    namePlaceholder: 'Ваше имя *',
    textPlaceholder: 'Напишите отзыв *',
    button: 'Добавить отзыв',
    clear: 'Очистить мои локальные отзывы',
    note: 'Сейчас отзывы и скриншоты сохраняются локально в вашем браузере. Для публичных отзывов позже подключим базу данных.',
    ratingLabel: 'Оценка',
    screenshotLabel: 'Скриншоты проекта',
    screenshotHint: 'Можно прикрепить до 3 изображений. Необязательно.',
    screenshotButton: 'Прикрепить скриншоты',
    removeImage: 'Удалить',
    requiredName: 'Введите имя.',
    requiredText: 'Введите текст отзыва.',
    tooManyImages: 'Можно прикрепить максимум 3 скриншота.',
    fileTooLarge: 'Файл слишком большой. Максимум 1 MB на изображение.',
    defaultAuthor: 'Гость',
    newRole: 'Новый отзыв',
    items: [
      {
        projectTitle: 'Fagot',
        text: 'Сергей сделал сайт для проекта Fagot быстро и спокойно, без лишней суеты. Мне было важно, чтобы страница выглядела аккуратно и не отпугивала людей перегруженным дизайном. В итоге получился понятный сайт с нормальной структурой и приятной подачей.',
        author: 'Заказчик Fagot',
        role: 'Реальный заказной проект',
        rating: 5,
        images: [],
      },
      {
        projectTitle: 'React Pizza',
        text: 'Понравилось, что проект не выглядит как просто учебная страница. Есть каталог, фильтры, корзина, сортировка — всё похоже на нормальный интернет-магазин, а не на набор отдельных компонентов.',
        author: 'Feedback по React Pizza',
        role: 'E-commerce интерфейс',
        rating: 5,
        images: [],
      },
      {
        projectTitle: 'React Sneakers',
        text: 'В React Sneakers хорошо чувствуется логика магазина: можно смотреть товары, добавлять в избранное, собирать корзину. Интерфейс простой, но именно поэтому в нём легко разобраться.',
        author: 'Feedback по React Sneakers',
        role: 'Store UI',
        rating: 5,
        images: [],
      },
      {
        projectTitle: 'FarmVest',
        text: 'FarmVest выглядит как аккуратный современный лендинг. Особенно понравился первый экран и общее ощущение технологичного продукта. Сайт не перегружен, но выглядит достаточно уверенно.',
        author: 'Feedback по FarmVest',
        role: 'Landing page',
        rating: 5,
        images: [],
      },
      {
        projectTitle: 'Eragon Exchange',
        text: 'У Eragon Exchange есть настроение. Это не просто блоки с текстом, а цельная идея: тёмный стиль, фэнтези-атмосфера и ощущение отдельного бренда. Такой проект хорошо запоминается.',
        author: 'Feedback по Eragon',
        role: 'Concept website',
        rating: 5,
        images: [],
      },
      {
        projectTitle: 'Spring Greeting Site',
        text: 'Небольшой сайт, но сделан с приятным настроением. Он выглядит лёгким, весенним и не перегружает человека лишними элементами. Для поздравительного формата — самое то.',
        author: 'Feedback по Spring Site',
        role: 'Greeting microsite',
        rating: 5,
        images: [],
      },
      {
        projectTitle: 'Birthday Greeting Site',
        text: 'Хороший формат для персонального поздравления. Видно, что такой сайт можно быстро адаптировать под конкретного человека или событие, и он будет смотреться живее обычной открытки.',
        author: 'Feedback по Birthday Site',
        role: 'Personal page',
        rating: 4,
        images: [],
      },
      {
        projectTitle: 'BARBER Landing',
        text: 'Для барбершопа такой сайт выглядит уместно: быстро понятно, что это за место, какие услуги и куда нажимать. Хорошо, что дизайн не слишком сложный и не мешает основной цели — записи клиента.',
        author: 'Feedback по BARBER',
        role: 'Service landing',
        rating: 5,
        images: [],
      },
      {
        projectTitle: 'Library Landing',
        text: 'Library Landing понравился спокойной подачей. Не выглядит как сухой информационный сайт — скорее как современная страница городского пространства, куда действительно хочется зайти.',
        author: 'Feedback по Library',
        role: 'Editorial landing',
        rating: 5,
        images: [],
      },
      {
        projectTitle: 'Fagot',
        text: 'Для медицинской тематики выбран правильный тон: спокойно, чисто, без агрессивных цветов. Такой сайт вызывает больше доверия, потому что всё выглядит аккуратно и понятно.',
        author: 'Feedback по Fagot',
        role: 'Medical website',
        rating: 5,
        images: [],
      },
      {
        projectTitle: 'Tzeezotje Restaurant',
        text: 'Сайт хорошо передаёт атмосферу ресторана. Визуально сразу понятно, что проект про место, еду и настроение. Для презентации заведения такой формат подходит хорошо.',
        author: 'Feedback по Restaurant',
        role: 'Restaurant landing',
        rating: 4,
        images: [],
      },
      {
        projectTitle: 'Biysk',
        text: 'Biysk выглядит как классический промо-сайт: крупный первый экран, визуальный акцент и простая структура. Хороший пример лендинга, где главное — быстро зацепить внимание.',
        author: 'Feedback по Biysk',
        role: 'Promo landing',
        rating: 4,
        images: [],
      },
      {
        projectTitle: 'Britlex',
        text: 'Britlex воспринимается как аккуратный образовательный лендинг. Всё разложено спокойно: первый экран, блоки, преимущества. Нет ощущения визуального шума.',
        author: 'Feedback по Britlex',
        role: 'Education landing',
        rating: 4,
        images: [],
      },
      {
        projectTitle: 'Portfolio',
        text: 'Портфолио стало выглядеть намного собраннее: есть проекты, фильтры, отзывы, контакты, переключение языка и темы. Теперь это больше похоже на рабочую витрину, а не просто список ссылок.',
        author: 'Feedback по Portfolio',
        role: 'Portfolio review',
        rating: 5,
        images: [],
      },
      {
        projectTitle: 'Eragon Exchange',
        text: 'Больше всего понравилось, что в проектах есть разный стиль. Где-то строгий лендинг, где-то магазин, где-то атмосферный концепт. Это показывает, что Сергей может подстраиваться под задачу.',
        author: 'Общий feedback',
        role: 'Project showcase',
        rating: 5,
        images: [],
      },
    ],
  },
  en: {
    title: 'Reviews',
    subtitle: 'Anonymized feedback on websites, interfaces and projects I worked on.',
    eyebrow: 'Feedback',
    avg: 'Average rating',
    total: 'reviews',
    formTitle: 'Leave a review',
    formText: 'Share your impression about the website, project or interface.',
    namePlaceholder: 'Your name *',
    textPlaceholder: 'Write your review *',
    button: 'Add review',
    clear: 'Clear my local reviews',
    note: 'For now reviews and screenshots are saved locally in your browser. Public reviews can be connected to a database later.',
    ratingLabel: 'Rating',
    screenshotLabel: 'Project screenshots',
    screenshotHint: 'You can attach up to 3 images. Optional.',
    screenshotButton: 'Attach screenshots',
    removeImage: 'Remove',
    requiredName: 'Please enter your name.',
    requiredText: 'Please enter review text.',
    tooManyImages: 'You can attach up to 3 screenshots.',
    fileTooLarge: 'File is too large. Maximum 1 MB per image.',
    defaultAuthor: 'Guest',
    newRole: 'New review',
    items: [
      {
        projectTitle: 'Fagot',
        text: 'Sergey built the Fagot website quickly and without unnecessary back-and-forth. I needed the page to look clean and trustworthy, not overloaded. The final result is easy to read, calm and clear.',
        author: 'Fagot client',
        role: 'Real client project',
        rating: 5,
        images: [],
      },
      {
        projectTitle: 'React Pizza',
        text: 'React Pizza does not feel like just a random learning page. It has a catalog, filters, cart and sorting, so the project feels closer to a real small online store.',
        author: 'React Pizza feedback',
        role: 'E-commerce interface',
        rating: 5,
        images: [],
      },
      {
        projectTitle: 'React Sneakers',
        text: 'React Sneakers has a clear store flow: browse products, add favorites, build a cart. The interface is simple, and that makes it easy to understand.',
        author: 'React Sneakers feedback',
        role: 'Store UI',
        rating: 5,
        images: [],
      },
      {
        projectTitle: 'FarmVest',
        text: 'FarmVest works well as a modern landing page. The first screen feels strong, and the whole page has a clean product-like presentation.',
        author: 'FarmVest feedback',
        role: 'Landing page',
        rating: 5,
        images: [],
      },
      {
        projectTitle: 'Eragon Exchange',
        text: 'Eragon Exchange has a real mood. It is not just text blocks — it feels like a branded concept with a dark fantasy atmosphere.',
        author: 'Eragon feedback',
        role: 'Concept website',
        rating: 5,
        images: [],
      },
      {
        projectTitle: 'Spring Greeting Site',
        text: 'A small website, but it has a warm and light feeling. For a greeting format, it works much better than a simple static message.',
        author: 'Spring Site feedback',
        role: 'Greeting microsite',
        rating: 5,
        images: [],
      },
      {
        projectTitle: 'Birthday Greeting Site',
        text: 'A nice format for a personal greeting. It can be adapted for a real person or event and feels more alive than a regular card.',
        author: 'Birthday Site feedback',
        role: 'Personal page',
        rating: 4,
        images: [],
      },
      {
        projectTitle: 'BARBER Landing',
        text: 'For a barbershop, this layout makes sense: it quickly explains the offer and leads the visitor toward booking or contact.',
        author: 'BARBER feedback',
        role: 'Service landing',
        rating: 5,
        images: [],
      },
      {
        projectTitle: 'Library Landing',
        text: 'Library Landing has a calm editorial feel. It looks more like a modern city space than a dry information page.',
        author: 'Library feedback',
        role: 'Editorial landing',
        rating: 5,
        images: [],
      },
      {
        projectTitle: 'Fagot',
        text: 'The tone fits a medical website: calm, clean and not aggressive. The layout feels trustworthy and easy to read.',
        author: 'Fagot feedback',
        role: 'Medical website',
        rating: 5,
        images: [],
      },
      {
        projectTitle: 'Tzeezotje Restaurant',
        text: 'The website communicates the restaurant atmosphere well. It immediately feels connected to food, place and mood.',
        author: 'Restaurant feedback',
        role: 'Restaurant landing',
        rating: 4,
        images: [],
      },
      {
        projectTitle: 'Biysk',
        text: 'Biysk feels like a classic promo landing page: large hero, visual focus and simple structure. It grabs attention quickly.',
        author: 'Biysk feedback',
        role: 'Promo landing',
        rating: 4,
        images: [],
      },
      {
        projectTitle: 'Britlex',
        text: 'Britlex feels like a clean education landing page. The structure is calm and easy to follow without visual noise.',
        author: 'Britlex feedback',
        role: 'Education landing',
        rating: 4,
        images: [],
      },
      {
        projectTitle: 'Portfolio',
        text: 'The portfolio now feels much more complete: projects, filters, reviews, contacts, language switching and themes. It looks like a real work showcase.',
        author: 'Portfolio feedback',
        role: 'Portfolio review',
        rating: 5,
        images: [],
      },
      {
        projectTitle: 'Eragon Exchange',
        text: 'What stands out is the variety: stores, landings, greeting pages and atmospheric concepts. It shows that Sergey can adapt the style to the task.',
        author: 'General feedback',
        role: 'Project showcase',
        rating: 5,
        images: [],
      },
    ],
  },
};

const storageKey = 'kenform_portfolio_reviews_v5';
const oldStorageKeys = ['kenform_portfolio_reviews', 'kenform_portfolio_reviews_v2', 'kenform_portfolio_reviews_v3', 'kenform_portfolio_reviews_v4'];
const maxImages = 3;
const maxImageSize = 1024 * 1024;

function Stars({ value = 5, interactive = false, onChange }) {
  return (
    <div className="review-stars" aria-label={`${value} stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={star <= value ? 'star active' : 'star'}
          onClick={() => interactive && onChange?.(star)}
          disabled={!interactive}
          aria-label={`${star} stars`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

function getInitials(name) {
  return (name || 'K')
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function getProjectCover(title) {
  const project = projects.find((item) => item.title === title);
  if (!project?.image) return null;

  return {
    name: `${title} preview`,
    src: `${process.env.PUBLIC_URL}/${project.image}`,
  };
}

export default function Reviews({ language = 'ru' }) {
  const lang = language === 'ru' ? 'ru' : 'en';
  const t = content[lang];

  const [savedReviews, setSavedReviews] = useState([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      oldStorageKeys.forEach((key) => localStorage.removeItem(key));
      const raw = localStorage.getItem(storageKey);
      if (raw) setSavedReviews(JSON.parse(raw));
    } catch {
      setSavedReviews([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(savedReviews));
    } catch {
      // ignore storage quota errors
    }
  }, [savedReviews]);

  const reviews = useMemo(() => [...savedReviews, ...t.items], [savedReviews, t.items]);

  const averageRating = useMemo(() => {
    if (!reviews.length) return '5.0';
    const sum = reviews.reduce((acc, item) => acc + (Number(item.rating) || 5), 0);
    return (sum / reviews.length).toFixed(1);
  }, [reviews]);

  const handleImages = async (event) => {
    const selectedFiles = Array.from(event.target.files || []);
    setError('');

    if (images.length + selectedFiles.length > maxImages) {
      setError(t.tooManyImages);
      event.target.value = '';
      return;
    }

    const preparedImages = [];

    for (const file of selectedFiles) {
      if (!file.type.startsWith('image/')) continue;

      if (file.size > maxImageSize) {
        setError(t.fileTooLarge);
        event.target.value = '';
        return;
      }

      const dataUrl = await readFileAsDataUrl(file);
      preparedImages.push({
        name: file.name,
        src: dataUrl,
      });
    }

    setImages((current) => [...current, ...preparedImages].slice(0, maxImages));
    event.target.value = '';
  };

  const removeImage = (indexToRemove) => {
    setImages((current) => current.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    const cleanName = name.trim();
    const cleanText = text.trim();

    if (!cleanName) {
      setError(t.requiredName);
      return;
    }

    if (!cleanText) {
      setError(t.requiredText);
      return;
    }

    const review = {
      text: cleanText,
      author: cleanName,
      role: t.newRole,
      rating,
      images,
      createdAt: new Date().toISOString(),
    };

    setSavedReviews((current) => [review, ...current]);
    setName('');
    setText('');
    setRating(5);
    setImages([]);
  };

  const clearLocalReviews = () => {
    setSavedReviews([]);
    setImages([]);
    try {
      localStorage.removeItem(storageKey);
    } catch {
      // ignore
    }
  };

  return (
    <section className="reviews" id="reviews">
      <div className="reviews-container">
        <div className="reviews-hero">
          <h2>{t.title}</h2>
          <p className="reviews-subtitle">{t.subtitle}</p>

          <div className="reviews-stats">
            <div className="reviews-stat">
              <strong>{averageRating}</strong>
              <span>{t.avg}</span>
            </div>
            <div className="reviews-stat">
              <strong>{reviews.length}</strong>
              <span>{t.total}</span>
            </div>
            <div className="reviews-stat">
              <strong>5★</strong>
              <span>UI / UX</span>
            </div>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((item, index) => {
            const cover = item.images?.length ? null : getProjectCover(item.projectTitle);
            const visibleImages = item.images?.length ? item.images : cover ? [cover] : [];

            return (
              <article className="review-card" key={`${item.author}-${index}`}>
                {visibleImages.length > 0 && (
                  <div className="review-cover">
                    <img src={visibleImages[0].src} alt={visibleImages[0].name} />
                  </div>
                )}

                <div className="review-card-top">
                  <div className="review-avatar">{getInitials(item.author)}</div>
                  <div>
                    <h4>{item.author}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>

                <Stars value={item.rating || 5} />
                <p className="review-text">“{item.text}”</p>

                {visibleImages.length > 1 && (
                  <div className="review-images">
                    {visibleImages.slice(1).map((image, imageIndex) => (
                      <img src={image.src} alt={image.name || `review screenshot ${imageIndex + 1}`} key={imageIndex} />
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <form className="review-form" onSubmit={handleSubmit}>
          <div className="review-form-head">
            <span>{t.ratingLabel}</span>
            <Stars value={rating} interactive onChange={setRating} />
          </div>

          <div className="review-form-title">
            <h3>{t.formTitle}</h3>
            <p>{t.formText}</p>
          </div>

          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={t.namePlaceholder}
            required
          />

          <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder={t.textPlaceholder}
            rows={5}
            required
          />

          <div className="review-upload">
            <div>
              <strong>{t.screenshotLabel}</strong>
              <span>{t.screenshotHint}</span>
            </div>

            <label className="review-upload-button">
              {t.screenshotButton}
              <input type="file" accept="image/*" multiple onChange={handleImages} />
            </label>
          </div>

          {images.length > 0 && (
            <div className="review-preview-images">
              {images.map((image, index) => (
                <div className="review-preview-image" key={`${image.name}-${index}`}>
                  <img src={image.src} alt={image.name} />
                  <button type="button" onClick={() => removeImage(index)}>
                    {t.removeImage}
                  </button>
                </div>
              ))}
            </div>
          )}

          {error && <p className="review-error">{error}</p>}

          <div className="review-form-actions">
            <button type="submit" className="review-submit">{t.button}</button>
            {savedReviews.length > 0 && (
              <button type="button" className="review-clear" onClick={clearLocalReviews}>
                {t.clear}
              </button>
            )}
          </div>

          <p className="review-note">{t.note}</p>
        </form>
      </div>
    </section>
  );
}
