// Saves options to chrome.storage
function save_options() {
  var price = document.getElementById('pricePerPage').value;
  //var withdrawal = document.getElementById('deadlineCheck').checked;
  chrome.storage.sync.set({
    favoritePrice: price,
    //withdrawal: withdrawal
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    favoritePrice: '7',
    withdrawal: true
  }, function(items) {
    document.getElementById('pricePerPage').value = items.favoritePrice;
    //document.getElementById('deadlineCheck').checked = items.withdrawal;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);