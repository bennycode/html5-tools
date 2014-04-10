$(window).load(function() {
  // Input & Output handling
  $input = $('#input');
  $output = $('#output');
  $clipboard = $('#clipboard');

  $input.on("focusout", function() {
    var text = $(this).val();
    var stripped = text.replace(/(\r\n|\n|\r)/gm, "");
    $output.val(stripped);
  });

  // Copy to clipboard
  ZeroClipboard.config({
    moviePath: "./libs/zeroclipboard/1.3.4/ZeroClipboard.swf"
  });

  var client = new ZeroClipboard($clipboard);
  client.on("load", function(client) {
    client.on("complete", function(client, args) {
      $.notify("Text copied to clipboard.", "success", {
        clickToHide: false,
        autoHide: true
      });
    });
  });
});