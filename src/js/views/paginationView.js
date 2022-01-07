import View from './View.js';
import icons from 'url:../../img/icons.svg';
class PaginationView extends View {
  _currPage;
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    this._currPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(`current page: ${this._currPage}, total page: ${numPages}`);
    //Page 1, and there are other pages
    if (this._currPage === 1 && numPages > 1) {
      return this._markupNext();
    }

    //Last page and not page 1
    if (this._currPage === numPages && numPages > 1) {
      return this._markupPre();
    }

    //Other page
    if (this._currPage < numPages) {
      return `
      ${this._markupPre()}
      ${this._markupNext()}
      `;
    }

    //Page 1, and there are No other pages
    return '';
  }

  _markupPre() {
    return `
    <button class="btn--inline pagination__btn--prev " data-goto="${
      this._currPage - 1
    }">
    <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Page ${this._currPage - 1}</span>
    </button>
`;
  }

  _markupNext() {
    return `
    <button class="btn--inline pagination__btn--next" data-goto="${
      this._currPage + 1
    }">
        <span>Page ${this._currPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
    </button>
  `;
  }
}

export default new PaginationView();
