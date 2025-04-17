document.addEventListener('DOMContentLoaded', function() {
  // Select all the links on the page
  const links = document.querySelectorAll('a');
  
  // Add event listeners to each link
  links.forEach(link => {
    link.addEventListener('click', function() {
      // Mark the link as clicked (you can use localStorage, a class, or another method)
      link.setAttribute('data-clicked', 'true');
      updateLinkTooltip(link);
    });

    link.addEventListener('mouseenter', function() {
      // Show tooltip with link info when hovering over the link
      showTooltip(link);
    });

    link.addEventListener('mouseleave', function() {
      // Hide tooltip when mouse leaves the link
      hideTooltip();
    });
  });
});

function showTooltip(link) {
  // Create a tooltip element if it doesn't already exist
  let tooltip = document.getElementById('tooltip');
  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.id = 'tooltip';
    document.body.appendChild(tooltip);
  }

  // Get the link's metadata
  const isClicked = link.getAttribute('data-clicked') === 'true';
  const tooltipText = `URL: ${link.href}\nClicked: ${isClicked ? 'Yes' : 'No'}`;

  // Set the content and style of the tooltip
  tooltip.innerText = tooltipText;
  tooltip.style.display = 'block';

  // Position the tooltip above the link
  const linkRect = link.getBoundingClientRect();
  tooltip.style.left = `${linkRect.left}px`;
  tooltip.style.top = `${linkRect.top - 30}px`; // Slightly above the link
}

function hideTooltip() {
  const tooltip = document.getElementById('tooltip');
  if (tooltip) {
    tooltip.style.display = 'none';
  }
}

function updateLinkTooltip(link) {
  // Optionally, you can add custom logic here to update the tooltip or add other data
  // For example, change link color or add a special class for clicked links
  link.style.color = 'green'; // Change color after clicking (optional)
}
