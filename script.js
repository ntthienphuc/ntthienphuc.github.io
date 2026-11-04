const filters = document.querySelectorAll('[data-filter]');
const papers = document.querySelectorAll('.paper');
const resultCount = document.querySelector('#publication-count');
filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    let count = 0;
    papers.forEach(paper => {
      const show = button.dataset.filter === 'all' || paper.dataset.kind === button.dataset.filter;
      paper.hidden = !show;
      if (show) count += 1;
    });
    resultCount.textContent = `${count} publication${count === 1 ? '' : 's'} shown`;
  });
});
