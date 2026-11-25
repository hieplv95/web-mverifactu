document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#site-nav');

function showMenu(open) {
  menu.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.querySelector('.sr-only').textContent = open ? menuButton.dataset.close : menuButton.dataset.open;
}

menuButton.addEventListener('click', () => showMenu(!menu.classList.contains('open')));
menu.addEventListener('click', (event) => {
  if (event.target.closest('a')) showMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.classList.contains('open')) {
    showMenu(false);
    menuButton.focus();
  }
});

for (const badge of document.querySelectorAll('[data-until]')) {
  const days = Math.ceil((new Date(`${badge.dataset.until}T00:00:00`) - Date.now()) / 864e5);
  badge.textContent = days > 1 ? badge.dataset.days.replace('{n}', days) : days === 1 ? badge.dataset.day : badge.dataset.past;
  badge.hidden = false;
}

const demo = document.querySelector('[data-demo]');
if (demo) initializeDemo(demo);

function initializeDemo(root) {
  const services = [...root.querySelectorAll('[data-service]')];
  const submit = root.querySelector('[data-issue]');
  const status = root.querySelector('[data-status]');
  const paper = root.querySelector('[data-paper]');
  const format = (cents) => `${(cents / 100).toFixed(2).replace('.', ',')} €`;
  const setText = (selector, text) => root.querySelectorAll(selector).forEach((element) => { element.textContent = text; });

  function line(name, amount) {
    const row = document.createElement('p');
    row.className = 'line';
    row.append(...[name, amount].map((text) => Object.assign(document.createElement('span'), { textContent: text })));
    return row;
  }

  function update() {
    const selected = services.filter((service) => service.getAttribute('aria-pressed') === 'true');
    const total = selected.reduce((sum, service) => sum + Number(service.dataset.cents), 0);
    const base = Math.round(total * 100 / 121);
    setText('[data-base]', format(base));
    setText('[data-tax]', format(total - base));
    setText('[data-total]', format(total));
    for (const list of root.querySelectorAll('[data-lines]')) {
      list.replaceChildren(...selected.map((service) => line(service.dataset[list.dataset.lines], format(Number(service.dataset.cents)))));
    }
    submit.disabled = total === 0;
    status.textContent = total === 0 ? root.dataset.empty : root.dataset.idle;
    status.classList.remove('done');
  }

  for (const service of services) {
    service.addEventListener('click', () => {
      service.setAttribute('aria-pressed', String(service.getAttribute('aria-pressed') !== 'true'));
      update();
    });
  }

  for (const input of root.querySelectorAll('input[name="payment"]')) {
    input.addEventListener('change', () => setText('[data-payment]', input.value));
  }

  submit.addEventListener('click', () => {
    paper.classList.remove('printing');
    void paper.offsetWidth;
    paper.classList.add('printing');
    status.textContent = root.dataset.done;
    status.classList.add('done');
    if (matchMedia('(max-width: 1020px)').matches) paper.scrollIntoView({ block: 'start' });
  });

  // Trình duyệt có thể giữ lựa chọn thanh toán khi tải lại trang.
  setText('[data-payment]', root.querySelector('input[name="payment"]:checked').value);
}
