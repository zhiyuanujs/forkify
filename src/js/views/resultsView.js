import View from './View.js';
import icons from 'url:../../img/icons.svg';
class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _message = '';
  _errorMessage = 'No recipes found for your query! Please try again';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join(' ');
  }

  _generateMarkupPreview(el) {
    return `
      <li class="preview">
        <a class="preview__link" href="#${el.id}">
          <figure class="preview__fig">
            <img src="${el.image}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${el.title}</h4>
            <p class="preview__publisher">${el.publisher}</p>
          </div>
        </a>
      </li>
`;
  }
}

export default new ResultsView();

`
<div class="preview__user-generated">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
</div>
            `;
