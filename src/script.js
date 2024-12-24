
const dropdownButton = document.getElementById('dropdownDefaultButton');
const dropdownMenu = document.getElementById('dropdown');

dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hidden');
});

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.add('hidden');
  }
});

const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementById('closeModalButton');
const modal = document.getElementById('modal');

openModalButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

closeModalButton.addEventListener('click', () => {
  modal.classList.add('hidden');
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.add('hidden');
  }
});
const allTemplates = document.getElementById('allTemplates');
const myTemplates = document.getElementById('myTemplates');
const allTemplatesContent = document.getElementById('allTemplatesContent');
const myTemplatesContent = document.getElementById('myTemplatesContent');

allTemplates.addEventListener('click', () => {
  allTemplatesContent.classList.remove('hidden');
  myTemplatesContent.classList.add('hidden');
  allTemplates.classList.add('bg-blue-100');
  myTemplates.classList.remove('bg-blue-100');
});

myTemplates.addEventListener('click', () => {
  myTemplatesContent.classList.remove('hidden');
  allTemplatesContent.classList.add('hidden');
  myTemplates.classList.add('bg-blue-100');
  allTemplates.classList.remove('bg-blue-100');
});
mobiscroll.setOptions({
    theme: 'ios',                               // Specify theme like: theme: 'ios' or omit setting to use default
    themeVariant: 'light',               // More info about themeVariant: https://mobiscroll.com/docs/javascript/datepicker/api#opt-themeVariant
    });
    
    mobiscroll.datepicker('#celendar', {
    display: 'inline',                          // Specify display mode like: display: 'bottom' or omit setting to use default
    marked: [
        { 
            date: '2024-12-02T00:00', 
            color: '#46c4f3'
        }, { 
            date: '2024-12-10T00:00', 
            color: '#7e56bd'
        }, { 
            date: '2024-12-13T00:00', 
            color: '#f13f77'
        }, { 
            date: '2024-12-13T00:00', 
            color: '#89d7c9'
        }, { 
            date: '2024-12-21T00:00', 
            color: '#ffc400'
        }, { 
            date: '2024-12-21T00:00', 
            color: '#8dec7d'
        },{ 
            recurring: { 
                repeat: 'yearly', month: 4, day: 1
            },
            color: 'ffc400'
        }
    ],
    rtl: true,
    locale: mobiscroll.localeHe               // Specify language like: locale: mobiscroll.localePl or omit setting to use default
    });
    
    function toggleContent() {
          const content = document.getElementById('collapsibleContent');
          const arrowIcon = document.getElementById('arrowIcon');
          content.classList.toggle('hidden');
          arrowIcon.classList.toggle('rotate-180');
    }
       function showTab(tabIndex) {
          // Hide all tab contents
          document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
          // Remove active state from all tab buttons
          document.querySelectorAll('.tab-btn').forEach(button => {
            button.classList.remove('text-blue-500', 'border-blue-500');
            button.classList.add('text-gray-500', 'border-transparent');
          });
          // Show the selected tab content
          document.getElementById(`tab-${tabIndex}-content`).classList.remove('hidden');
          // Set the active state on the selected tab button
          const activeButton = document.getElementById(`tab-${tabIndex}-btn`);
          activeButton.classList.add('text-blue-500', 'border-blue-500');
          activeButton.classList.remove('text-gray-500', 'border-transparent');
        }
        // Show the first tab by default
        showTab(1);
    
        const toggleButton = document.getElementById('toggleSidebar');
        const closeButton = document.getElementById('closeSidebar');
        const sidebar = document.getElementById('sidebar');
    
        toggleButton.addEventListener('click', () => {
          sidebar.classList.toggle('active');
        });
    
        closeButton.addEventListener('click', () => {
          sidebar.classList.remove('active');
        });
        const menuButton = document.getElementById('menuButton');
        const menuDropdown = document.getElementById('menuDropdown');
    
        menuButton.addEventListener('click', () => {
          menuDropdown.classList.toggle('hidden');
        });
    
        document.addEventListener('click', (event) => {
          if (!menuButton.contains(event.target) && !menuDropdown.contains(event.target)) {
            menuDropdown.classList.add('hidden');
          }
        });
        document.addEventListener('DOMContentLoaded', function () {
        const details = document.querySelectorAll('details');
    
        details.forEach(detail => {
          const icon = detail.querySelector('svg');
          detail.addEventListener('toggle', function () {
            if (detail.open) {
              icon.style.transform = 'rotate(180deg)';
            } else {
              icon.style.transform = 'rotate(0deg)';
            }
          });
        });
      });
      const slider = document.getElementById("myRange");
      const output = document.getElementById("demo");
      output.innerHTML = slider.value; // Display the default slider value
    
      // Update the current slider value (each time you drag the slider handle)
      slider.oninput = function() {
        output.innerHTML = this.value;
      }