/* ==========================================================================
   Domino's Pizza - Main JavaScript
   ========================================================================== */

$(document).ready(function () {
  // Smooth scroll for anchor links
  $('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      
      // Close mobile menu if open
      if ($('.navbar-collapse').hasClass('in')) {
        $('.navbar-toggle').click();
      }

      $('html, body').stop().animate({
        scrollTop: target.offset().top - 70
      }, 600);
    }
  });

  // Dynamic pizza name binding in Order Modal
  $('.btn-order-pizza').on('click', function () {
    var pizzaName = $(this).data('pizza') || 'Фірмова піца';
    var pizzaPrice = $(this).data('price') || '';
    
    $('#modalPizzaName').text(pizzaName);
    $('#orderItemInput').val(pizzaName + (pizzaPrice ? ' (' + pizzaPrice + ')' : ''));
    $('#orderModal').modal('show');
  });

  // Handle Order Form submission
  $('#pizzaOrderForm').on('submit', function (e) {
    e.preventDefault();
    
    var clientName = $('#clientName').val();
    var clientPhone = $('#clientPhone').val();
    var pizzaItem = $('#orderItemInput').val();

    // Show confirmation
    $('#orderModal').modal('hide');
    
    // Reset form
    this.reset();

    // Display confirmation alert
    alert('Дякуємо, ' + clientName + '! Ваше замовлення на "' + pizzaItem + '" прийнято. Наш оператор зателефонує вам за номером ' + clientPhone + ' протягом 2 хвилин!');
  });

  // Handle Contact Quick Call Form
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    var name = $(this).find('input[type="text"]').val();
    alert('Дякуємо, ' + name + '! Ми зв\'яжемося з вами найближчим часом.');
    this.reset();
  });
});
