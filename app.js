document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a');
  console.log("Links on page:", links);  // Log to check links are selected

  links.forEach(link => {
    link.addEventListener('click', function() {
      console.log(`Link clicked: ${link.href}`);  // Log when link is clicked
      link.setAttribute('data-clicked', 'true');
      updateLinkTooltip(link);
    });

    link.addEventListener('mouseenter', function() {
      console.log(`Hovering over link: ${link.href}`);  // Log when hovering
      showTooltip(link);
    });

    link.addEventListener('mouseleave', function() {
      hideTooltip();
    });
  });
});

function showTooltip(link) {
  let tooltip = document.getElementById('tooltip');
  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.id = 'tooltip';
    document.body.appendChild(tooltip);
  }

  const isClicked = link.getAttribute('data-clicked') === 'true';
  const tooltipText = `URL: ${link.href}\nClicked: ${isClicked ? 'Yes' : 'No'}`;
  tooltip.innerText = tooltipText;
  tooltip.style.display = 'block';

  const linkRect = link.getBoundingClientRect();
  tooltip.style.left = `${linkRect.left}px`;
  tooltip.style.top = `${linkRect.top - 30}px`;
}

function hideTooltip() {
  const tooltip = document.getElementById('tooltip');
  if (tooltip) {
    tooltip.style.display = 'none';
  }
}

function updateLinkTooltip(link) {
  link.style.color = 'green'; // Change color to green after click
}
