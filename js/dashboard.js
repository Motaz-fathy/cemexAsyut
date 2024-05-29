const driverViolationBtn = document.getElementById('driverViolationBtn');
const driverViolationMenu = document.getElementById('driverViolationMenu');
const arrowIcon = document.getElementById('arrowIcon');

const emplViolationBtn = document.getElementById('emplViolationBtn')
const emplViolationMenu = document.getElementById('emplViolationMenu')
const arrowIconempl = document.getElementById('arrowIconempl')

driverViolationBtn.addEventListener('click', () => {
  driverViolationMenu.classList.toggle('hidden');
  arrowIcon.classList.toggle('rotate-180');
});

emplViolationBtn.addEventListener('click', () => {
    emplViolationMenu.classList.toggle('hidden');
    arrowIconempl.classList.toggle('rotate-180');
  });

const toggleSidebar = document.getElementById('toggleSidebar')  
const sidebar = document.getElementById('sidebar');
toggleSidebar.addEventListener('click', () => {
    if (sidebar.classList.contains('w-72')) {
      sidebar.classList.replace('w-72', 'w-0');
    } else {
      sidebar.classList.replace('w-0', 'w-72');
    }
  });


//  
  const data = [
    { truckName: 'Truck 1', type: 'Type A', avgProbability: '80%', dateConfirm: '2023-05-01' },
    { truckName: 'Truck 2', type: 'Type B', avgProbability: '70%', dateConfirm: '2023-05-02' },
    { truckName: 'Truck 3', type: 'Type C', avgProbability: '60%', dateConfirm: '2023-05-03' },
    { truckName: 'Truck 4', type: 'Type D', avgProbability: '34%', dateConfirm: '2023-05-04' },
    { truckName: 'Truck 4', type: 'Type D', avgProbability: '11%', dateConfirm: '2023-05-04' },
    { truckName: 'Truck 4', type: 'Type D', avgProbability: '96%', dateConfirm: '2023-05-04' },
    { truckName: 'Truck 4', type: 'Type D', avgProbability: '90%', dateConfirm: '2023-05-04' },
    { truckName: 'Truck 4', type: 'Type D', avgProbability: '50%', dateConfirm: '2023-05-04' },
    { truckName: 'Truck 4', type: 'Type D', avgProbability: '10%', dateConfirm: '2023-05-04' },
    { truckName: 'Truck 4', type: 'Type D', avgProbability: '25%', dateConfirm: '2023-05-04' },
    { truckName: 'Truck 4', type: 'Type D', avgProbability: '40%', dateConfirm: '2023-05-04' },
    { truckName: 'Truck 4', type: 'Type D', avgProbability: '34%', dateConfirm: '2023-05-04' },
    // Add more data as needed
];

const rowsPerPage = 6;
let currentPage = 1;

function renderTable(data, page, rowsPerPage) {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedData = data.slice(start, end);

    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    paginatedData.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.truckName}</td>
            <td>${row.type}</td>
            <td>${row.avgProbability}</td>
            <td><button class="btn btn-primary">${row.dateConfirm}</button></td>
        `;
        tableBody.appendChild(tr);
    });
}

function renderPagination(data, rowsPerPage) {
    const pageCount = Math.ceil(data.length / rowsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= pageCount; i++) {
        const li = document.createElement('li');
        li.className = `page-item ${i === currentPage ? 'active' : ''}`;
        li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        li.addEventListener('click', function () {
            currentPage = i;
            renderTable(data, currentPage, rowsPerPage);
            renderPagination(data, rowsPerPage);
        });
        pagination.appendChild(li);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    renderTable(data, currentPage, rowsPerPage);
    renderPagination(data, rowsPerPage);
});  