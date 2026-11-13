document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#site-nav');

function showMenu(open) {
  menu.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.querySelector('.sr-only').textContent = open ? 'Đóng menu' : 'Mở menu';
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

const demo = document.querySelector('[data-demo]');
if (demo) initializeDemo(demo);

function initializeDemo(root) {
  const services = [...root.querySelectorAll('[data-service]')];
  const summary = root.querySelector('.demo-summary .totals');
  const submit = root.querySelector('[data-receipt]');
  const dialog = root.querySelector('dialog');
  const receiptItems = root.querySelector('[data-receipt-items]');
  const receiptTotals = root.querySelector('[data-receipt-totals]');
  const money = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' });
  const format = (cents) => money.format(cents / 100);

  function selectedServices() {
    return services.filter((service) => service.getAttribute('aria-pressed') === 'true');
  }

  function updateSummary() {
    const total = selectedServices().reduce((sum, service) => sum + Number(service.dataset.cents), 0);
    const base = Math.round(total * 100 / 121);
    summary.querySelector('[data-base]').textContent = format(base);
    summary.querySelector('[data-tax]').textContent = format(total - base);
    summary.querySelector('[data-total]').textContent = format(total);
    submit.disabled = total === 0;
  }

  for (const service of services) {
    service.addEventListener('click', () => {
      const selected = service.getAttribute('aria-pressed') !== 'true';
      service.setAttribute('aria-pressed', String(selected));
      service.querySelector('.service-check path').setAttribute('d', selected ? 'm5 12 4 4L19 6' : 'M12 5v14M5 12h14');
      updateSummary();
    });
  }

  submit.addEventListener('click', () => {
    receiptItems.replaceChildren(...selectedServices().map((service) => {
      const row = document.createElement('li');
      const label = document.createElement('span');
      const amount = document.createElement('strong');
      label.textContent = service.querySelector('[data-service-name]').textContent;
      amount.textContent = format(Number(service.dataset.cents));
      row.append(label, amount);
      return row;
    }));

    const payment = document.createElement('div');
    const label = document.createElement('dt');
    const value = document.createElement('dd');
    label.textContent = 'Thanh toán';
    value.textContent = root.querySelector('input[name="payment"]:checked').value;
    payment.append(label, value);

    receiptTotals.replaceChildren(...summary.cloneNode(true).children, payment);
    dialog.showModal();
  });

  updateSummary();
}
